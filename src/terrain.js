// src/terrain.js — P2.2/P2.3: terrain mesh from world.js height field +
// river water ribbon following the carved channel. Deterministic (pure heightAt),
// one merged mesh with vertex colors (biome/moisture/height), one water ribbon.
// The district plateau is exactly 0, so Phase-1 ground planes stay untouched.
import * as THREE from 'three';
import { heightAt, moistureAt, biomeAt, slopeAt } from './world.js';

const SIZE = 300; // ±150m
const STEP = 3;   // 3m grid -> 100x100 quads ≈ 20k tris, 1 draw

function biomeColor(biome, mo, h, sl, out) {
  // earthy, muted; moisture darkens, height rocks
  // Slice 2: layered physical bands (moss/mud/litter/rock) from existing fields.
  // VILLAGE EXEMPT: district plateau color stays byte-identical (blend weights 0).
  const isVillage = biome === 'village';
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
  if (!isVillage) {
    // exposed rock on steep faces (structure, not noise)
    if (sl > 0.5) out.lerp(_rock, Math.min((sl - 0.5) * 1.8, 0.6));
    // moss colonizes damp gentle ground (north-facing bias approximated by moisture)
    if (mo > 0.6 && sl < 0.3) out.lerp(_moss, Math.min((mo - 0.6) * 2.2, 0.5));
    // mud where water sits on flat ground
    if (mo > 0.75 && sl < 0.15) out.lerp(_mud, Math.min((mo - 0.75) * 2.4, 0.6));
    // leaf litter under maple/bamboo canopies (same causality as REMASTERED-C)
    if (biome === 'maple' || biome === 'bamboo') out.lerp(_litter, 0.45);
  }
  return out;
}
const _rock = new THREE.Color(0.5, 0.5, 0.52);
const _moss = new THREE.Color(0.32, 0.42, 0.22); // damp-ground moss band
const _mud = new THREE.Color(0.23, 0.19, 0.15); // standing-water mud band
const _litter = new THREE.Color(0.36, 0.28, 0.18); // canopy leaf-litter band
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
    const sl0 = slopeAt(x, z);
    biomeColor(biomeAt(x, z), mo, h, sl0, c);
    // REMASTERED-E: landscape breakup (all deterministic, zero textures/draws)
    // 1. tonal jitter kills flat procedural fills; 2. scree washes steep
    // slopes (erosion cue); 3. wet gullies stain high-moisture slopes.
    const j = _vh(x, z);
    c.offsetHSL((j - 0.5) * 0.02, (j - 0.5) * 0.05, (j - 0.5) * 0.09);
    const sl = sl0;
    if (sl > 0.35) c.lerp(_scree, Math.min((sl - 0.35) * 1.6, 0.55));
    if (sl > 0.2 && mo > 0.55) c.lerp(_gully, Math.min((mo - 0.55) * 1.8, 0.5) * Math.min((sl - 0.2) * 3, 1));
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  // Slice 2: scanned soil detail multiplies the vertex macro tint (structure +
  // scans, not scans instead of structure). Maps attach ONLY onLoad success —
  // a missing file leaves today's vertex ground untouched (never black).
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0 });
  try {
    const tLoader = new THREE.TextureLoader();
    const detailOn = (tex, srgb) => {
      tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(90, 90);
      tex.anisotropy = 4;
      tex.needsUpdate = true;
      return tex;
    };
    const noop = () => { /* scan missing: vertex colors carry the ground alone */ };
    tLoader.load('vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg',
      (t) => { mat.map = detailOn(t, true); mat.needsUpdate = true; }, undefined, noop);
    tLoader.load('vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg',
      (t) => { mat.normalMap = detailOn(t, false); mat.normalScale.setScalar(0.6); mat.needsUpdate = true; }, undefined, noop);
    tLoader.load('vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg',
      (t) => { mat.roughnessMap = detailOn(t, false); mat.needsUpdate = true; }, undefined, noop);
  } catch (e) { /* procedural vertex ground stays */ }
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
