// src/farRidgeRing.js — Slice 3 (P0-2) far silhouette ring.
// ONE merged mesh, ONE draw, 768 tris. CPU/geometry/material-level only.
// fog:true gives aerial perspective; baked vertexColors tint toward HAZE_HEX.
// Render order 1: draws AFTER the sky dome (opaque, depthWrite:false), depth
// tested against terrain only — the dome stays the backdrop, the ring the ridge.
import * as THREE from 'three';
import { HAZE_HEX } from './haze.js';

// NEW independent hash stream (forest/star streams untouched — no reshuffle).
const RING_STREAM = 0x51f15eed;
function hash1i(n) {
  n = (n ^ RING_STREAM) | 0;
  n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
  n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
  n = (n ^ (n >>> 16)) >>> 0;
  return n / 4294967296;
}
function valueNoise1(x) {
  const xi = Math.floor(x), xf = x - xi;
  const a = hash1i(xi), b = hash1i(xi + 1);
  const u = xf * xf * (3 - 2 * xf);
  return a + (b - a) * u;
}
// ridged 1D fbm: 1-|2n-1| -> sharp crests, not lumps
function ridged1(x) {
  let sum = 0, amp = 0.55, freq = 1.0, norm = 0;
  for (let o = 0; o < 3; o++) {
    const n = valueNoise1(x * freq);
    sum += (1 - Math.abs(2 * n - 1)) * amp;
    norm += amp; amp *= 0.5; freq *= 2.13;
  }
  return sum / norm; // 0..1
}

export const RING_SEGMENTS = 128;
export const RING_BANDS = [
  { r: 260, hMax: 42, tint: 0.55, yBase: -8 },
  { r: 312, hMax: 58, tint: 0.72, yBase: -6 },
  { r: 368, hMax: 74, tint: 0.88, yBase: -4 },
];
// River runs east-west (z ~= 34): valley notches face theta 0 (east) and pi (west).
const NOTCHES = [
  { ang: 0, depth: 0.75, width: 0.09 },
  { ang: Math.PI, depth: 0.55, width: 0.07 },
];
function notchFactor(theta) {
  let f = 1;
  for (const n of NOTCHES) {
    let d = Math.abs(theta - n.ang) % (Math.PI * 2);
    if (d > Math.PI) d = Math.PI * 2 - d;
    f *= 1 - n.depth * Math.exp(-(d * d) / (n.width * n.width));
  }
  return Math.max(0.08, f);
}
export function ringTriCount() { return RING_BANDS.length * RING_SEGMENTS * 2; } // 768

export function createFarRidgeRing() {
  const segs = RING_SEGMENTS, bands = RING_BANDS;
  const vpr = segs + 1;
  const pos = [], col = [], idx = [];
  const haze = new THREE.Color(HAZE_HEX);
  const dark = haze.clone().multiplyScalar(0.42); // same hue, lifted darks via lerp
  const tmp = new THREE.Color();
  bands.forEach((b, bi) => {
    const base = bi * vpr * 2;
    for (let i = 0; i <= segs; i++) {
      const theta = (i / segs) * Math.PI * 2;
      const ridge = ridged1(theta * 3.1 + bi * 7.7);
      const crest = (6 + ridge * (b.hMax - 6)) * notchFactor(theta);
      const x = Math.cos(theta) * b.r, z = Math.sin(theta) * b.r;
      pos.push(x, b.yBase, z);          // bottom skirt
      pos.push(x, b.yBase + crest, z);  // crest
      // progressive tint: band tint + crest lift (clearer but bluer)
      tmp.copy(dark).lerp(haze, b.tint);
      col.push(tmp.r, tmp.g, tmp.b);
      tmp.copy(dark).lerp(haze, Math.min(1, b.tint + (crest / b.hMax) * 0.18));
      col.push(tmp.r, tmp.g, tmp.b);
      if (i < segs) {
        const a = base + i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeBoundingSphere();
  const m = new THREE.MeshBasicMaterial({ vertexColors: true, fog: true });
  const mesh = new THREE.Mesh(g, m);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.frustumCulled = false; // always on horizon; avoids pop
  mesh.renderOrder = 1; // after sky dome (opaque, depthWrite:false) — dome stays backdrop
  mesh.name = 'farRidgeRing';
  return mesh;
}
