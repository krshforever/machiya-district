// src/daytime.js — DAWN/DAY/GOLDEN/SUNSET/NIGHT + auto-cycle. Drives sun, sky
// uniforms (if lighting exposes them), fog, hemi, exposure, lamps, stars, moon.
import * as THREE from 'three';

const ORDER = ['DAWN', 'DAY', 'GOLDEN', 'SUNSET', 'BLUE_HOUR', 'NIGHT', 'MOONLIT', 'RAIN_NIGHT', 'MIST_NIGHT'];
// lit = practicals level (lamps/windows), lampK/starK = per-state multipliers.
// hemiSky/hemiGround tint the hemisphere fill per state (v2.1 addition).
const CFG = {
  DAWN:   { sunC: 0xffb27a, sunI: 1.6, el: 12, az: 95,  sky: [0x9db8d6, 0xf2c49b], fog: 0xcfd4d6, hemi: 0.5, hemiSky: 0xbcd3e8, hemiGround: 0x8a6f52, exp: 1.0, lit: 0, lampK: 1, starK: 0 },
  DAY:    { sunC: 0xfff3e0, sunI: 2.6, el: 62, az: 150, sky: [0x6fa8dc, 0xcfe3ef], fog: 0xcfd8dc, hemi: 0.7, hemiSky: 0xbcd3e8, hemiGround: 0x8a6f52, exp: 1.0, lit: 0, lampK: 1, starK: 0 },
  GOLDEN: { sunC: 0xffc46b, sunI: 2.0, el: 18, az: 235, sky: [0x7f9cc4, 0xffd9a0], fog: 0xd8c9b4, hemi: 0.55, hemiSky: 0xe8c9a0, hemiGround: 0x5f564a, exp: 1.05, lit: 0, lampK: 1, starK: 0 },
  SUNSET: { sunC: 0xff7e4d, sunI: 1.4, el: 6,  az: 262, sky: [0x5a6fa8, 0xff9e64], fog: 0xc9a98f, hemi: 0.45, hemiSky: 0x8a7fc0, hemiGround: 0x4a4038, exp: 1.05, lit: 0.25, lampK: 1, starK: 0.05 },
  BLUE_HOUR: { sunC: 0x7a86ff, sunI: 0.35, el: -4, az: 290, sky: [0x16224d, 0xb96a4e], fog: 0x5a5f86, hemi: 0.35, hemiSky: 0x4a5fa0, hemiGround: 0x2e2a28, exp: 0.9, lit: 0.8, lampK: 1, starK: 0.3 },
  NIGHT:  { sunC: 0x8fa8d8, sunI: 0.22, el: 28, az: 300, sky: [0x060a16, 0x101c33], fog: 0x0b1220, hemi: 0.18, hemiSky: 0x24305c, hemiGround: 0x0a0c12, exp: 0.95, lit: 1, lampK: 1, starK: 0.9 },
  MOONLIT: { sunC: 0xb9ccff, sunI: 1.1, el: 48, az: 40, sky: [0x050914, 0x0d1830], fog: 0x0a1122, hemi: 0.14, hemiSky: 0x1a2450, hemiGround: 0x05070c, exp: 0.85, lit: 1, lampK: 1, starK: 1 },
  RAIN_NIGHT: { sunC: 0x5a6a8a, sunI: 0.25, el: 30, az: 120, sky: [0x070b14, 0x111826], fog: 0x0d141f, hemi: 0.18, hemiSky: 0x2a3448, hemiGround: 0x0a0c10, exp: 0.8, lit: 1, lampK: 1.25, starK: 0.05 },
  MIST_NIGHT: { sunC: 0x6a7086, sunI: 0.18, el: 25, az: 200, sky: [0x0a0d14, 0x1a2028], fog: 0x141a22, hemi: 0.2, hemiSky: 0x30363f, hemiGround: 0x0c0e11, exp: 0.8, lit: 1, lampK: 1.1, starK: 0 },
};

export function createDaytime({ renderer, scene, sun, hemi, skyMat = null, houses = [], lampGlows = [], lampLights = [], vendGlow = null, stars = null, moon = null } = {}) {
  let cur = 'DAY', target = 'DAY', k = 1;
  let auto = false, autoT = 0;
  const tmpC = new THREE.Color(), skyA = new THREE.Color(), skyB = new THREE.Color(), fogC = new THREE.Color();
  const hemiS = new THREE.Color(), hemiG = new THREE.Color();
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
    if (hemi) {
      hemi.intensity = THREE.MathUtils.lerp(A.hemi, B.hemi, kk);
      if (A.hemiSky !== undefined) {
        hemi.color.copy(hemiS.set(A.hemiSky).lerp(new THREE.Color(B.hemiSky), kk));
        hemi.groundColor.copy(hemiG.set(A.hemiGround).lerp(new THREE.Color(B.hemiGround), kk));
      }
    }
    if (renderer) renderer.toneMappingExposure = THREE.MathUtils.lerp(A.exp, B.exp, kk);
    // practicals level lerped per state (SUNSET 0.25, BLUE_HOUR 0.8, nights 1)
    const nightK = THREE.MathUtils.lerp(A.lit ?? 0, B.lit ?? 0, kk);
    const lampK = THREE.MathUtils.lerp(A.lampK ?? 1, B.lampK ?? 1, kk);
    const starK = THREE.MathUtils.lerp(A.starK ?? 0, B.starK ?? 0, kk);
    const heroBoost = nightK;
    for (const h of houses) for (const m of (h.glowMats || [])) m.emissiveIntensity = heroBoost * (h.name === 'hero' ? 1.6 : 0.9);
    for (const m of lampGlows) m.emissiveIntensity = nightK * 2.2 * lampK;
    for (const L of lampLights) L.intensity = nightK * 14 * lampK;
    if (vendGlow) vendGlow.emissiveIntensity = 0.4 + nightK * 1.6;
    if (stars) stars.material.opacity = nightK * starK;
    if (moon) moon.material.opacity = nightK;
  }

  return {
    get state() { return k >= 1 ? target : `${cur}>${target}`; },
    get auto() { return auto; },
    set(s) {
      const key = String(s).toUpperCase().replace(/[\s-]+/g, '_'); // 'blue hour'/'blue-hour' -> BLUE_HOUR
      if (CFG[key] && key !== target) { Object.assign(from, snapshot(k >= 1 ? target : target)); cur = k >= 1 ? target : cur; Object.assign(to, snapshot(key)); target = key; k = 0; }
    },
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
