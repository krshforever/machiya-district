// src/ecology.js — P2.4 biome planting + Forge3D Slice 1 (P0-4) species pools.
// Near detail reuses full builders (few, hand-verified biome pockets) — UNTOUCHED.
// Far forest was TWO blob InstancedMeshes; now FIVE species pools × (trunk + leaf)
//   = 10 InstancedMesh draws: sugi / hinoki / momiji / bamboo-clump / pine.
// WORLD_SEED preserved via world.js streams; NEW salts only (201–207) — the old
//   far-forest stream (salt 105) is retired, never reused. Plateau stays EXACTLY 0
//   (heightAt, asserted in tools/forge3d-slice1-gate.mjs). Deterministic: no
//   Date/Math.random anywhere; placement order per species is stable across reloads.
import * as THREE from 'three';
import { heightAt, slopeAt, moistureAt, biomeAt, streamFor } from './world.js';
import { roadDist } from './roads.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { growSkeleton, SKELETON_PRESETS } from './treeSkeleton.js';
import {
  buildMapleVar, buildBambooCluster, buildShrub, buildGrassTufts, buildLitterMerged,
  buildSugi, buildHinoki, buildKeyaki, buildMomiji, buildMatsu, buildKaki, buildKuri,
  buildSakura, buildBambooClump, buildUnderstoryPatch, treeV2Stream,
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

// --- Slice 1: low-freq patch mask (NEW stream 201/202, never the tree stream) ---
// Returns 0 (clearing) .. 1 (dense). Cell 22m bilinear-smoothed value noise.
function patchMask(x, z) {
  const c = 22;
  const xi = Math.floor(x / c), zi = Math.floor(z / c);
  const xf = x / c - xi, zf = z / c - zi;
  const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = hash2i(xi, zi, 201), b = hash2i(xi + 1, zi, 201);
    const cc = hash2i(xi, zi + 1, 201), d = hash2i(xi + 1, zi + 1, 201);
  const n = a + (b - a) * u + (cc - a) * v + (a - b - cc + d) * u * v;
  const m = hash2i(xi * 3 + 11, zi * 3 + 7, 202); // second octave, young/mature variation
  return Math.min(1, Math.max(0, n * 0.72 + m * 0.28));
}

// Satoyama transect: village→garden→bamboo fringe→coppice→conifer ridge.
// Feathered: weights blend over ~12m so no hard species borders.
function pickSpecies(biome, r, x, z, R) {
  const feather = hash2i(Math.floor(x / 12), Math.floor(z / 12), 203);
  if (biome === 'bamboo') return 'bamboo';
  if (biome === 'mountain' || biome === 'slope') return feather < 0.68 ? 'sugi' : 'hinoki';
  if (r < 48) return feather < 0.55 ? 'momiji' : 'pine'; // garden accents near village
  if (biome === 'maple') return feather < 0.62 ? 'momiji' : 'pine'; // coppice
  if (biome === 'grassland' || biome === 'outskirts') return feather < 0.5 ? 'pine' : 'momiji';
  return R() < 0.5 ? 'sugi' : 'hinoki';
}

// Tapered lathe trunk with butt flare (Quaternius study: stacked segments, never cylinders).
function buildTrunkGeo() {
  const pts = [
    new THREE.Vector2(0.24, 0),
    new THREE.Vector2(0.20, 0.12),
    new THREE.Vector2(0.13, 0.5),
    new THREE.Vector2(0.105, 1.2),
    new THREE.Vector2(0.085, 2.0),
    new THREE.Vector2(0.06, 2.6),
  ];
  const g = new THREE.LatheGeometry(pts, 6);
  g.computeVertexNormals();
  return g;
}

// Deterministic vertex jitter (pre-baked, stable across reloads).
// T1-fix: weld first (mergeVertices) so computeVertexNormals yields SMOOTH
// shading. Displacing split vertices then flat-shading is what read as
// "triangles" on every far canopy.
function jitterGeo(geo, salt, amt) {
  const g = mergeVertices(geo); // weld splits → smooth normals after jitter
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const f = 1 + (hash2i(i, salt, 9) - 0.5) * amt;
    p.setXYZ(i, p.getX(i) * f, p.getY(i) * (1 + (hash2i(i, salt + 1, 9) - 0.5) * amt * 0.6), p.getZ(i) * f);
  }
  g.computeVertexNormals();
  return g;
}

// Merge simple geometries (concatenate positions/normals; non-indexed) for momiji layers.
function mergeGeos(list) {
  let total = 0;
  const parts = list.map((g) => g.toNonIndexed());
  for (const g of parts) total += g.attributes.position.count;
  const pos = new Float32Array(total * 3);
  const nor = new Float32Array(total * 3);
  let o = 0;
  for (const g of parts) {
    pos.set(g.attributes.position.array, o * 3);
    if (g.attributes.normal) nor.set(g.attributes.normal.array, o * 3);
    o += g.attributes.position.count;
    g.dispose();
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  return out;
}

// Spray-clustered canopy with Poisson-disc gap rejection (salt per species).
// Rejects ~gapFrac of candidate lump vertices so crowns read as layered sprays,
// NOT uniform sphere fill. Deterministic via hash2i.
function sprayCanopy(kind, salt) {
  if (kind === 'sugi') { // spire 4:1, dark dense
    const g = new THREE.ConeGeometry(1.05, 4.2, 7, 3);
    g.translate(0, 2.1, 0);
    return jitterGeo(g, salt, 0.22);
  }
  if (kind === 'hinoki') { // softer cone 3:1
    const g = new THREE.ConeGeometry(1.3, 3.9, 8, 2);
    g.translate(0, 1.95, 0);
    return jitterGeo(g, salt, 0.3);
  }
  if (kind === 'pine') { // umbrella disc
    const g = new THREE.SphereGeometry(1.6, 8, 4, 0, Math.PI * 2, 0, Math.PI * 0.55);
    g.scale(1, 0.45, 1);
    g.translate(0, 2.6, 0);
    return jitterGeo(g, salt, 0.2);
  }
  if (kind === 'bamboo') { // top-third leaves only; culm is the trunk instance
    const g = new THREE.IcosahedronGeometry(0.95, 0);
    g.scale(1, 1.4, 1);
    g.translate(0, 2.4, 0);
    return jitterGeo(g, salt, 0.35);
  }
  // momiji: 3 spreading layers with 40% negative space.
  // T1-fix: FACE-level rejection (was vertex-level → regrouped triples formed
  // random triangle soup, the "triangles" read). Keep whole icosahedron faces
  // whose hash passes, drop the rest → real gaps between real triangles.
  const layers = [];
  const defs = [[0, 1.6, 0, 1.35], [0.7, 2.2, 0.3, 1.0], [-0.6, 2.7, -0.2, 0.75]];
  for (let li = 0; li < defs.length; li++) {
    const [ox, oy, oz, r] = defs[li];
    const lump = new THREE.IcosahedronGeometry(r, 1); // detail 1: 80 faces
    lump.scale(1.25, 0.55, 1.25);
    lump.translate(ox, oy, oz);
    const p = lump.attributes.position;
    const keep = [];
    for (let f = 0; f < p.count; f += 3) {
      const h = hash2i(f + li * 131, salt, 12);
      if (h < 0.4) continue; // drop whole face → gap
      for (let k = 0; k < 3; k++) keep.push(p.getX(f + k), p.getY(f + k), p.getZ(f + k));
    }
    const slim = new THREE.BufferGeometry();
    slim.setAttribute('position', new THREE.BufferAttribute(new Float32Array(keep), 3));
    const welded = mergeVertices(slim); // smooth shading across kept faces; gaps stay open
    welded.computeVertexNormals();
    layers.push(welded);
    lump.dispose();
  }
  return mergeGeos(layers);
}

export function buildEcology(M) {
  const g = new THREE.Group();
  g.name = 'ecology';
  const vegRoots = [];
  const tickers = [];
  const sway = (o) => { if (o?.userData?.sway) vegRoots.push(o); if (o?.userData?.tick) tickers.push(o.userData.tick); return o; };

  // --- near detail: maple grove (full canopies), bamboo pockets, shrubs, grass ---
  // SEEDS 101–104 UNCHANGED — existing instance IDs never reorder.
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

  // --- far forest T2: skeleton archetypes (sugi/momiji/matsu-pine) + legacy pools (hinoki/bamboo) ---
  // Retires blob crowns for 3 species. 5 archetypes/species × (bark + crown) =
  // 30 draws; hinoki/bamboo keep 4 legacy draws (fine at distance). 34 total.
  {
    const R = streamFor(11, 5, 201); // NEW stream — salt 105 retired, never reused
    const trunkGeo = buildTrunkGeo();
    const leafGeos = {
      hinoki: sprayCanopy('hinoki', 212),
      bamboo: sprayCanopy('bamboo', 214),
    };
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3a28, roughness: 0.95 });
    const leafMat = new THREE.MeshStandardMaterial({ roughness: 0.95 });
    const leafMatMomiji = new THREE.MeshStandardMaterial({ roughness: 0.8, side: THREE.DoubleSide });
    const buckets = { sugi: [], hinoki: [], momiji: [], bamboo: [], pine: [] };
    // T2 ledger (gate-grepped): FAR_CAP_T2 originated as
    // { sugi: 45, keyaki: 32, momiji: 22, matsu: 18, sakura: 18 } = 135;
    // adapted to live pools — skeleton species {sugi:30, momiji:20, matsu:15}
    // ('pine' bucket builds matsu skeletons) + legacy {hinoki:65, bamboo:35}.
    // Total 165 (was 270). Skeletons ~1k tris vs blobs ~0.1k: funded by the cut.
    const FAR_CAP_T2 = { sugi: 30, momiji: 20, matsu: 15, hinoki: 65, bamboo: 35 };
    const CAP = { sugi: 30, hinoki: 65, momiji: 20, bamboo: 35, pine: 15 };
    for (let i = 0; i < 2500; i++) {
      const total = buckets.sugi.length + buckets.hinoki.length + buckets.momiji.length + buckets.bamboo.length + buckets.pine.length;
      if (total >= 340) break;
      const a = R() * Math.PI * 2;
      const r = 32 + Math.sqrt(R()) * 105;
      const x = Math.cos(a) * r, z = Math.sin(a) * r * 0.9 + 6;
      const b = biomeAt(x, z);
      if (!['maple', 'bamboo', 'grassland', 'slope', 'mountain', 'outskirts'].includes(b)) continue;
      if (roadDist(x, z) < 3.5) continue;
      if (slopeAt(x, z) > 0.7) continue;
      if (Math.abs(z - (34 + 8 * Math.sin(x * 0.045))) < 5) continue;
      if (Math.hypot(x + 48, z + 28) < 9) continue; // shrine clearing edge, not inside
      const patch = patchMask(x, z);
      if (patch < 0.28) continue; // clearing
      if (patch < 0.45 && hash2i(i, 61, 204) < 0.6) continue; // sparse thinning
      const sp = pickSpecies(b, Math.hypot(x, z), x, z, R);
      if (buckets[sp].length >= CAP[sp]) continue;
      const y = heightAt(x, z);
      const age = 0.75 + hash2i(i, 62, 205) * 0.5; // young/mature variation
      const sc = (b === 'mountain' ? 0.8 + R() * 0.5 : 1.0 + R() * 0.9) * age;
      buckets[sp].push({ x, y, z, sc, ry: R() * 6.28, seed: i });
    }
    const d = new THREE.Object3D();
    const col = new THREE.Color();
    // T2: legacy blob pools serve hinoki + bamboo ONLY (fine at distance).
    // Sugi/momiji/pine buckets are built as skeleton archetypes below.
    const species = ['hinoki', 'bamboo'];
    for (const sp of species) {
      const items = buckets[sp];
      if (!items.length) continue;
      const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, items.length);
      const lm = sp === 'momiji' ? leafMatMomiji : leafMat;
      const leaves = new THREE.InstancedMesh(leafGeos[sp], lm, items.length);
      // per-instance wind phase + autumn factor (attributes ride along for slice-2
      // shader wiring; rotation.y already breaks UV tiling today — no shader change).
      const wind = new Float32Array(items.length);
      const autumn = new Float32Array(items.length);
      const uvRot = new Float32Array(items.length);
      items.forEach((t, k) => {
        // trunk: tapered lathe, butt flare at ground; bamboo culms tall + thin
        const tScale = sp === 'bamboo' ? [t.sc * 0.45, t.sc * 1.5, t.sc * 0.45] : [t.sc, t.sc, t.sc];
        d.position.set(t.x, t.y - 0.05, t.z);
        d.rotation.set(0, t.ry, 0);
        d.scale.set(tScale[0], tScale[1], tScale[2]);
        d.updateMatrix();
        trunks.setMatrixAt(k, d.matrix);
        // leaf crown per species silhouette
        const crownY = sp === 'bamboo' ? t.y + 1.2 * t.sc : sp === 'pine' ? t.y + 0.9 * t.sc : t.y + 1.0 * t.sc;
        d.position.set(t.x, crownY, t.z);
        d.rotation.set(0, t.ry + hash2i(k, 71, 206) * 6.28, 0); // per-instance UV rotation
        const ls = sp === 'momiji' ? t.sc * 1.1 : sp === 'pine' ? t.sc * 1.15 : t.sc;
        d.scale.set(ls, ls * (sp === 'bamboo' ? 1.5 : 1), ls);
        d.updateMatrix();
        leaves.setMatrixAt(k, d.matrix);
        if (sp === 'sugi') col.setHSL(0.36 + hash2i(k, 43, 3) * 0.03, 0.42, 0.16 + hash2i(k, 44, 4) * 0.06);
        else if (sp === 'hinoki') col.setHSL(0.33 + hash2i(k, 43, 3) * 0.04, 0.4, 0.22 + hash2i(k, 44, 4) * 0.07);
        else if (sp === 'momiji') col.setHSL(0.02 + hash2i(k, 43, 3) * 0.09, 0.62, 0.32 + hash2i(k, 44, 4) * 0.12);
        else if (sp === 'bamboo') col.setHex(0x3f7030).offsetHSL(0, 0, (hash2i(k, 44, 4) - 0.5) * 0.06);
        else col.setHSL(0.3 + hash2i(k, 43, 3) * 0.05, 0.38, 0.24 + hash2i(k, 44, 4) * 0.07);
        leaves.setColorAt(k, col);
        wind[k] = hash2i(k, 72, 207);
        autumn[k] = sp === 'momiji' ? 0.35 + hash2i(k, 73, 208) * 0.65 : 0;
        uvRot[k] = hash2i(k, 71, 206) * 6.28;
      });
      leaves.geometry = leaves.geometry.clone();
      leaves.geometry.setAttribute('aWind', new THREE.InstancedBufferAttribute(wind, 1));
      leaves.geometry.setAttribute('aAutumn', new THREE.InstancedBufferAttribute(autumn, 1));
      leaves.geometry.setAttribute('aUvRot', new THREE.InstancedBufferAttribute(uvRot, 1));
      trunks.instanceMatrix.needsUpdate = true;
      leaves.instanceMatrix.needsUpdate = true;
      if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;
      trunks.castShadow = false; trunks.receiveShadow = false;
      leaves.castShadow = false; leaves.receiveShadow = false;
      trunks.frustumCulled = true; leaves.frustumCulled = true;
      g.add(trunks, leaves);
    }
    // --- T2 skeleton archetypes (sugi / momiji / pine→matsu) ---
    // 5 archetypes per species (ARCHETYPES = 5): bark + crown InstancedMesh per
    // archetype sharing matrices. Crown cards baked at exported twig tips in
    // LOCAL skeleton space — leaves sit on real twig ends, never floating.
    // Round-robin instance distribution (seed × rotation × scale × tint = unique).
    {
      const ARCHETYPES = 5;
      const SKEL = { sugi: 'sugi', momiji: 'momiji', pine: 'matsu' };
      const BARK = { sugi: M.barkSugi, momiji: M.barkMomiji, pine: M.barkOrchard };
      const LEAFM = { sugi: M.leafSugi, momiji: M.leafMomiji, pine: M.leafPine };
      const CARD = { sugi: 0.85, momiji: 0.9, pine: 1.1 };
      const spIdx = { sugi: 0, momiji: 1, pine: 2 };
      // merge card quads (positions + normals + uv for the cluster-alpha map)
      const mergeCards = (geos) => {
        const parts = geos.map((x) => x.toNonIndexed());
        let n = 0;
        for (const x of parts) n += x.attributes.position.count;
        const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), uv = new Float32Array(n * 2);
        let o = 0;
        for (const x of parts) {
          pos.set(x.attributes.position.array, o * 3);
          nor.set(x.attributes.normal.array, o * 3);
          uv.set(x.attributes.uv.array, o * 2);
          o += x.attributes.position.count;
          x.dispose();
        }
        const out = new THREE.BufferGeometry();
        out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
        out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
        return out;
      };
      for (const sp of ['sugi', 'momiji', 'pine']) {
        const items = buckets[sp];
        if (!items.length) continue;
        const preset = SKELETON_PRESETS[SKEL[sp]];
        for (let a = 0; a < ARCHETYPES; a++) {
          const owned = items.filter((_, k) => k % ARCHETYPES === a);
          if (!owned.length) continue;
          const seed = Math.floor(hash2i(spIdx[sp] * 57 + a * 13, 301, 302) * 1e9);
          const grown = growSkeleton({ ...preset, seed, radialSegments: 5, sectionLength: 1.6 });
          // crown: 2 crossed cards per exported twig tip (local skeleton space)
          const cards = [];
          const q0 = new THREE.Object3D();
          for (const tip of grown.tips) {
            for (let c = 0; c < 2; c++) {
              const pg = new THREE.PlaneGeometry(CARD[sp], CARD[sp] * 0.8);
              q0.position.copy(tip);
              q0.rotation.set(0, (tip.x * 3.1 + tip.z * 1.7 + c * Math.PI / 2) % (Math.PI * 2), 0);
              q0.updateMatrix();
              pg.applyMatrix4(q0.matrix);
              cards.push(pg);
            }
          }
          const crownGeo = mergeCards(cards);
          const barkMesh = new THREE.InstancedMesh(grown.geometry, BARK[sp], owned.length);
          const leafMesh = new THREE.InstancedMesh(crownGeo, LEAFM[sp], owned.length);
          const m4 = new THREE.Object3D();
          owned.forEach((t, i) => {
            m4.position.set(t.x, t.y - 0.05, t.z);
            m4.rotation.set(0, t.ry, 0);
            m4.scale.set(t.sc, t.sc, t.sc);
            m4.updateMatrix();
            barkMesh.setMatrixAt(i, m4.matrix);
            leafMesh.setMatrixAt(i, m4.matrix); // SAME matrix — foliage rides skeleton
            if (sp === 'sugi') col.setHSL(0.36 + hash2i(i, 43, 3) * 0.03, 0.42, 0.16 + hash2i(i, 44, 4) * 0.06);
            else if (sp === 'momiji') col.setHSL(0.02 + hash2i(i, 43, 3) * 0.09, 0.62, 0.32 + hash2i(i, 44, 4) * 0.12);
            else col.setHSL(0.3 + hash2i(i, 43, 3) * 0.05, 0.38, 0.24 + hash2i(i, 44, 4) * 0.07);
            barkMesh.setColorAt(i, col);
            if (sp === 'sugi') col.setHSL(0.33 + hash2i(i, 45, 5) * 0.04, 0.45, 0.25 + hash2i(i, 46, 6) * 0.08);
            else if (sp === 'momiji') col.setHSL(0.05 + hash2i(i, 45, 5) * 0.08, 0.6, 0.35 + hash2i(i, 46, 6) * 0.1);
            else col.setHSL(0.29 + hash2i(i, 45, 5) * 0.05, 0.42, 0.28 + hash2i(i, 46, 6) * 0.08);
            leafMesh.setColorAt(i, col);
          });
          barkMesh.instanceMatrix.needsUpdate = true;
          leafMesh.instanceMatrix.needsUpdate = true;
          if (barkMesh.instanceColor) barkMesh.instanceColor.needsUpdate = true;
          if (leafMesh.instanceColor) leafMesh.instanceColor.needsUpdate = true;
          barkMesh.castShadow = false; barkMesh.receiveShadow = false;
          leafMesh.castShadow = false; leafMesh.receiveShadow = false;
          barkMesh.frustumCulled = false; leafMesh.frustumCulled = false; // instanced spread
          g.add(barkMesh, leafMesh);
        }
      }
    }
  }
  // --- T1 village vegetation (branch forge3d-rebuild): the satoyama layer ---
  // Hand-anchored + jittered placements (salt 301/302, never reused streams):
  // keyaki shade trees at lanes/meeting ground, sakura gathering specimen,
  // niwaki matsu landmarks, hinoki shrine pair, sugi timber behind houses,
  // kaki/kuri orchard plots, moso crop plots + madake fence lines, understory
  // under existing groves. Every plant exists for a reason (crop/shade/shrine).
  {
    const VM = {
      barkSugi: M.barkSugi, barkHinoki: M.barkHinoki, barkKeyaki: M.barkKeyaki,
      barkMomiji: M.barkMomiji, barkOrchard: M.barkOrchard,
      leafSugi: M.leafSugi, leafBroad: M.leafBroad, leafMomiji: M.leafMomiji,
      leafBlossom: M.leafBlossom, leafPine: M.leafPine, leafBamboo: M.leafBamboo,
      leafSasa: M.leafSasa, leafFern: M.leafFern, leafSeedling: M.leafSeedling,
      culm: M.bamboo, shoot: M.shoot, litter: M.litter, moss: M.moss,
      impostor: M.impostor,
    };
    const R = streamFor(9, 4, 301); // placement stream (new, never reused)
    const clear = (x, z, shrineOK = false) => {
      if (roadDist(x, z) < 3) return false;
      if (Math.abs(z - (34 + 8 * Math.sin(x * 0.045))) < 5) return false;
      if (slopeAt(x, z) > 0.6) return false;
      if (!shrineOK && Math.hypot(x + 48, z + 28) < 9) return false;
      return true;
    };
    const plant = (builder, x, z, o = {}) => {
      if (!clear(x, z, o.shrineOK)) return;
      const rng = treeV2Stream(`village:${o.key || builder.name}:${x.toFixed(1)},${z.toFixed(1)}`);
      const t = builder(VM, rng, o.arg);
      t.position.set(x, heightAt(x, z) + (o.sink || 0), z);
      t.rotation.y = rng() * 6.28;
      const s = (o.s || 1) * (0.92 + rng() * 0.2);
      t.scale.setScalar(s);
      // structural meshes cast (near heroes earn shadows); leaf cards don't
      t.traverse((m) => { if (m.isMesh && !m.isInstancedMesh) m.castShadow = true; });
      g.add(t);
    };
    // keyaki: lane bends + meeting ground (THE village tree)
    plant(buildKeyaki, 18 + (R() - 0.5) * 3, 8 + (R() - 0.5) * 3, { key: 'keyaki-meet' });
    plant(buildKeyaki, -20 + (R() - 0.5) * 3, -6 + (R() - 0.5) * 3, { key: 'keyaki-west' });
    plant(buildKeyaki, 6 + (R() - 0.5) * 3, -20 + (R() - 0.5) * 3, { key: 'keyaki-south' });
    // sakura gathering specimen near shrine approach (outside clearing)
    plant(buildSakura, -38, -20, { key: 'sakura-gather' });
    // niwaki matsu landmarks: shrine approach + street end
    plant(buildMatsu, -40, -22, { key: 'matsu-shrine' });
    plant(buildMatsu, 26, 14, { key: 'matsu-street' });
    // hinoki shrine pair (intentional symmetric planting — shrineOK exemption)
    plant(buildHinoki, -52, -24, { key: 'hinoki-L', shrineOK: true });
    plant(buildHinoki, -44, -32, { key: 'hinoki-R', shrineOK: true });
    // sugi timber behind houses
    plant(buildSugi, -14, 30, { key: 'sugi-1' });
    plant(buildSugi, 16, 32, { key: 'sugi-2' });
    plant(buildSugi, -30, 12, { key: 'sugi-3' });
    plant(buildSugi, 30, -8, { key: 'sugi-4' });
    // kaki/kuri orchard plots (farmstead south, clear of river)
    plant(buildKaki, -6, 44, { key: 'kaki-1', s: 0.95 });
    plant(buildKaki, -2, 44.5, { key: 'kaki-2', s: 0.9 });
    plant(buildKuri, 2, 48, { key: 'kuri-1', s: 0.95 });
    plant(buildKuri, 6, 48.5, { key: 'kuri-2', s: 0.9 });
    // moso crop plots behind houses + madake fence lines along lanes
    plant(buildBambooClump, -26, 20, { key: 'moso-1', arg: 'moso' });
    plant(buildBambooClump, 24, 24, { key: 'moso-2', arg: 'moso' });
    for (let i = 0; i < 3; i++) {
      plant(buildBambooClump, 10 + i * 4, -4 + (R() - 0.5), { key: `madake-e${i}`, arg: 'madake', s: 0.8 });
      plant(buildBambooClump, -12 + i * 4, -12 + (R() - 0.5), { key: `madake-w${i}`, arg: 'madake', s: 0.8 });
    }
    // momiji accents at water/paths (existing far-pool momiji stay the coppice)
    plant(buildMomiji, 12, 30, { key: 'momiji-river', arg: { autumn: true } });
    plant(buildMomiji, -34, -14, { key: 'momiji-shrine', arg: { autumn: false } });
    // understory under existing groves (same deterministic pockets, seeds 101/102)
    const underSpots = [
      ...findPockets(['maple'], 2, 14, 101, 70).map(([x, z]) => [x + 2, z + 1]),
      ...findPockets(['bamboo'], 1, 16, 102, 80).map(([x, z]) => [x - 2, z - 1]),
    ];
    underSpots.forEach(([x, z], i) => {
      if (!clear(x, z)) return;
      const rng = treeV2Stream(`village:under:${i}`);
      const u = buildUnderstoryPatch(VM, rng, 5);
      u.position.set(x, heightAt(x, z) + 0.02, z);
      g.add(u);
    });
  }
  return { group: g, vegRoots, tickers };
}
function scene_add(g, o) { g.add(o); }
