// src/town.js — deterministic district layout. All coords verified non-overlapping.
// Axis: +x east, +z south. Main street z∈[5.5,8.5] (E-W). Units meters. Ground 70x70.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { generateHouse, srand } from './houses.js';

export const SEED = 20260911;

// footprint ledger: [name, cx, cz, w, d] — half-extent overlap assert runs in buildTown
export const LAYOUT = [
  { name: 'hero',   cx: 0,     cz: -1,   w: 9,   d: 7,   kind: 'hero' },
  { name: 'A',      cx: -10.5, cz: -1,   w: 6.5, d: 6,   kind: 'home' },
  { name: 'B',      cx: 9.8,   cz: -0.5, w: 6,   d: 6.5, kind: 'home' },
  { name: 'shop1',  cx: 14,    cz: 13.5, w: 7,   d: 5,   kind: 'shop' },
  { name: 'shop2',  cx: -13,   cz: 13.5, w: 6.5, d: 5,   kind: 'shop' },
  { name: 'C',      cx: -9,    cz: -12,  w: 7,   d: 6,   kind: 'home' },
  { name: 'D',      cx: 2,     cz: -12.5,w: 6.5, d: 6,   kind: 'home' },
  { name: 'E',      cx: 11.5,  cz: -12,  w: 6,   d: 5.5, kind: 'home' },
  { name: 'F',      cx: -19,   cz: -3,   w: 5.5, d: 6,   kind: 'home' },
  { name: 'G',      cx: -6,    cz: 21,   w: 6,   d: 5,   kind: 'home' },
  { name: 'shed1',  cx: 19.5,  cz: -4,   w: 3,   d: 2.5, kind: 'shed' },
  { name: 'shed2',  cx: -20.5, cz: 8,    w: 2.8, d: 2.5, kind: 'shed' },
];

const HOUSE_PARAMS = {
  A:     { seed: 11, w: 6.5, d: 6, wallH: 2.9, roofType: 'kirizuma', pitch: 30, facadeCols: 4, doorSide: -1, engawa: 0.9, woodTone: 0.3, age: 0.7, chains: true },
  B:     { seed: 22, w: 6,   d: 6.5, wallH: 3.3, roofType: 'yosemune', pitch: 32, facadeCols: 3, doorSide: 1, engawa: 0,   woodTone: 0.8, age: 0.2, chains: true },
  shop1: { seed: 33, w: 7,   d: 5, wallH: 3.4, roofType: 'kirizuma', pitch: 26, facadeCols: 4, doorSide: 0, engawa: 1.4, woodTone: 0.6, age: 0.35, isShop: true, chains: true },
  shop2: { seed: 44, w: 6.5, d: 5, wallH: 3.2, roofType: 'kirizuma', pitch: 27, facadeCols: 4, doorSide: 0, engawa: 1.2, woodTone: 0.4, age: 0.55, isShop: true, chains: true },
  C:     { seed: 55, w: 7,   d: 6, wallH: 3.0, roofType: 'yosemune', pitch: 31, facadeCols: 4, doorSide: 1, engawa: 0.9, woodTone: 0.5, age: 0.5 },
  D:     { seed: 66, w: 6.5, d: 6, wallH: 3.5, roofType: 'kirizuma', pitch: 33, facadeCols: 3, doorSide: -1, engawa: 0,  woodTone: 0.75, age: 0.25 },
  E:     { seed: 77, w: 6,   d: 5.5, wallH: 2.8, roofType: 'kirizuma', pitch: 29, facadeCols: 3, doorSide: 1, engawa: 0.8, woodTone: 0.35, age: 0.65 },
  F:     { seed: 88, w: 5.5, d: 6, wallH: 2.9, roofType: 'yosemune', pitch: 30, facadeCols: 3, doorSide: -1, engawa: 0,  woodTone: 0.45, age: 0.6 },
  G:     { seed: 99, w: 6,   d: 5, wallH: 3.1, roofType: 'kirizuma', pitch: 28, facadeCols: 3, doorSide: 1, engawa: 0.9, woodTone: 0.65, age: 0.3 },
  shed1: { seed: 111, w: 3,  d: 2.5, wallH: 2.2, roofType: 'kirizuma', pitch: 24, facadeCols: 2, doorSide: 0, engawa: 0, woodTone: 0.2, age: 0.9, winLayout: [0, 0] },
  shed2: { seed: 122, w: 2.8,d: 2.5, wallH: 2.1, roofType: 'kirizuma', pitch: 25, facadeCols: 2, doorSide: 0, engawa: 0, woodTone: 0.25, age: 0.85, winLayout: [0, 0] },
};

function assertNoOverlap() {
  for (let i = 0; i < LAYOUT.length; i++) for (let j = i + 1; j < LAYOUT.length; j++) {
    const a = LAYOUT[i], b = LAYOUT[j];
    const ox = (a.w + b.w) / 2 + 1.0 - Math.abs(a.cx - b.cx); // 1m min gap
    const oz = (a.d + b.d) / 2 + 1.0 - Math.abs(a.cz - b.cz);
    if (ox > 0 && oz > 0) console.error(`[town] OVERLAP ${a.name}×${b.name} by ${ox.toFixed(2)}×${oz.toFixed(2)}m`);
  }
}

// WAVE-B grounding: OPAQUE soil-dark discs (roughness 1) under fence/wall bases.
// y=+0.04 sits 10mm above the highest strip (0.03) -> never coplanar.
// polygonOffset(-1) + opaque = zero flicker risk. Two merged meshes = +2 draws.
function _grounding() {
  const rects = [
    // [cx, cz, w, d] — rects FOLLOW fence runs, never under hero/street/pond
    [0.0, 2.45, 19.0, 0.55],   // main fence run z=2.8, shadow side
    [-8.5, 0.60, 0.55, 4.20],  // W return fence
    [8.9, 0.60, 0.55, 4.20],   // E return fence
    [0.25, -5.05, 6.40, 0.55], // bamboo-grove soil (behind hero)
    [-3.9, 3.55, 1.60, 0.70],  // pot-cluster soil E
    [3.1, 3.55, 1.60, 0.70],   // pot-cluster soil W
  ];
  const geosA = [], geosB = [];
  rects.forEach(([cx, cz, w, d], idx) => {
    const g = new THREE.PlaneGeometry(w, d);
    g.rotateX(-Math.PI / 2); g.translate(cx, 0.04, cz);
    (idx < 4 ? geosA : geosB).push(g);
  });
  const mat = new THREE.MeshStandardMaterial({ color: 0x3a2e20, roughness: 1.0, metalness: 0.0 });
  mat.polygonOffset = true; mat.polygonOffsetFactor = -1; mat.polygonOffsetUnits = -1;
  const grp = new THREE.Group();
  for (const set of [geosA, geosB]) {
    const merged = mergeGeometries(set, false);
    set.forEach(g => g.dispose());
    grp.add(new THREE.Mesh(merged, mat));
  }
  grp.traverse(o => { if (o.isMesh) { o.receiveShadow = true; } });
  return grp; // +2 draw calls
}

export function buildTown({ scene, heroGroup = null } = {}) {
  assertNoOverlap();
  const R = srand(SEED);
  const town = new THREE.Group(); town.name = 'town';
  const houses = [];   // {name, params, group, glowMats, pos}
  const winSets = [];

  for (const lot of LAYOUT) {
    if (lot.kind === 'hero') {
      if (heroGroup) {
        heroGroup.position.set(lot.cx, 0, lot.cz);
        town.add(heroGroup);
        houses.push({ name: 'hero', group: heroGroup, glowMats: heroGroup.userData.glowMats || [], pos: heroGroup.position.clone() });
      }
      continue;
    }
    const hp = { ...HOUSE_PARAMS[lot.name], name: lot.name };
    // shops face the street: rotate 180° (front +z -> -z toward street at z 8.5)
    const h = generateHouse(hp);
    h.group.position.set(lot.cx, 0, lot.cz);
    if (lot.kind === 'shop') h.group.rotation.y = Math.PI;
    town.add(h.group);
    houses.push({ name: lot.name, params: hp, group: h.group, glowMats: h.glowMats, pos: h.group.position.clone() });
    winSets.push(h);
  }

  // ---------- ground zoning: one 70x70 base + street/dirt strips (few draws) ----------
  const groundMats = _groundMats();
  const ground = new THREE.Group(); ground.name = 'ground_zoning';
  const base = new THREE.Mesh(new THREE.PlaneGeometry(70, 70), groundMats.soil);
  base.rotation.x = -Math.PI / 2; base.receiveShadow = true; ground.add(base);
  const strip = (w, d, x, z, m, y = 0.02) => {
    const s = new THREE.Mesh(new THREE.PlaneGeometry(w, d), m);
    s.rotation.x = -Math.PI / 2; s.position.set(x, y, z); s.receiveShadow = true; ground.add(s);
  };
  strip(64, 3.0, 0, 7.0, groundMats.street);            // main street E-W
  strip(2.0, 15, -5.9, -1.7, groundMats.dirt);           // alley N-S (x -6.9..-4.9 incl edging)
  strip(1.1, 14.5, -5.9, -1.7, groundMats.stonePath, 0.03);
  strip(30, 2.0, 1, -7.5, groundMats.dirt);              // back lane
  strip(26, 2.0, -2, 17.5, groundMats.dirt);             // south lane
  strip(10, 3.2, 0, 3.9, groundMats.garden, 0.015);      // hero front garden court
  strip(8, 3.0, 14, 9.8, groundMats.gravel, 0.015);      // shop forecourts
  strip(7.5, 3.0, -13, 9.8, groundMats.gravel, 0.015);
  // stone edging along main street (instanced, 2 rows)
  {
    const eg = new THREE.BoxGeometry(0.5, 0.18, 0.3);
    const n = 64;
    const inst = new THREE.InstancedMesh(eg, groundMats.edging, n * 2);
    const d4 = new THREE.Object3D(); let k = 0;
    for (let i = 0; i < n; i++) for (const z of [5.35, 8.65]) {
      d4.position.set(-32 + i * 1.0 + (R() - 0.5) * 0.05, 0.09, z);
      d4.rotation.y = (R() - 0.5) * 0.06; d4.updateMatrix();
      inst.setMatrixAt(k++, d4.matrix);
    }
    inst.count = k; inst.receiveShadow = true; ground.add(inst);
  }
  town.add(ground);

  // ---------- stone walls (instanced blocks + capstones) ----------
  town.add(_stoneWalls(R, groundMats));
  // ---------- wooden fences + gates ----------
  town.add(_fences(R));
  town.add(_grounding()); // WAVE-B: opaque grounding discs
  // ---------- drainage channels + covers + 2 bridges ----------
  town.add(_drainage());
  // ---------- stepping-stone paths per house ----------
  town.add(_steppingStones(R));

  if (scene) scene.add(town);
  const polePositions = [[-2.5, 9.3], [8.5, 9.3], [19.5, 9.0], [-15.5, 9.3], [-15.0, -6.8]];
  // REMASTERED-A: pole→house service drops (power source → building connection).
  // Nearest house per pole, attach at the eave corner nearest the pole.
  // Pure math, no RNG — deterministic and stable across edits.
  const serviceDrops = [];
  for (const [px, pz] of polePositions) {
    let best = null, bd = Infinity;
    for (const h of houses) {
      const L = LAYOUT.find(l => l.name === h.name);
      if (!L) continue;
      const dx = px - h.pos.x, dz = pz - h.pos.z, q = dx * dx + dz * dz;
      if (q < bd) { bd = q; best = { h, L }; }
    }
    if (!best || bd > 400) continue;
    const ax = best.h.pos.x + Math.max(-best.L.w / 2 + 0.3, Math.min(best.L.w / 2 - 0.3, px - best.h.pos.x));
    const az = best.h.pos.z + Math.max(-best.L.d / 2 + 0.3, Math.min(best.L.d / 2 - 0.3, pz - best.h.pos.z));
    const ay = 0.6 + (best.h.params?.wallH ?? 3.0);
    serviceDrops.push({ a: [px, 5.9, pz], b: [ax, ay, az] });
  }
  return {
    group: town, houses, serviceDrops,
    lampPositions: [
      [-4.2, 8.9], [6.5, 8.9], [15.5, 8.9], [-13.5, 8.9], // main street corners
      [-5.0, -6.5], [8.0, -6.5],                          // back lane
      [-6.4, 1.5],                                        // alley mouth
    ],
    polePositions,
  };
}

function _groundMats() {
  const c = (hex, r = 0.95) => new THREE.MeshStandardMaterial({ color: hex, roughness: r });
  // tonal noise breaks up flat procedural repetition (128px canvas, tiled).
  // Same material count, same strips — purely surface variation.
  const out = {
    soil: c(0x5c5145), street: c(0x8f8a7d, 0.9), dirt: c(0x77644e),
    stonePath: c(0x9a9a94), garden: c(0x5f6b4a, 1.0), gravel: c(0xa09a88),
    edging: c(0x7d7d78),
  };
  for (const [k, m] of Object.entries(out)) {
    if (k === 'edging') continue;
    m.map = _noiseTex(k);
    m.needsUpdate = true;
  }
  return out;
}

// deterministic tonal-noise texture per ground zone (seeded by name hash)
const _noiseCache = {};
function _noiseTex(name) {
  if (_noiseCache[name]) return _noiseCache[name];
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const R = (() => { let a = h || 1; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; })();
  const s = 128, cv = document.createElement('canvas');
  cv.width = cv.height = s;
  const x = cv.getContext('2d');
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, s, s);
  for (let i = 0; i < 900; i++) {
    const v = 205 + Math.floor(R() * 50); // white multiplier noise: keeps hue, varies tone
    x.fillStyle = `rgb(${v},${v},${v})`;
    x.globalAlpha = 0.5;
    x.fillRect(R() * s, R() * s, 1 + R() * 2.5, 1 + R() * 2.5);
  }
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(8, 8);
  t.colorSpace = THREE.SRGBColorSpace;
  _noiseCache[name] = t;
  return t;
}

function _stoneWalls(R, gm) {
  const grp = new THREE.Group(); grp.name = 'stone_walls';
  // wall runs: [x1,z1,x2,z2,h] — lot boundaries, clear of footprints/alley
  const runs = [
    [-16.5, 2.8, -7.5, 2.8, 1.1],   // hero west garden wall (alley side gap kept)
    [5.0, 2.8, 12.5, 2.8, 1.1],     // hero east garden wall
    [-13.5, -8.6, -4.5, -8.6, 1.0], // back-lane frontage C/D
    [8.0, 18.2, -2.5, 18.2, 1.0],   // south lane frontage G
    [17.8, 11.5, 21.5, 11.5, 1.2],  // shed1 yard
  ];
  const blockG = new THREE.BoxGeometry(0.55, 0.32, 0.4);
  const mats = new THREE.MeshStandardMaterial({ color: 0x8b8b86, roughness: 0.95 });
  const xf = [];
  for (const [x1, z1, x2, z2, h] of runs) {
    const len = Math.hypot(x2 - x1, z2 - z1), n = Math.floor(len / 0.58);
    const ang = Math.atan2(x2 - x1, z2 - z1);
    const rows = Math.max(2, Math.round(h / 0.33));
    for (let i = 0; i < n; i++) for (let r = 0; r < rows; r++) {
      const t = (i + 0.5) / n;
      xf.push({ x: x1 + (x2 - x1) * t + (R() - 0.5) * 0.04, z: z1 + (z2 - z1) * t, y: 0.16 + r * 0.32, ry: ang + (R() - 0.5) * 0.08 });
    }
    // capstones
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n;
      xf.push({ x: x1 + (x2 - x1) * t, z: z1 + (z2 - z1) * t, y: 0.16 + rows * 0.32 + 0.06, ry: ang, cap: true });
    }
  }
  const inst = new THREE.InstancedMesh(blockG, mats, xf.length);
  const d4 = new THREE.Object3D();
  xf.forEach((t, i) => {
    d4.position.set(t.x, t.y, t.z); d4.rotation.set(0, t.ry, 0);
    d4.scale.set(t.cap ? 1.15 : 1, t.cap ? 0.45 : 1, t.cap ? 1.2 : 1);
    d4.updateMatrix(); inst.setMatrixAt(i, d4.matrix);
  });
  inst.castShadow = false; inst.receiveShadow = true; grp.add(inst);
  return grp;
}

function _fences(R) {
  const grp = new THREE.Group(); grp.name = 'fences_gates';
  const wood = new THREE.MeshStandardMaterial({ color: 0x5a4630, roughness: 0.85 });
  const woodD = new THREE.MeshStandardMaterial({ color: 0x3f3222, roughness: 0.85 });
  const buckets = { W: [], D: [] };
  const pick = (arr, w, h, d, x, y, z, ry = 0) => {
    const g = new THREE.BoxGeometry(w, h, d);
    const m = new THREE.Matrix4().makeRotationY(ry); m.setPosition(x, y, z);
    g.applyMatrix4(m); arr.push(g);
  };
  // fence runs with slat rhythm + gates (sliding + swinging)
  const runs = [
    { x1: -4.6, z1: 2.8, x2: 4.6, z2: 2.8, gate: 0.5 },   // hero front fence, sliding gate
    { x1: -16, z1: 0.5, x2: -16, z2: 5.5, gate: -1 },     // F lot fence, swinging gate
    { x1: 10.2, z1: 11.0, x2: 17.8, z2: 11.0, gate: 0 },  // shop1 forecourt rail
  ];
  for (const r of runs) {
    const len = Math.hypot(r.x2 - r.x1, r.z2 - r.z1), n = Math.floor(len / 0.28);
    const ang = Math.atan2(r.x2 - r.x1, r.z2 - r.z1) + Math.PI / 2;
    for (let i = 0; i <= n; i++) {
      const t = i / n, gx = r.x1 + (r.x2 - r.x1) * t, gz = r.z1 + (r.z2 - r.z1) * t;
      if (r.gate && Math.abs(t - 0.5) < 0.09) continue; // gate opening
      pick(buckets.W, 0.16, 1.1 + (R() - 0.5) * 0.06, 0.04, gx, 0.62, gz, ang);
    }
    pick(buckets.D, len, 0.09, 0.06, (r.x1 + r.x2) / 2, 1.05, (r.z1 + r.z2) / 2, ang);
    pick(buckets.D, len, 0.09, 0.06, (r.x1 + r.x2) / 2, 0.35, (r.z1 + r.z2) / 2, ang);
    if (r.gate === 0.5) { // sliding gate panel ajar
      pick(buckets.D, 1.1, 1.05, 0.06, (r.x1 + r.x2) / 2 + 0.9, 0.6, (r.z1 + r.z2) / 2 + 0.12, ang);
    } else if (r.gate === -1) { // swinging gate open 35°
      pick(buckets.D, 1.0, 1.0, 0.05, r.x1 + 0.4, 0.58, r.z1 + 2.6, ang + 0.6);
    }
  }
  for (const [k, m] of [['W', wood], ['D', woodD]]) {
    if (!buckets[k].length) continue;
    const mesh = new THREE.Mesh(mergeGeometries(buckets[k], false), m);
    mesh.castShadow = true; mesh.receiveShadow = true; grp.add(mesh);
  }
  return grp;
}

function _drainage() {
  const grp = new THREE.Group(); grp.name = 'drainage';
  const darkM = new THREE.MeshStandardMaterial({ color: 0x2e2c28, roughness: 0.9 });
  const waterM = new THREE.MeshStandardMaterial({ color: 0x1d2a33, roughness: 0.15, metalness: 0.6 });
  const stoneM = new THREE.MeshStandardMaterial({ color: 0x7d7d78, roughness: 0.95 });
  // recessed channel along south edge of main street
  const ch = new THREE.Mesh(new THREE.BoxGeometry(60, 0.1, 0.5), darkM);
  ch.position.set(0, 0.015, 9.05); ch.receiveShadow = true; grp.add(ch);
  const wt = new THREE.Mesh(new THREE.PlaneGeometry(60, 0.3), waterM);
  wt.rotation.x = -Math.PI / 2; wt.position.set(0, 0.05, 9.05); grp.add(wt);
  grp.userData.waterMat = waterM;
  // covers every ~4m + 2 small bridges (planks over channel at crossings)
  const buckets = [];
  for (let x = -28; x <= 28; x += 4) {
    const g = new THREE.BoxGeometry(1.2, 0.06, 0.56);
    g.translate(x, 0.09, 9.05); buckets.push(g);
  }
  const cov = new THREE.Mesh(mergeGeometries(buckets, false), stoneM);
  cov.receiveShadow = true; grp.add(cov);
  for (const bx of [-5.9, 10.5]) { // bridges at alley mouth + shop crossing
    const br = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.1, 1.1), new THREE.MeshStandardMaterial({ color: 0x6b5233, roughness: 0.8 }));
    br.position.set(bx, 0.12, 9.05); br.castShadow = true; br.receiveShadow = true; grp.add(br);
  }
  return grp;
}

function _steppingStones(R) {
  const grp = new THREE.Group(); grp.name = 'stepping_stones';
  const m = new THREE.MeshStandardMaterial({ color: 0x8f8f89, roughness: 0.95 });
  const geos = [];
  const paths = [
    { x: 0, z0: 5.4, z1: 2.6, n: 4 },       // hero front
    { x: -10.5, z0: 5.4, z1: 2.4, n: 4 },   // A front
    { x: 9.8, z0: 5.4, z1: 3.0, n: 3 },     // B front
    { x: 14, z0: 8.6, z1: 10.8, n: 3 },     // shop1 forecourt
    { x: -13, z0: 8.6, z1: 10.8, n: 3 },    // shop2 forecourt
  ];
  for (const p of paths) for (let i = 0; i < p.n; i++) {
    const t = (i + 0.5) / p.n;
    const g = new THREE.CylinderGeometry(0.32 + R() * 0.1, 0.36, 0.09, 7);
    g.translate(p.x + (R() - 0.5) * 0.3, 0.045, p.z0 + (p.z1 - p.z0) * t);
    geos.push(g);
  }
  const mesh = new THREE.Mesh(mergeGeometries(geos, false), m);
  mesh.receiveShadow = true; grp.add(mesh);
  return grp;
}

function _groundMatsRef() { return null; }
