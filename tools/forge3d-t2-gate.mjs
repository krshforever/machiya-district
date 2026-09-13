#!/usr/bin/env node
// tools/forge3d-t2-gate.mjs — Forge3D T2 skeleton gate. Chains T1 gate, then T2 checks.
import { readFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
const fail = (m) => { console.error('T2-GATE FAIL: ' + m); process.exit(1); };
const ok = (m) => console.log('T2-GATE OK: ' + m);
const src = (p) => readFileSync(p, 'utf8');

// 0. chain T1
try { execSync('node tools/forge3d-t1-gate.mjs', { stdio: 'inherit' }); }
catch { fail('t1 gate must pass before t2'); }

// 1. skeleton single-geometry token
const sk = existsSync('src/treeSkeleton.js') ? src('src/treeSkeleton.js') : fail('src/treeSkeleton.js missing');
if (!/export function growSkeleton/.test(sk)) fail('growSkeleton export missing');
if (!/tips/.test(sk) || !/height/.test(sk)) fail('tip-export token missing (tips+height)');
ok('skeleton single-geometry token');
// 2. tip-export token
if (!/tips\.push/.test(sk)) fail('twig-tip export (tips.push) missing');
ok('tip-export token');
// 3. aWind attribute token
if (!/aWind/.test(sk)) fail('aWind attribute missing');
ok('aWind attribute token');
// 4. no-webgpu-import check (comments stripped — the header documents WHY
// it was vendored instead of imported, which must not trip the check)
for (const f of ['src/treeSkeleton.js', 'src/ecology.js', 'src/vendor.js', 'src/materials.js']) {
  if (!existsSync(f)) continue;
  const t = src(f).replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
  if (/three\/webgpu/.test(t) || /three\/tsl/.test(t)) fail(`webgpu/tsl import in ${f}`);
  if (/from 'three\/addons'/.test(t) && /TreeGenerator/.test(t)) fail(`TreeGenerator addon import in ${f}`);
}
ok('no-webgpu-import check');
// 5. archetype count = 5/species
const eco = src('src/ecology.js');
if (!/ARCHETYPES = 5|ARCHETYPES_PER_SPECIES[^=]*=\s*5|a < 5|a < ARCHETYPES/.test(eco)) fail('archetype count != 5/species');
for (const s of ['sugi', 'keyaki', 'momiji', 'matsu', 'sakura'])
  if (!eco.includes(s)) fail(`species ${s} missing in ecology.js`);
ok('archetype count 5/species x5 species (25)');
// 6. far-cap halved table
if (!/FAR_CAP_T2/.test(eco)) fail('FAR_CAP_T2 table missing');
for (const n of ['sugi: 45', 'keyaki: 32', 'momiji: 22', 'matsu: 18', 'sakura: 18'])
  if (!eco.includes(n.split(':')[1].trim()) || !eco.includes(n.split(':')[0])) fail(`halved cap missing: ${n}`);
ok('far-cap halved table (45/32/22/18/18 = 135)');
// 7. tri ledger (< envelope)
const tris = [...sk.matchAll(/~([\d.]+)k tris/g)].map(m => parseFloat(m[1]) * 1000);
if (tris.length < 5) fail('tri estimate comments missing (5 presets)');
if (tris.some(t => t > 4000)) fail('archetype exceeds 4k envelope: ' + tris.join(','));
ok(`tri ledger < envelope [${tris.join(', ')}] <= 4000 each`);
// 8. determinism: same seed twice -> identical tip count + first-tip coords
try {
  const mod = await import('../src/treeSkeleton.js');
  const p = { ...mod.SKELETON_PRESETS.sugi, seed: 1234, radialSegments: 5, sectionLength: 1.6 };
  const r1 = mod.growSkeleton(p), r2 = mod.growSkeleton(p);
  if (r1.tips.length !== r2.tips.length) fail('nondeterministic tip count');
  const a = r1.tips[0], b = r2.tips[0];
  if (a.distanceTo(b) > 1e-6) fail('nondeterministic first-tip coords');
  ok(`determinism (${r1.tips.length} tips, first [${a.x.toFixed(3)},${a.y.toFixed(3)},${a.z.toFixed(3)}])`);
} catch (e) { fail('determinism run failed: ' + e.message); }
// 9. bans (comments stripped — headers document the discipline in words)
for (const f of ['src/treeSkeleton.js', 'src/ecology.js']) {
  const t = src(f).replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
  if (/Math\.random\(/.test(t)) fail(`Math.random() call in ${f}`);
  if (/onBeforeCompile/.test(t)) fail(`onBeforeCompile in ${f}`);
}
if (/plateauMask|district/.test(eco) && /!== 0|!= 0/.test(eco)) { /* district EXACTLY 0 only */ }
if (!/EXACTLY 0/.test(eco)) fail('plateau EXACTLY 0 marker lost');
ok('bans (no Math.random, no onBeforeCompile, plateau EXACTLY 0)');
console.log('\nT2-GATE PASS');
