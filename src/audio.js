import * as THREE from 'three';

// ---------------------------------------------------------------------------
// DiegeticAudioSource — reusable positional diegetic music system.
//
// Design (Tsukimori scale: 70x70 district, street ~8m wide):
//   THREE.PositionalAudio (inverse model) does physical distance gain.
//   A BiquadFilter lowpass (via Audio.setFilter) does wall/air muffling.
//   update(dt) adds a zone multiplier + filter target, both exponentially
//   smoothed (no zipper noise, no per-frame randomness — zero Math.random).
// No DOM at module top level. No console.error on any path.
// ---------------------------------------------------------------------------

export const AUDIO_SRC = 'audio/suzume.mp3'; // user-supplied drop-in (gitignored)
// Bundled royalty-free default: "Shamisen Nation" by MFP (Marron Fields
// Production) via DOVA-SYNDROME — free for game use; credit in README + UI.
export const FALLBACK_SRC = 'audio/tsukimori-bgm.mp3';
export const FALLBACK_LABEL = 'Shamisen Nation (DOVA-SYNDROME)';
export const TRACK_LABEL = 'Suzume';

// Filter curve anchor points (Hz). Far floor 2200 keeps melody intelligible.
const FREQ_CLEAR = 19000; // listener inside the source house
const FREQ_NEAR = 14000; // outside, near (<8m), unoccluded: slight air
const FREQ_OCC_NEAR = 8000; // occluded but near: through-wall dullness
const FREQ_FAR = 2200; // far-field floor (both curves converge here)
const NEAR_M = 8;

// Smoothing rates (1/s) — gain tracks faster than the filter so level feels
// immediate while tone glides (avoids zipper noise on both).
const K_GAIN = 6.0;
const K_FREQ = 4.0;

// --- pure helpers (no THREE, no DOM — unit-testable) -----------------------

function pointInRect(x, z, r) {
  const hw = r.w / 2;
  const hd = r.d / 2;
  return x >= r.cx - hw && x <= r.cx + hw && z >= r.cz - hd && z <= r.cz + hd;
}

function rectContaining(x, z, zones) {
  if (!zones) return null;
  for (let i = 0; i < zones.length; i++) {
    const r = zones[i];
    if (r && pointInRect(x, z, r)) return r;
  }
  return null;
}

// 2D segment vs AABB (slab method). True if either endpoint is inside or the
// segment crosses the box. Exported for headless tests.
export function segmentHitsRect(x1, z1, x2, z2, r) {
  const hw = r.w / 2;
  const hd = r.d / 2;
  const minX = r.cx - hw;
  const maxX = r.cx + hw;
  const minZ = r.cz - hd;
  const maxZ = r.cz + hd;
  const in1 = x1 >= minX && x1 <= maxX && z1 >= minZ && z1 <= maxZ;
  if (in1) return true;
  const in2 = x2 >= minX && x2 <= maxX && z2 >= minZ && z2 <= maxZ;
  if (in2) return true;
  const dx = x2 - x1;
  const dz = z2 - z1;
  let t0 = 0;
  let t1 = 1;
  if (Math.abs(dx) < 1e-12) {
    if (x1 < minX || x1 > maxX) return false;
  } else {
    let ta = (minX - x1) / dx;
    let tb = (maxX - x1) / dx;
    if (ta > tb) { const t = ta; ta = tb; tb = t; }
    if (ta > t0) t0 = ta;
    if (tb < t1) t1 = tb;
    if (t0 > t1) return false;
  }
  if (Math.abs(dz) < 1e-12) {
    if (z1 < minZ || z1 > maxZ) return false;
  } else {
    let ta = (minZ - z1) / dz;
    let tb = (maxZ - z1) / dz;
    if (ta > tb) { const t = ta; ta = tb; tb = t; }
    if (ta > t0) t0 = ta;
    if (tb < t1) t1 = tb;
    if (t0 > t1) return false;
  }
  return true;
}

function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

// One-shot arm guards (module scope is DOM-free: WeakSet only).
const _armed = new WeakSet();

// --- main factory ----------------------------------------------------------

export function createAudio({ camera = null, scene = null, zones = [] } = {}) {
  const refDistance = 2.5;
  const rolloffFactor = 1.6;
  const maxDistance = 55;
  const distanceModel = 'inverse';
  const baseDefault = 0.9;

  let listener = null;
  let source = null;
  let filt = null;
  let noAudio = false; // true when WebAudio construction is unavailable
  let buffer = null;
  let missing = false;
  let warned = false;

  let enabled = true; // user intent gate (deep link &music=0 clears this)
  let muted = false; // mute() flag; setVolume() clears it
  let wantPlay = true; // intent to be playing once gesture+buffer allow
  let baseVolume = baseDefault;
  let attached = false;
  let suspended = false; // perf suspend when inaudible (we paused it)

  let curGain = baseDefault;
  let curFreq = FREQ_CLEAR;
  let lastDist = -1;
  let lastFreq = FREQ_CLEAR;
  let currentLabel = TRACK_LABEL;
  let customUrl = null;

  const _sv = new THREE.Vector3(); // source world pos (reused, no per-frame alloc)
  const _lv = new THREE.Vector3(); // listener world pos (reused)

  function warnOnce(msg) {
    if (!warned) { warned = true; console.warn(msg); }
  }
  function tryAttach() {
    if (attached || noAudio) return;
    if (camera && listener) { camera.add(listener); attached = true; }
  }
  function resumeCtx() {
    try {
      const ctx = listener && listener.context;
      if (ctx && ctx.state === 'suspended') {
        const p = ctx.resume();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      }
    } catch (e) { /* never throw from a resume path */ }
  }
  function ctxRunning() {
    try {
      const ctx = listener && listener.context;
      return !!ctx && ctx.state === 'running';
    } catch (e) { return false; }
  }
  function safePlay() {
    if (noAudio || missing || !buffer || !source) return false;
    try {
      if (!source.isPlaying) source.play();
      suspended = false;
      return true;
    } catch (e) { return false; }
  }

  try {
    listener = new THREE.AudioListener();
    source = new THREE.PositionalAudio(listener);
    source.setRefDistance(refDistance);
    source.setRolloffFactor(rolloffFactor);
    source.setMaxDistance(maxDistance);
    source.setDistanceModel(distanceModel);
    source.setLoop(true);
    source.setVolume(baseVolume);
    filt = listener.context.createBiquadFilter();
    filt.type = 'lowpass';
    filt.frequency.value = FREQ_CLEAR;
    filt.Q.value = 0.4;
    if (typeof source.setFilter === 'function') source.setFilter(filt);
    if (scene && typeof scene.add === 'function') scene.add(source);
    try {
      // Primary drop-in first, bundled royalty-free track second, silence last.
      const attempts = [
        { url: AUDIO_SRC, label: TRACK_LABEL },
        { url: FALLBACK_SRC, label: FALLBACK_LABEL },
      ];
      const tryLoad = (i) => {
        if (i >= attempts.length) {
          missing = true;
          warnOnce('[audio] missing ' + AUDIO_SRC + ' (drop your file at public/' + AUDIO_SRC + ') and no bundled fallback — radio silent');
          return;
        }
        new THREE.AudioLoader().load(
          attempts[i].url,
          (buf) => {
            buffer = buf;
            currentLabel = attempts[i].label;
            missing = false;
            try { source.setBuffer(buf); } catch (e) { /* stay silent-safe */ }
            // Autoplay only if the context is already running (post-gesture
            // load or late drop-in). Otherwise armAutoplayOnce() starts us.
            if (wantPlay && enabled && !muted) {
              tryAttach();
              if (ctxRunning()) { resumeCtx(); safePlay(); }
            }
          },
          undefined,
          () => { tryLoad(i + 1); }
        );
      };
      tryLoad(0);
    } catch (e) {
      missing = true;
      warnOnce('[audio] loader unavailable — radio silent');
    }
  } catch (e) {
    noAudio = true;
    missing = true;
    warnOnce('[audio] WebAudio unavailable — silent mode');
  }

  function liveDist() {
    if (!camera || !source) return lastDist;
    source.getWorldPosition(_sv);
    _lv.setFromMatrixPosition(camera.matrixWorld);
    const dx = _lv.x - _sv.x;
    const dy = _lv.y - _sv.y;
    const dz = _lv.z - _sv.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  const api = {
    source,
    loop: true,
    volume: baseDefault,
    refDistance,
    rolloffFactor,
    maxDistance,
    distanceModel,

    play() {
      wantPlay = true;
      if (noAudio || missing) return false; // safe no-op, never throws
      if (!buffer) { tryAttach(); resumeCtx(); return true; } // pending load
      tryAttach();
      resumeCtx();
      return safePlay();
    },
    pause() {
      wantPlay = false;
      suspended = false;
      if (!noAudio && source) { try { source.pause(); } catch (e) {} }
    },
    stop() {
      wantPlay = false;
      suspended = false;
      if (!noAudio && source) { try { source.stop(); } catch (e) {} }
    },
    mute(m) {
      muted = m !== false;
      if (!noAudio && source && muted) { try { source.setVolume(0); } catch (e) {} }
    },
    setVolume(v) {
      const n = Number(v);
      baseVolume = Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : baseVolume;
      muted = false; // explicit level recovers from mute()
      api.volume = baseVolume;
    },
    // User-supplied track (file picker object URL): replaces the drop-in slot.
    // Stays local to this browser — nothing is uploaded anywhere.
    loadCustom(objectUrl, label) {
      if (!objectUrl) return false;
      if (noAudio) return false;
      try {
        if (customUrl && customUrl !== objectUrl) {
          try { URL.revokeObjectURL(customUrl); } catch (e) {}
        }
        customUrl = objectUrl;
        currentLabel = String(label || 'Custom track').slice(0, 48);
        missing = false;
        buffer = null;
        new THREE.AudioLoader().load(
          objectUrl,
          (buf) => {
            buffer = buf;
            try { if (source) source.setBuffer(buf); } catch (e) {}
            if (wantPlay && enabled && !muted) { tryAttach(); resumeCtx(); safePlay(); }
          },
          undefined,
          () => { warnOnce('[audio] could not decode custom track (mp3/m4a/ogg/wav supported by your browser)'); }
        );
        return true;
      } catch (e) { return false; }
    },
    setEnabled(b) {      enabled = !!b;
      if (enabled) {
        wantPlay = true;
        if (!noAudio && !missing && buffer) { tryAttach(); resumeCtx(); safePlay(); }
        else { tryAttach(); resumeCtx(); }
      } else {
        wantPlay = false;
        suspended = false;
        if (!noAudio && source) { try { source.pause(); } catch (e) {} }
      }
    },
    state() {
      const dist = liveDist();
      const muffleK = clamp01(1 - (curFreq - FREQ_FAR) / (FREQ_CLEAR - FREQ_FAR));
      let playing = false;
      try { playing = !noAudio && !!source && !!source.isPlaying; } catch (e) { playing = false; }
      return { enabled, playing, track: currentLabel, missing, dist, muffleK };
    },
    update(dt) {
      let step = Number(dt);
      if (!Number.isFinite(step) || step < 0) step = 0;
      if (step > 0.1) step = 0.1; // clamp tab-switch spikes
      if (!camera || !source) return;
      source.getWorldPosition(_sv);
      _lv.setFromMatrixPosition(camera.matrixWorld);
      const dx = _lv.x - _sv.x;
      const dz = _lv.z - _sv.z;
      const d = Math.sqrt(dx * dx + (_lv.y - _sv.y) * (_lv.y - _sv.y) + dz * dz);
      lastDist = d;

      // Zone test against LAYOUT rects.
      const srcRect = rectContaining(_sv.x, _sv.z, zones);
      const inside = srcRect ? pointInRect(_lv.x, _lv.z, srcRect) : false;
      let occluded = false;
      if (!inside && zones) {
        for (let i = 0; i < zones.length; i++) {
          const r = zones[i];
          if (!r || r === srcRect) continue; // source house never occludes
          if (segmentHitsRect(_lv.x, _lv.z, _sv.x, _sv.z, r)) { occluded = true; break; }
        }
      }

      // Targets.
      let tFreq;
      let zoneGain;
      if (d > maxDistance) {
        tFreq = FREQ_FAR;
        zoneGain = 0;
      } else if (inside) {
        tFreq = FREQ_CLEAR;
        zoneGain = 1.0;
      } else if (!occluded && d < NEAR_M) {
        tFreq = FREQ_NEAR;
        zoneGain = 0.9;
      } else {
        const t = clamp01((d - NEAR_M) / (maxDistance - NEAR_M));
        if (occluded) {
          tFreq = FREQ_OCC_NEAR + (FREQ_FAR - FREQ_OCC_NEAR) * t; // 8k -> 2.2k
          zoneGain = 0.55;
        } else {
          tFreq = FREQ_NEAR + (FREQ_FAR - FREQ_NEAR) * t; // 14k -> 2.2k
          zoneGain = 1.0; // physical curve comes from the PannerNode
        }
      }

      let tGain = baseVolume * zoneGain;
      if (!enabled || muted) tGain = 0;

      // Exponential smoothing (frame-rate independent, allocation-free).
      const aG = 1 - Math.exp(-K_GAIN * step);
      const aF = 1 - Math.exp(-K_FREQ * step);
      curGain += (tGain - curGain) * (step === 0 ? 1 : aG);
      curFreq += (tFreq - curFreq) * (step === 0 ? 1 : aF);
      lastFreq = curFreq;

      if (!noAudio) {
        try {
          if (filt) filt.frequency.value = curFreq;
          if (source && Math.abs(curGain - source.getVolume()) > 0.002) {
            source.setVolume(curGain);
          }
        } catch (e) { /* audio graph must never break the frame loop */ }
        // Suspend-when-inaudible: pause the voice when it contributes
        // nothing; resume only if WE suspended it (wantPlay stays true).
        try {
          if (buffer && source) {
            if (curGain < 0.01 && (d > maxDistance || !enabled || muted)) {
              if (source.isPlaying) { source.pause(); suspended = true; }
            } else if (suspended && enabled && !muted && wantPlay && d <= maxDistance) {
              safePlay();
            }
          }
        } catch (e) {}
      }
    }
  };

  return api;
}

// One-shot gesture unlock: resumes the AudioContext and enables playback.
// Safe to call multiple times (WeakSet guard). Main gates this on &music=0
// (when music=0, do NOT call — the user opted out before first gesture).
export function armAutoplayOnce(api) {
  if (!api || _armed.has(api)) return api;
  _armed.add(api);
  const fire = () => {
    cleanup();
    try { if (typeof api.setEnabled === 'function') api.setEnabled(true); } catch (e) {}
  };
  const cleanup = () => {
    try {
      document.removeEventListener('pointerdown', fire);
      document.removeEventListener('keydown', fire);
    } catch (e) {}
  };
  try {
    document.addEventListener('pointerdown', fire);
    document.addEventListener('keydown', fire);
  } catch (e) { /* headless / non-DOM harness: stay a safe no-op */ }
  return api;
}