// src/household.js — context-aware interior + entrance dressing
// LOCAL coords. Interior floor top YF=0.69. No DOM, no lights, seeded only.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const YF = 0.69;
const CLR = 0.012; // 12mm anti-coplanar clearance

// ---------- deterministic RNG ----------
function hashStr(s) {
  let h = 2166136261 >>> 0;
  const str = String(s ?? 'home');
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(a) {
  let t = (a >>> 0) || 1;
  return function () {
    t += 0x6D2B79F5;
    let z = Math.imul(t ^ (t >>> 15), t | 1);
    z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
    return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
  };
}
function seedOf(hp, salt) {
  const base = (typeof hp.seed === 'number')
    ? (hp.seed >>> 0)
    : hashStr(hp.seed ?? hp.name ?? 'house');
  return (base ^ Math.imul(salt >>> 0, 0x9E3779B1)) >>> 0;
}

// ---------- materials (reuse shared M, lazy fallback, no lights) ----------
const _fallbackCache = {};
function fallbackMat(key, color, rough = 0.9) {
  if (!_fallbackCache[key]) {
    _fallbackCache[key] = new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: 0.0 });
  }
  return _fallbackCache[key];
}
function resolveMats(M) {
  const m = M || {};
  const wood = m.wood || m.timber || m.beam || m.frame || fallbackMat('wood', 0x7a5a3a);
  const dark = m.dark || m.iron || m.charcoal || m.kitchen || fallbackMat('dark', 0x2e2a26, 0.85);
  const ceramic = m.ceramic || m.pot || m.clay || m.plaster || fallbackMat('ceramic', 0xb8a88e, 0.6);
  const stone = m.stone || m.rock || m.step || dark;
  const fabric = m.fabric || m.cloth || m.curtain || m.noren || dark;
  return { wood, dark, ceramic, stone, fabric };
}

// ---------- geometry bucket helpers ----------
function pushBox(arr, w, h, d, x, y, z, ry = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (ry) g.rotateY(ry);
  g.translate(x, y, z);
  arr.push(g);
}
function pushCyl(arr, rt, rb, h, seg, x, y, z, open = false) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg, 1, open);
  g.translate(x, y, z);
  arr.push(g);
}
function pushCone(arr, r, h, seg, x, y, z) {
  const g = new THREE.ConeGeometry(r, h, seg);
  g.translate(x, y, z);
  arr.push(g);
}
function pushSphere(arr, r, sx, sy, sz, x, y, z, wseg = 8, hseg = 6) {
  const g = new THREE.SphereGeometry(r, wseg, hseg);
  g.scale(sx, sy, sz);
  g.translate(x, y, z);
  arr.push(g);
}
function pushRollZ(arr, r, len, seg, x, y, z) {
  // horizontal bedding roll, axis along Z
  const g = new THREE.CylinderGeometry(r, r, len, seg);
  g.rotateX(Math.PI / 2);
  g.translate(x, y, z);
  arr.push(g);
}
function pushStick(arr, r, h, x, y, z, lean = 0, leanAxis = 'z') {
  const g = new THREE.CylinderGeometry(r, r, h, 6);
  if (lean) {
    if (leanAxis === 'z') g.rotateX(lean);
    else g.rotateZ(lean);
  }
  g.translate(x, y, z);
  arr.push(g);
}
function emitBucket(group, bucket, mat) {
  if (!bucket.length) return null;
  const merged = mergeGeometries(bucket, false);
  for (const g of bucket) g.dispose();
  if (!merged) return null;
  const mesh = new THREE.Mesh(merged, mat);
  group.add(mesh);
  return mesh;
}

// =====================================================================
// export function decorateHouse(group, hp, M)
// hp = { w, d, wallH, kind, seed, name? }
// =====================================================================
export function decorateHouse(group, hp, M) {
  const cloth = [];
  const glow = [];
  const mats = resolveMats(M);
  const w = Math.max(2.2, hp.w ?? 3.4);
  const d = Math.max(2.4, hp.d ?? 3.6);
  const wallH = hp.wallH ?? 1.9;
  const kind = hp.kind ?? 'home';
  const zBack = -d / 2 + 0.25;
  const sideX = w / 2 - 0.2; // inner side planes
  const hw = Math.max(0.8, sideX - 0.35);

  if (kind === 'home') {
    const r = buildHome(group, hp, mats, { w, d, wallH, zBack, sideX, hw });
    if (r && r.glow) for (const gm of r.glow) glow.push(gm);
  }
  else if (kind === 'shop') buildShop(group, hp, mats, { w, d, wallH, zBack, sideX, hw }, cloth);
  else if (kind === 'farm' || kind === 'shed') buildFarm(group, hp, mats, { w, d, wallH, zBack, sideX, hw });
  else if (kind === 'hero') buildHero(group, hp, mats, { w, d, wallH, zBack, sideX, hw });
  else {
    const r = buildHome(group, hp, mats, { w, d, wallH, zBack, sideX, hw });
    if (r && r.glow) for (const gm of r.glow) glow.push(gm);
  }

  return { cloth, glow };
}

function buildHome(group, hp, mats, B) {
  const rng = mulberry32(seedOf(hp, 0xBEEF));
  const wood = [], dark = [], cer = [];
  const { zBack, sideX, hw } = B;

  // --- shelf unit on back wall, offset left of center table (table at x~0.2,z~0.3) ---
  const shelfW = Math.min(1.7, B.w - 1.2);
  const cx = -Math.min(0.9, hw * 0.45) + (rng() - 0.5) * 0.2;
  const cz = zBack + 0.30; // 50mm+ clear of back plane
  const postH = Math.min(1.15, (hp.wallH ?? 1.9) - 0.55);
  const px = shelfW / 2 - 0.04;
  for (const s of [-1, 1]) {
    pushBox(wood, 0.08, postH, 0.32, cx + s * px, YF + CLR + postH / 2, cz);
  }
  const boardYs = [0.28, 0.58, 0.88].filter(y => y < postH);
  for (const by of boardYs) {
    pushBox(wood, shelfW, 0.05, 0.34, cx, YF + CLR + by, cz);
  }
  // 5-7 jars/bowls as merged cylinders on boards
  const nJars = 5 + Math.floor(rng() * 3);
  for (let i = 0; i < nJars; i++) {
    const b = boardYs[i % boardYs.length];
    const jx = cx - shelfW / 2 + 0.18 + (i * (shelfW - 0.36)) / Math.max(1, nJars - 1) + (rng() - 0.5) * 0.04;
    const jr = 0.055 + rng() * 0.035;
    const jh = (i % 3 === 2) ? 0.07 + rng() * 0.03 : 0.12 + rng() * 0.06; // bowls vs jars
    pushCyl(cer, jr, jr * 0.85, jh, 8, jx, YF + CLR + b + 0.025 + jh / 2, cz + (rng() - 0.5) * 0.1);
  }

  // --- bedding roll along +X side wall (keeps clear of center) ---
  const bx = sideX - 0.32;
  pushRollZ(dark, 0.17, Math.min(1.6, B.d - 1.4), 8, bx, YF + CLR + 0.17, -0.15);
  pushBox(dark, 0.38, 0.12, 0.26, bx, YF + CLR + 0.06, 0.78); // pillow at foot end

  // --- 2 storage boxes near -X front-side corner ---
  const sx = -(sideX - 0.38);
  pushBox(wood, 0.46, 0.44, 0.46, sx, YF + CLR + 0.22, 0.62);
  pushBox(wood, 0.40, 0.36, 0.40, sx + 0.03, YF + CLR + 0.44 + 0.012 + 0.18, 0.60);

  // --- kitchen corner: +X back corner, clear of shelf cx (shelf is left) ---
  const kx = Math.min(hw, sideX - 0.55);
  const kz = zBack + 0.62;
  pushBox(wood, 0.72, 0.24, 0.5, kx, YF + CLR + 0.12, kz); // low stand
  pushBox(dark, 0.42, 0.36, 0.42, kx - 0.08, YF + CLR + 0.24 + 0.012 + 0.18, kz); // stove box
  pushCyl(dark, 0.16, 0.14, 0.15, 8, kx - 0.08, YF + CLR + 0.24 + 0.012 + 0.36 + 0.012 + 0.075, kz); // pot
  for (let i = 0; i < 3; i++) {
    pushCyl(cer, 0.09, 0.09, 0.026, 8, kx + 0.16 + (i % 2) * 0.02, YF + CLR + 0.24 + 0.012 + 0.013 + Math.floor(i / 2) * 0.03, kz - 0.12 + i * 0.11);
  }

  // REMASTERED-D tail (appended last — earlier rng draws bit-identical):
  // books row on the middle shelf + broom in the corner + TV corner (§18/§22)
  const glow = [];
  const midBoard = boardYs.length > 1 ? boardYs[1] : boardYs[0];
  if (midBoard !== undefined) {
    let bx0 = cx - shelfW / 2 + 0.25;
    for (let i = 0; i < 5; i++) {
      const bw = 0.035 + rng() * 0.03, bh = 0.17 + rng() * 0.08;
      pushBox(dark, bw, bh, 0.13, bx0, YF + CLR + midBoard + 0.025 + bh / 2, cz + (rng() - 0.5) * 0.02);
      bx0 += bw + 0.012;
    }
  }
  // broom leaning at the -X back corner (stick + straw head)
  const brx = -(sideX - 0.28), brz = zBack + 0.35;
  pushStick(wood, 0.016, 1.15, brx, YF + CLR + 0.57, brz, 0.22, 'x');
  pushBox(dark, 0.07, 0.22, 0.09, brx, YF + CLR + 0.13, brz + 0.12);

  emitBucket(group, wood, mats.wood);
  emitBucket(group, dark, mats.dark);
  emitBucket(group, cer, mats.ceramic);

  // TV corner: stand + cab + glass screen + rod antenna (deterministic placement,
  // no rng — zero stream impact). Screen joins the night-glow circuit.
  {
    const tx = hw - 0.35, tz = 1.15;
    const stand = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.4, 0.42), mats.wood);
    stand.position.set(tx, YF + CLR + 0.2, tz);
    stand.castShadow = stand.receiveShadow = true;
    group.add(stand);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.4, 0.36), mats.dark);
    cab.position.set(tx, YF + CLR + 0.4 + 0.2, tz);
    cab.castShadow = true;
    group.add(cab);
    const screenM = new THREE.MeshStandardMaterial({
      color: 0x0c1016, roughness: 0.15, metalness: 0.4,
      emissive: 0x9db8d8, emissiveIntensity: 0,
    });
    const scr = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.3, 0.02), screenM);
    scr.position.set(tx, YF + CLR + 0.4 + 0.2, tz - 0.19);
    scr.rotation.y = Math.PI;
    group.add(scr);
    glow.push(screenM);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.5, 6), mats.dark);
    ant.position.set(tx + 0.15, YF + CLR + 0.4 + 0.4 + 0.25, tz);
    ant.rotation.z = 0.25;
    group.add(ant);
  }
  return { glow };
}

function buildShop(group, hp, mats, B, cloth) {
  const rng = mulberry32(seedOf(hp, 0x51));
  const wood = [], cer = [];
  const { zBack } = B;

  // counter near front half (serving side), centered
  const cw = Math.min(2.0, B.w - 1.0);
  const cz = B.d / 2 - 1.05;
  pushBox(wood, cw, 0.55, 0.5, 0, YF + CLR + 0.275, cz);
  pushBox(wood, cw + 0.1, 0.05, 0.58, 0, YF + CLR + 0.55 + 0.025, cz); // counter top lip

  // 2 shelf boards on back wall + 8 jars
  const shelfW = Math.min(1.9, B.w - 1.0);
  for (const by of [0.55, 0.92]) {
    pushBox(wood, shelfW, 0.05, 0.32, 0, YF + CLR + by, zBack + 0.28);
  }
  for (let i = 0; i < 8; i++) {
    const b = i < 4 ? 0.55 : 0.92;
    const jx = -shelfW / 2 + 0.2 + (i % 4) * ((shelfW - 0.4) / 3) + (rng() - 0.5) * 0.03;
    const jr = 0.06 + rng() * 0.03;
    const jh = 0.13 + rng() * 0.07;
    pushCyl(cer, jr, jr * 0.85, jh, 8, jx, YF + CLR + b + 0.025 + jh / 2, zBack + 0.28);
  }

  emitBucket(group, wood, mats.wood);
  emitBucket(group, cer, mats.ceramic);

  // back-room curtain: single opaque plane, animated by updateDetails via det.cloth
  const cwW = 0.72, cwH = Math.min(0.9, (hp.wallH ?? 1.9) - 0.7);
  const cg = new THREE.PlaneGeometry(cwW, cwH);
  const cm = new THREE.Mesh(cg, mats.fabric);
  if (cm.material && cm.material.side !== undefined) cm.material = cm.material; // keep shared, opaque preferred
  cm.material.side = THREE.DoubleSide;
  cm.position.set(Math.min(0.85, B.w / 2 - 0.7), YF + CLR + cwH / 2 + 0.55, zBack + 0.16);
  group.add(cm);
  cloth.push({ mesh: cm, phase: rng() * Math.PI * 2, amp: 0.09 + rng() * 0.03 });
}

function buildFarm(group, hp, mats, B) {
  const rng = mulberry32(seedOf(hp, 0xF4));
  const isBarn = String(hp.name ?? '').toLowerCase().startsWith('barn');
  const wood = [], dark = [];
  const { zBack, sideX } = B;

  // tool rack: 2 rails on -X side wall + leaning rake/shovel silhouettes
  const rx = -(sideX - 0.18);
  for (const ry of [0.45, 0.85]) {
    pushBox(wood, 0.06, 0.06, Math.min(1.6, B.d - 1.2), rx, YF + CLR + ry, -0.1);
  }
  const nTools = isBarn ? 2 : 3;
  for (let i = 0; i < nTools; i++) {
    const tz = -0.6 + i * 0.42 + (rng() - 0.5) * 0.06;
    pushStick(wood, 0.022, 1.25, rx + 0.16, YF + CLR + 0.62, tz, 0.18, 'z'); // handle leaning
    pushBox(dark, 0.05, 0.22, 0.04, rx + 0.27, YF + CLR + 0.35, tz); // head silhouette
  }

  if (!isBarn) {
    // 3 sacks (squashed spheres) back corner
    for (let i = 0; i < 3; i++) {
      pushSphere(dark, 0.24, 1.0, 0.62, 1.0, 0.5 + (i % 2) * 0.42 + (rng() - 0.5) * 0.08, YF + CLR + 0.15, zBack + 0.55 + Math.floor(i / 2) * 0.42);
    }
    // 2 baskets (open cylinders)
    pushCyl(wood, 0.20, 0.15, 0.26, 8, -0.3, YF + CLR + 0.13, zBack + 0.6, true);
    pushCyl(wood, 0.17, 0.13, 0.22, 8, -0.72, YF + CLR + 0.11, zBack + 0.62, true);
    // firewood row: 6 boxes along back wall
    for (let i = 0; i < 6; i++) {
      pushBox(wood, 0.22, 0.16, 0.5, -0.9 + i * 0.26, YF + CLR + 0.08, zBack + 0.32);
    }
  }

  emitBucket(group, wood, mats.wood);
  emitBucket(group, dark, mats.dark);
}

function buildHero(group, hp, mats, B) {
  // tokonoma dressing only — scroll already exists in core
  const cer = [], st = [];
  const { zBack, hw } = B;
  const vx = -Math.min(0.9, hw * 0.5);
  const vz = zBack + 0.45;
  // flower vase, tapered (lathe-ish via cylinder), 10 seg
  pushCyl(cer, 0.07, 0.11, 0.34, 10, vx, YF + CLR + 0.17, vz);
  pushCyl(cer, 0.05, 0.05, 0.06, 8, vx, YF + CLR + 0.34 + 0.03, vz); // neck
  // viewing stone: single faceted rock
  const sg = new THREE.IcosahedronGeometry(0.11, 0);
  sg.translate(vx + 0.42, YF + CLR + 0.08, vz + 0.05);
  st.push(sg);
  emitBucket(group, cer, mats.ceramic);
  emitBucket(group, st, mats.stone);
}

// =====================================================================
// export function decorateEntrance(group, hp, M) — OUTSIDE door (front)
// =====================================================================
export function decorateEntrance(group, hp, M) {
  const cloth = [];
  const mats = resolveMats(M);
  const rng = mulberry32(seedOf(hp, 0xE1));
  const d = Math.max(2.4, hp.d ?? 3.6);
  const kind = hp.kind ?? 'home';
  const zOut = d / 2;
  const side = rng() < 0.5 ? -1 : 1;

  const stone = [], dark = [];

  // stepping accent stone: flat cylinder, lifted 40mm+ clear of ground/path
  pushCyl(stone, 0.30, 0.34, 0.07, 10, (rng() - 0.5) * 0.2, 0.055, zOut + 0.95);

  // shoe pair beside door side (2 small dark boxes, 12mm+ above ground)
  const shx = side * 0.62, shz = zOut + 0.38;
  pushBox(dark, 0.11, 0.09, 0.26, shx, 0.065, shz, (rng() - 0.5) * 0.3);
  pushBox(dark, 0.11, 0.09, 0.26, shx + 0.15 * side, 0.065, shz + 0.03, (rng() - 0.5) * 0.3);

  // umbrella stand + 1 umbrella, home/farm only
  if (kind === 'home' || kind === 'farm') {
    const ux = -side * 0.72, uz = zOut + 0.36;
    pushCyl(dark, 0.13, 0.11, 0.42, 8, ux, 0.02 + 0.21, uz); // stand
    pushStick(dark, 0.015, 0.72, ux, 0.02 + 0.36, uz, 0.06, 'z'); // stick
    pushCone(dark, 0.13, 0.24, 8, ux + 0.02, 0.02 + 0.72 + 0.1, uz); // canopy
  }

  emitBucket(group, stone, mats.stone);
  emitBucket(group, dark, mats.dark);
  return { cloth };
}