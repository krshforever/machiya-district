// src/ecology.js — P2.4: biome-driven planting that avoids roads, water, rock.
// Near detail reuses full builders (few, hand-verified biome pockets).
// Far forest = TWO InstancedMeshes (canopy blobs + trunks) for the whole region.
// Everything seeded; nothing inside the village plateau or the river channel.
import * as THREE from 'three';
import { heightAt, slopeAt, moistureAt, biomeAt, streamFor } from './world.js';
import { roadDist } from './roads.js';
import {
  buildMapleVar, buildBambooCluster, buildShrub, buildGrassTufts, buildLitterMerged,
} from './vegetation.js';

function hash2i(x, z, salt) {
  let h = (Math.imul(x, 374761393) + Math.imul(z, 668265263) + Math.imul(salt, 1442695041)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

// find up to `count` points with biome in `wants`, r 30..130, spaced ≥ minGap,
// clear of roads (>4m), river channel, steep rock, and the village
// exported for the headless gate (placement logic without DOM builders)
export function findPockets(wants, count, minGap, seed, rMax = 130) {
  const R = streamFor(7, 3, seed);
  const found = [];
  for (let tries = 0; tries < 4000 && found.length < count; tries++) {
    const a = R() * Math.PI * 2;
    const r = 30 + Math.sqrt(R()) * (rMax - 30); // even area coverage
    const x = Math.cos(a) * r, z = Math.sin(a) * r * 0.9 + 6;
    const b = biomeAt(x, z);
    if (!wants.includes(b)) continue;
    if (roadDist(x, z) < 4) continue;
    if (Math.hypot(x + 48, z + 28) < 10) continue; // shrine clearing
    if (slopeAt(x, z) > 0.55) continue;
    if (Math.abs(z - (34 + 8 * Math.sin(x * 0.045))) < 6) continue;
    if (found.some(([fx, fz]) => Math.hypot(fx - x, fz - z) < minGap)) continue;
    found.push([x, z]);
  }
  return found;
}

export function buildEcology(M) {
  const g = new THREE.Group();
  g.name = 'ecology';
  const vegRoots = [];
  const tickers = [];
  const sway = (o) => { if (o?.userData?.sway) vegRoots.push(o); if (o?.userData?.tick) tickers.push(o.userData.tick); return o; };

  // --- near detail: maple grove (full canopies), bamboo pockets, shrubs, grass ---
  const mapleSpots = findPockets(['maple'], 3, 14, 101, 70); // near groves, visible detail
  mapleSpots.forEach(([x, z], i) => {
    const y = heightAt(x, z);
    const m = buildMapleVar(M, 500 + i, 1.0 + hash2i(i, 3, 5) * 0.5, 0.35 + hash2i(i, 9, 6) * 0.5, 0, 0);
    m.position.set(x, y, z);
    m.rotation.y = hash2i(i, 13, 7) * 6.28;
    scene_add(g, m); sway(m);
  });
  // REMASTERED-C: litter under grove canopies (same leaves→litter causality)
  {
    const spots = mapleSpots.map(([x, z], i) => ({ x, y: heightAt(x, z) + 0.05, z, r: 1.2, seed: 720 + i }));
    const lit = buildLitterMerged(spots);
    if (lit) g.add(lit);
  }
  const bambooSpots = findPockets(['bamboo'], 2, 16, 102, 80);
  bambooSpots.forEach(([x, z], i) => {
    const b = buildBambooCluster(M, 510 + i, 0, 0);
    b.position.set(x, heightAt(x, z), z);
    scene_add(g, b); sway(b);
  });
  const shrubSpots = findPockets(['maple', 'grassland', 'outskirts', 'slope'], 8, 12, 103);
  shrubSpots.forEach(([x, z], i) => {
    const s = buildShrub(520 + i, 0.5 + hash2i(i, 21, 8) * 0.6);
    s.position.set(x, heightAt(x, z) + 0.2, z);
    scene_add(g, s); sway(s);
  });
  const grassSpots = findPockets(['grassland', 'field', 'outskirts', 'riverbank'], 6, 14, 104);
  grassSpots.forEach(([x, z], i) => {
    const tufts = buildGrassTufts(530 + i, 50, [5, 5]);
    tufts.position.set(x, heightAt(x, z) + 0.03, z);
    scene_add(g, tufts);
  });

  // --- far forest: canopy blobs + trunks, THREE draws for the whole region ---
  // REMASTERED-H: two silhouettes — broadleaf crowns vs mountain conifers
  // (round lumps in a single silhouette read as fog blobs, not forest).
  {
    const R = streamFor(11, 5, 105);
    const broadGeo = new THREE.IcosahedronGeometry(1.7, 1);
    {
      const p = broadGeo.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const f = 1 + (hash2i(i, 31, 9) - 0.5) * 0.45;
        p.setXYZ(i, p.getX(i) * f, p.getY(i) * f * 0.82, p.getZ(i) * f);
      }
      broadGeo.computeVertexNormals();
    }
    const conGeo = new THREE.IcosahedronGeometry(1.35, 1); // conifer spike
    {
      const p = conGeo.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const f = 1 + (hash2i(i, 51, 10) - 0.5) * 0.3;
        p.setXYZ(i, p.getX(i) * f * 0.8, p.getY(i) * f * 1.7, p.getZ(i) * f * 0.8);
      }
      conGeo.computeVertexNormals();
    }
    const trunkGeo = new THREE.CylinderGeometry(0.13, 0.2, 2.4, 6);
    const canopyMat = new THREE.MeshStandardMaterial({ roughness: 0.95 });
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3a28, roughness: 0.95 });
    const items = [];
    for (let i = 0; i < 2500 && items.length < 380; i++) {
      const a = R() * Math.PI * 2;
      const r = 32 + Math.sqrt(R()) * 105;
      const x = Math.cos(a) * r, z = Math.sin(a) * r * 0.9 + 6;
      const b = biomeAt(x, z);
      if (!['maple', 'bamboo', 'grassland', 'slope', 'mountain', 'outskirts'].includes(b)) continue;
      if (roadDist(x, z) < 3.5) continue;
      if (slopeAt(x, z) > 0.7) continue;
      if (Math.abs(z - (34 + 8 * Math.sin(x * 0.045))) < 5) continue;
    if (Math.hypot(x + 48, z + 28) < 9) continue; // shrine clearing (sacred grove edge, not inside)
      const y = heightAt(x, z);
      const sc = b === 'mountain' ? 0.8 + R() * 0.5 : 1.0 + R() * 0.9;
      items.push({ x, y, z, sc, ry: R() * 6.28, biome: b, seed: i });
    }
    const canopies = new THREE.InstancedMesh(broadGeo, canopyMat, items.length);
    const conifers = new THREE.InstancedMesh(conGeo, canopyMat, items.length);
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, items.length);
    const d = new THREE.Object3D();
    const col = new THREE.Color();
    let nb = 0, nc = 0, nt = 0;
    items.forEach((t, i) => {
      if (t.biome === 'mountain') {
        // conifer spike, rooted by the shared trunk
        d.position.set(t.x, t.y + 3.0 * t.sc, t.z);
        d.rotation.set(0, t.ry, 0);
        d.scale.set(t.sc * 0.9, t.sc * 1.2, t.sc * 0.9);
        d.updateMatrix();
        conifers.setMatrixAt(nc, d.matrix);
        col.setHSL(0.33 + hash2i(i, 43, 3) * 0.04, 0.45, 0.20 + hash2i(i, 44, 4) * 0.08);
        col.offsetHSL(0, 0, (hash2i(i, 45, 5) - 0.5) * 0.05);
        conifers.setColorAt(nc, col);
        nc++;
      } else {
        d.position.set(t.x, t.y + 2.2 * t.sc, t.z);
        d.rotation.set(0, t.ry, 0);
        d.scale.set(t.sc * (0.9 + hash2i(i, 41, 1) * 0.3), t.sc, t.sc * (0.9 + hash2i(i, 42, 2) * 0.3));
        d.updateMatrix();
        canopies.setMatrixAt(nb, d.matrix);
        if (t.biome === 'bamboo') col.setHex(0x3f7030);
        else col.setHSL(0.02 + hash2i(i, 43, 3) * 0.09, 0.6, 0.30 + hash2i(i, 44, 4) * 0.12);
        col.offsetHSL(0, 0, (hash2i(i, 45, 5) - 0.5) * 0.05);
        canopies.setColorAt(nb, col);
        nb++;
      }
      d.position.set(t.x, t.y + 1.1 * t.sc, t.z);
      d.scale.set(t.sc, t.sc, t.sc);
      d.updateMatrix();
      trunks.setMatrixAt(nt, d.matrix);
      nt++;
    });
    canopies.count = nb; conifers.count = nc; trunks.count = nt;
    canopies.instanceMatrix.needsUpdate = true;
    conifers.instanceMatrix.needsUpdate = true;
    trunks.instanceMatrix.needsUpdate = true;
    if (canopies.instanceColor) canopies.instanceColor.needsUpdate = true;
    if (conifers.instanceColor) conifers.instanceColor.needsUpdate = true;
    canopies.castShadow = false; canopies.receiveShadow = false;
    conifers.castShadow = false; conifers.receiveShadow = false;
    trunks.castShadow = false;
    g.add(canopies, conifers, trunks);
  }
  return { group: g, vegRoots, tickers };
}
function scene_add(g, o) { g.add(o); }
