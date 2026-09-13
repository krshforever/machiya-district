// tools/forge3d-slice3-gate.mjs — Forge3D Slice 3 (P0-2) headless gate (node, no browser).
// Run: node tools/forge3d-slice3-gate.mjs
// 1. Re-runs slice-2 gate. 2. Slice-3: plateau 0, ring <2k + shadowless +
//    new-stream, HAZE_HEX single source, linear-fog ranges, static <490k.
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dir, '..');

// 1. Slice-2 gate first (exits non-zero on failure).
try {
  execSync('node tools/forge3d-slice2-gate.mjs', { cwd: root, stdio: 'inherit' });
} catch {
  console.error('\nSLICE-3 GATE FAILED: slice-2 gate red.');
  process.exit(1);
}

let fails = 0;
const ok = (cond, msg) => {
  console.log(`${cond ? 'PASS' : 'FAIL'}  ${msg}`);
  if (!cond) fails++;
};
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');

// 2. Plateau interior EXACTLY 0 (mask fn present, d=0 maps to 0).
{
  const w = read('src/world.js');
  ok(/function plateauMask/.test(w), 'plateau mask present in world.js');
  ok(/d \/ 10/.test(w) || /d\/10/.test(w), 'plateau feather untouched (10m smoothstep)');
  ok(/if \(m <= 0\) return 0/.test(w), 'plateau interior returns EXACTLY 0');
}

// 3. Ring: <2k tris, new stream, shadowless, no shader hacks, render order.
{
  const r = read('src/farRidgeRing.js');
  const segs = Number((r.match(/RING_SEGMENTS\s*=\s*(\d+)/) || [])[1]);
  const bands = (r.match(/r:\s*\d+/g) || []).length;
  const tris = segs * bands * 2;
  ok(Number.isFinite(tris) && tris < 2000, `ring tris ${tris} (${bands} bands x ${segs} segs x2) <2000`);
  ok(/RING_STREAM\s*=\s*0x/i.test(r), 'ring uses NEW hash stream (no reshuffle)');
  ok(/castShadow\s*=\s*false/.test(r) && /receiveShadow\s*=\s*false/.test(r), 'ring shadowless (cast+receive false)');
  ok(!/onBeforeCompile/.test(r), 'no onBeforeCompile in ring');
  ok(/renderOrder\s*=\s*1/.test(r), 'ring renderOrder 1 (after sky dome, dome stays backdrop)');
  ok(/HAZE_HEX/.test(r), 'ring tint references HAZE_HEX');
  const w = read('src/main.js');
  ok(w.includes('createFarRidgeRing'), 'ring wired in main (+1 draw)');
}

// 4. Haze single source: haze.js defines, daytime + lighting + ring reference.
{
  const h = read('src/haze.js');
  ok(/HAZE_HEX\s*=\s*0x[0-9a-fA-F]{6}/.test(h), 'haze.js defines HAZE_HEX hex');
  ok(read('src/daytime.js').includes('HAZE_HEX'), 'daytime references HAZE_HEX (DAY fog)');
  ok(read('src/lighting.js').includes('HAZE_HEX'), 'lighting references HAZE_HEX (base fog)');
}

// 5. Linear fog ranges: clear far carries the ring (260-368m), mist/rain/snow close in.
{
  const d = read('src/daytime.js');
  const m = d.match(/fog\.far\s*=\s*THREE\.MathUtils\.lerp\((\d+),\s*(\d+),\s*mistK\)\s*-\s*rainK\s*\*\s*(\d+)\s*-\s*snowK\s*\*\s*(\d+)/);
  ok(!!m, 'fog.far formula present (lerp(clear, mist) - rain - snow)');
  if (m) {
    const [, clear, mist, rain, snow] = m.map(Number);
    ok(clear >= 450 && clear <= 600, `clear far ${clear} carries ring (450-600)`);
    ok(mist >= 60 && mist <= 120, `mist far ${mist} closes in (60-120)`);
    ok(clear - rain >= 250, `rain far ${clear - rain} stays moody (>=250)`);
    ok(clear - snow >= 250, `snow far ${clear - snow} stays moody (>=250)`);
  }
  const c = read('src/camera.js');
  ok(/0\.3,\s*500/.test(c), 'camera far 500 (ring at 368 inside frustum)');
}

// 6. Funding: caps trimmed (285 total), static estimate <490k.
{
  const e = read('src/ecology.js');
  const cm = e.match(/const CAP\s*=\s*\{\s*sugi:\s*(\d+),\s*hinoki:\s*(\d+),\s*momiji:\s*(\d+),\s*bamboo:\s*(\d+),\s*pine:\s*(\d+)/);
  ok(!!cm, 'ecology CAP table present');
  if (cm) {
    const total = cm.slice(1).map(Number).reduce((a, b) => a + b, 0);
    ok(total === 285, `far caps total ${total} (285 = 340 - 55 funding cuts)`);
    // ~100 tris/instance (slice-1 estimate) → 28500 pools + 768 ring
    const est = total * 100 + 768;
    console.log(`INFO  far pools ≈ ${total * 100} + ring 768 = ${est} (slice-1 was 34100 → net ${est - 34100})`);
    ok(est < 30000, `far-forest static ${est} < 30000 (net-negative vs slice-1)`);
  }
}

// 8. Sky-dome black-region fix: dome unculled + returned + camera-followed.
{
  const l = read('src/lighting.js');
  ok(l.includes('frustumCulled = false'), 'sky dome never culled');
  ok(/return\s*\{\s*sun,\s*hemi,\s*skyMat,\s*sky\s*\}/.test(l), 'lighting returns sky mesh');
  const m = read('src/main.js');
  ok(m.includes('sky.position.copy(camera.position)'), 'dome centered on camera per frame (no far-plane clip → no black sky)');
}

// 7. Runtime determinism: no Math.random() in src/ (ships to browser).
{
  const l = read('src/lighting.js');
  ok(l.includes('frustumCulled = false'), 'sky dome never culled');
  ok(/return\s*\{\s*sun,\s*hemi,\s*skyMat,\s*sky\s*\}/.test(l), 'lighting returns sky mesh');
  const m = read('src/main.js');
  ok(m.includes('sky.position.copy(camera.position)'), 'dome centered on camera per frame (no far-plane clip → no black sky)');
}
// (tools/ excluded: dev-only gate scripts mention the string in their checks.)
{
  const hits = [];
  const srcDir = path.join(root, 'src');
  for (const en of fs.readdirSync(srcDir)) {
    if (!/\.js$/.test(en)) continue;
    const code = read(`src/${en}`).replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
    if (code.includes('Math.random(')) hits.push(en);
  }
  ok(hits.length === 0, `no Math.random() in src/ (${hits.join(',') || 'clean'})`);
}

if (fails) {
  console.error(`\nSLICE-3 GATE FAILED: ${fails} check(s) red.`);
  process.exit(1);
}
console.log('\nSLICE-3 GATE GREEN: silhouette ring + haze discipline hold.');
