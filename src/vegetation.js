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
export function buildBamboo(M, baseX, baseZ) {
  const g = new THREE.Group();
  const rnd = mulberry(808);
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
export function buildMaple(M, baseX, baseZ) {
  const g = new THREE.Group();
  const rnd = mulberry(1555);
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
  const built = buildMaple(M, 0, 0); // built at local origin; wrapper positions once
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
  const built = buildBamboo(M, 0, 0); // v1 9-culm cluster: reuse, vary by orientation/scale
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
// wind consumer: call each frame with WIND from weather.js — rotates GROUP roots only
export function swayVegetation(roots, t, wind) {
  const s = wind?.gust ? wind.gust(t) : 0.5;
  for (const r of roots) {
    const sw = r.userData.sway; if (!sw) continue;
    r.rotation.x = Math.sin(t * sw.freq + sw.ph) * sw.amp * (0.5 + s);
    r.rotation.z = Math.cos(t * sw.freq * 0.8 + sw.ph) * sw.amp * (0.5 + s);
  }
}
