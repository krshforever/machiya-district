// src/terrain.js — P2.2/P2.3: terrain mesh from world.js height field +
// river water ribbon following the carved channel. Deterministic (pure heightAt),
// one merged mesh with vertex colors (biome/moisture/height), one water ribbon.
// The district plateau is exactly 0, so Phase-1 ground planes stay untouched.
import * as THREE from 'three';
import { heightAt, moistureAt, biomeAt, slopeAt } from './world.js';

const SIZE = 300; // ±150m
const STEP = 3;   // 3m grid -> 100x100 quads ≈ 20k tris, 1 draw

function biomeColor(biome, mo, h, out) {
  // earthy, muted; moisture darkens, height rocks
  switch (biome) {
    case 'village': out.setRGB(0.36, 0.32, 0.25); break;
    case 'riverbank': out.setRGB(0.52, 0.48, 0.38); break;
    case 'mountain': out.setRGB(0.42, 0.42, 0.44); break;
    case 'slope': out.setRGB(0.40, 0.36, 0.28); break;
    case 'field': out.setRGB(0.45, 0.48, 0.28); break;
    case 'bamboo': out.setRGB(0.30, 0.42, 0.24); break;
    case 'maple': out.setRGB(0.38, 0.36, 0.24); break;
    case 'grassland': out.setRGB(0.42, 0.46, 0.28); break;
    default: out.setRGB(0.38, 0.36, 0.28); // outskirts
  }
  const dark = 1 - mo * 0.25; // moisture darkens (wet earth logic, no textures)
  out.multiplyScalar(dark);
  if (h > 7) out.lerp(_rock, Math.min((h - 7) / 8, 0.7));
  return out;
}
const _rock = new THREE.Color(0.5, 0.5, 0.52);
const _scree = new THREE.Color(0.47, 0.43, 0.38); // eroded slope wash
const _gully = new THREE.Color(0.30, 0.27, 0.22); // drainage-channel stain
// deterministic per-vertex hash (position-based, no RNG stream)
function _vh(x, z) {
  let h = (Math.imul(Math.round(x * 13.7), 374761393) + Math.imul(Math.round(z * 13.7), 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

export function buildTerrain() {
  const g = new THREE.Group();
  g.name = 'terrain';
  const n = Math.floor(SIZE / STEP);
  const geo = new THREE.PlaneGeometry(SIZE, SIZE, n, n);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = heightAt(x, z);
    pos.setY(i, h - 0.05); // 5cm below district planes: no coplanar fight, no visible gap
    const mo = moistureAt(x, z);
    biomeColor(biomeAt(x, z), mo, h, c);
    // REMASTERED-E: landscape breakup (all deterministic, zero textures/draws)
    // 1. tonal jitter kills flat procedural fills; 2. scree washes steep
    // slopes (erosion cue); 3. wet gullies stain high-moisture slopes.
    const j = _vh(x, z);
    c.offsetHSL((j - 0.5) * 0.02, (j - 0.5) * 0.05, (j - 0.5) * 0.09);
    const sl = slopeAt(x, z);
    if (sl > 0.35) c.lerp(_scree, Math.min((sl - 0.35) * 1.6, 0.55));
    if (sl > 0.2 && mo > 0.55) c.lerp(_gully, Math.min((mo - 0.55) * 1.8, 0.5) * Math.min((sl - 0.2) * 3, 1));
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true; // never casts (perf)
  mesh.frustumCulled = true;
  g.add(mesh);
  return { group: g, mesh };
}

// River ribbon: follows z = 34 + 8*sin(x*0.045), width 8, water at y=-0.8
// (carve floor ≈ -1.6, banks rise each side — water sits inside the channel).
export function buildRiver() {
  const g = new THREE.Group();
  g.name = 'river';
  const segs = 60, width = 8;
  const verts = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const x = -150 + (300 * i) / segs;
    const zc = 34 + 8 * Math.sin(x * 0.045);
    verts.push(x, -0.8, zc - width / 2, x, -0.8, zc + width / 2);
    if (i < segs) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({
    color: 0x2e4248, roughness: 0.12, metalness: 0.75, envMapIntensity: 1.0,
    transparent: true, opacity: 0.94,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  g.add(mesh);
  return { group: g, mesh, waterMat: mat };
}
