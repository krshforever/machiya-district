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
import { buildTown } from './town.js';
import { buildDetails, updateDetails } from './details.js';
import { createWeather, WIND } from './weather.js';
import { createDaytime, buildNightSky } from './daytime.js';
import { createCinematics } from './cinematics.js';
import { buildUI } from './ui.js';
import { buildSignage } from './signage.js';
import {
  buildMapleVar, buildBambooCluster, buildShrub, buildGrassTufts,
  buildVines, buildMoss, swayVegetation,
} from './vegetation.js';

// --- renderer (mobile/thermal discipline: pixelRatio capped at 2) ---
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const M = buildMaterials();
setSharedM(M); // district builders reuse the textured mothership registry

const { sun, hemi, skyMat } = buildLighting(scene, renderer);

// --- hero machiya: v1 modules grouped, upgraded, placed on its town lot ---
const heroGroup = new THREE.Group();
heroGroup.name = 'hero_machiya';
const arch = buildArchitecture(M);
const roof = buildRoof(M);
const interior = buildInterior(M);
heroGroup.add(arch.group, roof.group, interior.group);
upgradeHero(heroGroup, { nageshiY: 2.2, eaveY: 3.7, doorX: arch.openBayX });

// --- district: town (repositions heroGroup to its lot), details, pond, vegetation ---
const town = buildTown({ scene, heroGroup });
const det = buildDetails(town);
scene.add(det.group);

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

// district vegetation (seeded, no twins) — roots collected for wind sway
const vegRoots = [];
const tickers = []; // v1 leaf/culm shimmer updaters, called per frame
const addSway = (o) => { if (o?.userData?.sway) vegRoots.push(o); if (o?.userData?.tick) tickers.push(o.userData.tick); return o; };
[
  [-4.2, 4.6, 1.3, 0.75], [6.8, 4.4, 1.0, 0.55], [-8.2, -6.2, 1.5, 0.9],
  [13.5, -8.5, 1.1, 0.4], [-16, 3.5, 0.9, 0.65],
].forEach(([x, z, s, a], i) => {
  const m = buildMapleVar(M, i + 1, s, a, x, z);
  m.position.set(x, 0, z); scene.add(m); addSway(m);
});
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

const atmo = buildAtmosphere(M);
scene.add(atmo.group);

// --- weather / time-of-day / night sky ---
const weather = createWeather({ scene, pondWaterMats: [pond.waterMat], wetMats: M._wet || [] });
const night = buildNightSky(scene);
const daytime = createDaytime({
  renderer, scene, sun, hemi, skyMat, houses: town.houses,
  lampGlows: det.lampGlows, lampLights: det.lampLights,
  vendGlow: det.group.userData.vendGlow, stars: night.stars, moon: night.moon,
});

const { camera, controls } = buildCamera(renderer);
const cine = createCinematics(camera, controls);

// --- HUD + perf probe (used for verification) ---
const hud = document.getElementById('hud');
let hudTimer = 0, fpsEMA = 60;
function updateHud() {
  const info = renderer.info;
  hud.innerHTML =
    `draw calls&nbsp; ${info.render.calls}<br>` +
    `triangles&nbsp;&nbsp; ${info.render.triangles.toLocaleString('en-US')}<br>` +
    `geometries&nbsp; ${info.memory.geometries}`;
}
window.__perf = () => ({
  calls: renderer.info.render.calls,
  triangles: renderer.info.render.triangles,
  geometries: renderer.info.memory.geometries,
  fps: Math.round(fpsEMA),
  errors: window.__errors || [],
});
window.__errors = [];
window.addEventListener('error', (e) => window.__errors.push(String(e.message)));

buildUI({ daytime, weather, cine, hudEl: document.getElementById('hud') });

// deep links (shareable cinematic states; also used by headless verification):
// ?time=NIGHT&wx=rainy&shot=3
{
  const qp = new URLSearchParams(location.search);
  const t = qp.get('time'), w = qp.get('wx'), s = qp.get('shot');
  if (t) daytime.set(t.toUpperCase());
  if (w) weather.setState(w.toLowerCase());
  if (s !== null) { cine.setMode('cine'); cine.goTo(Number(s) || 0); }
}

// --- animation loop ---
const clock = new THREE.Clock();
let firstFrame = true;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  if (dt > 0) fpsEMA += ((1 / Math.max(dt, 1e-3)) - fpsEMA) * 0.05;

  pond.update(t);
  atmo.update(t, dt);
  for (const tick of tickers) tick(t);

  // hero noren sway + hanging lantern sway/flicker (v1 life, kept)
  arch.noren.children.forEach((strip, i) => {
    strip.rotation.x = Math.sin(t * 1.3 + i * 0.9) * 0.06 * (0.5 + WIND.gust(t));
  });
  interior.lantern.rotation.x = Math.sin(t * 0.8) * 0.03;
  interior.lantern.rotation.z = Math.cos(t * 0.6) * 0.03;
  interior.lanternLight.intensity = 5 + Math.sin(t * 7.3) * 0.25 + Math.sin(t * 13.1) * 0.15;

  weather.update(dt, t);
  daytime.update(dt, weather);
  night.setMoon(daytime.state === 'NIGHT' ? 1 : 0);
  cine.update(dt);
  updateDetails(det, t, WIND);
  swayVegetation(vegRoots, t, WIND);

  controls.update();
  renderer.render(scene, camera);

  if (firstFrame) {
    firstFrame = false;
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 700);
  }
  hudTimer += dt;
  if (hudTimer > 0.5) { hudTimer = 0; updateHud(); }
}
updateHud();
animate();
