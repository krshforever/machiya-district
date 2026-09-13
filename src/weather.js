// src/weather.js — clear/windy/rainy/misty with ~3s lerped transitions.
// Rain: 800 slanted streak Points + splash rings + puddles. Wetness drives
// registered materials (roughness down, envMapIntensity up). Wind object shared.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { srand } from './houses.js';

export const WIND = {
  strength: 0.45,           // 0..1.5 baseline consumed by vegetation/cloth/leaves
  gust(t) { return this.strength * (0.65 + 0.35 * Math.sin(t * 0.6) * Math.sin(t * 0.23 + 1.7)); },
};

const STATES = ['clear', 'windy', 'rainy', 'misty', 'snow'];

export function createWeather({ scene, pondWaterMats = [], wetMats = [], heightFn = null, snowMats = [], dripPoints = [], basins = [] } = {}) {
  const R = srand(777);
  const R2 = srand(778); // REMASTERED-B stream: new draws never reshuffle R() legacy layout
  const grp = new THREE.Group(); grp.name = 'weather'; scene?.add(grp);
  let cur = 'clear', target = 'clear', blend = 1; // blend 0..1 toward target
  let wetness = 0;                                 // 0..1 actual
  let snowK = 0;                                   // 0..1 actual (snow cover + flakes)
  const groundH = (typeof heightFn === 'function') ? heightFn : () => 0;
  const snowWhiten = Array.isArray(snowMats) ? snowMats : [];

  // ---- rain streaks: Points, velocity in shader-less update via position offset ----
  const N = 800;
  const pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pos[i * 3] = (R() - 0.5) * 60; pos[i * 3 + 1] = R() * 18; pos[i * 3 + 2] = (R() - 0.5) * 60; }
  const rainG = new THREE.BufferGeometry();
  rainG.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const rainM = new THREE.PointsMaterial({ color: 0xaebfd0, size: 0.14, transparent: true, opacity: 0, depthWrite: false });
  const rain = new THREE.Points(rainG, rainM);
  rain.frustumCulled = false; grp.add(rain);

  // ---- splash rings: 40 pooled expanding discs ----
  const splashM = new THREE.MeshBasicMaterial({ color: 0xcfe0ea, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide });
  const splashes = [];
  const ringG = new THREE.RingGeometry(0.05, 0.09, 12);
  for (let i = 0; i < 40; i++) {
    const m = new THREE.Mesh(ringG, splashM.clone());
    m.rotation.x = -Math.PI / 2;
    const sx = (R() - 0.5) * 50, sz = (R() - 0.5) * 50;
    // REMASTERED-B: sit on the ground field, not a flat plane (no slope clip)
    let sy = 0.06;
    try { const h = groundH(sx, sz); if (Number.isFinite(h)) sy = h + 0.03; } catch (e) {}
    m.position.set(sx, sy, sz);
    m.userData.ph = R(); grp.add(m); splashes.push(m);
  }
  // ---- puddles: causal water, not random planes ----
  // (a) chain-base drips: merged ONE mesh (static r~0.3 discs under every
  //     roof drain; opacity follows wetness). (b) street basins: individual
  //     meshes that GROW with wetness and shrink dry (visible accumulation).
  const pudM = new THREE.MeshStandardMaterial({ color: 0x20262c, roughness: 0.05, metalness: 0.7, transparent: true, opacity: 0, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  const dripGeos = [];
  for (const dr of dripPoints) {
    const r = 0.3 + R2() * 0.15;
    const cg = new THREE.CircleGeometry(r, 14);
    cg.rotateX(-Math.PI / 2);
    let gy = 0.045;
    try { const h = groundH(dr.x, dr.z); if (Number.isFinite(h)) gy = h + 0.025; } catch (e) {}
    cg.translate(dr.x, gy, dr.z);
    dripGeos.push(cg);
  }
  if (dripGeos.length) {
    const merged = mergeGeometries(dripGeos, false);
    dripGeos.forEach(g => g.dispose());
    const dm = new THREE.Mesh(merged, pudM);
    grp.add(dm);
  }
  const basinMeshes = [];
  for (const [x, z, r] of basins) {
    const p = new THREE.Mesh(new THREE.CircleGeometry(r, 20), pudM);
    p.rotation.x = -Math.PI / 2; p.position.set(x, 0.045, z); grp.add(p); basinMeshes.push(p);
  }
  // ---- eave drips: one Points cloud, drops fall from chain tops to stones ----
  // 8 drops per drip point, staggered phase. Visible only in rain.
  const DRIP_PER = 8;
  const dripN = dripPoints.length * DRIP_PER;
  const dripPos = new Float32Array(Math.max(1, dripN) * 3);
  const dripSeed = new Float32Array(Math.max(1, dripN));
  for (let i = 0; i < dripN; i++) {
    const dr = dripPoints[i % Math.max(1, dripPoints.length)] || { x: 0, z: 0, top: 4 };
    dripPos[i * 3] = dr.x; dripPos[i * 3 + 1] = dr.top; dripPos[i * 3 + 2] = dr.z;
    dripSeed[i] = R2();
  }
  const dripGeo = new THREE.BufferGeometry();
  dripGeo.setAttribute('position', new THREE.BufferAttribute(dripPos, 3));
  const dripMat = new THREE.PointsMaterial({ color: 0xcfe0ea, size: 0.09, transparent: true, opacity: 0, depthWrite: false });
  const drips = new THREE.Points(dripGeo, dripMat);
  drips.frustumCulled = false; grp.add(drips);

  // ---- snow: 500 slow flakes with ground collision + accumulation look ----
  const SNOW_N = 500;
  const SNOW_TOP = 26.0, SNOW_SPAN = 60.0; // respawn volume over settlement
  const snowPos = new Float32Array(SNOW_N * 3);
  const snowSpd = new Float32Array(SNOW_N); // fall speed 0.6..1.2 m/s
  const snowPhz = new Float32Array(SNOW_N);
  for (let i = 0; i < SNOW_N; i++) {
    snowPos[i * 3] = (R() - 0.5) * SNOW_SPAN;
    snowPos[i * 3 + 1] = R() * SNOW_TOP;
    snowPos[i * 3 + 2] = (R() - 0.5) * SNOW_SPAN;
    snowSpd[i] = 0.6 + R() * 0.6;
    snowPhz[i] = R() * Math.PI * 2;
  }
  const snowGeo = new THREE.BufferGeometry();
  snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
  const snowDot = (() => {
    const c = document.createElement('canvas'); // CALL time only, never module top
    c.width = 32; c.height = 32;
    const x = c.getContext('2d');
    const grad = x.createRadialGradient(16, 16, 1, 16, 16, 15);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.6, 'rgba(255,255,255,0.8)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = grad; x.fillRect(0, 0, 32, 32);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  })();
  const snowMat = new THREE.PointsMaterial({
    map: snowDot, size: 0.16, transparent: true, opacity: 0,
    depthWrite: false, sizeAttenuation: true, color: 0xf2f5f9,
  });
  const snow = new THREE.Points(snowGeo, snowMat);
  snow.frustumCulled = false;
  snow.visible = false;
  scene?.add(snow);
  // accumulation look: cache dry values once (mirrors wetMats userData pattern)
  const SNOW_TINT = new THREE.Color(0xe8edf2);
  for (const m of snowWhiten) {
    if (!m || !m.color || m.userData._snowSeeded) continue;
    m.userData._snowSeeded = true;
    m.userData._dryColor = m.color.clone();
    m.userData._dryRough = ('roughness' in m) ? m.roughness : 1.0;
  }

  const api = {
    get state() { return blend >= 1 ? target : `${cur}>${target}`; },
    get wetness() { return wetness; },
    setState(s) { if (STATES.includes(s) && s !== target) { cur = blend >= 1 ? target : cur; target = s; blend = 0; } },
    update(dt, t) {
      blend = Math.min(1, blend + dt / 3); // ~3s transitions
      const k = blend * blend * (3 - 2 * blend);
      const isRain = target === 'rainy', isMist = target === 'misty', isSnow = target === 'snow';
      const rainK = (isRain ? k : 1 - k) * (target === 'rainy' ? 1 : 0) + (cur === 'rainy' && target !== 'rainy' ? 1 - k : 0);
      // snow cover follows the same transition shape as wetness
      snowK += (((target === 'snow') ? k : (cur === 'snow' ? 1 - k : 0)) - snowK) * Math.min(1, dt * 0.8);
      // wind strength target per state
      const wGoal = target === 'windy' ? 1.2 : target === 'rainy' ? 0.8 : target === 'misty' ? 0.15 : target === 'snow' ? 0.55 : 0.45;
      WIND.strength += (wGoal * (target === 'windy' ? 1 : k || 1) - WIND.strength) * Math.min(1, dt * 1.2);
      if (target === 'windy') WIND.strength += (1.2 - WIND.strength) * Math.min(1, dt);
      // rain fall
      rainM.opacity = rainK * 0.75;
      if (rainM.opacity > 0.01) {
        const p = rainG.attributes.position.array;
        const slant = WIND.gust(t) * 3.2;
        for (let i = 0; i < N; i++) {
          p[i * 3 + 1] -= dt * 11;
          p[i * 3] += slant * dt;
          if (p[i * 3 + 1] < 0) { p[i * 3 + 1] = 15 + R() * 3; p[i * 3] = (R() - 0.5) * 60; p[i * 3 + 2] = (R() - 0.5) * 60; }
        }
        rainG.attributes.position.needsUpdate = true;
        for (const s of splashes) {
          s.material.opacity = rainK * 0.6;
          const ph = (t * 1.4 + s.userData.ph * 7) % 1;
          s.scale.setScalar(0.5 + ph * 2.2);
          s.material.opacity = rainK * 0.6 * (1 - ph);
        }
      } else { for (const s of splashes) s.material.opacity = 0; }
      // wetness lerp
      const wGoal2 = isRain ? 1 : 0;
      wetness += ((target === 'rainy' ? k : target === 'rainy' ? 1 : (cur === 'rainy' ? 1 - k : 0)) - wetness) * Math.min(1, dt * 0.8);
      void wGoal2;
      for (const m of wetMats) {
        // Slice 2: snapshot dry state once (roughness + env + albedo).
        if (!m?.userData?._dry) { m.userData._dry = { r: m.roughness ?? 0.85, e: m.envMapIntensity ?? 1, c: m.color ? m.color.clone() : null }; }
        m.roughness = THREE.MathUtils.lerp(m.userData._dry.r, Math.min(0.25, m.userData._dry.r * 0.4), wetness);
        m.envMapIntensity = THREE.MathUtils.lerp(m.userData._dry.e, m.userData._dry.e + 0.9, wetness);
        // rain-darkened surfaces: albedo drops toward 55% at full wet (restores dry on dry-out)
        if (m.userData._dry.c && m.color) m.color.copy(m.userData._dry.c).multiplyScalar(THREE.MathUtils.lerp(1, 0.55, wetness));
      }
      pudM.opacity = wetness * 0.8;
      // basins grow/shrink with wetness (accumulation + drying, lagged by wetness lerp)
      const bs = 0.3 + 0.7 * wetness;
      for (const b of basinMeshes) b.scale.set(bs, bs, 1);
      // eave drips fall only while raining (chain tops → stones)
      dripMat.opacity = rainK * 0.85;
      if (dripMat.opacity > 0.01 && dripPoints.length) {
        const dp = dripGeo.attributes.position.array;
        const slant = WIND.gust(t) * 0.9;
        for (let i = 0; i < dripN; i++) {
          const dr = dripPoints[i % dripPoints.length];
          const fall = ((t * 2.2 + dripSeed[i] * 7) % 1);
          dp[i * 3] = dr.x + slant * fall * 0.4;
          dp[i * 3 + 1] = dr.top - fall * (dr.top - 0.1);
          dp[i * 3 + 2] = dr.z;
        }
        dripGeo.attributes.position.needsUpdate = true;
      }
      for (const w of pondWaterMats) { w.roughness = THREE.MathUtils.lerp(0.18, 0.05, wetness); }
      // snow simulation: drift + fall + ground collision (die + respawn top)
      snow.visible = snowK > 0.01;
      snowMat.opacity = 0.9 * snowK;
      if (snow.visible) {
        const gust = WIND.gust(t); // blizzard slant scales with gust automatically
        const drift = gust * (1.2 + snowK * 1.0);
        for (let i = 0; i < SNOW_N; i++) {
          let y = snowPos[i * 3 + 1] - snowSpd[i] * dt;
          let x = snowPos[i * 3] + (drift + Math.sin(t * 1.3 + snowPhz[i]) * 0.25) * dt;
          const z = snowPos[i * 3 + 2] + Math.cos(t * 1.1 + snowPhz[i]) * 0.2 * dt;
          if (y <= groundH(x, z) + 0.03) { // landed: respawn top (deterministic hash of phase)
            y = SNOW_TOP * (0.85 + 0.15 * Math.sin(snowPhz[i] + t * 0.05));
            x = (((snowPhz[i] * 97.31) % 1) + 1) % 1 * SNOW_SPAN - SNOW_SPAN / 2;
          }
          snowPos[i * 3] = x; snowPos[i * 3 + 1] = y; snowPos[i * 3 + 2] = z;
        }
        snowGeo.attributes.position.needsUpdate = true;
      }
      // accumulation look: lerp shared mats toward white (reversible)
      // REMASTERED-G: roughness writes only while snow exists — at snowK≈0
      // the wet loop owns roughness (fixes rain-after-snow clobber; color
      // write is harmless since wet never touches color).
      if (snowWhiten.length) {
        const w = snowK * 0.7;
        for (const m of snowWhiten) {
          if (!m || !m.color || !m.userData._snowSeeded) continue;
          m.color.copy(m.userData._dryColor).lerp(SNOW_TINT, w);
          if ('roughness' in m && snowK > 0.001) m.roughness = m.userData._dryRough + (0.9 - m.userData._dryRough) * snowK * 0.85;
        }
      }
      // fog densify handled by daytime via api.fogK(); expose factors:
      api.rainK = rainK;
      api.mistK = (target === 'misty' ? k : cur === 'misty' ? 1 - k : 0);
      api.dimK = (isRain ? k * 0.55 : 0) + (isSnow ? k * 0.3 : 0); // snow day dims slightly
      api.snowK = snowK;
      api.fogK = Math.max(api.mistK, snowK * 0.6);
    },
    rainK: 0, mistK: 0, dimK: 0, snowK: 0, fogK: 0,
  };
  return api;
}
