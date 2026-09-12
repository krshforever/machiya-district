// src/houses.js — parametric machiya/townhouse builder + hero upgrader.
// Deps: three, three/addons/utils/BufferGeometryUtils.js, ./materials.js (M.*), ./helpers.js.
// Defensive: namespace imports + local fallbacks so v1 naming drift can't break boot.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import * as MAT from './materials.js';
import * as H from './helpers.js';

// ---------- deterministic RNG (local; do NOT depend on helper name) ----------
export function srand(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const _M = MAT.M || MAT.default || MAT;           // tolerate export shape
const _H = H || {};

// Shared mothership registry: main.js calls setSharedM(M) so district houses
// reuse the textured/registered materials instead of local flat fallbacks.
export const SHARED = { M: null };
export function setSharedM(M) { SHARED.M = M; }
const ALIAS = { tile: 'roofTile', shoji: 'paper' };

// material resolver: prefer shared M.*, else build once + cache locally
const _localMatCache = {};
function mat(name, fallback) {
  const reg = SHARED.M || _M;
  if (reg && reg[name]) return reg[name];
  const al = ALIAS[name];
  if (al && reg && reg[al]) return reg[al];
  if (!_localMatCache[name]) _localMatCache[name] = fallback();
  return _localMatCache[name];
}
const std = (c, r = 0.85, m = 0) =>
  new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: m });
const Mwood   = () => mat('woodDark',  () => std(0x4a3a28, 0.8));
const MwoodN  = () => mat('woodNew',   () => std(0x8a6238, 0.7));
const MwoodA  = () => mat('woodAged',  () => std(0x6e6258, 0.9));
const Mplas   = () => mat('plaster',   () => std(0xe8e0d0, 0.95));
const Mpaper  = () => mat('shoji',     () => std(0xf5efdd, 0.9));
const Mtile   = () => mat('tile',      () => std(0x3a3f46, 0.85));
const Mstone  = () => mat('stone',     () => std(0x8d8d88, 0.95));
const Mglass  = () => mat('glassDark', () => new THREE.MeshStandardMaterial({ color: 0x10151c, roughness: 0.08, metalness: 0.9 }));
const Miron   = () => mat('iron',      () => std(0x2b2b2e, 0.55, 0.8));

// push a transformed box/cyl into a per-material bucket for later merge
function _box(buckets, key, w, h, d, x, y, z, ry = 0, rz = 0, rx = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz));
  m.setPosition(x, y, z);
  g.applyMatrix4(m);
  (buckets[key] ||= []).push(g);
}
function _cyl(buckets, key, rt, rb, h, x, y, z, seg = 8) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg);
  g.translate(x, y, z);
  (buckets[key] ||= []).push(g);
}
// generic transformed geometry (tori, etc.) into a merge bucket
function _geo(buckets, key, geo, x, y, z, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz));
  m.setPosition(x, y, z);
  geo.applyMatrix4(m);
  (buckets[key] ||= []).push(geo);
}
function _mergeBuckets(group, buckets, matFor, { shadow = true, noCast = null } = {}) {
  for (const k of Object.keys(buckets)) {
    const merged = mergeGeometries(buckets[k], false);
    buckets[k].forEach(g => g.dispose());
    const mesh = new THREE.Mesh(merged, matFor(k));
    mesh.castShadow = (noCast && noCast.has(k)) ? false : shadow;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
}

/**
 * generateHouse(params) — full parametric townhouse. All dims meters.
 * params: {seed,w,d,wallH,roofType:'kirizuma'|'yosemune',pitch(deg),
 *   facadeCols,winLayout:[0|1|2..] per col (0 blank,1 shoji,2 lattice+glass),
 *   doorSide:-1|0|1, engawa:depth(0=none), woodTone:0 aged..1 new,
 *   plasterTone:hex, age:0..1, isShop:false, name}
 * Returns {group, glowMats:[paper mats for night], dims:{w,d,wallH}, roofTopY}
 */
export function generateHouse(p = {}) {
  const R = srand(p.seed ?? 7);
  const w = p.w ?? 6.5, d = p.d ?? 6, wallH = p.wallH ?? 3.1;
  const pitch = THREE.MathUtils.degToRad(p.pitch ?? (28 + R() * 8));
  const roofType = p.roofType ?? (R() < 0.7 ? 'kirizuma' : 'yosemune');
  const cols = p.facadeCols ?? Math.max(3, Math.round(w / 1.8));
  const age = p.age ?? R();
  const isShop = !!p.isShop;
  const engD = p.engawa ?? (R() < 0.6 ? 0.9 : 0);

  const g = new THREE.Group();
  g.name = p.name || 'house';
  const B = {};   // merged-geometry buckets keyed by material slot
  const woodSlot = (p.woodTone ?? 0.5) > 0.6 ? 'woodNew' : 'woodAged';
  const matFor = (k) =>
    k === 'WOOD' ? mat(woodSlot, woodSlot === 'woodNew' ? MwoodN : MwoodA) :
    k === 'WOOD_D' ? Mwood() :
    k === 'IRON' ? Miron() :
    k === 'IRNNC' ? Miron() : // rain chains: iron look, never shadow casters
    k === 'RIDGE' ? mat('ridge', () => std(0x35373d, 0.5, 0.1)) :
    k === 'PLAS' ? ( _M.plasterTinted?.(p.plasterTone ?? 0xe8e0d0) ?? Mplas()) :
    k === 'STONE' ? Mstone() : Mwood();

  // ---- foundation stones: rhythm, never floating ----
  const fw = 0.55, fh = 0.45;
  const per = [];
  const nx = Math.max(3, Math.round(w / 1.2) + 1), nz = Math.max(3, Math.round(d / 1.2) + 1);
  for (let i = 0; i < nx; i++) per.push([-w / 2 + (w * i) / (nx - 1), 0, -d / 2], [-w / 2 + (w * i) / (nx - 1), 0, d / 2]);
  for (let i = 1; i < nz - 1; i++) per.push([-w / 2, 0, -d / 2 + (d * i) / (nz - 1)], [w / 2, 0, -d / 2 + (d * i) / (nz - 1)]);
  for (const [x, , z] of per) _box(B, 'STONE', fw, fh, fw, x, fh / 2 - 0.06, z, R() * 0.1);
  const baseY = fh - 0.06; // plinth top — everything sits on this
  _box(B, 'WOOD_D', w + 0.3, 0.22, d + 0.3, 0, baseY + 0.11, 0); // sill/plinth

  // ---- walls: plaster infill + post & beam frame ----
  const t = 0.14, y0 = baseY + 0.22, yh = y0 + wallH;
  // plaster panels (front/back with openings carved by splitting into segments)
  const winL = p.winLayout ?? Array.from({ length: cols }, () => (R() < 0.55 ? 1 : 2));
  const colW = w / cols;
  for (let c = 0; c < cols; c++) {
    const cx = -w / 2 + colW * (c + 0.5);
    const kind = winL[c % winL.length];
    const isDoorCol = (p.doorSide ?? 0) !== 0 && ((p.doorSide < 0 && c === 0) || (p.doorSide > 0 && c === cols - 1));
    const sill = y0 + 0.55, head = y0 + wallH - 0.75;
    if (kind === 0 && !isDoorCol) {
      _box(B, 'PLAS', colW - 0.16, wallH, t, cx, y0 + wallH / 2, d / 2);
    } else if (isDoorCol) {
      _box(B, 'PLAS', colW - 0.16, sill - y0, t, cx, (y0 + sill) / 2, d / 2);           // below? none (door to floor)
      _box(B, 'PLAS', colW - 0.16, yh - (y0 + 2.1), t, cx, (yh + y0 + 2.1) / 2, d / 2); // above door
    } else {
      _box(B, 'PLAS', colW - 0.16, sill - y0, t, cx, (y0 + sill) / 2, d / 2);
      _box(B, 'PLAS', colW - 0.16, yh - head, t, cx, (yh + head) / 2, d / 2);
      _box(B, 'PLAS', 0.14, head - sill, t, cx - (colW - 0.16) / 2 + 0.07, (sill + head) / 2, d / 2);
      _box(B, 'PLAS', 0.14, head - sill, t, cx + (colW - 0.16) / 2 - 0.07, (sill + head) / 2, d / 2);
    }
    void cx;
  }
  _box(B, 'PLAS', w, wallH, t, 0, y0 + wallH / 2, -d / 2);                 // back solid
  _box(B, 'PLAS', t, wallH, d, -w / 2, y0 + wallH / 2, 0);                 // sides
  _box(B, 'PLAS', t, wallH, d, w / 2, y0 + wallH / 2, 0);
  // posts at every column line + corners, double top plates (nageshi + kamoi readability)
  for (let c = 0; c <= cols; c++) {
    const x = -w / 2 + colW * c;
    _box(B, 'WOOD_D', 0.14, wallH, 0.14, x, y0 + wallH / 2, d / 2 + 0.02);
    _box(B, 'WOOD_D', 0.14, wallH, 0.14, x, y0 + wallH / 2, -d / 2 - 0.02);
  }
  _box(B, 'WOOD_D', w + 0.24, 0.16, 0.18, 0, yh - 0.08, d / 2 + 0.02);     // kamoi
  _box(B, 'WOOD_D', w + 0.24, 0.12, 0.14, 0, y0 + 1.55, d / 2 + 0.03);     // nageshi rail
  _box(B, 'WOOD_D', w + 0.24, 0.2, 0.2, 0, yh + 0.02, -d / 2 - 0.02);
  // beam ends protruding under eaves (joinery readability)
  for (let c = 0; c <= cols; c++) {
    const x = -w / 2 + colW * c;
    _box(B, 'WOOD_D', 0.12, 0.12, 0.5, x, yh + 0.18, d / 2 + 0.25);
  }
  // bracket blocks under eaves
  for (let c = 0; c < cols; c++) {
    const x = -w / 2 + colW * (c + 0.5);
    _box(B, 'WOOD_D', 0.22, 0.16, 0.3, x, yh + 0.32, d / 2 + 0.32);
  }
  // REMASTERED-A: rain chains (kusari-doi) — OPT-IN via p.chains (hero street
  // only). Eave water gets a visible path to the ground instead of vanishing.
  // Own R2 stream so the legacy R() sequence (tiles, layout) is bit-identical.
  // Light torus (4x6 = 48 tris/link, diamond section invisible at 5m+):
  // ~4k tris per chained house. IRNNC bucket = merged with castShadow=false
  // (chains hang under eaves; their shadows are invisible, the pass cost isn't).
  if (p.chains === true) {
    const R2 = srand((p.seed ?? 7) * 7919 + 13);
    for (const sx of [1, -1]) {
      const chX = sx * (w / 2 - 0.35), chZ = d / 2 + 0.5;
      const topY = yh + 0.42, botY = 0.32;
      const nL = Math.max(8, Math.floor((topY - botY) / 0.09));
      for (let i = 0; i <= nL; i++) {
        const ly = topY - (topY - botY) * (i / nL);
        const jx = (R2() - 0.5) * 0.016, jz = (R2() - 0.5) * 0.016;
        const t = new THREE.TorusGeometry(0.035, 0.008, 4, 6);
        if (i % 2) _geo(B, 'IRNNC', t, chX + jx, ly, chZ + jz, 0, Math.PI / 2, 0);
        else _geo(B, 'IRNNC', t, chX + jx, ly, chZ + jz, 0, 0, 0);
      }
      _box(B, 'STONE', 0.34, 0.12, 0.34, chX, 0.06, chZ, R2() * 0.2); // drain stone
    }
  }

  const glowMats = [];
  const sliders = []; // REMASTERED-D: door panels are real sliding leaves (§16)
  // ---- windows / doors (individual meshes: paper glow controllable per house) ----
  const winGroup = new THREE.Group();
  for (let c = 0; c < cols; c++) {
    const cx = -w / 2 + colW * (c + 0.5);
    const kind = winL[c % winL.length];
    const isDoorCol = (p.doorSide ?? 0) !== 0 && ((p.doorSide < 0 && c === 0) || (p.doorSide > 0 && c === cols - 1));
    const sill = y0 + 0.55, head = y0 + wallH - 0.75, ww = colW - 0.44, wh = head - sill;
    if (isDoorCol) {
      // sliding door: frame + 2 panels + pulls
      const frame = new THREE.Mesh(new THREE.BoxGeometry(ww + 0.12, 2.15, 0.1), Mwood());
      frame.position.set(cx, y0 + 1.075, d / 2 + 0.02); winGroup.add(frame);
      const dp = new THREE.Mesh(new THREE.BoxGeometry(ww / 2 - 0.03, 2.0, 0.05),
        mat('woodAged', MwoodA)); dp.position.set(cx - ww / 4, y0 + 1.0, d / 2 + 0.06); winGroup.add(dp);
      const dp2 = dp.clone(); dp2.position.x = cx + ww / 4; winGroup.add(dp2);
      // slide into wall pockets (local X — correct under any group rotation)
      sliders.push(
        { node: dp, open: cx - ww / 4 - (ww / 2 - 0.02) },
        { node: dp2, open: cx + ww / 4 + (ww / 2 - 0.02) },
      );
      const pullG = new THREE.CylinderGeometry(0.02, 0.02, 0.16, 6);
      for (const px of [cx - 0.08, cx + 0.08]) {
        const pull = new THREE.Mesh(pullG, Miron()); pull.position.set(px, y0 + 1.0, d / 2 + 0.1); winGroup.add(pull);
      }
      if (isShop) { // noren split curtain above door + sign board
        const norenM = new THREE.Mesh(new THREE.BoxGeometry(ww, 0.5, 0.03),
          mat('noren', () => new THREE.MeshStandardMaterial({ color: 0x2c3e63, roughness: 0.9 })));
        norenM.position.set(cx, y0 + 2.35, d / 2 + 0.12); norenM.castShadow = true; winGroup.add(norenM);
      }
      continue;
    }
    if (kind === 0) continue;
    // frame
    const fr = new THREE.Mesh(new THREE.BoxGeometry(ww + 0.1, wh + 0.1, 0.09), Mwood());
    fr.position.set(cx, (sill + head) / 2, d / 2 + 0.01); winGroup.add(fr);
    if (kind === 1) { // shoji: emissive-capable paper + THICK lattice
      const pm = new THREE.MeshStandardMaterial({ color: 0xf3ecd9, roughness: 0.9, emissive: 0xffc873, emissiveIntensity: 0 });
      glowMats.push(pm);
      const paper = new THREE.Mesh(new THREE.PlaneGeometry(ww, wh), pm);
      // +0.072: clear of the frame face (+0.055) AND the lattice-bar backs
      // (+0.065). The old +0.065 sat exactly coplanar with every bar back.
      paper.position.set(cx, (sill + head) / 2, d / 2 + 0.072); winGroup.add(paper);
      const latM = Mwood();
      const vBars = 4, hBars = 3;
      for (let i = 1; i < vBars; i++) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.045, wh, 0.03), latM);
        b.position.set(cx - ww / 2 + (ww * i) / vBars, (sill + head) / 2, d / 2 + 0.08); winGroup.add(b);
      }
      for (let i = 1; i < hBars; i++) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(ww, 0.045, 0.03), latM);
        b.position.set(cx, sill + (wh * i) / hBars, d / 2 + 0.08); winGroup.add(b);
      }
    } else { // lattice + dark glass behind
      // +0.068: 13mm proud of the solid frame face (+0.055, was exactly
      // coplanar and fighting it), nested inside the lattice-bar depth.
      const gl = new THREE.Mesh(new THREE.PlaneGeometry(ww, wh), Mglass());
      gl.position.set(cx, (sill + head) / 2, d / 2 + 0.068); winGroup.add(gl);
      const latM = Mwood();
      for (let i = 0; i <= 5; i++) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.05, wh, 0.04), latM);
        b.position.set(cx - ww / 2 + (ww * i) / 5, (sill + head) / 2, d / 2 + 0.075); winGroup.add(b);
      }
      const h = new THREE.Mesh(new THREE.BoxGeometry(ww, 0.06, 0.04), latM);
      h.position.set(cx, (sill + head) / 2, d / 2 + 0.075); winGroup.add(h);
    }
  }
  winGroup.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = true; } });
  g.add(winGroup);

  // ---- engawa veranda ----
  if (engD > 0) {
    _box(B, 'WOOD', w * 0.95, 0.12, engD, 0, y0 + 0.12, d / 2 + engD / 2 + 0.05);
    for (let i = 0; i <= Math.round((w * 0.95) / 1.1); i++) {
      const x = (-w * 0.95) / 2 + ((w * 0.95) * i) / Math.round((w * 0.95) / 1.1);
      _box(B, 'STONE', 0.3, 0.3, 0.3, x, 0.1, d / 2 + engD + 0.02);
    }
    // railing posts + rail
    for (let i = 0; i <= 6; i++) {
      const x = (-w * 0.9) / 2 + ((w * 0.9) * i) / 6;
      _box(B, 'WOOD_D', 0.09, 0.7, 0.09, x, y0 + 0.5, d / 2 + engD);
    }
    _box(B, 'WOOD_D', w * 0.9, 0.08, 0.1, 0, y0 + 0.85, d / 2 + engD);
  }

  // ---- interior depth core (visible through openings from all sides, no hollow shell) ----
  {
    const inG = new THREE.Group();
    const floor = new THREE.Mesh(new THREE.BoxGeometry(w - 0.4, 0.08, d - 0.4), mat('woodNew', MwoodN));
    floor.position.y = y0 + 0.04; floor.receiveShadow = true; inG.add(floor);
    const back = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.4, wallH - 0.3),
      new THREE.MeshStandardMaterial({ color: 0x9a8a70, roughness: 1 }));
    back.position.set(0, y0 + wallH / 2, -d / 2 + 0.25); inG.add(back);
    // tatami hints + low table + hanging lamp bulb (emissive at night via glowMats)
    const tat = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.03, 0.9),
      new THREE.MeshStandardMaterial({ color: 0x9aa06b, roughness: 1 }));
    tat.position.set(-0.6, y0 + 0.1, 0.3); inG.add(tat);
    const tat2 = tat.clone(); tat2.position.x = 1.2; inG.add(tat2);
    const tbl = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.32, 0.6), Mwood());
    tbl.position.set(0.2, y0 + 0.24, 0.3); inG.add(tbl);
    const bulbM = new THREE.MeshStandardMaterial({ color: 0x443322, emissive: 0xffb45e, emissiveIntensity: 0 });
    glowMats.push(bulbM);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), bulbM);
    bulb.position.set(0.2, y0 + wallH - 0.6, 0.3); inG.add(bulb);
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.7), Miron());
    cord.position.set(0.2, y0 + wallH - 0.25, 0.3); inG.add(cord);
    inG.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = true; } });
    g.add(inG);
  }

  _mergeBuckets(g, B, matFor, { shadow: true, noCast: new Set(['IRNNC']) });

  // ---- roof ----
  const roofG = new THREE.Group();
  const rise = Math.tan(pitch) * (d / 2 + 0.9);
  const roofY = yh + 0.35;
  const slopeLen = Math.hypot(d / 2 + 0.9, rise) + 0.35;
  const tileM = mat('tile', Mtile);
  const ridgeM = mat('ridge', () => new THREE.MeshStandardMaterial({ color: 0x35373d, roughness: 0.5, metalness: 0.1 }));
  const underM = new THREE.MeshStandardMaterial({ color: 0x3d3227, roughness: 0.95 }); // rich eave underside
  const tileGeoProto = new THREE.BoxGeometry(0.3, 0.07, 0.36);
  const tileXf = [];
  const slabG = [];
  for (const s of [1, -1]) {
    const slab = new THREE.BoxGeometry(w + 1.6, 0.12, slopeLen);
    // NOTE: +pitch on the +z slab (matches v1 roof.js: rotation.x = +A south).
    // The local +z end must come out LOW (eave) and local -z HIGH (ridge).
    // The previous sign (-pitch) built an inverted-V (valley at ridge, peaks at eaves).
    const cz = s * (d / 4 + 0.22), cy = roofY + rise / 2;
    slab.applyMatrix4(new THREE.Matrix4().makeRotationX(s > 0 ? pitch : -pitch));
    slab.translate(0, cy, cz);
    slabG.push(slab);
    // eave underside board
    const un = new THREE.BoxGeometry(w + 1.5, 0.04, slopeLen * 0.98);
    un.applyMatrix4(new THREE.Matrix4().makeRotationX(s > 0 ? pitch : -pitch));
    un.translate(0, cy - 0.09, cz);
    const unM = new THREE.Mesh(mergeGeometries([un], false), underM);
    unM.receiveShadow = true; roofG.add(unM);
    // tile rows
    const rows = Math.floor(slopeLen / 0.34), tcols = Math.floor((w + 1.4) / 0.32);
    for (let r = 0; r < rows; r++) for (let c = 0; c < tcols; c++) {
      const lx = -((tcols - 1) * 0.32) / 2 + c * 0.32 + (R() - 0.5) * 0.015;
      const lz = -slopeLen / 2 + 0.2 + r * 0.34;
      // local slab coords -> world: same rotation as the slab above, then translate
      const v = new THREE.Vector3(lx, 0.1 + (R() - 0.5) * 0.012, lz).applyEuler(new THREE.Euler(s > 0 ? pitch : -pitch, 0, 0));
      tileXf.push({ p: [v.x, v.y + cy, v.z + cz], ry: (R() - 0.5) * 0.03, tone: 0.80 + R() * 0.40 });
    }
  }
  const slabMesh = new THREE.Mesh(mergeGeometries(slabG, false), new THREE.MeshStandardMaterial({ color: 0x2c2c30, roughness: 0.9 }));
  slabMesh.castShadow = true; roofG.add(slabMesh);
  // ONE InstancedMesh for all tiles + per-instance tone jitter
  const tiles = new THREE.InstancedMesh(tileGeoProto, tileM.clone(), tileXf.length);
  {
    const d4 = new THREE.Object3D(); const col = new THREE.Color();
    tileXf.forEach((t, i) => {
      d4.position.set(...t.p); d4.rotation.set(0, t.ry, 0); d4.updateMatrix();
      tiles.setMatrixAt(i, d4.matrix);
      const v = t.tone * (1 - age * 0.25);
      tiles.setColorAt(i, col.setRGB(0.32 * v + 0.1, 0.34 * v + 0.1, 0.38 * v + 0.12));
    });
    tiles.instanceMatrix.needsUpdate = true;
    if (tiles.instanceColor) tiles.instanceColor.needsUpdate = true;
  }
  tiles.castShadow = true; tiles.receiveShadow = true;
  roofG.add(tiles);
  // ridge caps: half-round spine along X, dome up.
  // The shell thetaStart 0..PI is the x>=0 half; baking rotateZ(PI/2) into the
  // geometry sends axis Y->X (spine) and shell +X->+Y (dome up, opening down
  // over the ridge). This is v1 roof.js's proven recipe.
  // NOTE: the previous code applied object rotation.z=PI/2 AND rotation.y=PI/2.
  // Under Euler XYZ (M = Rx.Ry.Rz) the extra Y rotation sends the spine to Z,
  // laying every cap crosswise across the ridge like rungs. Geometry-baked
  // rotation (no object rotation at all) cannot hit that trap.
  const capGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.46, 8, 1, false, 0, Math.PI);
  capGeo.rotateZ(Math.PI / 2);
  const ridgeN = Math.ceil((w + 1.4) / 0.5);
  for (let i = 0; i < ridgeN; i++) {
    const cap = new THREE.Mesh(capGeo, ridgeM);
    cap.position.set(-(w + 1.2) / 2 + 0.25 + i * 0.5, roofY + rise + 0.02, 0);
    cap.castShadow = true;
    roofG.add(cap);
  }
  // gable infill triangles (both ends) + hip variant ends
  const triShape = new THREE.Shape();
  triShape.moveTo(-d / 2, 0); triShape.lineTo(d / 2, 0); triShape.lineTo(0, rise); triShape.closePath();
  const triG = new THREE.ExtrudeGeometry(triShape, { depth: 0.12, bevelEnabled: false });
  triG.rotateY(Math.PI / 2);
  for (const sx of [w / 2 - 0.02, -w / 2 - 0.1]) {
    const gm = new THREE.Mesh(triG, Mplas());
    gm.position.set(sx, yh + 0.3, 0); gm.castShadow = true; roofG.add(gm);
  }
  if (roofType === 'yosemune') { // simple hipped ends: rotated hip slabs
    for (const sx of [1, -1]) {
      const hip = new THREE.Mesh(new THREE.BoxGeometry(0.14, slopeLen * 0.55, (d / 2 + 0.9) * 1.02), slabMesh.material);
      hip.position.set(sx * (w / 2 + 0.55), roofY + rise * 0.45, 0);
      hip.rotation.z = sx * 0.62; hip.castShadow = true; roofG.add(hip);
    }
  }
  // REMASTERED-A: gable bargeboards (hafu trim) — the sloped edge boards that
  // finish a kirizuma roof end. Skipped for yosemune (hips cover the ends).
  // Merged to ONE mesh per house (+1 draw): no RNG, no stream impact.
  if (roofType !== 'yosemune') {
    const bbG = [];
    for (const ex of [1, -1]) for (const s of [1, -1]) {
      const b = new THREE.BoxGeometry(0.16, 0.09, slopeLen + 0.15);
      b.applyMatrix4(new THREE.Matrix4().makeRotationX(s > 0 ? pitch : -pitch));
      b.translate(ex * (w / 2 + 0.78), roofY + rise / 2 + 0.13, s * (d / 4 + 0.22));
      bbG.push(b);
    }
    const bbM = new THREE.Mesh(mergeGeometries(bbG, false), Mwood());
    bbM.castShadow = true; bbM.receiveShadow = true; roofG.add(bbM);
  }
  g.add(roofG);

  // weathering: stain band near ground (thin dark translucent box) scaled by age
  if (age > 0.15) {
    const st = new THREE.Mesh(new THREE.BoxGeometry(w + 0.05, 0.5 * age + 0.15, d + 0.05),
      new THREE.MeshStandardMaterial({ color: 0x3a352c, roughness: 1, transparent: true, opacity: 0.25 + age * 0.3, depthWrite: false }));
    st.position.y = y0 + 0.25; st.renderOrder = 2; g.add(st);
  }

  g.traverse(o => { if (o.isMesh && o.material?.isMeshStandardMaterial && _H.registerWet) _H.registerWet(o.material); });
  return { group: g, glowMats, sliders, dims: { w, d, wallH }, roofTopY: roofY + rise };
}

/** upgradeHero(heroGroup) — additive joinery/interior upgrade; never rebuilds. Safe to call twice (guarded). */
export function upgradeHero(hero, opts = {}) {
  if (!hero || hero.userData._upgraded) return hero;
  hero.userData._upgraded = true;
  const add = new THREE.Group(); add.name = 'hero_joinery_upgrade';
  const woodD = Mwood(), iron = Miron();
  const box = (w, h, d, x, y, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), woodD);
    m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; add.add(m); return m;
  };
  // foundation stone rhythm at hero base (ring, y≈0.15; hero dims ~9x7 — parametric-ish via bbox)
  const bb = new THREE.Box3().setFromObject(hero);
  const sx = bb.max.x - bb.min.x || 9, sz = bb.max.z - bb.min.z || 7;
  const cx = (bb.max.x + bb.min.x) / 2 - hero.position.x, cz = (bb.max.z + bb.min.z) / 2 - hero.position.z;
  const stoneM = Mstone();
  for (let x = -sx / 2; x <= sx / 2 + 0.01; x += 1.15) for (const z of [-sz / 2 - 0.15, sz / 2 + 0.15]) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.5), stoneM);
    s.position.set(cx + x, 0.14, cz + z); s.receiveShadow = true; s.castShadow = false; add.add(s);
  }
  // nageshi rail + bracket blocks on front face
  box(sx * 0.98, 0.12, 0.1, cx, (opts.nageshiY ?? 2.0), cz + sz / 2 + 0.08);
  for (let x = -sx / 2 + 0.8; x < sx / 2; x += 1.6) box(0.24, 0.18, 0.3, cx + x, (opts.eaveY ?? 3.35), cz + sz / 2 + 0.3);
  // REMASTERED-A: hero rain chains — one merged mesh (+1 draw, ~4k tris).
  // No RNG: strict alternation reads as hand-hung at street distance.
  // castShadow=false: chains hang under the eave, shadows invisible.
  {
    const links = [];
    const topY = (opts.eaveY ?? 3.35) + 0.4, botY = 0.3;
    const nL = Math.max(8, Math.floor((topY - botY) / 0.09));
    for (const qx of [cx - sx / 2 + 0.35, cx + sx / 2 - 0.35]) {
      const qz = cz + sz / 2 + 0.5;
      for (let i = 0; i <= nL; i++) {
        const t = new THREE.TorusGeometry(0.035, 0.008, 4, 6);
        const m = new THREE.Matrix4().makeRotationFromEuler(
          new THREE.Euler(0, i % 2 ? Math.PI / 2 : 0, 0));
        m.setPosition(qx, topY - (topY - botY) * (i / nL), qz);
        t.applyMatrix4(m); links.push(t);
      }
    }
    const chainMesh = new THREE.Mesh(mergeGeometries(links, false), iron);
    links.forEach(g => g.dispose());
    chainMesh.castShadow = false; chainMesh.receiveShadow = true; add.add(chainMesh);
  }
  // thicker shoji lattice overlays: find paper-ish planes? — instead add entry door pulls (iron)
  const pullG = new THREE.CylinderGeometry(0.025, 0.025, 0.2, 6);
  for (const dx of [-0.12, 0.12]) {
    const p = new THREE.Mesh(pullG, iron);
    p.position.set(cx + (opts.doorX ?? -2.2) + dx, 1.25, cz + sz / 2 + 0.12); add.add(p);
  }
  // interior depth bulb (warm, night-driven) hung center
  const bulbM = new THREE.MeshStandardMaterial({ color: 0x443322, emissive: 0xffb45e, emissiveIntensity: 0 });
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), bulbM);
  bulb.position.set(cx, 2.6, cz); add.add(bulb);
  hero.userData.glowMats = [...(hero.userData.glowMats || []), bulbM];
  hero.add(add);
  return hero;
}
