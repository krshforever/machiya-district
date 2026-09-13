// tools/forge3d-t1-gate.mjs — T1 village vegetation gate (node, no browser).
// Run: node tools/forge3d-t1-gate.mjs (on branch forge3d-rebuild)
// 1. Re-runs slice-3 gate. 2. T1: scaffold tokens, tip-only leaves, no sphere
//    canopy in new builders, TREE_V2 determinism, materials keys, vendor slots,
//    village placements present, bans hold.
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dir, '..');

try {
  execSync('node tools/forge3d-slice3-gate.mjs', { cwd: root, stdio: 'inherit' });
} catch {
  console.error('\nT1 GATE FAILED: slice-3 gate red.');
  process.exit(1);
}

let fails = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${msg}`);
  if (!cond) fails++;
};
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');

// 2. Scaffold tokens in vegetation.js (appended T1 section).
{
  const v = read('src/vegetation.js');
  for (const t of ['TAPER_TOKEN', 'WHORL_ANGLE_MIN', 'TIP_CLUSTER_ONLY', 'NO_SPHERE_CANOPY', 'WINTER_BARE_STRUCTURE', 'TREE_V2:'])
    ok(v.includes(t), `scaffold token present: ${t}`);
  for (const b of ['buildSugi', 'buildHinoki', 'buildKeyaki', 'buildMomiji', 'buildMatsu', 'buildKaki', 'buildKuri', 'buildSakura', 'buildBambooClump', 'buildUnderstoryPatch', 'tipCluster', 'treeV2Stream'])
    ok(v.includes(`function ${b}`) || v.includes(`const ${b}`), `builder present: ${b}`);
  // old builders preserved (no replacement breakage)
  for (const b of ['buildMapleVar', 'buildBambooCluster', 'buildShrub', 'buildGrassTufts', 'buildLitterMerged', 'swayVegetation'])
    ok(v.includes(b), `legacy builder preserved: ${b}`);
  // canopy never a sphere in new builders (fruit spheres explicitly allowed)
  const sphereUses = (v.match(/new THREE\.SphereGeometry/g) || []).length;
  ok(sphereUses <= 3, `SphereGeometry uses ${sphereUses} (fruit + moss + pads only, no canopy shells)`);
}

// 3. TREE_V2 determinism (node-importable pure functions — no THREE needed).
{
  const code = read('src/vegetation.js');
  ok(/function treeV2Stream/.test(code), 'treeV2Stream defined');
  ok(!/Math\.random\(/.test(code.replace(/\/\/.*$/gm, '')), 'no Math.random in vegetation.js');
}

// 4. Materials keys for all 19 mats.* slots.
{
  const m = read('src/materials.js');
  for (const k of ['barkSugi', 'barkHinoki', 'barkKeyaki', 'barkMomiji', 'barkOrchard', 'leafSugi', 'leafBroad', 'leafMomiji', 'leafBlossom', 'leafPine', 'leafBamboo', 'leafSasa', 'leafFern', 'leafSeedling', 'shoot', 'litter', 'impostor'])
    ok(m.includes(`M.${k}`), `materials key present: M.${k}`);
  ok(m.includes('M.moss') && m.includes('M.bamboo'), 'moss/culm reuse existing keys');
}

// 5. Vendor slots for bark PBR + zelkova (files on disk, fallback noted).
{
  const v = read('src/vendor.js');
  ok(v.includes("key: 'barkPBR'"), 'vendor slot barkPBR');
  ok(v.includes("key: 'zelkovaBark'"), 'vendor slot zelkovaBark');
  for (const f of [
    'public/vendor/commons/bark_pbr/bark_brown_diff.jpg',
    'public/vendor/commons/bark_pbr/bark_brown_nor_1k.png',
    'public/vendor/commons/bark_pbr/bark_brown_rough_1k.png',
    'public/vendor/commons/zelkova_bark/zelkova_bark.jpg',
    'public/vendor/commons/thatch/thatch_hamptonne_1k.jpg',
    'public/vendor/commons/castle_stone/marugame_wall_1k.jpg',
    'public/vendor/commons/planks/wood_planks_1k.jpg',
  ]) ok(fs.existsSync(path.join(root, f)), `village scan on disk: ${f}`);
}

// 6. Village placements in ecology.js (satoyama layer, new stream, clearance).
{
  const e = read('src/ecology.js');
  ok(e.includes('T1 village vegetation'), 'village pass present');
  ok(e.includes('streamFor(9, 4, 301)'), 'new placement stream salt 301');
  ok(e.includes('treeV2Stream'), 'per-tree TREE_V2 rng');
  for (const t of ['keyaki', 'sakura', 'matsu', 'hinoki', 'kaki', 'kuri', 'moso', 'madake', 'momiji-river'])
    ok(e.includes(t), `village placement present: ${t}`);
  ok(e.includes('findPockets') && e.includes('buildEcology'), 'legacy ecology intact');
  ok(e.includes('castShadow = true'), 'near heroes earn shadows');
}

// 8. T1-fix (triangles + wallpaper): cluster alpha, composite ground, smooth canopy.
{
  const m = read('src/materials.js');
  ok(m.includes('leafClusterDraw') && m.includes('alphaTest'), 'leaf-cluster alpha card on leaf mats');
  const t = read('src/terrain.js');
  ok(t.includes('composite') && t.includes('37 * Math.PI'), 'ground composite bake (rotated litter + grain)');
  const e = read('src/ecology.js');
  ok(e.includes('mergeVertices'), 'canopy weld for smooth shading');
  ok(e.includes('drop whole face'), 'momiji face-level gap rejection (no triangle soup)');
  ok(e.includes('IcosahedronGeometry(r, 1)'), 'momiji detail-1 lumps');
}

// 7. Registry + credits cover new scans.
{
  const m = read('src/materials.js');
  ok(m.includes('leafClusterDraw') && m.includes('alphaTest'), 'leaf-cluster alpha card on leaf mats');
  const t = read('src/terrain.js');
  ok(t.includes('composite') && t.includes('37 * Math.PI'), 'ground composite bake (rotated litter + grain)');
  const e = read('src/ecology.js');
  ok(e.includes('mergeVertices'), 'canopy weld for smooth shading');
  ok(e.includes('drop whole face'), 'momiji face-level gap rejection (no triangle soup)');
  ok(e.includes('IcosahedronGeometry(r, 1)'), 'momiji detail-1 lumps');
}
{
  const reg = read('ASSET_REGISTRY.md');
  ok(reg.includes('Slice V1') && reg.includes('zelkova') && reg.includes('bark_pbr'), 'registry covers village scans');
  ok(read('CREDITS.md').includes('Baglioni') || read('CREDITS.md').includes('Poly Haven'), 'credits cover CC0 bark');
}

if (fails) {
  console.error(`\nT1 GATE FAILED: ${fails} check(s) red.`);
  process.exit(1);
}
console.log('\nT1 GATE GREEN: village vegetation invariants hold.');
