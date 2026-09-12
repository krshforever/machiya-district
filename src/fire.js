// src/fire.js — one outdoor fire pit at the farmstead (farmhouse firewood
// causality). Budget: exactly +1 PointLight (the fire). No shadows.
// DOM (canvas textures) is created at CALL time inside buildFire(), never at
// module top level. Zero Math.random — mulberry32(seed) + sin-hash only.
// update(t, dt, gust) allocates nothing (direct typed-array writes).

import * as THREE from 'three';

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeFlameTexture() {
  // Called inside buildFire (CALL time). Vertical gradient: transparent base
  // -> deep orange -> bright yellow-white core, teardrop via radial mask.
  const c = document.createElement('canvas');
  c.width = 64; c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 128, 0, 0);
  grad.addColorStop(0.0, 'rgba(255,90,20,0)');
  grad.addColorStop(0.35, 'rgba(255,120,30,0.85)');
  grad.addColorStop(0.65, 'rgba(255,190,80,0.95)');
  grad.addColorStop(0.9, 'rgba(255,240,200,1)');
  grad.addColorStop(1.0, 'rgba(255,255,240,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 128);
  // Narrow the top into a tongue (destination-in ellipse mask).
  g.globalCompositeOperation = 'destination-in';
  const mask = g.createRadialGradient(32, 70, 6, 32, 70, 62);
  mask.addColorStop(0, 'rgba(0,0,0,1)');
  mask.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = mask;
  g.fillRect(0, 0, 64, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeSoftDot() {
  // Smoke sprite. CALL time (inside buildFire).
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 2, 32, 32, 30);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.5, 'rgba(255,255,255,0.45)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const SMOKE_N = 60;
const SMOKE_H = 2.2;   // recycle height above fire base
const RISE = 1.2;      // m/s

export function buildFire(M, x, z, groundY) {
  const gy = (typeof groundY === 'number' && isFinite(groundY)) ? groundY : 0;
  const group = new THREE.Group();
  group.position.set(x, gy, z);

  const stoneMat = (M && M.stone) || new THREE.MeshStandardMaterial({ color: 0x8a8d92, roughness: 0.95 });
  const woodMat = (M && M.wood) || new THREE.MeshStandardMaterial({ color: 0x5a3d24, roughness: 0.9 });

  // --- stone ring: 8 boxes on a circle, 1 draw (InstancedMesh) ---
  const ring = new THREE.InstancedMesh(new THREE.BoxGeometry(0.28, 0.2, 0.22), stoneMat, 8);
  const dummy = new THREE.Object3D(); // factory-time temp, not per frame
  const rnd = mulberry32(0xF1A5);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + (rnd() - 0.5) * 0.2;
    dummy.position.set(Math.cos(a) * 0.55, 0.1, Math.sin(a) * 0.55);
    dummy.rotation.set(0, -a + (rnd() - 0.5) * 0.4, 0);
    dummy.scale.setScalar(0.9 + rnd() * 0.25);
    dummy.updateMatrix();
    ring.setMatrixAt(i, dummy.matrix);
  }
  ring.instanceMatrix.needsUpdate = true;
  ring.receiveShadow = true;
  group.add(ring);

  // --- 4 lean-to logs: 1 draw (InstancedMesh, wood) ---
  const logs = new THREE.InstancedMesh(new THREE.BoxGeometry(0.12, 0.12, 0.9), woodMat, 4);
  for (let i = 0; i < 4; i++) {
    const yaw = (i / 4) * Math.PI * 2 + 0.4;
    dummy.position.set(Math.cos(yaw) * 0.18, 0.32, Math.sin(yaw) * 0.18);
    dummy.rotation.set(0.62, yaw, 0); // tilt toward centre (lean-to)
    dummy.scale.setScalar(1.0);
    // lean the log inward: offset top toward centre via rotation pivot approx
    dummy.updateMatrix();
    logs.setMatrixAt(i, dummy.matrix);
  }
  logs.instanceMatrix.needsUpdate = true;
  group.add(logs);

  // --- flame: 2 crossed planes, shared additive material (2 draws) ---
  const flameTex = makeFlameTexture();
  const flameMat = new THREE.MeshBasicMaterial({
    map: flameTex, transparent: true, blending: THREE.AdditiveBlending,
    depthWrite: false, side: THREE.DoubleSide, fog: false,
  });
  const flameGeo = new THREE.PlaneGeometry(0.7, 0.9);
  const flame1 = new THREE.Mesh(flameGeo, flameMat);
  flame1.position.y = 0.62;
  const flame2 = new THREE.Mesh(flameGeo, flameMat);
  flame2.position.y = 0.62;
  flame2.rotation.y = Math.PI / 2;
  group.add(flame1, flame2);

  // --- smoke: 60 Points, rising loop (1 draw) ---
  const spos = new Float32Array(SMOKE_N * 3);
  const sage = new Float32Array(SMOKE_N);   // age seconds since spawn
  const sphz = new Float32Array(SMOKE_N);   // deterministic phase
  const soff = new Float32Array(SMOKE_N * 2); // deterministic lateral offset
  const srnd = mulberry32(0x5EED);
  for (let i = 0; i < SMOKE_N; i++) {
    sage[i] = (i / SMOKE_N) * (SMOKE_H / RISE); // staggered ages: steady plume at t=0
    sphz[i] = srnd() * Math.PI * 2;
    soff[i * 2] = (srnd() - 0.5) * 0.3;
    soff[i * 2 + 1] = (srnd() - 0.5) * 0.3;
  }
  const smokeGeo = new THREE.BufferGeometry();
  smokeGeo.setAttribute('position', new THREE.BufferAttribute(spos, 3));
  const smokeMat = new THREE.PointsMaterial({
    map: makeSoftDot(), size: 0.55, transparent: true, opacity: 0.32,
    depthWrite: false, sizeAttenuation: true, color: 0x9aa0a6,
  });
  const smoke = new THREE.Points(smokeGeo, smokeMat);
  smoke.frustumCulled = false;
  group.add(smoke);

  // --- THE one PointLight (budget +1). No shadows. ---
  const light = new THREE.PointLight(0xff8a3c, 8, 9, 2);
  light.position.set(0, 0.85, 0);
  light.castShadow = false;
  group.add(light);

  function update(t, dt, gust) {
    const gx = (typeof gust === 'number' && isFinite(gust)) ? gust : 0;
    // Flame flicker: absolute sin-hash, no accumulation.
    const s1 = 1 + 0.18 * Math.sin(t * 11.0) + 0.12 * Math.sin(t * 23.0 + 1.3);
    const s2 = 1 + 0.18 * Math.sin(t * 12.3 + 2.1) + 0.12 * Math.sin(t * 27.0 + 0.5);
    flame1.scale.set(s1, 1 + 0.25 * Math.sin(t * 13.0 + 0.7), 1);
    flame2.scale.set(s2, 1 + 0.25 * Math.sin(t * 14.0 + 2.0), 1);
    // Smoke rise + wind bend: x += gust * age * k (visible causality).
    for (let i = 0; i < SMOKE_N; i++) {
      let a = sage[i] + dt;
      const maxAge = SMOKE_H / RISE;
      if (a > maxAge) a -= maxAge; // recycle (preserves stagger, deterministic)
      sage[i] = a;
      const y = 0.7 + a * RISE;
      const bend = gx * a * 0.8;
      spos[i * 3] = soff[i * 2] + bend + Math.sin(a * 2.0 + sphz[i]) * 0.1;
      spos[i * 3 + 1] = y;
      spos[i * 3 + 2] = soff[i * 2 + 1] + Math.cos(a * 1.7 + sphz[i]) * 0.1;
    }
    smokeGeo.attributes.position.needsUpdate = true;
    // Light flicker 8 +/- 2.
    light.intensity = 8 + 2 * Math.sin(t * 11.0 + Math.sin(t * 23.0) * 1.7);
  }

  return { group, update };
}