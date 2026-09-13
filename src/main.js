import * as THREE from 'three';
import { buildMaterials } from './materials.js';
import { buildArchitecture } from './architecture.js';
import { buildRoof } from './roof.js';
import { buildInterior } from './interior.js';
import { buildPond } from './pond.js';
import { buildLighting } from './lighting.js';
import { buildAtmosphere } from './atmosphere.js';
import { buildCamera } from './camera.js';
// v2 district: parametric houses + town + details + weather + daytime + cinematics + ui.
// (v1 garden/bamboo/maple placements retired from the composition — the town,
// relocated pond and district vegetation take those roles. Modules stay on disk;
// pristine v1 lives at ~/japanese-house-v1.)
import { setSharedM, upgradeHero } from './houses.js';
import { buildTown, LAYOUT } from './town.js';
import { createAudio, armAutoplayOnce } from './audio.js';
import { buildDetails, updateDetails } from './details.js';
import { createWeather, WIND } from './weather.js';
import { createDaytime, buildNightSky } from './daytime.js';
import { createCinematics } from './cinematics.js';
import { createInteract } from './interact.js';
import { createExplore } from './explore.js';
import { buildUI } from './ui.js';
import { buildSignage } from './signage.js';
import { createClock } from './cineclock.js';
import { createPost } from './post.js';
import { applyScannedMaterials } from './vendor.js'; // Forge3D C0: CC0 scans over procedural maps (fallback-safe)
import { registerObjects, chunkOf, stableId, registryStats, heightAt, windAt } from './world.js';
import { createPower } from './power.js';
import { buildFire } from './fire.js';
import { buildTerrain, buildRiver } from './terrain.js';
import { createFarRidgeRing } from './farRidgeRing.js'; // Slice 3: P0-2 silhouette ring (+1 draw, 768 tris)
import { buildRoads } from './roads.js';
import { buildEcology } from './ecology.js';
import { buildSettlement } from './settlement.js';
import { decorateHouse, decorateEntrance } from './household.js';
import { buildShrine, buildTorii } from './shrine.js';
import {
  buildMapleVar, buildBambooCluster, buildShrub, buildGrassTufts, buildLitterMerged,
  buildVines, buildMoss, swayVegetation,
} from './vegetation.js';

// --- renderer (mobile/thermal discipline: pixelRatio capped at 2) ---
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
// tsuki-quality: ui.js dispatches, main owns the renderer (low=1, medium=1.5, high/cinematic=2 cap)
window.addEventListener('tsuki-quality', (e) => {
  try {
    const q = e && e.detail;
    const cap = q === 'low' ? 1 : q === 'medium' ? 1.5 : 2;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cap));
  } catch (err) { /* never break the frame loop for UI */ }
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap; // r165+: PCF is soft by default (PCFSoft removed)
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;
// Dev comparison link (?tone=agx|neutral|aces): no visual claim made here —
// pick the winner eyes-on-hardware. Default stays ACES (unchanged look).
try {
  const tq = new URLSearchParams(location.search).get('tone');
  if (tq === 'agx' && THREE.AgXToneMapping !== undefined) renderer.toneMapping = THREE.AgXToneMapping;
  else if (tq === 'neutral' && THREE.NeutralToneMapping !== undefined) renderer.toneMapping = THREE.NeutralToneMapping;
} catch (e) { /* guarded: tone stays ACES */ }
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const M = buildMaterials();
applyScannedMaterials(M); // CC0 albedo over procedural maps; missing files keep fallback
setSharedM(M); // district builders reuse the textured mothership registry

const { sun, hemi, skyMat, sky } = buildLighting(scene, renderer);

// --- hero machiya: v1 modules grouped, upgraded, placed on its town lot ---
const heroGroup = new THREE.Group();
heroGroup.name = 'hero_machiya';
const arch = buildArchitecture(M);
const roof = buildRoof(M);
const interior = buildInterior(M);
heroGroup.add(arch.group, roof.group, interior.group);
upgradeHero(heroGroup, { nageshiY: 2.2, eaveY: 3.7, doorX: arch.openBayX });

// --- district: town (repositions heroGroup to its lot), details, pond, vegetation ---
// Animation registries first: every system below pushes here (town, roads,
// ecology, district plantings). Declared up top to avoid TDZ ordering bugs.
const vegRoots = [];
const tickers = []; // leaf/culm shimmer updaters, called per frame
const addSway = (o) => { if (o?.userData?.sway) vegRoots.push(o); if (o?.userData?.tick) tickers.push(o.userData.tick); return o; };
const town = buildTown({ scene, heroGroup });
// P2.1: district houses enter the world registry (future systems query it).
// No visual change — same objects, now addressable by chunk + stable ID.
town.houses.forEach((h, i) => {
  const [cx, cz] = chunkOf(h.pos.x, h.pos.z);
  registerObjects(cx, cz, [{ id: stableId('house', cx, cz, i), type: h.name === 'hero' ? 'hero' : 'house', x: h.pos.x, z: h.pos.z, y: 0, data: { name: h.name } }]);
});
window.__world = { stats: registryStats }; // live getter (registry fills as systems build)
// P2.2/P2.3: terrain ring + river (district plateau untouched, base plane stays)
const terrain = buildTerrain();
scene.add(terrain.group);
// Slice 2: terrain ground joins the rain wet-darkening registry (mud + wet soil)
if (terrain.mesh && terrain.mesh.material && M.registerWet) M.registerWet(terrain.mesh.material);
const river = buildRiver();
scene.add(river.group);
// Slice 3: far ridge silhouette (horizon layer; sky dome stays the backdrop)
scene.add(createFarRidgeRing());
// P2.4/P2.5: road network + ecological planting (both read the same terrain
// truth; plantings avoid roads, water, rock and the village by construction)
const roads = buildRoads(M);
scene.add(roads.group);
const eco = buildEcology(M);
scene.add(eco.group);
for (const t of eco.tickers) tickers.push(t);
for (const r of eco.vegRoots) vegRoots.push(r);
// P2.6: riverside hamlet + terraced paddies (placement-gated, registered)
const settlement = buildSettlement(M);
// P2.7: forest shrine off the west trail + torii gate on it
{
  const shrine = buildShrine(M, -48, -28, -2.03);
  scene.add(shrine.group);
  const torii = buildTorii(M, -51, -29.5, 2.68);
  scene.add(torii.group);
}
scene.add(settlement.group);
// hamlet windows join the night-glow set (daytime reads town.houses downstream)
for (const h of settlement.houses) {
  town.houses.push({ name: h.name, group: h.group, glowMats: h.glowMats, pos: h.pos });
}
// household dressing: covers town.houses + settlement-appended houses above.
// Runs BEFORE createDaytime (it reads town.houses) — order is load-bearing.
const householdCloth = [];
function kindForHouse(h) {
  if (h.params && h.params.isShop) return 'shop';
  const n = String(h.name || '').toLowerCase();
  const wl = h.params && h.params.winLayout;
  if (n.startsWith('shed') || (Array.isArray(wl) && wl.length && wl.every((v) => !v))) return 'shed';
  if (n.startsWith('hamlet') || n.startsWith('farm') || n.startsWith('barn')) return 'farm';
  if (n === 'hero' || n.startsWith('hero')) return 'hero';
  return 'home';
}
function seedForHouse(h, i) {
  if (h.params && typeof h.params.seed === 'number') return h.params.seed >>> 0;
  let hh = 2166136261 >>> 0;
  const s = String(h.name || ('house' + i));
  for (let k = 0; k < s.length; k++) { hh ^= s.charCodeAt(k); hh = Math.imul(hh, 16777619); }
  return (hh ^ Math.imul((i + 1) >>> 0, 0x9E3779B1)) >>> 0;
}
for (let i = 0; i < town.houses.length; i++) {
  const h = town.houses[i];
  const kind = kindForHouse(h);
  const seed = seedForHouse(h, i);
  const hp = { ...(h.params || {}), name: h.name, kind, seed };
  if (kind === 'hero') { hp.w = 10; hp.d = 6.4; hp.wallH = 2.9; } // v1 HOUSE dims (no params entry)
  const r1 = decorateHouse(h.group, hp, M);
  const r2 = decorateEntrance(h.group, hp, M);
  if (r1 && r1.cloth) for (const c of r1.cloth) householdCloth.push(c);
  if (r2 && r2.cloth) for (const c of r2.cloth) householdCloth.push(c);
  // REMASTERED-D: household electronics join the night-glow circuit
  if (r1 && r1.glow && h.glowMats) for (const gm of r1.glow) h.glowMats.push(gm);
}
console.log('WORLD registry: ' + JSON.stringify(registryStats())); // after ALL systems registered
const det = buildDetails(town);
scene.add(det.group);
// P2.10: street-lamp power circuits (daytime owns intensities; power scales after)
const power = createPower({ lampLights: det.lampLights, lampGlows: det.lampGlows, houses: town.houses });
// P2.10: farmstead fire pit (farmhouse firewood causality), open ground at (7.5,24.5)
const fire = buildFire(M, 7.5, 24.5, heightAt(7.5, 24.5));
scene.add(fire.group);
// NOTE: diegetic audio setup lives after camera creation (createAudio takes
// `camera`; referencing it here would throw a TDZ error). See below.

// TSUKIMORI identity: physical 3D sign + studio plaque (slots verified clear
// of LAYOUT lots, lamps, poles, drains, puddles, paths and shot sightlines)
buildSignage(scene, M, {
  signPos: [6.5, 0, 14.5], signRy: -0.5,
  plaquePos: [1.0, 0, 9.7], plaqueRy: -0.35,
});

// pond relocated to the south garden (v1 spot sits under the main street)
const pond = buildPond(M);
pond.group.position.set(-13.5, 0, 7);
scene.add(pond.group);

// district vegetation (seeded, no twins) — roots collected for wind sway.
// (vegRoots/tickers/addSway are declared up top, before town/roads/ecology.)
[
  [-4.2, 4.6, 1.3, 0.75], [6.8, 4.4, 1.0, 0.55], [-8.2, -6.2, 1.5, 0.9],
  [13.5, -8.5, 1.1, 0.4], [-16, 3.5, 0.9, 0.65],
].forEach(([x, z, s, a], i) => {
  const m = buildMapleVar(M, i + 1, s, a, x, z);
  m.position.set(x, 0, z); scene.add(m); addSway(m);
});
// REMASTERED-C: litter under the district canopies (leaves land → litter lies)
{
  const spots = [
    [-4.2, 4.6, 1.3], [6.8, 4.4, 1.0], [-8.2, -6.2, 1.5],
    [13.5, -8.5, 1.1], [-16, 3.5, 0.9],
  ].map(([x, z, s], i) => ({ x, y: 0.05, z, r: s, seed: 700 + i }));
  const lit = buildLitterMerged(spots);
  if (lit) scene.add(lit);
}
[[0, -5.5], [-7.6, 4.6], [7.5, -8.5]].forEach(([x, z], i) => {
  const b = buildBambooCluster(M, 10 + i, x, z);
  scene.add(b); addSway(b);
});
[[-3.6, 3.4, 0.55], [3.6, 3.4, 0.5], [11, 10.6, 0.6], [-11, 10.6, 0.55], [-2, -8.6, 0.5]].forEach(([x, z, r], i) => {
  const s = buildShrub(20 + i, r);
  s.position.set(x, 0.25, z); scene.add(s); addSway(s);
});
for (const [x, z, sx, sz, seed] of [[0, 4.0, 8, 2.5, 31], [-6, 13, 7, 4, 32], [2, -7.5, 20, 1.5, 33]]) {
  const g = buildGrassTufts(seed, 60, [sx, sz]);
  g.position.set(x, 0.04, z); scene.add(g);
}
// climbing vines: hero west wall, C south wall, shop2 east wall
{
  const v1 = buildVines(41, 2.4, 2.0); v1.rotation.y = -Math.PI / 2; v1.position.set(-5.08, 0.9, -1); scene.add(v1);
  const v2 = buildVines(42, 3.0, 1.8); v2.position.set(-9, 0.7, -8.92); scene.add(v2);
  const v3 = buildVines(43, 2.4, 1.8); v3.rotation.y = Math.PI / 2; v3.position.set(-9.68, 0.7, 13.5); scene.add(v3);
}
// moss carpets at stone bases
for (const [x, z, w, d, s] of [[-5.4, 2.4, 1.6, 1.0, 51], [5.4, 2.4, 1.6, 1.0, 52], [-4.2, 8.9, 1.2, 0.8, 53], [0, 4.2, 2.2, 1.4, 54]]) {
  const m = buildMoss(s, w, d);
  m.position.set(x, 0.055, z); m.rotation.y = s; scene.add(m);
}
// WAVE-B micro-density: wall-hugging moss/weeds/shrubs, canopy drifts, path pebbles.
// All coords overlap-checked (fence z=2.8, street z 5.5..8.5, drain 9.05, pond (-6,13)).
for (const [x, z, w, d, s] of [[-3.9, 3.7, 0.9, 0.9, 61], [3.1, 3.7, 0.9, 0.9, 62], [-8.4, 2.2, 0.7, 0.7, 63], [8.9, 2.2, 0.7, 0.7, 64]]) {
  const m = buildMoss(s, w, d);
  m.position.set(x, 0.055, z); m.rotation.y = s * 0.7; scene.add(m);
}
for (const [x, z, seed, n] of [[-7.5, 2.45, 71, 24], [-1.2, 2.45, 72, 24], [4.8, 2.45, 73, 24], [8.6, 3.4, 74, 18], [-4.2, 10.6, 75, 14]]) {
  const g = buildGrassTufts(seed, n, [1.2, 1.2]);
  g.position.set(x, 0.04, z); scene.add(g);
}
for (const [x, z, r, seed] of [[-2.5, -5.5, 0.85, 81], [3.0, -5.2, 1.0, 82]]) {
  const s = buildShrub(seed, r);
  s.position.set(x, 0.25, z); scene.add(s); addSway(s);
}
{ // fallen-leaf drifts under real canopies + kicked-pebble path shoulders
  const h1 = (i, s) => { const h = (Math.imul(i + 1, 2654435761) ^ Math.imul(s, 40503)) >>> 0; return (h >>> 0) / 4294967296; };
  const leafCols = [0xc23a24, 0xe07b28, 0x9a5a20, 0x6d8a3c];
  const mkDrift = (cx, cz, radius, n, seed) => {
    const geo = new THREE.PlaneGeometry(0.22, 0.18);
    const im = new THREE.InstancedMesh(geo, M.mapleLeaf, n);
    const d4 = new THREE.Object3D(); const col = new THREE.Color();
    for (let i = 0; i < n; i++) {
      const a = h1(i, seed) * Math.PI * 2, r = Math.sqrt(h1(i, seed + 1)) * radius;
      d4.position.set(cx + Math.cos(a) * r, 0.05, cz + Math.sin(a) * r); // 10mm above soil discs
      d4.rotation.set(-Math.PI / 2, 0, h1(i, seed + 2) * Math.PI * 2);
      d4.updateMatrix(); im.setMatrixAt(i, d4.matrix);
      col.setHex(leafCols[Math.floor(h1(i, seed + 3) * leafCols.length)]);
      col.offsetHSL((h1(i, seed + 4) - 0.5) * 0.05, 0, (h1(i, seed + 5) - 0.5) * 0.08);
      im.setColorAt(i, col);
    }
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
    im.receiveShadow = true;
    scene.add(im);
  };
  mkDrift(-4.2, 4.6, 1.1, 60, 91); // under maple (-4.2,4.6)
  mkDrift(6.8, 4.4, 1.0, 50, 92);  // under maple (6.8,4.4)
  const mkPebbles = (x0, x1, z, seed) => {
    const im = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.05, 0), M.stone, 40);
    const d4 = new THREE.Object3D();
    for (let i = 0; i < 40; i++) {
      d4.position.set(x0 + (h1(i, seed) * (x1 - x0)), 0.07, z + (h1(i, seed + 1) - 0.5) * 0.5);
      d4.rotation.set(h1(i, seed + 2) * 3, h1(i, seed + 3) * 3, 0);
      const sc = 0.7 + h1(i, seed + 4) * 0.8; d4.scale.set(sc, sc * 0.75, sc);
      d4.updateMatrix(); im.setMatrixAt(i, d4.matrix);
    }
    im.instanceMatrix.needsUpdate = true; im.castShadow = false; im.receiveShadow = true;
    scene.add(im);
  };
  mkPebbles(-6, -1, 4.9, 93); // N court shoulder, clear of edging z 5.2..5.5
  mkPebbles(1, 6, 8.2, 94);   // S street shoulder, clear of edging + drain
}

const atmo = buildAtmosphere(M, {
  // P2.10: leaves originate at real canopies (district maples)
  leafSources: [
    { x: -4.2, z: 4.6, r: 2.4 }, { x: 6.8, z: 4.4, r: 2.4 },
    { x: -8.2, z: -6.2, r: 2.4 }, { x: 13.5, z: -8.5, r: 2.4 },
    { x: -16.0, z: 3.5, r: 2.6 },
  ],
});
scene.add(atmo.group);

// --- weather / time-of-day / night sky ---
// REMASTERED-B: drainage channel joins pondWaterMats (rain sharpens it too);
// drip points + street basins flow town → weather (roof → chain → puddle).
const drainWater = town.group.getObjectByName('drainage')?.userData.waterMat || null;
const weather = createWeather({
  scene, pondWaterMats: drainWater ? [pond.waterMat, drainWater] : [pond.waterMat],
  wetMats: M._wet || [],
  heightFn: (x, z) => heightAt(x, z),
  // REMASTERED-F: roofs accumulate snow (§11 — tiles/ridge whiten with cover).
  // Instance tile tones multiply material color, so the shared lerp whitens
  // per-tile variation correctly. Eave undersides stay dark (sheltered) by
  // exclusion. Reversible on melt via cached dry values.
  snowMats: [M.stone, M.gravel, M.grass, M.roofTile, M.roofTileAlt, M.ridge].filter(Boolean),
  dripPoints: town.dripPoints || [],
  basins: town.basins || [],
});
const night = buildNightSky(scene);
const daytime = createDaytime({
  renderer, scene, sun, hemi, skyMat, houses: town.houses,
  lampGlows: det.lampGlows, lampLights: det.lampLights,
  vendGlow: det.group.userData.vendGlow, stars: night.stars, moon: night.moon,
});

const { camera, controls } = buildCamera(renderer);
const cine = createCinematics(camera, controls);
// P2.14 explore mode: first-person wander with terrain feet + building collisions.
// REMASTERED-entry: door houses collide as WALL SEGMENTS (not footprints) —
// front/back/side walls always solid, doorway leaf blocks only while the door
// is closed (blockWhen reads live slide targets). Open door → walk inside;
// interior floor (0.7) takes over from terrain via heightFn.
const exploreSolids = [];
const enterable = []; // full footprints where floor height applies
const heroDoor = { items: [] };
function segsFor(cx, cz, w, d, doorX, isOpen) {
  const x0 = cx - w / 2, x1 = cx + w / 2, z0 = cz - d / 2, z1 = cz + d / 2, T = 0.15;
  if (doorX === null) return [{ x0, x1, z0, z1 }]; // solid footprint (no entry)
  const gx0 = doorX - 0.55, gx1 = doorX + 0.55;
  return [
    { x0, x1: gx0, z0: z1 - T, z1: z1 + T },
    { x0: gx1, x1, z0: z1 - T, z1: z1 + T },
    { x0, x1, z0: z0 - T, z1: z0 + T },
    { x0: x0 - T, x1: x0 + T, z0, z1 },
    { x0: x1 - T, x1: x1 + T, z0, z1 },
    { x0: gx0, x1: gx1, z0: z1 - 0.35, z1: z1 + 0.35, blockWhen: isOpen },
  ];
}
function doorXOf(w, facadeCols, doorSide, px) {
  if (!doorSide) return null;
  const colW = w / (facadeCols ?? 3);
  return px + (doorSide < 0 ? -w / 2 + colW * 0.5 : w / 2 - colW * 0.5);
}
try {
  for (const h of town.houses) {
    if (h.name === 'hero') continue;
    const p = h.params || {};
    const w = p.w ?? 6, d = p.d ?? 6;
    const dx = ((h.sliders || []).length && (p.doorSide ?? 0) !== 0)
      ? doorXOf(w, p.facadeCols, p.doorSide, h.pos.x) : null;
    const isOpen = () => (h._slideItems || []).some(s => s && s.target > 0.5);
    for (const r of segsFor(h.pos.x, h.pos.z, w, d, dx, isOpen)) exploreSolids.push(r);
    if (dx !== null) enterable.push({ x0: h.pos.x - w / 2, x1: h.pos.x + w / 2, z0: h.pos.z - d / 2, z1: h.pos.z + d / 2 });
  }
  const heroLot = LAYOUT.find(l => l.name === 'hero');
  if (heroLot) {
    const hdx = (arch && typeof arch.openBayX === 'number') ? arch.openBayX + heroLot.cx : null;
    const hisOpen = () => heroDoor.items.some(s => s && s.target > 0.5);
    for (const r of segsFor(heroLot.cx, heroLot.cz, heroLot.w, heroLot.d, hdx, hisOpen)) exploreSolids.push(r);
    if (hdx !== null) enterable.push({ x0: heroLot.cx - heroLot.w / 2, x1: heroLot.cx + heroLot.w / 2, z0: heroLot.cz - heroLot.d / 2, z1: heroLot.cz + heroLot.d / 2 });
  }
  for (const h of settlement.houses) {
    const p = h.params || {};
    const w = p.w ?? h.w ?? 6, d = p.d ?? h.d ?? 6;
    const dx = ((h.sliders || []).length && (p.doorSide ?? 0) !== 0)
      ? doorXOf(w, p.facadeCols, p.doorSide, h.pos.x) : null;
    const isOpen = () => (h._slideItems || []).some(s => s && s.target > 0.5);
    for (const r of segsFor(h.pos.x, h.pos.z, w, d, dx, isOpen)) exploreSolids.push(r);
    if (dx !== null) enterable.push({ x0: h.pos.x - w / 2, x1: h.pos.x + w / 2, z0: h.pos.z - d / 2, z1: h.pos.z + d / 2 });
  }
} catch (e) {}
const explore = createExplore(camera, renderer.domElement, {
  heightFn: (x, z) => {
    let b = 0;
    try { b = heightAt(x, z); } catch (e) { b = 0; }
    if (!Number.isFinite(b)) b = 0;
    for (const r of enterable) {
      if (x > r.x0 && x < r.x1 && z > r.z0 && z < r.z1) return Math.max(b, 0.7);
    }
    return b;
  },
  solids: exploreSolids,
});
window.__explore = { get on() { try { return explore.enabled; } catch (e) { return false; } } };
window.addEventListener('tsuki-explore', (e) => {
  try {
    // detail is boolean (UI toggle) or {on, spawn} (deep link / probes)
    let on = false, spawn = null;
    try {
      const d = e && e.detail;
      if (d && typeof d === 'object') { on = !!d.on; spawn = d.spawn || null; }
      else on = !!d;
    } catch (err) {}
    if (on) {
      try { cine.setMode('free'); } catch (err) {}
      controls.enabled = false;
      const sp = spawn || { x: 0, z: 10 };
      explore.setEnabled(true, { x: sp.x ?? 0, z: sp.z ?? 10, yaw: Math.PI });
    } else {
      explore.setEnabled(false);
      controls.enabled = true;
      try { cine.setMode('orbit'); } catch (err) {}
    }
  } catch (err) {}
});
// P2.12: tap-to-interact (hero sliders + radio toggle). Drag/orbit unaffected.
const interact = createInteract(camera, renderer.domElement);
for (const s of (arch.sliders || [])) {
  const it = interact.addSlide(s.node, s.open);
  if (it) { it.t = 0; heroDoor.items.push(it); }
}
// REMASTERED-D: every district door leaf slides (§16 — closed by default)
// REMASTERED-G: hamlet/farmhouse doors join the circuit (barn has no door)
// REMASTERED-entry: slide handles captured per house → doorway colliders
// read live open state (open door = enterable in explore mode).
for (const h of [...town.houses, ...(settlement.houses || [])]) {
  h._slideItems = h._slideItems || [];
  for (const s of (h.sliders || [])) {
    try {
      const it = interact.addSlide(s.node, s.open);
      if (it) { it.t = 0; h._slideItems.push(it); }
    } catch (e) {}
  }
}
{
  const rm = (det.group.userData.radioMeshes || []).filter(Boolean);
  if (rm.length) interact.onTap(rm, () => {
    try {
      const st = audio.state ? audio.state() : null;
      audio.setEnabled(st && typeof st.enabled === 'boolean' ? !st.enabled : true);
    } catch (e) {}
  });
}
console.log('INTERACT targets: ' + interact.count);
// Diegetic shop radio (Suzume). Listener attaches lazily on first gesture.
const audio = createAudio({ camera, scene, zones: LAYOUT });
{
  const rp = (det.group.userData.radioPos) || new THREE.Vector3(15.5, 1.15, 14.5);
  if (audio.source) audio.source.position.copy(rp);
}
// Deep link: &music=0 starts muted (opt-out BEFORE first gesture).
// Default: enabled-pending-gesture — first tap resumes ctx + plays.
if (new URLSearchParams(location.search).get('music') === '0') {
  audio.setEnabled(false);
} else {
  armAutoplayOnce(audio);
}
window.__audio = audio; // headless probe: audio.state()
// shot moods (cinematic lighting suggestions) -> daytime + weather
cine.onMood(({ time, wx } = {}) => {
  if (time) daytime.set(time);
  if (wx) weather.setState(wx);
});
// restrained post: default off = bit-identical direct render
const post = createPost({ renderer, scene, camera });
window.__post = post;
try {
  const q = new URLSearchParams(location.search).get('post');
  post.setQuality(q === 'high' ? 'high' : q === 'low' ? 'low' : 'off');
} catch (e) { try { post.setQuality('off'); } catch (_e) { /* guarded */ } }
window.addEventListener('resize', () => {
  try { post.setSize(window.innerWidth, window.innerHeight); } catch (e) { /* guarded */ }
});
// pond tint follows sky mood (fog tracks it via daytime); temporally stable lerp
const pondBase = pond.waterMat.color.clone();
const pondTmp = new THREE.Color();

// --- perf probe (used for verification; #hud text is owned solely by ui.js) ---
let fpsEMA = 60;
window.__perf = () => ({
  calls: renderer.info.render.calls,
  triangles: renderer.info.render.triangles,
  geometries: renderer.info.memory.geometries,
  fps: Math.round(fpsEMA),
  errors: window.__errors || [],
});
window.__errors = [];
window.addEventListener('error', (e) => window.__errors.push(String(e.message)));

buildUI({ daytime, weather, cine, hudEl: document.getElementById('hud'), audio });

// deep links (shareable cinematic states; also used by headless verification):
// ?time=NIGHT&wx=rainy&shot=3&explore=1
{
  const qp = new URLSearchParams(location.search);
  const t = qp.get('time'), w = qp.get('wx'), s = qp.get('shot');
  if (t) daytime.set(t.toUpperCase());
  if (w) weather.setState(w.toLowerCase());
  if (s !== null) { cine.setMode('cine'); cine.goTo(Number(s) || 0); }
  if (qp.get('explore') === '1') {
    try {
      const ex = new URLSearchParams(location.search).get('exspawn');
      let sp = { x: 0, z: 10 };
      if (ex) {
        const [exx, ezz] = ex.split(',').map(Number);
        if (Number.isFinite(exx) && Number.isFinite(ezz)) sp = { x: exx, z: ezz };
      }
      window.dispatchEvent(new CustomEvent('tsuki-explore', { detail: { on: true, spawn: sp } }));
    } catch (e) {}
  }
  // headless entry proof: &doors=1 opens every slider leaf at load
  if (qp.get('doors') === '1') {
    try {
      for (const s of heroDoor.items) s.target = 1;
      for (const h of [...town.houses, ...(settlement.houses || [])]) {
        for (const s of (h._slideItems || [])) s.target = 1;
      }
    } catch (e) {}
  }
}

// --- animation loop (wall-clock by default; ?fixed=1&fps=N = deterministic) ---
const clock = new THREE.Timer(); // r170+: Clock deprecated in favor of Timer
const __cineQ = new URLSearchParams(location.search);
const __fixed = __cineQ.get('fixed') === '1';
const __cine = createClock({ fps: Number(__cineQ.get('fps')) || 30 });
// P2.13: ?lodfar=1 forces far-tier updates to prove the throttled path executes.
const lodQ = __cineQ.get('lodfar') === '1';
let lodTick = 0;
window.__cine = {
  get frame() { return __cine.frame; },
  get t() { return __cine.t; },
  get fps() { return __cine.fps; },
  mode: __fixed ? 'fixed' : 'wall',
};
let firstFrame = true;

function animate() {
  requestAnimationFrame(animate);
  let dt, t;
  if (__fixed) {
    // one exact cine frame per rAF: same updater calls, same order, derived time
    const s = __cine.step();
    dt = s.dt; t = s.t;
  } else {
    clock.update();
    dt = Math.min(clock.getDelta(), 0.05);
    t = clock.getElapsed();
  }
  if (dt > 0) fpsEMA += ((1 / Math.max(dt, 1e-3)) - fpsEMA) * 0.05;

  // P2.13: distance-tiered updates (near full / mid half-rate / far quarter).
  // Current camera range (≤48m) is always tier 0 — verified no behavior change.
  // ?lodfar=1 forces tier 2 to prove the path executes (console + visuals hold).
  lodTick++;
  const lodTier = lodQ ? 2 : (camera.position.length() < 60 ? 0 : camera.position.length() < 120 ? 1 : 2);
  const lodFull = lodTier === 0 || (lodTier === 1 ? lodTick % 2 === 0 : lodTick % 4 === 0);

  if (lodFull) {
  pond.update(t, weather);
  pondTmp.copy(pondBase).lerp(scene.fog.color, 0.35);
  pond.waterMat.color.lerp(pondTmp, 0.08);
  atmo.update(t, dt);
  for (const tick of tickers) tick(t);
  }

  // hero noren sway + hanging lantern sway/flicker (v1 life, kept)
  arch.noren.children.forEach((strip, i) => {
    strip.rotation.x = Math.sin(t * 1.3 + i * 0.9) * 0.06 * (0.5 + WIND.gust(t));
  });
  interior.lantern.rotation.x = Math.sin(t * 0.8) * 0.03;
  interior.lantern.rotation.z = Math.cos(t * 0.6) * 0.03;
  interior.lanternLight.intensity = 5 + Math.sin(t * 7.3) * 0.25 + Math.sin(t * 13.1) * 0.15;

  weather.update(dt, t);
  daytime.update(dt, weather);
  // P2.10: power AFTER daytime (scales daytime-set lamp intensities; never accumulates)
  {
    const ds = daytime.state;
    const night = (ds === 'NIGHT' || ds === 'MOONLIT' || ds === 'RAIN_NIGHT' || ds === 'MIST_NIGHT') ? 1
      : (ds === 'SUNSET' || ds === 'BLUE_HOUR') ? 0.45 : 0;
    power.update(dt, t, weather.state, night);
  }
  if (lodFull) fire.update(t, dt, windAt(7.5, 24.5, t));
  night.setMoon(daytime.state === 'NIGHT' ? 1 : 0);  cine.update(dt);
  audio.update(dt);
if (det && det.group && !det.group.userData.__householdPushed) {
  det.group.userData.__householdPushed = true;
  for (const c of householdCloth) det.cloth.push(c);
}
  updateDetails(det, t, WIND);
  if (lodFull) swayVegetation(vegRoots, t, WIND);
  interact.update(dt);
  explore.update(dt);

  // OrbitControls must not run in explore mode (update() stomps the FP camera
  // even with controls.enabled=false); cinematics.js guards its own call too.
  if (!explore.enabled) controls.update();
  // Sky-dome fix: dome centered on camera every frame (see lighting.js) —
  // its far hemisphere can never cross the far plane → no black regions.
  if (sky) sky.position.copy(camera.position);
  // dev-overlay camera readout (ui.js reads window.__cam if present, else shows 'n/a')
  try {
    window.__cam = {
      pos: camera.position.toArray(),
      tgt: (controls && controls.target) ? controls.target.toArray() : []
    };
  } catch (err) { /* guarded */ }
  post.render();

  if (firstFrame) {
    firstFrame = false;
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 700);
  }
}
animate();
