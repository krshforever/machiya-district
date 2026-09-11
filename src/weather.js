// src/weather.js — clear/windy/rainy/misty with ~3s lerped transitions.
// Rain: 800 slanted streak Points + splash rings + puddles. Wetness drives
// registered materials (roughness down, envMapIntensity up). Wind object shared.
import * as THREE from 'three';
import { srand } from './houses.js';

export const WIND = {
  strength: 0.45,           // 0..1.5 baseline consumed by vegetation/cloth/leaves
  gust(t) { return this.strength * (0.65 + 0.35 * Math.sin(t * 0.6) * Math.sin(t * 0.23 + 1.7)); },
};

const STATES = ['clear', 'windy', 'rainy', 'misty'];

export function createWeather({ scene, pondWaterMats = [], wetMats = [] } = {}) {
  const R = srand(777);
  const grp = new THREE.Group(); grp.name = 'weather'; scene?.add(grp);
  let cur = 'clear', target = 'clear', blend = 1; // blend 0..1 toward target
  let wetness = 0;                                 // 0..1 actual

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
    m.position.set((R() - 0.5) * 50, 0.06, (R() - 0.5) * 50);
    m.userData.ph = R(); grp.add(m); splashes.push(m);
  }
  // ---- puddles: flat circles near drains, opacity/env-driven ----
  const pudM = new THREE.MeshStandardMaterial({ color: 0x20262c, roughness: 0.05, metalness: 0.7, transparent: true, opacity: 0 });
  const puddles = [];
  for (const [x, z, r] of [[-5.9, 9.6, 1.2], [4, 9.4, 1.5], [12, 9.7, 1.0], [-12, 9.5, 1.1], [0, 4.2, 0.9]]) {
    const p = new THREE.Mesh(new THREE.CircleGeometry(r, 20), pudM);
    p.rotation.x = -Math.PI / 2; p.position.set(x, 0.045, z); grp.add(p); puddles.push(p);
  }

  const api = {
    get state() { return blend >= 1 ? target : `${cur}>${target}`; },
    get wetness() { return wetness; },
    setState(s) { if (STATES.includes(s) && s !== target) { cur = blend >= 1 ? target : cur; target = s; blend = 0; } },
    update(dt, t) {
      blend = Math.min(1, blend + dt / 3); // ~3s transitions
      const k = blend * blend * (3 - 2 * blend);
      const isRain = target === 'rainy', isMist = target === 'misty', isWind = target === 'windy';
      const rainK = (isRain ? k : 1 - k) * (target === 'rainy' ? 1 : 0) + (cur === 'rainy' && target !== 'rainy' ? 1 - k : 0);
      // wind strength target per state
      const wGoal = target === 'windy' ? 1.2 : target === 'rainy' ? 0.8 : target === 'misty' ? 0.15 : 0.45;
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
        if (!m?.userData?._dry) { m.userData._dry = { r: m.roughness ?? 0.85, e: m.envMapIntensity ?? 1 }; }
        m.roughness = THREE.MathUtils.lerp(m.userData._dry.r, Math.min(0.25, m.userData._dry.r * 0.4), wetness);
        m.envMapIntensity = THREE.MathUtils.lerp(m.userData._dry.e, m.userData._dry.e + 0.9, wetness);
      }
      pudM.opacity = wetness * 0.75;
      for (const w of pondWaterMats) { w.roughness = THREE.MathUtils.lerp(0.18, 0.05, wetness); }
      // fog densify handled by daytime via api.fogK(); expose factors:
      api.rainK = rainK;
      api.mistK = (target === 'misty' ? k : cur === 'misty' ? 1 - k : 0);
      api.dimK = isRain ? k * 0.55 : 0; // sun dim request
    },
    rainK: 0, mistK: 0, dimK: 0,
  };
  return api;
}
