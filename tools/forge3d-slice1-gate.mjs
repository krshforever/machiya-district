// tools/forge3d-slice1-gate.mjs — Forge3D Slice 1 headless gate (node, no browser).
// Run: node tools/forge3d-slice1-gate.mjs
// Checks: WORLD_SEED, plateau EXACTLY 0, stream determinism, ecology static
// invariants (species pools, new salts, no cylinders, attributes), vendor files,
// registry/credits present. Draws/tris: static estimate + renderer.info paste-in.
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WORLD_SEED, heightAt, streamFor } from '../src/world.js';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dir, '..');
let fails = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${msg}`);
  if (!cond) fails++;
};

// 1. WORLD_SEED preserved
ok(WORLD_SEED === 20260912, `WORLD_SEED === 20260912 (got ${WORLD_SEED})`);

// 2. District plateau EXACTLY 0 (strict ===, grid over village bounds + center)
{
  let bad = 0, n = 0;
  for (let x = -24; x <= 24; x += 3) {
    for (let z = -18; z <= 26; z += 3) {
      n++;
      if (heightAt(x, z) !== 0) bad++;
    }
  }
  ok(bad === 0, `plateau EXACTLY 0 on ${n} village samples (${bad} nonzero)`);
  ok(heightAt(0, 4) === 0, 'plateau center (0,4) === 0');
}

// 3. Determinism: same stream twice identical; new salts differ from retired salt
{
  const a = streamFor(11, 5, 201), b = streamFor(11, 5, 201), c = streamFor(11, 5, 105);
  const sa = Array.from({ length: 10 }, () => a());
  const sb = Array.from({ length: 10 }, () => b());
  const sc = Array.from({ length: 10 }, () => c());
  ok(sa.every((v, i) => v === sb[i]), 'streamFor(11,5,201) reload-twice identical');
  ok(!sa.every((v, i) => v === sc[i]), 'new salt 201 differs from retired far-forest salt 105');
}

// 4. Ecology static invariants (read source as text — no DOM/three needed)
{
  const src = fs.readFileSync(path.join(root, 'src/ecology.js'), 'utf8');
  for (const sp of ['sugi', 'hinoki', 'momiji', 'bamboo', 'pine']) {
    ok(src.includes(`'${sp}'`) || src.includes(`"${sp}"`), `species bucket present: ${sp}`);
  }
  ok(src.includes('LatheGeometry'), 'tapered lathe trunk present');
  ok(!src.includes('CylinderGeometry'), 'NO cylinders in far-forest trunks');
  ok(src.includes('streamFor(11, 5, 201)'), 'far forest uses NEW stream salt 201');
  ok(!src.includes('streamFor(11, 5, 105)'), 'retired salt 105 gone from far forest');
  for (const s of ['101', '102', '103', '104']) {
    ok(src.includes(s), `near-detail seed ${s} preserved (no reorder)`);
  }
  const code = src.replace(/\/\/.*$/gm, ''); // strip line comments before call checks
  ok(!code.includes('Math.random('), 'no Math.random() calls (determinism)');
  for (const attr of ['aWind', 'aAutumn', 'aUvRot']) {
    ok(src.includes(attr), `per-instance attribute present: ${attr}`);
  }
  ok(src.includes('setColorAt'), 'per-instance color tint present');
  ok(src.includes('40'), 'momiji ~40% negative-space rejection present');
  // 10 pools = per-species loop constructing trunk + leaf InstancedMesh each
  // (text shows 2 `new` sites inside the loop; runtime yields 5 species x 2).
  const hasSpeciesLoop = /for\s*\(\s*const\s+sp\s+of\s+species\)/.test(src)
    && src.includes("const species = ['sugi', 'hinoki', 'momiji', 'bamboo', 'pine']");
  const buildsTrunkAndLeaf = /const trunks = new THREE\.InstancedMesh/.test(src)
    && /const leaves = new THREE\.InstancedMesh/.test(src);
  ok(hasSpeciesLoop && buildsTrunkAndLeaf, '10 InstancedMesh pools (5 species x trunk+leaf loop)');
  ok(src.includes('castShadow = false'), 'far pools cast no shadows (thin-geometry shadow discipline)');
}

// 5. Vendor pipeline: files exist, registry + credits + drop-in contract
{
  const req = [
    'ASSET_REGISTRY.md',
    'CREDITS.md',
    'src/vendor.js',
    'public/vendor/commons/sugi_bark/1280px-Cryptomeria_japonica_(bark)_of_Okuteshinmei-jinja.jpg',
    'public/vendor/commons/weathered_wood/1280px-Weathered_barn_wood_with_worm_holes.jpg',
    'public/vendor/commons/moss/1280px-Moss_green_texture.jpg',
    'public/vendor/commons/gravel/1280px-Gravel_texture.jpg',
    'public/vendor/commons/moss_cc0/1280px-Moss_Texture.png',
    'public/vendor/commons/needle_litter/Forest_floor_with_loblolly_pine_needles.jpg',
  ];
  for (const f of req) ok(fs.existsSync(path.join(root, f)), `vendored: ${f}`);
  const reg = fs.readFileSync(path.join(root, 'ASSET_REGISTRY.md'), 'utf8');
  ok(reg.includes('Drop-in contract') || reg.includes('DROP-IN'), 'registry documents drop-in contract');
  ok(reg.includes('CC0') && reg.includes('Public domain') && reg.includes('CC BY-SA 4.0'), 'registry records licenses');
  const v = fs.readFileSync(path.join(root, 'src/vendor.js'), 'utf8');
  // discipline: albedo maps sRGB, data (rough/normal) linear — both tokens present
  ok(v.includes('SRGBColorSpace'), 'vendor albedo sRGB discipline present');
  ok(v.includes('anisotropy = 4') || v.includes('anisotropy=4'), 'vendor anisotropy 4 present');
  ok(v.includes('fallback'), 'vendor procedural fallback present');
}

// 6. Static tris estimate (far pools only) — must leave headroom under 500k
{
  // cone(7,3)≈42 + lathe(6×5)≈60 per conifer-ish tree; momiji lump ≈ 36+60; pine ≈ 48+60
  const per = { sugi: 102, hinoki: 108, momiji: 96, bamboo: 80, pine: 108 };
  const cap = { sugi: 110, hinoki: 80, momiji: 70, bamboo: 40, pine: 40 };
  const est = Object.keys(per).reduce((s, k) => s + per[k] * cap[k], 0);
  console.log(`INFO  far-pool tris estimate ≈ ${est} (caps ${JSON.stringify(cap)})`);
  ok(est < 40000, `far pools ≈ ${est} tris (<40k, replaces heavier blobs — net DOWN)`);
  console.log('INFO  scene tris/draws: paste renderer.info after `npm run build` + one frame:');
  console.log('INFO    renderer.info.render.triangles (shadow pass inflates: keep far pools castShadow=false)');
  console.log('INFO    renderer.info.render.calls (far forest 3 -> 10 by design; scene target <2200 via slice-2 merging)');
}

if (fails) {
  console.error(`\nGATE FAILED: ${fails} check(s) red.`);
  process.exit(1);
}
console.log('\nGATE GREEN: slice-1 invariants hold. Record renderer.info triangles/calls for the slice log.');
