// src/settlement.js — P2.6: riverside hamlet + terraced rice paddies.
// Hamlet houses reuse generateHouse (sparse windows = cheap); paddies are
// leveled water + bunds + instanced rice rows on world.js terraces.
// Everything registered with stable IDs. Deterministic. No new lights.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { heightAt, fieldFlats, registerObjects, stableId, chunkOf } from './world.js';
import { generateHouse, setSharedM } from './houses.js';
import { roadDist } from './roads.js';

const HAMLET = [
  { name: 'hamletA', cx: -27, cz: 34, seed: 201, w: 6, d: 5, wallH: 2.9, roofType: 'kirizuma', pitch: 30, facadeCols: 3, doorSide: -1, engawa: 0.8, woodTone: 0.3, age: 0.7, winLayout: [1, 0, 2] },
  { name: 'hamletB', cx: 13, cz: 24, seed: 202, w: 6, d: 5.5, wallH: 3.0, roofType: 'yosemune', pitch: 31, facadeCols: 3, doorSide: 1, engawa: 0, woodTone: 0.6, age: 0.4, winLayout: [2, 0, 1] },
  { name: 'hamletC', cx: 22, cz: 28, seed: 203, w: 6, d: 5, wallH: 2.8, roofType: 'kirizuma', pitch: 29, facadeCols: 3, doorSide: 1, engawa: 0.8, woodTone: 0.5, age: 0.55, winLayout: [1, 2, 0] },
];
// P2.7 farmstead: big farmhouse + tall barn east of the fields (measured flat)
const FARM = [
  { name: 'farmhouse', cx: 13, cz: 29, seed: 204, w: 7.5, d: 6, wallH: 3.2, roofType: 'kirizuma', pitch: 32, facadeCols: 4, doorSide: 1, engawa: 1.0, woodTone: 0.35, age: 0.6, winLayout: [1, 2, 1, 0] },
  { name: 'barn', cx: 20, cz: 30, seed: 205, w: 5, d: 7, wallH: 3.6, roofType: 'kirizuma', pitch: 40, facadeCols: 2, doorSide: 0, engawa: 0, woodTone: 0.25, age: 0.8, winLayout: [0, 0], glow: false },
];

export function buildSettlement(M) {
  setSharedM(M);
  const g = new THREE.Group();
  g.name = 'settlement';
  const houses = [];
  for (const [list, base] of [[HAMLET, 40], [FARM, 50]]) for (const [i, hp] of list.entries()) {
    const h = generateHouse({ ...hp });
    const y = heightAt(hp.cx, hp.cz);
    h.group.position.set(hp.cx, y, hp.cz);
    g.add(h.group);
    houses.push({ name: hp.name, group: h.group, glowMats: hp.glow === false ? [] : h.glowMats, pos: new THREE.Vector3(hp.cx, y, hp.cz) });
    const [ccx, ccz] = chunkOf(hp.cx, hp.cz);
    registerObjects(ccx, ccz, [{ id: stableId('house', ccx, ccz, base + i), type: 'house', x: hp.cx, z: hp.cz, y, data: { name: hp.name } }]);
  }
  // fences between hamlet houses (merged posts + rails, 2 draws)
  {
    const buckets = { W: [], D: [] };
    const runs = [
      { x1: -30.0, z1: 37.5, x2: -24.0, z2: 37.5 },
      { x1: 8.5, z1: 27.5, x2: 8.5, z2: 32.0 },
    ];
    for (const r of runs) {
      const len = Math.hypot(r.x2 - r.x1, r.z2 - r.z1);
      const n = Math.max(2, Math.floor(len / 1.4));
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const x = r.x1 + (r.x2 - r.x1) * t, z = r.z1 + (r.z2 - r.z1) * t;
        const post = new THREE.BoxGeometry(0.1, 1.0, 0.1);
        post.translate(x, heightAt(x, z) + 0.5, z);
        buckets.D.push(post);
      }
      const ang = Math.atan2(r.x2 - r.x1, r.z2 - r.z1) + Math.PI / 2;
      for (const dy of [0.85, 0.4]) {
        const rail = new THREE.BoxGeometry(len, 0.08, 0.06);
        const m = new THREE.Matrix4().makeRotationY(ang);
        const mx = (r.x1 + r.x2) / 2, mz = (r.z1 + r.z2) / 2;
        m.setPosition(mx, heightAt(mx, mz) + dy, mz);
        rail.applyMatrix4(m);
        buckets.D.push(rail);
      }
    }
    const woodM = new THREE.MeshStandardMaterial({ color: 0x5a4630, roughness: 0.85 });
    for (const k of Object.keys(buckets)) {
      if (!buckets[k].length) continue; // mergeGeometries throws on empty arrays
      const mesh = new THREE.Mesh(mergeGeometries(buckets[k], false), woodM);
      mesh.castShadow = true; mesh.receiveShadow = true; g.add(mesh);
    }
  }
  // rice paddies on the terraces: bunds + water + instanced rice rows
  const flats = fieldFlats();
  flats.forEach((f, fi) => {
    const inset = 0.5;
    const w = f.w - inset * 2, d = f.d - inset * 2;
    // bund walls (4 boxes merged)
    const bunds = [];
    const bh = 0.35, bt = 0.4;
    for (const [bw, bd, ox, oz] of [[w + bt * 2, bt, 0, -d / 2], [w + bt * 2, bt, 0, d / 2], [bt, d, -w / 2, 0], [bt, d, w / 2, 0]]) {
      const b = new THREE.BoxGeometry(bw, bh, bd);
      b.translate(f.cx + ox, f.y + bh / 2 - 0.05, f.cz + oz);
      bunds.push(b);
    }
    const bundMesh = new THREE.Mesh(mergeGeometries(bunds, false),
      new THREE.MeshStandardMaterial({ color: 0x6b5a40, roughness: 1 }));
    bundMesh.castShadow = true; bundMesh.receiveShadow = true; g.add(bundMesh);
    // water sheet
    const water = new THREE.Mesh(new THREE.PlaneGeometry(w, d),
      new THREE.MeshStandardMaterial({ color: 0x33484a, roughness: 0.12, metalness: 0.7, envMapIntensity: 0.9, transparent: true, opacity: 0.95 }));
    water.rotation.x = -Math.PI / 2;
    water.position.set(f.cx, f.y + 0.12, f.cz);
    water.receiveShadow = true;
    g.add(water);
    g.userData['paddyWater' + fi] = water.material;
    // rice rows: instanced crossed tufts, young green
    const blade = new THREE.PlaneGeometry(0.22, 0.4); blade.translate(0, 0.2, 0);
    const cross = mergeGeometries([blade, blade.clone().rotateY(Math.PI / 2)], false);
    const rm = new THREE.MeshStandardMaterial({ color: 0x6a8a3c, roughness: 0.9, side: THREE.DoubleSide });
    const rows = 7, per = 22;
    const inst = new THREE.InstancedMesh(cross, rm, rows * per);
    const o = new THREE.Object3D();
    let k = 0;
    for (let r = 0; r < rows; r++) for (let c = 0; c < per; c++) {
      o.position.set(f.cx - w / 2 + 0.4 + ((w - 0.8) * c) / (per - 1), f.y + 0.1, f.cz - d / 2 + 0.4 + ((d - 0.8) * (r + 0.5)) / rows);
      o.rotation.set(0, ((r *  per + c) % 8) * 0.4, 0);
      const s = 0.8 + (((r * 31 + c * 17) % 10) / 10) * 0.5;
      o.scale.set(s, s, s); o.updateMatrix();
      inst.setMatrixAt(k++, o.matrix);
    }
    inst.instanceMatrix.needsUpdate = true;
    inst.castShadow = false; inst.receiveShadow = true;
    g.add(inst);
    const [ccx, ccz] = chunkOf(f.cx, f.cz);
    registerObjects(ccx, ccz, [{ id: stableId('paddy', ccx, ccz, fi), type: 'paddy', x: f.cx, z: f.cz, y: f.y, data: {} }]);
  });
  return { group: g, houses };
}
