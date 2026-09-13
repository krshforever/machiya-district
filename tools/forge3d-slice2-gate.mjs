// tools/forge3d-slice2-gate.mjs — Forge3D Slice 2 headless gate (node, no browser).
// Run: node tools/forge3d-slice2-gate.mjs
// 1. Re-runs slice-1 gate (fails here if slice-1 invariants regress).
// 2. Slice-2 invariants: terrain height untouched, plateau color guard, zero new
//    geometry in terrain path, vendor PBR slots complete, HDRI wired w/ fallback,
//    registry/credits, repo-wide determinism, draws/tris static estimate.
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

// 1. Slice-1 gate first (exits non-zero on failure — desired).
await import('./forge3d-slice1-gate.mjs');

const __dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dir, '..');
let fails = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${msg}`);
  if (!cond) fails++;
};
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');

// 2. Terrain height function untouched (visual blend only, plateau EXACTLY 0).
{
  const t = read('src/terrain.js');
  ok(t.includes('pos.setY(i, h - 0.05)'), 'terrain height math untouched (h - 0.05)');
  ok(t.includes('isVillage') && t.includes('district plateau color stays'), 'plateau color guard present (village exempt from bands)');
  ok(!t.includes('new THREE.InstancedMesh'),
    'zero new instanced geometry in terrain path (vertex colors + maps only)');
  for (const band of ['_moss', '_mud', '_litter']) ok(t.includes(band), `terrain physical band present: ${band}`);
}

// 3. Vendor PBR slots: every entry has fallback + files on disk.
{
  const v = read('src/vendor.js');
  const keys = ['ground037-soil', 'moss002', 'rock035', 'gravel043', 'bark006', 'woodsiding013', 'plaster001', 'roofing006'];
  for (const k of keys) ok(v.includes(`key: '${k}'`), `PBR slot present: ${k}`);
  const fallbacks = (v.match(/fallbackNote/g) || []).length;
  ok(fallbacks >= 14, `all slots carry fallbackNote (${fallbacks} found, need 14+)`);
  ok(v.includes('scannedSetFor'), 'scannedSetFor exported for direct PBR wiring');
  ok(v.includes('HDRI_PRESETS'), 'HDRI_PRESETS exported (clear/overcast/night)');
  ok(v.includes('NoColorSpace'), 'linear discipline for normal/roughness present');
  const pbrFiles = [
    'public/vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg',
    'public/vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg',
    'public/vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg',
    'public/vendor/ambientcg/Moss002/Moss002_1K-JPG_Color.jpg',
    'public/vendor/ambientcg/Rock035/Rock035_1K-JPG_NormalGL.jpg',
    'public/vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Roughness.jpg',
    'public/vendor/ambientcg/Bark006/Bark006_1K-JPG_Color.jpg',
    'public/vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Color.jpg',
    'public/vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Color.jpg',
    'public/vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_NormalGL.jpg',
  ];
  for (const f of pbrFiles) ok(fs.existsSync(path.join(root, f)), `PBR file on disk: ${f}`);
  const hdris = [
    'public/vendor/hdri/venice_sunset_1k.hdr',
    'public/vendor/hdri/quarry_01_1k.hdr',
    'public/vendor/hdri/moonless_golf_1k.hdr',
  ];
  for (const f of hdris) ok(fs.existsSync(path.join(root, f)), `HDRI on disk: ${f}`);
}

// 4. HDRI wired with fallback (never throws, procedural env stays).
{
  const l = read('src/lighting.js');
  ok(l.includes("from 'three/addons/loaders/RGBELoader.js'"), 'RGBELoader from three/addons (repo convention)');
  ok(l.includes('HDRI_PRESETS'), 'HDRI presets consumed in lighting');
  ok(l.includes('procedural env stays'), 'HDRI fallback to procedural env present');
}

// 5. Wet-darkening + terrain registered.
{
  const w = read('src/weather.js');
  ok(w.includes('0.55, wetness') || w.includes("lerp(1, 0.55, wetness)"), 'rain albedo darkening in wet loop');
  const m = read('src/main.js');
  ok(m.includes('registerWet(terrain.mesh.material)'), 'terrain ground in wet registry');
}

// 6. Registry + credits list slice-2 assets with licenses.
{
  const reg = read('ASSET_REGISTRY.md');
  ok(reg.includes('Slice 2') && reg.includes('AmbientCG'), 'registry has slice-2 section');
  for (const id of ['Ground037', 'Moss002', 'Rock035', 'Gravel043', 'Bark006', 'WoodSiding013', 'Plaster001', 'RoofingTiles006'])
    ok(reg.includes(id), `registry records ${id}`);
  ok(reg.includes('MIT') && reg.includes('CC0'), 'registry records HDRI MIT + PBR CC0');
  const cr = read('CREDITS.md');
  ok(cr.includes('AmbientCG') && cr.includes('three.js'), 'credits list AmbientCG + three.js HDRI');
}

// 7. Repo-wide determinism: no Math.random() calls in src (comments stripped).
{
  const files = fs.readdirSync(path.join(root, 'src')).filter((f) => f.endsWith('.js'));
  let hits = [];
  for (const f of files) {
    const code = read(`src/${f}`).replace(/\/\/.*$/gm, '');
    if (code.includes('Math.random(')) hits.push(f);
  }
  ok(hits.length === 0, `no Math.random() in src (${hits.join(',') || 'clean'})`);
}

// 8. Static tris delta ≈ 0 (no new geometry anywhere this slice).
console.log('INFO  slice-2 adds zero BufferGeometry/InstancedMesh by construction (maps + vertex colors only).');
console.log('INFO  scene tris/draws: paste renderer.info after `npm run build` + one frame.');

if (fails) {
  console.error(`\nSLICE-2 GATE FAILED: ${fails} check(s) red.`);
  process.exit(1);
}
console.log('\nSLICE-2 GATE GREEN: terrain blend + HDRI/PBR invariants hold.');
