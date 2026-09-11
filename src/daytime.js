// src/daytime.js — DAWN/DAY/GOLDEN/SUNSET/NIGHT + auto-cycle. Drives sun, sky
// uniforms (if lighting exposes them), fog, hemi, exposure, lamps, stars, moon.
import * as THREE from 'three';

const ORDER = ['DAWN', 'DAY', 'GOLDEN', 'SUNSET', 'NIGHT'];
const CFG = {
  DAWN:   { sunC: 0xffb27a, sunI: 1.6, el: 12, az: 95,  sky: [0x9db8d6, 0xf2c49b], fog: 0xcfd4d6, hemi: 0.5, exp: 1.0 },
  DAY:    { sunC: 0xfff3e0, sunI: 2.6, el: 62, az: 150, sky: [0x6fa8dc, 0xcfe3ef], fog: 0xcfd8dc, hemi: 0.7, exp: 1.0 },
  GOLDEN: { sunC: 0xffc46b, sunI: 2.0, el: 18, az: 235, sky: [0x7f9cc4, 0xffd9a0], fog: 0xd8c9b4, hemi: 0.55, exp: 1.05 },
  SUNSET: { sunC: 0xff7e4d, sunI: 1.4, el: 6,  az: 262, sky: [0x5a6fa8, 0xff9e64], fog: 0xc9a98f, hemi: 0.45, exp: 1.05 },
  NIGHT:  { sunC: 0x8fa8d8, sunI: 0.22, el: 28, az: 300, sky: [0x060a16, 0x101c33], fog: 0x0b1220, hemi: 0.18, exp: 0.95 },
};

export function createDaytime({ renderer, scene, sun, hemi, skyMat = null, houses = [], lampGlows = [], lampLights = [], vendGlow = null, stars = null, moon = null } = {}) {
  let cur = 'DAY', target = 'DAY', k = 1;
  let auto = false, autoT = 0;
  const tmpC = new THREE.Color(), skyA = new THREE.Color(), skyB = new THREE.Color(), fogC = new THREE.Color();
  const from = snapshot('DAY'), to = snapshot('DAY');
  function snapshot(s) { const c = CFG[s]; return { ...c, sky: [...c.sky] }; }

  function applyState(s, kk, weather) {
    const A = from, B = to;
    const sunC = tmpC.set(A.sunC).lerp(new THREE.Color(B.sunC), kk);
    if (sun) {
      const dim = 1 - (weather?.dimK ?? 0);
      sun.color.copy(sunC); sun.intensity = THREE.MathUtils.lerp(A.sunI, B.sunI, kk) * dim;
      const el = THREE.MathUtils.degToRad(THREE.MathUtils.lerp(A.el, B.el, kk));
      const az = THREE.MathUtils.degToRad(THREE.MathUtils.lerp(A.az, B.az, kk));
      sun.position.set(Math.cos(el) * Math.cos(az), Math.sin(el), Math.cos(el) * Math.sin(az)).multiplyScalar(60);
    }
    skyA.set(A.sky[0]).lerp(new THREE.Color(B.sky[0]), kk);
    skyB.set(A.sky[1]).lerp(new THREE.Color(B.sky[1]), kk);
    if (skyMat?.uniforms) { // lighting.js sky-dome w/ uniforms (optional)
      skyMat.uniforms.topColor?.value.copy(skyA);
      skyMat.uniforms.bottomColor?.value.copy(skyB);
      // v1 sky-dome uniform names (top/mid/bot gradient):
      if (skyMat.uniforms.top) skyMat.uniforms.top.value.copy(skyA);
      if (skyMat.uniforms.mid) skyMat.uniforms.mid.value.copy(skyB);
      if (skyMat.uniforms.bot) skyMat.uniforms.bot.value.copy(skyB).multiplyScalar(0.82);
    } else if (scene?.background?.isColor) scene.background.copy(skyB);
    fogC.set(A.fog).lerp(new THREE.Color(B.fog), kk);
    if (scene?.fog) {
      scene.fog.color.copy(fogC);
      const mistK = weather?.mistK ?? 0, rainK = weather?.rainK ?? 0;
      scene.fog.near = THREE.MathUtils.lerp(30, 8, mistK) - rainK * 6;
      scene.fog.far = THREE.MathUtils.lerp(140, 45, mistK) - rainK * 25;
    }
    if (hemi) hemi.intensity = THREE.MathUtils.lerp(A.hemi, B.hemi, kk);
    if (renderer) renderer.toneMappingExposure = THREE.MathUtils.lerp(A.exp, B.exp, kk);
    // night factor: s is the transition target, cur the source (both in closure)
    const nightK = (s === 'NIGHT' ? kk : (cur === 'NIGHT' ? 1 - kk : 0));
    const heroBoost = nightK;
    for (const h of houses) for (const m of (h.glowMats || [])) m.emissiveIntensity = heroBoost * (h.name === 'hero' ? 1.6 : 0.9);
    for (const m of lampGlows) m.emissiveIntensity = nightK * 2.2;
    for (const L of lampLights) L.intensity = nightK * 14;
    if (vendGlow) vendGlow.emissiveIntensity = 0.4 + nightK * 1.6;
    if (stars) stars.material.opacity = nightK * 0.9;
    if (moon) moon.material.opacity = nightK;
  }

  return {
    get state() { return k >= 1 ? target : `${cur}>${target}`; },
    get auto() { return auto; },
    set(s) { if (CFG[s] && s !== target) { Object.assign(from, snapshot(k >= 1 ? target : target)); cur = k >= 1 ? target : cur; Object.assign(to, snapshot(s)); target = s; k = 0; } },
    cycle() { this.set(ORDER[(ORDER.indexOf(target) + 1) % ORDER.length]); },
    toggleAuto() { auto = !auto; return auto; },
    update(dt, weather) {
      if (auto) { autoT += dt; if (autoT > 14) { autoT = 0; this.cycle(); } }
      k = Math.min(1, k + dt / 2.5); // ~2.5s smooth, no pops
      const e = k * k * (3 - 2 * k);
      applyState(target, e, weather);
    },
  };
}

/** stars + moon bill (Points + emissive disc). Call once in main.js. */
export function buildNightSky(scene) {
  const g = new THREE.Group(); g.name = 'night_sky';
  const N = 400, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const a = Math.random() * Math.PI * 2, e = Math.random() * Math.PI * 0.45 + 0.08, r = 120;
    pos[i * 3] = Math.cos(a) * Math.cos(e) * r; pos[i * 3 + 1] = Math.sin(e) * r; pos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * r;
  }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xcfe0ff, size: 0.7, transparent: true, opacity: 0, depthWrite: false }));
  stars.frustumCulled = false; g.add(stars);
  const moon = new THREE.Mesh(new THREE.CircleGeometry(3, 24),
    new THREE.MeshBasicMaterial({ color: 0xe8efff, transparent: true, opacity: 0, fog: false }));
  moon.position.set(-60, 42, -80); moon.lookAt(0, 0, 0); g.add(moon);
  // cool moon dir light (low intensity)
  const ml = new THREE.DirectionalLight(0x9db8e8, 0); ml.position.copy(moon.position); g.add(ml);
  g.userData.setMoon = (k) => { ml.intensity = k * 0.35; };
  const _upd = g.userData.setMoon;
  scene.add(g);
  return { stars, moon, moonLight: ml, setMoon: _upd };
}
