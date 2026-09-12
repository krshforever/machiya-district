// src/shrine.js — P2.7: forest shrine + trail torii. Small dedicated builders
// (shrine proportions differ from houses: elevated platform, stairs, railing).
// Vermillion torii, stone base, bronze fittings. Deterministic, no lights.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { heightAt, registerObjects, stableId, chunkOf } from './world.js';

function bucket(buckets, key, geo, x, y, z, ry = 0) {
  const m = new THREE.Matrix4().makeRotationY(ry);
  m.setPosition(x, y, z);
  geo.applyMatrix4(m);
  (buckets[key] ||= []).push(geo);
}

// Torii gate straddling a trail point, facing along the trail direction.
export function buildTorii(M, x, z, facingRy) {
  const g = new THREE.Group();
  g.name = 'torii';
  const y0 = heightAt(x, z);
  const wood = new THREE.MeshStandardMaterial({ color: 0x8a2a1e, roughness: 0.6 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x2a2a2e, roughness: 0.7 });
  const B = { W: [], D: [] };
  const post = (sx) => {
    const p = new THREE.CylinderGeometry(0.14, 0.17, 3.0, 10);
    p.translate(sx * 1.1, 1.5, 0);
    B.W.push(p);
    const foot = new THREE.CylinderGeometry(0.22, 0.26, 0.3, 10);
    foot.translate(sx * 1.1, 0.15, 0);
    B.D.push(foot);
  };
  post(-1); post(1);
  const top = new THREE.BoxGeometry(3.4, 0.22, 0.3);
  top.translate(0, 3.1, 0); B.W.push(top);
  const cap = new THREE.BoxGeometry(3.7, 0.12, 0.42);
  cap.translate(0, 3.28, 0); B.D.push(cap);
  const tie = new THREE.BoxGeometry(2.4, 0.16, 0.16);
  tie.translate(0, 2.55, 0); B.W.push(tie);
  const center = new THREE.BoxGeometry(0.14, 0.6, 0.14);
  center.translate(0, 2.85, 0); B.W.push(center);
  for (const [k, mat] of [['W', wood], ['D', dark]]) {
    if (!B[k].length) continue;
    const mesh = new THREE.Mesh(mergeGeometries(B[k], false), mat);
    mesh.castShadow = true; mesh.receiveShadow = true; g.add(mesh);
  }
  g.position.set(x, y0, z);
  g.rotation.y = facingRy;
  const [tx, tz] = [chunkOf(x, z)[0], chunkOf(x, z)[1]];
  registerObjects(tx, tz, [{ id: stableId('torii', tx, tz, 0), type: 'torii', x, z, y: y0, data: {} }]);
  return { group: g };
}

// Small forest shrine: stone platform + stairs + railing + honden (reuse-free,
// purpose-built proportions). Faces the approach direction.
export function buildShrine(M, x, z, facingRy) {
  const g = new THREE.Group();
  g.name = 'shrine';
  const y0 = heightAt(x, z);
  const stone = new THREE.MeshStandardMaterial({ color: 0x8b8b86, roughness: 0.95 });
  const wood = new THREE.MeshStandardMaterial({ color: 0x4a3a28, roughness: 0.85 });
  const woodD = new THREE.MeshStandardMaterial({ color: 0x33291d, roughness: 0.9 });
  const B = { S: [], W: [], D: [] };
  // platform 5x0.6x4 + front stairs (3 steps toward facing)
  const plat = new THREE.BoxGeometry(5, 0.6, 4);
  plat.translate(0, 0.3, 0); B.S.push(plat);
  for (let i = 0; i < 3; i++) {
    const st = new THREE.BoxGeometry(1.6, 0.18, 0.5);
    st.translate(0, 0.09 + i * 0.18, 2.0 + 0.25 + (2 - i) * 0.42);
    B.S.push(st);
  }
  // 4 pillars + honden box + kirizuma-ish cap roof (two slabs + ridge)
  for (const [sx, sz] of [[-1.5, -1], [1.5, -1], [-1.5, 1], [1.5, 1]]) {
    const p = new THREE.BoxGeometry(0.18, 2.2, 0.18);
    p.translate(sx, 0.6 + 1.1, sz); B.W.push(p);
  }
  const hall = new THREE.BoxGeometry(3.6, 1.5, 2.6);
  hall.translate(0, 0.6 + 1.35, 0); B.W.push(hall);
  const door = new THREE.BoxGeometry(0.7, 1.1, 0.06);
  door.translate(0, 0.6 + 0.85, 1.32); B.D.push(door);
  for (const s of [1, -1]) {
    const slab = new THREE.BoxGeometry(4.6, 0.1, 2.2);
    const m = new THREE.Matrix4().makeRotationX(s > 0 ? 0.62 : -0.62);
    m.setPosition(0, 3.35, s * 0.85);
    slab.applyMatrix4(m); B.D.push(slab);
  }
  const ridge = new THREE.BoxGeometry(4.6, 0.14, 0.3);
  ridge.translate(0, 3.95, 0); B.D.push(ridge);
  // railing posts around platform (skip stair gap at front center)
  for (let i = 0; i <= 10; i++) {
    const t = i / 10, px = -2.4 + t * 4.8;
    for (const sz of [-1.9, 1.9]) {
      if (sz > 0 && Math.abs(px) < 1.1) continue; // stair gap
      const post = new THREE.BoxGeometry(0.09, 0.7, 0.09);
      post.translate(px, 0.6 + 0.35, sz); B.D.push(post);
    }
  }
  const railF = new THREE.BoxGeometry(4.9, 0.07, 0.08);
  railF.translate(0, 0.6 + 0.68, -1.9); B.D.push(railF);
  const matFor = (k) => (k === 'S' ? stone : k === 'W' ? wood : woodD);
  for (const k of Object.keys(B)) {
    if (!B[k].length) continue;
    const mesh = new THREE.Mesh(mergeGeometries(B[k], false), matFor(k));
    mesh.castShadow = true; mesh.receiveShadow = true; g.add(mesh);
  }
  // offering box + bronze fittings
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.4), woodD);
  box.position.set(0, 0.85, 1.7); box.castShadow = true; g.add(box);
  g.position.set(x, y0, z);
  g.rotation.y = facingRy;
  const [ccx, ccz] = chunkOf(x, z);
  registerObjects(ccx, ccz, [{ id: stableId('shrine', ccx, ccz, 0), type: 'shrine', x, z, y: y0, data: {} }]);
  return { group: g };
}
