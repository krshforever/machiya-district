// cinematics.js — 12-shot Tsukimori cine rail (three@0.160.0)
// Preserves: createCinematics(camera, controls) -> {idx,mode,label,setMode,goTo,next,prev,toggleAdvance,update}
// Adds: get count() === 12; goTo(i,dur,applyMood); onMood(fn)
// No DOM at module top. No Math.random. No lights. Deterministic rail only.
import * as THREE from 'three';

function easeInOutCubic(x) {
  const t = x < 0 ? 0 : x > 1 ? 1 : x;
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Every shot: {n,pos,tgt,fov,rail:{to,tgtTo,period},mood:{time,wx}|null,focus:{target,dist},intent}
// Anchors trusted: hero x -5..5 z -4.2..2.2; street z 5.5..8.5; alley x -5.9;
// pond (-6,13) 4.6x2.9; maples (-4.2,4.6),(6.8,4.4),(-8.2,-6.2),(13.5,-8.5),(-16,3.5);
// shops (14,13.5)/(-13,13.5); moon dir (-60,42,-80) => moon azimuth looks toward -x,-z.
const SHOTS = [
  { n: '01 MOON FOREST ESTABLISHING', pos: [-28, 14, -22], tgt: [0, 2, 4], fov: 55,
    rail: { to: [-24, 13, -18], tgtTo: null, period: 14 }, mood: null,
    focus: { target: [0, 2, 4], dist: 38 },
    intent: 'Moonlit canopy edge first, then eye drops to the lit village bowl.' },
  { n: '02 LANTERN ALLEY', pos: [-5.9, 1.6, -8], tgt: [-5.9, 1.9, 6], fov: 50,
    rail: { to: [-5.9, 1.6, 1.5], tgtTo: [-5.9, 1.9, 8], period: 12 }, mood: null,
    focus: { target: [-5.9, 1.9, 2], dist: 10 },
    intent: 'Nearest lantern glow first, then eye travels down the alley line.' },
  { n: '03 ROOF REVEAL', pos: [0.5, 5.4, 1.0], tgt: [0, 4.0, -1.2], fov: 40,
    rail: { to: [3.8, 6.6, 6.8], tgtTo: [0, 3.2, -1], period: 12 }, mood: null,
    focus: { target: [0, 4, -1], dist: 3.5 },
    intent: 'Hero tile texture first, then rail pull reveals the ridge line.' },
  { n: '04 MAPLE FOREGROUND', pos: [-4.9, 2.7, 5.6], tgt: [0.5, 2.0, -1.2], fov: 45,
    rail: { to: [-3.6, 2.6, 5.2], tgtTo: null, period: 10 }, mood: null,
    focus: { target: [0.5, 2, -1.2], dist: 8.5 },
    intent: 'Red maple leaves first framing the edge, then hero house snaps into view.' },
  { n: '05 POND', pos: [-8.6, 1.7, 13.4], tgt: [-4.2, 0.8, 12.4], fov: 50,
    rail: { to: [-3.4, 1.7, 13.4], tgtTo: [-6.5, 0.8, 12.8], period: 14 }, mood: null,
    focus: { target: [-6, 0.8, 13], dist: 4.5 },
    intent: 'Pond ripple highlight first, then lateral drift carries eye across reflections.' },
  { n: '06 RAIN STREET', pos: [2.2, 1.7, 6.6], tgt: [-5.0, 1.9, 8.6], fov: 50,
    rail: { to: [-1.5, 1.7, 6.4], tgtTo: null, period: 11 },
    mood: { time: 'RAIN_NIGHT', wx: 'rainy' },
    focus: { target: [-4.2, 1.8, 8.9], dist: 7.5 },
    intent: 'Wet lamp halo first, then eye slides along the rain-streaked street.' },
  { n: '07 MACHIYA ENTRANCE', pos: [6.6, 1.9, 6.2], tgt: [-0.5, 1.6, -0.5], fov: 40,
    rail: { to: [4.8, 1.8, 5.0], tgtTo: null, period: 10 }, mood: null,
    focus: { target: [0, 1.6, 0], dist: 9 },
    intent: 'Lattice doorway warmth first, then 3/4 facade and tiles read as one.' },
  { n: '08 GARDEN PASSAGE', pos: [2.6, 1.1, -6.8], tgt: [-2.2, 1.3, -1.5], fov: 50,
    rail: { to: [0.8, 1.1, -4.8], tgtTo: null, period: 11 }, mood: null,
    focus: { target: [-2, 1.2, -2], dist: 6 },
    intent: 'Near planting leaves first, then low passage funnels eye to the court.' },
  { n: '09 GOLDEN HOUR', pos: [-18, 3.4, 7.2], tgt: [12, 2.0, 7.0], fov: 32,
    rail: { to: [-14, 3.0, 7.4], tgtTo: null, period: 14 },
    mood: { time: 'GOLDEN', wx: 'clear' },
    focus: { target: [0, 2, 7], dist: 20 },
    intent: 'Long warm street axis first, then compressed facades glow edge to edge.' },
  { n: '10 BLUE HOUR', pos: [12.5, 5.5, -6.0], tgt: [0, 2.0, 4.0], fov: 40,
    rail: { to: [9.5, 5.0, -3.5], tgtTo: null, period: 13 },
    mood: { time: 'BLUE_HOUR', wx: 'clear' },
    focus: { target: [0, 2, 4], dist: 16 },
    intent: 'Cool sky gradient first, then village lights detach from dusk.' },
  { n: '11 MOONLIT ROOFLINE', pos: [14.5, 4.6, 10.5], tgt: [-20, 5.0, -20], fov: 24,
    rail: { to: [12.5, 4.4, 9.0], tgtTo: null, period: 15 },
    mood: { time: 'MOONLIT', wx: 'clear' },
    focus: { target: [-5, 4.5, -6], dist: 32 },
    intent: 'Stacked roof silhouettes first, then eye runs the telephoto line toward moon azimuth.' },
  { n: '12 FINAL REVEAL', pos: [18, 9.5, 18.5], tgt: [-8, 3.0, -8], fov: 45,
    rail: { to: [15, 8.5, 16], tgtTo: null, period: 16 },
    mood: { time: 'MIST_NIGHT', wx: 'misty' },
    focus: { target: [-4, 2.5, 0], dist: 34 },
    intent: 'Whole village bowl and moon glow first, then mist softens the far treeline.' },
];

export function createCinematics(camera, controls) {
  let _idx = 0;
  // Default 'orbit': boot framing stays with buildCamera until the user picks
  // a shot. 'orbit' releases the camera exactly like legacy callers expect
  // (ui toggles 'orbit'/'cine'; main.js calls controls.update() every frame).
  let _mode = 'orbit';
  // Auto-advance OFF by default (matches the UI label and legacy behavior).
  let _auto = false;
  let _advTimer = 0;
  const DWELL = 9.0;
  let _railT = 0;
  let _moodHandler = null;
  let _trans = null; // {fp,tp,ft,tt,ff,tf,t,dur}

  const _fp = new THREE.Vector3().fromArray(SHOTS[0].pos);
  const _tp = new THREE.Vector3().fromArray(SHOTS[0].pos);
  const _ft = new THREE.Vector3().fromArray(SHOTS[0].tgt);
  const _tt = new THREE.Vector3().fromArray(SHOTS[0].tgt);
  let _cfov = SHOTS[0].fov;

  function basePos(i, out) { return out.fromArray(SHOTS[i].pos); }
  function railPos(i, k, out) {
    out.fromArray(SHOTS[i].pos);
    const r = SHOTS[i].rail;
    if (r && r.to) {
      const tx = r.to[0], ty = r.to[1], tz = r.to[2];
      out.set(
        out.x + (tx - SHOTS[i].pos[0]) * k,
        out.y + (ty - SHOTS[i].pos[1]) * k,
        out.z + (tz - SHOTS[i].pos[2]) * k
      );
    }
    return out;
  }
  function baseTgt(i, out) { return out.fromArray(SHOTS[i].tgt); }
  function railTgt(i, k, out) {
    out.fromArray(SHOTS[i].tgt);
    const r = SHOTS[i].rail;
    if (r && r.tgtTo) {
      out.set(
        out.x + (r.tgtTo[0] - SHOTS[i].tgt[0]) * k,
        out.y + (r.tgtTo[1] - SHOTS[i].tgt[1]) * k,
        out.z + (r.tgtTo[2] - SHOTS[i].tgt[2]) * k
      );
    }
    return out;
  }

  function startTransition(to, dur = 2.5) {
    const n = SHOTS.length;
    const j = ((to % n) + n) % n;
    _trans = {
      fp: camera.position.clone(),
      tp: new THREE.Vector3().fromArray(SHOTS[j].pos),
      ft: controls ? controls.target.clone() : new THREE.Vector3().fromArray(SHOTS[j].tgt),
      tt: new THREE.Vector3().fromArray(SHOTS[j].tgt),
      ff: camera.fov,
      tf: SHOTS[j].fov,
      t: 0, dur: Math.max(0.01, dur),
    };
    _idx = j;
    _advTimer = 0;
    _railT = 0;
  }

  // immediate place helper (used on explicit mode switch, never at boot —
  // boot framing belongs to buildCamera until the user picks a shot)
  function place(i) {
    basePos(i, camera.position);
    if (controls) { baseTgt(i, controls.target); controls.update(); }
    camera.fov = SHOTS[i].fov;
    camera.updateProjectionMatrix();
  }

  const api = {
    get idx() { return _idx; },
    get mode() { return _mode; },
    get label() { return _mode === 'orbit' ? 'orbit' : SHOTS[_idx].n; },
    get count() { return SHOTS.length; },
    setMode(m) {
      _mode = String(m); _advTimer = 0;
      if (controls) controls.enabled = (_mode !== 'cine');
      if (_mode === 'cine') place(_idx);
      return _mode;
    },
    goTo(i, dur = 2.5, applyMood = false) {
      const n = SHOTS.length;
      const j = ((i % n) + n) % n;
      startTransition(j, dur);
      if (applyMood && _moodHandler && SHOTS[j].mood) {
        try { _moodHandler(SHOTS[j].mood); } catch (e) { /* guarded: mood is advisory */ }
      }
      return _idx;
    },
    onMood(fn) {
      if (typeof fn === 'function') _moodHandler = fn;
      return api;
    },
    next() { return api.goTo(_idx + 1, 2.5, false); },
    prev() { return api.goTo(_idx - 1, 2.5, false); },
    toggleAdvance() { _auto = !_auto; _advTimer = 0; return _auto; },
    update(dt) {
      const step = Math.min(Math.max(dt || 0, 0), 0.1);
      _railT += step;
      // 'free' (legacy alias) and 'orbit' both release to OrbitControls
      if (_mode === 'free' || _mode === 'orbit') { if (controls) controls.update(); return; }
      // auto-advance without mood (avoids flashing daytime/weather on ambient loop;
      // mood only applies on explicit goTo(i,dur,true) from UI deep-links)
      if (_auto && !_trans) {
        _advTimer += step;
        if (_advTimer >= DWELL) api.next();
      }
      if (_trans) {
        _trans.t += step;
        const k = easeInOutCubic(_trans.t / _trans.dur);
        camera.position.lerpVectors(_trans.fp, _trans.tp, k);
        const tg = new THREE.Vector3().lerpVectors(_trans.ft, _trans.tt, k);
        if (controls) controls.target.copy(tg);
        camera.fov = _trans.ff + (_trans.tf - _trans.ff) * k;
        camera.updateProjectionMatrix();
        if (_trans.t >= _trans.dur) { _trans = null; _railT = 0; }
        if (controls) controls.update();
        return;
      }
      // ping-pong rail dolly: deterministic triangle via sin (no randomness)
      const period = (SHOTS[_idx].rail && SHOTS[_idx].rail.period) || 12;
      const k = 0.5 + 0.5 * Math.sin((_railT / period) * Math.PI * 2 - Math.PI / 2);
      railPos(_idx, k, _fp);
      railTgt(_idx, k, _ft);
      camera.position.copy(_fp);
      if (controls) controls.target.copy(_ft);
      // ease fov toward shot fov (handles post-goTo settle without pop)
      const tf = SHOTS[_idx].fov;
      if (Math.abs(camera.fov - tf) > 0.01) {
        camera.fov += (tf - camera.fov) * Math.min(1, step * 2);
        camera.updateProjectionMatrix();
      }
      if (controls) controls.update();
    },
  };
  return api;
}
