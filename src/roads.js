// src/roads.js — P2.5: hand-designed road network draped on terrain.
// Roads are DATA first (polylines with type/width), ribbons second, queries third.
// Ecology + future settlement read roadDist(); nothing places on carriageways.
import * as THREE from 'three';
import { heightAt, registerObjects, stableId, chunkOf } from './world.js';

function hash1(i, salt) {
  let h = (Math.imul(i + 1, 2654435761) ^ Math.imul(salt, 40503)) >>> 0;
  h ^= h >>> 15; h = Math.imul(h, 2246822519); h ^= h >>> 13;
  return (h >>> 0) / 4294967296;
}

// Waypoints: [x, z] — designed, not random (roads have reasons).
// R1: district south gate -> river bridge -> south fields.
// R2: west forest trail loop. R3: east path toward the mountains.
const ROADS = [
  { id: 'r1', kind: 'road', width: 2.5, pts: [[0, 24], [1, 29], [2, 32], [2, 38], [0, 43], [-4, 48]] },
  { id: 'r2', kind: 'trail', width: 1.2, pts: [[-24, 10], [-36, 2], [-48, -12], [-52, -30], [-44, -46]] },
  { id: 'r3', kind: 'trail', width: 1.2, pts: [[24, 5], [38, 12], [52, 26], [62, 44]] },
];

function resample(pts, step = 2) {
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, z1] = pts[i], [x2, z2] = pts[i + 1];
    const len = Math.hypot(x2 - x1, z2 - z1);
    const n = Math.max(1, Math.round(len / step));
    for (let j = 0; j < n; j++) out.push([x1 + ((x2 - x1) * j) / n, z1 + ((z2 - z1) * j) / n]);
  }
  out.push(pts[pts.length - 1].slice());
  return out;
}

const _samples = ROADS.map((r) => ({ ...r, path: resample(r.pts) }));

// distance from (x,z) to nearest road centerline (build-time queries; linear scan is fine)
export function roadDist(x, z) {
  let best = 1e9;
  for (const r of _samples) {
    for (const [px, pz] of r.path) {
      const d = Math.hypot(x - px, z - pz);
      if (d < best) best = d;
    }
  }
  return best;
}

export function buildRoads(M) {
  const g = new THREE.Group();
  g.name = 'roads';
  const dirt = new THREE.MeshStandardMaterial({ color: 0x6e5a42, roughness: 0.98 });
  const trail = new THREE.MeshStandardMaterial({ color: 0x655637, roughness: 1 });
  let slot = 0;
  for (const r of _samples) {
    const hw = r.width / 2;
    const verts = [], idx = [];
    r.path.forEach(([x, z], i) => {
      const nxt = r.path[Math.min(i + 1, r.path.length - 1)];
      const prv = r.path[Math.max(i - 1, 0)];
      let dx = nxt[0] - prv[0], dz = nxt[1] - prv[1];
      const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
      const nx = -dz, nz = dx; // left normal
      const jx = (hash1(i, 7) - 0.5) * 0.3; // worn edges, deterministic
      const wL = hw + jx, wR = hw - jx;
      const yL = heightAt(x + nx * wL, z + nz * wL) + 0.07;
      const yR = heightAt(x - nx * wL, z - nz * wL) + 0.07;
      const yc = heightAt(x, z) + 0.07;
      verts.push(x + nx * wL, yL, z + nz * wL, x, yc, z, x - nx * wL, yR, z - nz * wL);
      if (i < r.path.length - 1) {
        const a = i * 3;
        idx.push(a, a + 3, a + 1, a + 1, a + 3, a + 4, a + 1, a + 4, a + 2, a + 2, a + 4, a + 5);
      }
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, r.kind === 'road' ? dirt : trail);
    mesh.receiveShadow = true;
    g.add(mesh);
    const [ccx, ccz] = chunkOf(r.path[0][0], r.path[0][1]);
    registerObjects(ccx, ccz, [{ id: stableId('road', ccx, ccz, slot++), type: 'road', x: r.path[0][0], z: r.path[0][1], y: 0, data: { road: r.id } }]);
  }
  // bridge where R1 crosses the river (x≈2): deck on banks + rails
  {
    const bx = 2, bz = 34 + 8 * Math.sin(bx * 0.045);
    const bankL = heightAt(bx, bz - 9), bankR = heightAt(bx, bz + 9);
    const deckY = Math.max(bankL, bankR) + 0.25;
    const wood = new THREE.MeshStandardMaterial({ color: 0x5a4630, roughness: 0.85 });
    const woodD = new THREE.MeshStandardMaterial({ color: 0x3f3222, roughness: 0.85 });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.14, 20), wood);
    deck.position.set(bx, deckY, bz); deck.castShadow = true; deck.receiveShadow = true;
    g.add(deck);
    for (const s of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.7, 20), woodD);
      rail.position.set(bx + s * 1.0, deckY + 0.42, bz); rail.castShadow = true;
      g.add(rail);
      for (const dz of [-8, -4, 0, 4, 8]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.1, 0.12), woodD);
        post.position.set(bx + s * 1.0, deckY - 0.1, bz + dz);
        g.add(post);
      }
    }
    const [ccx, ccz] = chunkOf(bx, bz);
    registerObjects(ccx, ccz, [{ id: stableId('bridge', ccx, ccz, 0), type: 'bridge', x: bx, z: bz, y: deckY, data: {} }]);
    // support piles driven into the channel bed (banks are uneven by design)
    for (const s of [-1, 1]) for (const dz of [-6, 6]) {
      const pile = new THREE.Mesh(new THREE.BoxGeometry(0.16, 4.2, 0.16), woodD);
      pile.position.set(bx + s * 0.9, deckY - 1.9, bz + dz);
      g.add(pile);
    }
  }
  return { group: g };
}
