// src/terrain.js — P2.2/P2.3: terrain mesh from world.js height field +
// river water ribbon following the carved channel. Deterministic (pure heightAt),
// one merged mesh with vertex colors (biome/moisture/height), one water ribbon.
// The district plateau is exactly 0, so Phase-1 ground planes stay untouched.
import * as THREE from 'three';
import { heightAt, moistureAt, biomeAt } from './world.js';

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
  if (h > 7) out.lerp(new THREE.Color(0.5, 0.5, 0.52), Math.min((h - 7) / 8, 0.7));
  return out;
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
    biomeColor(biomeAt(x, z), moistureAt(x, z), h, c);
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
