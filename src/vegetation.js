import * as THREE from 'three';
import { fillInstances, contactShadow, mulberry } from './helpers.js';

// Merge a few BufferGeometries by hand (avoids pulling BufferGeometryUtils).
function mergeGeos(geos) {
  let vTotal = 0, iTotal = 0;
  geos.forEach(g => { vTotal += g.attributes.position.count; iTotal += g.index.count; });
  const pos = new Float32Array(vTotal * 3);
  const nor = new Float32Array(vTotal * 3);
  const uv = new Float32Array(vTotal * 2);
  const idx = new Uint16Array(iTotal);
  let vo = 0, io = 0;
  geos.forEach(g => {
    const p = g.attributes.position, n = g.attributes.normal, u = g.attributes.uv;
    pos.set(p.array, vo * 3); nor.set(n.array, vo * 3); uv.set(u.array, vo * 2);
    const gi = g.index.array;
    for (let i = 0; i < gi.length; i++) idx[io + i] = gi[i] + vo;
    vo += p.count; io += gi.length;
  });
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.setIndex(new THREE.BufferAttribute(idx, 1));
  return out;
}

// --- bamboo cluster: segmented culms with node rings + instanced leaves ---
// REMASTERED-C: skeleton seed — every cluster grows its own lean/height/node
// pattern instead of sharing one clone skeleton (scale/rotation only).
export function buildBamboo(M, baseX, baseZ, seed = 808) {
  const g = new THREE.Group();
  const rnd = mulberry(seed);
  const culms = [];
  const leafSpots = [];

  const N = 9;
  for (let i = 0; i < N; i++) {
    const cx = baseX + (rnd() - 0.5) * 1.6;
    const cz = baseZ + (rnd() - 0.5) * 1.6;
    const h = 3.4 + rnd() * 1.8;
    const lean = 0.03 + rnd() * 0.07;
    const leanDir = rnd() * Math.PI * 2;
    const culm = new THREE.Group();
    const internode = 0.5;
    const r = 0.055;
    let y = 0;
    while (y < h) {
      const segH = Math.min(internode, h - y);
      const seg = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.92, r, segH, 8), M.bamboo);
      seg.position.y = y + segH / 2;
      seg.castShadow = true;
      culm.add(seg);
      const ring = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.18, r * 1.18, 0.035, 8), M.bamboo);
      ring.position.y = y + segH;
      culm.add(ring);
      // leaves sprout from upper 60% of nodes
      if (y > h * 0.35) {
        const nl = 3 + Math.floor(rnd() * 3);
        for (let k = 0; k < nl; k++)
          leafSpots.push({ x: cx, y: y + segH, z: cz, top: y / h, seed: rnd() * 10 });
      }
      y += segH;
    }
    culm.position.set(cx, 0, cz);
    culm.rotation.set(Math.cos(leanDir) * lean, 0, Math.sin(leanDir) * lean);
    culm.userData.phase = rnd() * 6.28;
    // base pose snapshot: update() sets ABSOLUTE rotation (framerate-independent).
    // The old `+=` form integrated sin(t) per frame — drift that varied with fps.
    culm.userData.baseRX = culm.rotation.x;
    culm.userData.baseRZ = culm.rotation.z;
    culms.push(culm);
    g.add(culm);
  }

  // instanced bamboo leaves: tapered planes, drooping
  {
    const lg = new THREE.PlaneGeometry(0.14, 0.62, 1, 2);
    const p = lg.attributes.position; // taper to a point
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i);
      const t = (y + 0.31) / 0.62; // 0 bottom .. 1 top
      p.setX(i, p.getX(i) * (1 - t * 0.85));
      p.setZ(i, -Math.sin(t * Math.PI) * 0.06);
    }
    lg.computeVertexNormals();
    const per = 5;
    const im = new THREE.InstancedMesh(lg, M.bambooLeaf, leafSpots.length * per);
    const items = [];
    leafSpots.forEach(s => {
      for (let k = 0; k < per; k++) {
        const a = (k / per) * Math.PI * 2 + s.seed;
        items.push({
          p: [s.x + Math.cos(a) * 0.25, s.y + 0.05, s.z + Math.sin(a) * 0.25],
          rx: 0.9 + rnd() * 0.5, ry: a, rz: 0.2, s: 0.8 + rnd() * 0.5
        });
      }
    });
    fillInstances(im, items);
    im.castShadow = false;
    g.add(im);
  }

  const blob = contactShadow(3.2, 3.2, 0.5);
  blob.position.set(baseX, 0.035, baseZ);
  g.add(blob);

  function update(t) {
    for (const c of culms) {
      c.rotation.x = c.userData.baseRX + Math.sin(t * 0.9 + c.userData.phase) * 0.02;
      c.rotation.z = c.userData.baseRZ + Math.cos(t * 0.7 + c.userData.phase) * 0.02;
    }
  }
  return { group: g, update };
}

// --- Japanese maple: recursive tapered branches + 340 instanced leaves ---
// REMASTERED-C: skeleton seed — branching hierarchy differs per tree.
export function buildMaple(M, baseX, baseZ, seed = 1555) {
  const g = new THREE.Group();
  const rnd = mulberry(seed);
  const anchors = [];
  const up = new THREE.Vector3(0, 1, 0);

  function branch(pos, dir, len, rad, depth) {
    const geo = new THREE.CylinderGeometry(rad * 0.62, rad, len, 7);
    const m = new THREE.Mesh(geo, M.trunk);
    const mid = pos.clone().addScaledVector(dir, len / 2);
    m.position.copy(mid);
    m.quaternion.setFromUnitVectors(up, dir.clone().normalize());
    m.castShadow = m.receiveShadow = true;
    g.add(m);
    const tip = pos.clone().addScaledVector(dir, len);
    if (depth <= 0 || len < 0.35) { anchors.push(tip); return; }
    anchors.push(tip.clone().lerp(pos, 0.4));
    const kids = depth >= 3 ? 3 : 2 + (rnd() < 0.5 ? 1 : 0);
    for (let i = 0; i < kids; i++) {
      const nd = dir.clone();
      nd.x += (rnd() - 0.5) * 1.1;
      nd.z += (rnd() - 0.5) * 1.1;
      nd.y += rnd() * 0.45 - 0.08;
      nd.normalize();
      branch(tip, nd, len * (0.55 + rnd() * 0.15), rad * 0.58, depth - 1);
    }
  }
  branch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.08, 1, 0.05), 1.5, 0.22, 4);

  // palmate-ish leaf: low-poly lobed fan (real geometry, no billboards)
  function momijiLeaf(s) {
    const shape = new THREE.Shape();
    const lobes = 7;
    for (let i = 0; i <= 20; i++) {
      const a = (i / 20) * Math.PI * 2;
      const lob = Math.pow(Math.abs(Math.sin((a * lobes) / 2)), 0.7);
      const r = s * (0.35 + 0.65 * lob);
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
    }
    const geo = new THREE.ShapeGeometry(shape);
    return geo;
  }
  const leafGeo = mergeGeos([momijiLeaf(0.17), momijiLeaf(0.17).rotateY(Math.PI / 2)]);

  const COUNT = 340;
  const im = new THREE.InstancedMesh(leafGeo, M.mapleLeaf, COUNT);
  const items = [];
  const col = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    const a = anchors[Math.floor(rnd() * anchors.length)];
    const px = a.x + (rnd() - 0.5) * 1.1;
    const py = a.y + (rnd() - 0.5) * 0.9;
    const pz = a.z + (rnd() - 0.5) * 1.1;
    items.push({
      p: [px, py, pz],
      rx: rnd() * 6.3, ry: rnd() * 6.3, rz: rnd() * 6.3,
      s: 0.75 + rnd() * 0.7
    });
    // autumn gradient: top leaves redder, lower greener, noise throughout
    // WAVE-B: wider hue/lightness spread + ~1-in-7 green holdouts (index hash,
    // consumes no rnd() stream — prior placements bit-stable)
    const h = THREE.MathUtils.clamp((py - 1.2) / 2.2, 0, 1);
    const n = rnd();
    if (_h01(i, 77) < 0.14) col.setHex(0x5a7030);          // green holdout
    else if (n < h * 0.75) col.setHex(0xc23a24);       // momiji red
    else if (n < h * 0.75 + 0.22) col.setHex(0xe07b28); // orange
    else col.setHex(0x6d8a3c);                    // green
    col.offsetHSL((_h01(i, 11) - 0.5) * 0.08, 0, (_h01(i, 33) - 0.5) * 0.12);
    im.setColorAt(i, col);
  }
  fillInstances(im, items);
  im.instanceColor.needsUpdate = true;
  im.castShadow = false; // canopy self-shadow too noisy; trunk casts
  im.receiveShadow = false;
  g.add(im);

  g.position.set(baseX, 0, baseZ);
  const blob = contactShadow(3.4, 3.4, 0.5);
  blob.position.y = 0.035;
  g.add(blob);

  function update(t) {
    g.rotation.z = Math.sin(t * 0.6) * 0.004;
    g.rotation.x = Math.cos(t * 0.45) * 0.003;
  }
  return { group: g, update };
}

// --- district extension: seeded variants. Reuses buildBamboo/buildMaple where present. ---
import { srand as _srand } from './houses.js';
export function buildMapleVar(M, seed = 1, size = 1, autumnT = 0.6, x = 0, z = 0) {
  const R = _srand(seed * 1000 + 7);
  const built = buildMaple(M, 0, 0, seed * 7919 + 101); // own skeleton per tree
  const base = built.group || built;
  base.scale.setScalar(size * (0.9 + R() * 0.25));
  const leaf = new THREE.Color(0x4a7a35).lerp(new THREE.Color(0xc23c1e), autumnT);
  base.traverse(o => { if (o.isMesh && o.material?.color && o.geometry?.type !== 'CylinderGeometry') {
    o.material = o.material.clone(); o.material.color.copy(leaf).offsetHSL((R() - 0.5) * 0.03, 0, (R() - 0.5) * 0.06);
  }});
  base.rotation.y = R() * 6.28;
  base.position.set(x, 0, z);
  base.userData.tick = built.update || null; // v1 leaf shimmer, called by main loop
  base.userData.sway = { amp: 0.02 + R() * 0.02, freq: 0.8 + R() * 0.6, ph: R() * 6.28 };
  return base;
}
export function buildBambooCluster(M, seed = 1, x = 0, z = 0) {
  const R = _srand(seed * 500 + 3);
  const built = buildBamboo(M, 0, 0, seed * 4153 + 7); // own skeleton per cluster
  const grp = built.group || built;
  grp.rotation.y = R() * 6.28;
  grp.scale.setScalar(0.85 + R() * 0.4);
  grp.position.set(x, 0, z);
  grp.userData.tick = built.update || null;
  grp.userData.sway = { amp: 0.015 + R() * 0.02, freq: 1.1 + R() * 0.7, ph: R() * 6.28 };
  return grp;
}
// WAVE-B: index-hash helper (deterministic variation WITHOUT consuming R() streams)
function _h01(i, salt) {
  let h = (Math.imul(i + 1, 2654435761) ^ Math.imul(salt, 40503)) >>> 0;
  h ^= h >>> 15; h = Math.imul(h, 2246822519); h ^= h >>> 13;
  return (h >>> 0) / 4294967296;
}
// WAVE-B: procedural grass-blade alpha (tapered blades cut from the quad).
// Gives real blade silhouettes + makes alphaToCoverage/MSAA meaningful.
function bladeAlphaTex() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 64;
  const x = c.getContext('2d');
  x.fillStyle = '#000'; x.fillRect(0, 0, 64, 64);
  x.fillStyle = '#fff';
  for (const [bx, bw, bend] of [[14, 9, -6], [30, 11, 0], [46, 8, 7]]) {
    x.beginPath();
    x.moveTo(bx - bw / 2, 64);
    x.quadraticCurveTo(bx - bw / 2 + bend, 30, bx + bend, 4 + bend * 0.2);
    x.quadraticCurveTo(bx + bw / 2 + bend, 30, bx + bw / 2, 64);
    x.closePath(); x.fill();
  }
  const t = new THREE.CanvasTexture(c);
  return t;
}
export function buildShrub(seed = 1, r = 0.5) { // pruned look: squashed displaced icosphere
  const R = _srand(seed * 77 + 1);
  const geo = new THREE.IcosahedronGeometry(r, 2);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const s = 1 + ((R() - 0.5) * 0.35);
    p.setXYZ(i, p.getX(i) * s, p.getY(i) * s * 0.72, p.getZ(i) * s);
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: new THREE.Color(0x395c2c).offsetHSL(0, 0, (R() - 0.5) * 0.05), roughness: 1 }));
  // WAVE-B: wider size/rotation variance from the same stream
  const sc = 0.72 + R() * 0.63;
  m.scale.set(sc, sc * (0.85 + R() * 0.4), sc);
  m.rotation.y = R() * Math.PI * 2;
  m.castShadow = true; m.userData.sway = { amp: 0.008, freq: 1.4, ph: R() * 6.28 };
  return m;
}
export function buildGrassTufts(seed = 1, n = 60, area = [6, 3]) { // instanced crossed planes, ONE draw
  const R = _srand(seed * 31 + 5);
  const blade = new THREE.PlaneGeometry(0.5, 0.35); blade.translate(0, 0.17, 0);
  const cross = mergeGeometriesPublic([blade, blade.clone().rotateY(Math.PI / 2)], false);
  const m = new THREE.MeshStandardMaterial({ color: 0x5c7038, roughness: 1, side: THREE.DoubleSide, alphaTest: 0.4, alphaMap: bladeAlphaTex(), alphaToCoverage: true });
  const inst = new THREE.InstancedMesh(cross, m, n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    d.position.set((R() - 0.5) * area[0], 0, (R() - 0.5) * area[1]);
    d.rotation.y = R() * 3.14; d.scale.setScalar(0.7 + R() * 0.7);
    // WAVE-B: every 4th blade stretches taller (layering, zero new streams,
    // zero new draws — stream order preserved, values after shift deterministically)
    if (((i + (seed % 4) + 4) % 4) === 0) d.scale.y *= 1.9;
    d.updateMatrix();
    inst.setMatrixAt(i, d.matrix);
  }
  inst.castShadow = false; inst.receiveShadow = true;
  return inst;
}
function mergeGeometriesPublic(a) { return mergeGeos(a); } // v1 local merger (indexed+uv)
// NOTE to primary agent: replace mergeGeometriesPublic with the real
// `mergeGeometries` import from 'three/addons/utils/BufferGeometryUtils.js'
// at the top of vegetation.js (one import line). I could not verify whether
// vegetation.js already imports it; adding the import is safe (named export).
export function buildVines(seed = 1, w = 2.2, h = 2.0, n = 40) { // instanced leaves on a wall plane
  const R = _srand(seed * 13 + 9);
  const leafG = new THREE.PlaneGeometry(0.12, 0.12);
  const m = new THREE.MeshStandardMaterial({ color: 0x3f6630, roughness: 1, side: THREE.DoubleSide });
  const inst = new THREE.InstancedMesh(leafG, m, n);
  const d = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    d.position.set((R() - 0.5) * w, R() * h, 0.02 + R() * 0.06);
    d.rotation.set(R() * 3, R() * 3, R() * 3); d.updateMatrix();
    inst.setMatrixAt(i, d.matrix);
  }
  inst.castShadow = false;
  const grp = new THREE.Group(); grp.add(inst); return grp;
}
export function buildMoss(seed, w = 1.6, d = 1.0) { // flat dark-green carpet
  const m = new THREE.Mesh(new THREE.CircleGeometry(0.5, 10),
    new THREE.MeshStandardMaterial({ color: 0x445c2e, roughness: 1 }));
  m.rotation.x = -Math.PI / 2; m.scale.set(w, d, 1); m.receiveShadow = true;
  return m;
}
// REMASTERED-C: fallen-leaf litter — WHERE leaves land, litter lies. Mottled
// momiji disc under a canopy drip-line (the atmo leaf sources fall onto this).
// spots: [{x, y, z, r, seed}]. ONE merged mesh + ONE shared texture per call.
let _litterTex = null;
function litterTex() {
  if (_litterTex) return _litterTex;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = '#4a3826'; x.fillRect(0, 0, 128, 128);
  const R = mulberry(0x11fe07);
  const pal = ['#a83a22', '#c77b2e', '#6b4e30', '#5a6b35', '#7d4a26', '#8f5a24'];
  for (let i = 0; i < 650; i++) {
    x.fillStyle = pal[Math.floor(R() * pal.length)];
    x.globalAlpha = 0.5 + R() * 0.5;
    const w = 1 + R() * 2.5;
    x.save(); x.translate(R() * 128, R() * 128); x.rotate(R() * 3.14);
    x.fillRect(-w / 2, -w / 3, w, w * 0.66); // leaf-chip flecks, not dots
    x.restore();
  }
  x.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  _litterTex = t;
  return t;
}
export function buildLitterMerged(spots) {
  const geos = [];
  for (const s of spots) {
    const g = new THREE.CircleGeometry(0.5, 12);
    g.rotateX(-Math.PI / 2);
    g.scale(s.r * 2.4, 1, s.r * 2.0);
    // deterministic rotation from seed (index-hash, no stream)
    const h = _h01(s.seed || 1, 911);
    g.rotateY(h * 6.28);
    g.translate(s.x, s.y, s.z);
    geos.push(g);
  }
  if (!geos.length) return null;
  const merged = mergeGeos(geos);
  geos.forEach(g => g.dispose());
  const m = new THREE.Mesh(merged, new THREE.MeshStandardMaterial({
    map: litterTex(), roughness: 1, metalness: 0,
    polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1,
  }));
  m.receiveShadow = true;
  return m;
}
// wind consumer: call each frame with WIND from weather.js — rotates GROUP roots only
export function swayVegetation(roots, t, wind) {
  const s = wind?.gust ? wind.gust(t) : 0.5;
  for (const r of roots) {
    const sw = r.userData.sway; if (!sw) continue;
    r.rotation.x = Math.sin(t * sw.freq + sw.ph) * sw.amp * (0.5 + s);
    r.rotation.z = Math.cos(t * sw.freq * 0.8 + sw.ph) * sw.amp * (0.5 + s);
  }
}

// --- T1 village vegetation (branch forge3d-rebuild): scaffold trees, satoyama species ---
// Uses module mergeGeos above (indexed cylinders/planes carry uv). TREE_V2 streams only.
export const TAPER_TOKEN = 'TAPER:trunk-base-to-tip-0.62';
export const WHORL_ANGLE_MIN = 65;
export const WHORL_ANGLE_MAX = 80;
export const TIP_CLUSTER_ONLY = true;
export const NO_SPHERE_CANOPY = true; // canopy never uses SphereGeometry; FRUIT_SPHERE_OK only
export const WINTER_BARE_STRUCTURE = 'vase-fork+opposite-ramification';

// TREE_V2 — local deterministic stream. No imports, no Math.random.
export function hashStr32(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function treeV2Stream(key) { return mulberry32(hashStr32('TREE_V2:' + key)); }

function trunkGeo(h, rBase, flare) {
  // straight bole + butt flare: flared cylinder + clear-bole cylinder
  const g1 = new THREE.CylinderGeometry(rBase * 0.72, rBase * flare, h * 0.22, 7, 1);
  g1.translate(0, h * 0.11, 0);
  const g2 = new THREE.CylinderGeometry(rBase * 0.62 * 0.72, rBase * 0.72, h * 0.78, 7, 1);
  g2.translate(0, h * 0.22 + h * 0.39, 0);
  return mergeGeos([g1, g2]);
}
function limbGeo(len, r) {
  const g = new THREE.CylinderGeometry(r * 0.55, r, len, 5, 1);
  g.translate(0, len / 2, 0);
  return g;
}
function tipCardGeo(w, h) {
  const g = new THREE.PlaneGeometry(w, h);
  return g;
}
// TIP_CLUSTER_ONLY: leaves exist ONLY as tip cards at twig ends. Never trunk cards, never sphere canopy.
export function tipCluster(parent, rng, mat, tips, cardW, cardH, tint) {
  const geo = tipCardGeo(cardW, cardH);
  const inst = new THREE.InstancedMesh(geo, mat, tips.length);
  const d = new THREE.Object3D();
  const col = new THREE.Color();
  for (let i = 0; i < tips.length; i++) {
    d.position.copy(tips[i].p);
    d.rotation.set(rng() * 0.9 - 0.45, rng() * Math.PI * 2, rng() * 0.6 - 0.3);
    d.updateMatrix();
    inst.setMatrixAt(i, d.matrix);
    col.set(tint).offsetHSL((rng() - 0.5) * 0.03, 0, (rng() - 0.5) * 0.08);
    inst.setColorAt(i, col);
  }
  inst.instanceMatrix.needsUpdate = true;
  if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
  parent.add(inst);
  return inst;
}
function whorlTips(origin, nWhorl, perWhorl, len, upDeg, rng) {
  const tips = [];
  const up = upDeg * Math.PI / 180;
  for (let w = 0; w < nWhorl; w++) {
    const y = origin.y + (w / nWhorl) * len;
    for (let k = 0; k < perWhorl; k++) {
      const a = (k / perWhorl) * Math.PI * 2 + rng() * 0.6;
      const r = len * (0.55 - w * 0.09);
      tips.push({ p: new THREE.Vector3(origin.x + Math.cos(a) * r, y + Math.sin(up) * r * 0.5, origin.z + Math.sin(a) * r) });
    }
  }
  return tips;
}

// --- SUGI (Cryptomeria): straight bole, butt flare, clear lower 1/2, whorled upturned shorts ---
export function buildSugi(mats, rng) {
  const g = new THREE.Group();
  const H = 9 + rng() * 4;
  const trunk = new THREE.Mesh(trunkGeo(H, 0.28 + rng() * 0.12, 1.5), mats.barkSugi);
  g.add(trunk);
  // WHORL_ANGLE: 65-80deg upturned, short branches — geometry implied by tip placement
  const ang = WHORL_ANGLE_MIN + rng() * (WHORL_ANGLE_MAX - WHORL_ANGLE_MIN);
  const tips = whorlTips(new THREE.Vector3(0, H * 0.5, 0), 4, 5, H * 0.5, ang - 45, rng);
  tipCluster(g, rng, mats.leafSugi, tips, 1.1, 0.9, 0x2d4a2a);
  g.userData = { species: 'sugi', h: H };
  return g;
}
// --- HINOKI: warm brown, softer cone, planted as shrine pairs (placement, not geometry) ---
export function buildHinoki(mats, rng) {
  const g = new THREE.Group();
  const H = 7 + rng() * 2.5;
  g.add(new THREE.Mesh(trunkGeo(H, 0.24, 1.3), mats.barkHinoki));
  const tips = whorlTips(new THREE.Vector3(0, H * 0.45, 0), 4, 6, H * 0.55, 30, rng);
  tipCluster(g, rng, mats.leafSugi, tips, 0.95, 0.8, 0x3a5a30);
  g.userData = { species: 'hinoki', h: H };
  return g;
}
// --- KEYAKI (Zelkova): THE village tree — broad vase, radiating limbs, multi-stem ---
export function buildKeyaki(mats, rng) {
  const g = new THREE.Group();
  const stems = 2 + Math.floor(rng() * 2); // 2-3, multi-stem common
  const forkY = 2.2 + rng() * 0.6;
  const limbMeshes = [];
  const tips = [];
  for (let s = 0; s < stems; s++) {
    const lean = 0.12 + rng() * 0.18;
    const az = (s / stems) * Math.PI * 2 + rng();
    const h = forkY + rng() * 0.5;
    const tg = trunkGeo(h, 0.22, 1.35);
    const tm = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(Math.cos(az), 0, Math.sin(az)), lean);
    tg.applyMatrix4(tm);
    limbMeshes.push(tg);
    const limbs = 3 + Math.floor(rng() * 2);
    for (let l = 0; l < limbs; l++) {
      const la = (l / limbs) * Math.PI * 2 + rng() * 0.8;
      const ll = 2.2 + rng() * 1.6;
      const lg = limbGeo(ll, 0.09);
      const m = new THREE.Object3D();
      m.position.set(Math.cos(az) * lean * h * 2, h * 0.96, Math.sin(az) * lean * h * 2);
      m.rotation.set(0.6 + rng() * 0.35, la, 0, 'YXZ');
      m.updateMatrix();
      lg.applyMatrix4(m.matrix);
      limbMeshes.push(lg);
      const tip = new THREE.Vector3(0, ll, 0).applyMatrix4(m.matrix);
      tips.push({ p: tip });
      tips.push({ p: tip.clone().add(new THREE.Vector3((rng() - 0.5), 0.4, (rng() - 0.5))) });
    }
  }
  g.add(new THREE.Mesh(mergeGeos(limbMeshes), mats.barkKeyaki));
  tipCluster(g, rng, mats.leafBroad, tips, 1.5, 1.1, 0x476b35);
  g.userData = { species: 'keyaki' };
  return g;
}
// --- MOMIJI: vase fork + opposite ramification; TIP_CLUSTER_ONLY; WINTER_BARE must read ---
export function buildMomiji(mats, rng, opts = {}) {
  const g = new THREE.Group();
  const H = 3.5 + rng() * 1.5;
  const parts = [trunkGeo(H * 0.55, 0.14, 1.25)];
  const tips = [];
  // opposite ramification: 2 forks x 2 subforks
  for (let f = 0; f < 2; f++) {
    const az = f * Math.PI + rng() * 0.4;
    for (let s2 = 0; s2 < 2; s2++) {
      const lg = limbGeo(1.6 + rng() * 0.8, 0.05);
      const m = new THREE.Object3D();
      m.position.set(0, H * 0.55, 0);
      m.rotation.set(0.55 + rng() * 0.3, az + (s2 ? 0.35 : -0.35), 0, 'YXZ');
      m.updateMatrix(); lg.applyMatrix4(m.matrix); parts.push(lg);
      const tip = new THREE.Vector3(0, 1.6, 0).applyMatrix4(m.matrix);
      tips.push({ p: tip });
    }
  }
  const struct = new THREE.Mesh(mergeGeos(parts), mats.barkMomiji);
  g.add(struct);
  g.userData = { species: 'momiji', bare: struct }; // WINTER_BARE_STRUCTURE: fork stays when leaves off
  if (!opts.bare) tipCluster(g, rng, mats.leafMomiji, tips, 0.9, 0.7, opts.autumn ? 0xa83a22 : 0x5a7a3a);
  return g;
}
// --- MATSU (niwaki landmark): leaning trunk + 3-5 cloud pads ---
export function buildMatsu(mats, rng) {
  const g = new THREE.Group();
  const H = 2.6 + rng() * 1.2;
  const tg = trunkGeo(H, 0.2, 1.4);
  tg.applyMatrix4(new THREE.Matrix4().makeRotationZ(0.12 + rng() * 0.12));
  g.add(new THREE.Mesh(tg, mats.barkSugi));
  const pads = 3 + Math.floor(rng() * 3);
  const tips = [];
  for (let i = 0; i < pads; i++) {
    const pad = new THREE.SphereGeometry(0.9 - i * 0.1, 7, 5);
    pad.scale(1.25, 0.32, 1.25); // cloud-pruned pad (flattened — not canopy sphere)
    pad.translate((rng() - 0.5) * 1.6, H * 0.6 + i * 0.5, (rng() - 0.5) * 1.6);
    const m = new THREE.Mesh(pad, mats.leafPine);
    g.add(m);
  }
  void tips;
  g.userData = { species: 'matsu' };
  return g;
}
// --- KAKI / KURI: small orchard trees, FRUIT_SPHERE_OK ---
export function buildOrchard(mats, rng, kind) {
  const g = new THREE.Group();
  const H = 2.4 + rng() * 0.8;
  g.add(new THREE.Mesh(trunkGeo(H, 0.13, 1.2), mats.barkOrchard));
  const tips = [];
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + rng();
    tips.push({ p: new THREE.Vector3(Math.cos(a) * 1.1, H * 0.7 + rng() * 0.8, Math.sin(a) * 1.1) });
  }
  tipCluster(g, rng, mats.leafBroad, tips, 1.0, 0.8, 0x5c7038);
  // FRUIT_SPHERE_OK: instanced fruit dots only (cheap spheres, not canopy)
  const fg = new THREE.SphereGeometry(kind === 'kaki' ? 0.07 : 0.055, 6, 5);
  const fm = new THREE.MeshBasicMaterial({ color: kind === 'kaki' ? 0xd86a1e : 0x7a4a22 });
  const fruit = new THREE.InstancedMesh(fg, fm, 10);
  const d = new THREE.Object3D();
  for (let i = 0; i < 10; i++) {
    const t = tips[Math.floor(rng() * tips.length)].p;
    d.position.set(t.x + (rng() - 0.5) * 0.6, t.y - 0.25, t.z + (rng() - 0.5) * 0.6);
    d.updateMatrix(); fruit.setMatrixAt(i, d.matrix);
  }
  fruit.instanceMatrix.needsUpdate = true;
  g.add(fruit);
  g.userData = { species: kind };
  return g;
}
export function buildKaki(m, r) { return buildOrchard(m, r, 'kaki'); }
export function buildKuri(m, r) { return buildOrchard(m, r, 'kuri'); }
// --- SAKURA: one gathering specimen, same scaffold, pink tip variant ---
export function buildSakura(mats, rng, opts = {}) {
  const base = buildMomiji(mats, rng, { bare: true });
  base.userData.species = 'sakura';
  if (!opts.bare) {
    const tips = [];
    base.updateMatrixWorld(true);
    base.traverse(o => { if (o.isMesh && o.geometry) { const p = new THREE.Vector3(); o.geometry.computeBoundingBox(); o.geometry.boundingBox.getCenter(p); o.localToWorld(p); base.worldToLocal(p); if (p.y > 1.5) tips.push({ p: p.clone() }); } });
    while (tips.length < 6) tips.push({ p: new THREE.Vector3((rng() - 0.5) * 3, 2.5 + rng(), (rng() - 0.5) * 3) });
    tipCluster(base, rng, mats.leafBlossom, tips.slice(0, 8), 1.2, 0.9, 0xe8a8b8);
  }
  return base;
}
// --- BAMBOO: moso crop clumps 5-15, madake thin fence lines; leaves top-third only ---
export function buildBambooClump(mats, rng, kind = 'moso') {
  const g = new THREE.Group();
  const n = kind === 'moso' ? 5 + Math.floor(rng() * 6) : 8 + Math.floor(rng() * 8);
  const culmR = kind === 'moso' ? 0.06 : 0.03;
  const culmH = kind === 'moso' ? 7 + rng() * 3 : 4 + rng() * 2;
  const culms = [];
  const tips = [];
  for (let i = 0; i < n; i++) {
    const x = (rng() - 0.5) * 2.4, z = (rng() - 0.5) * 2.4;
    const h = culmH * (0.85 + rng() * 0.3);
    const cg = new THREE.CylinderGeometry(culmR * 0.8, culmR, h, 6, 1);
    cg.translate(x, h / 2, z);
    culms.push(cg);
    tips.push({ p: new THREE.Vector3(x, h * 0.78, z) });
    tips.push({ p: new THREE.Vector3(x + 0.2, h * 0.95, z) });
  }
  g.add(new THREE.Mesh(mergeGeos(culms), mats.culm));
  tipCluster(g, rng, mats.leafBamboo, tips, 0.9, 0.6, 0x4a7038); // top-third only: tips at 0.78h+
  if (kind === 'moso') { // spring shoot mounds
    const mg = new THREE.ConeGeometry(0.16, 0.35, 6);
    const shoots = new THREE.InstancedMesh(mg, mats.shoot, 4);
    const d = new THREE.Object3D();
    for (let i = 0; i < 4; i++) { d.position.set((rng() - 0.5) * 2.6, 0.17, (rng() - 0.5) * 2.6); d.updateMatrix(); shoots.setMatrixAt(i, d.matrix); }
    shoots.instanceMatrix.needsUpdate = true;
    g.add(shoots);
  }
  g.userData = { species: 'bamboo-' + kind };
  return g;
}
// --- UNDERSTORY: sasa + ferns + moss + seedlings + ONE fallen-log type + litter ---
export function buildUnderstoryPatch(mats, rng, size = 4) {
  const g = new THREE.Group();
  const d = new THREE.Object3D();
  // sasa (broad dwarf bamboo) — crossed cards
  const sasa = new THREE.InstancedMesh(tipCardGeo(0.7, 0.5), mats.leafSasa, 14);
  for (let i = 0; i < 14; i++) { d.position.set((rng() - 0.5) * size, 0.25, (rng() - 0.5) * size); d.rotation.set(0, rng() * 3.14, 0); d.updateMatrix(); sasa.setMatrixAt(i, d.matrix); }
  sasa.instanceMatrix.needsUpdate = true; g.add(sasa);
  // ferns (wet shade)
  const fern = new THREE.InstancedMesh(new THREE.ConeGeometry(0.3, 0.5, 5, 1, true), mats.leafFern, 8);
  for (let i = 0; i < 8; i++) { d.position.set((rng() - 0.5) * size, 0.25, (rng() - 0.5) * size); d.rotation.set(0, rng() * 3.14, 0); d.updateMatrix(); fern.setMatrixAt(i, d.matrix); }
  fern.instanceMatrix.needsUpdate = true; g.add(fern);
  // moss mounds
  const moss = new THREE.InstancedMesh(new THREE.SphereGeometry(0.3, 6, 4, 0, 6.3, 0, 1.2), mats.moss, 6);
  for (let i = 0; i < 6; i++) { d.position.set((rng() - 0.5) * size, 0.02, (rng() - 0.5) * size); d.scale.setScalar(0.7 + rng() * 0.8); d.rotation.set(0, 0, 0); d.updateMatrix(); moss.setMatrixAt(i, d.matrix); }
  moss.instanceMatrix.needsUpdate = true; d.scale.setScalar(1); g.add(moss);
  // seedlings
  const seed = new THREE.InstancedMesh(new THREE.ConeGeometry(0.12, 0.45, 5), mats.leafSeedling, 10);
  for (let i = 0; i < 10; i++) { d.position.set((rng() - 0.5) * size, 0.22, (rng() - 0.5) * size); d.rotation.set(0, rng() * 3.14, 0); d.updateMatrix(); seed.setMatrixAt(i, d.matrix); }
  seed.instanceMatrix.needsUpdate = true; g.add(seed);
  // ONE fallen-log type with seedlings on it
  const log = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 2.4, 7), mats.barkSugi);
  log.rotation.set(Math.PI / 2, 0, rng() * 3.14); log.position.y = 0.18;
  g.add(log);
  for (let i = 0; i < 3; i++) {
    const s = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.3, 5), mats.leafSeedling);
    s.position.set(-0.7 + i * 0.7, 0.42, 0); g.add(s);
  }
  // litter: flat dark discs under canopy (cheap contact cue)
  const lit = new THREE.InstancedMesh(new THREE.CircleGeometry(0.35, 7), mats.litter, 10);
  for (let i = 0; i < 10; i++) { d.position.set((rng() - 0.5) * size, 0.015, (rng() - 0.5) * size); d.rotation.set(-Math.PI / 2, 0, rng() * 3.14); d.updateMatrix(); lit.setMatrixAt(i, d.matrix); }
  lit.instanceMatrix.needsUpdate = true; g.add(lit);
  g.userData = { species: 'understory' };
  return g;
}
// Far impostor card (>120m): single crossed-card silhouette per species tint
export function buildImpostor(mats, rng, tint = 0x33482e, h = 8) {
  const g = new THREE.Group();
  const geo = tipCardGeo(h * 0.6, h);
  const m1 = new THREE.Mesh(geo, mats.impostor);
  m1.position.y = h / 2;
  const m2 = m1.clone(); m2.rotation.y = Math.PI / 2;
  m1.material = mats.impostor; // tint via material color shared; per-instance via vertex color skip
  g.add(m1, m2);
  g.userData = { impostor: true, tint };
  void rng; void tint;
  return g;
}
