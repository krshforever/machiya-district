// P2.1 world foundation gate: determinism, plateau-zero, stream independence.
import {
  WORLD_SEED, CHUNK, chunkSeed, streamFor, heightAt, slopeAt, moistureAt,
  biomeAt, chunkOf, chunkBounds, stableId, lodFor, residentChunks,
  registerObjects, queryRadius, registryStats,
} from '/data/data/com.termux/files/home/tsukimori/src/world.js';
import { LAYOUT } from '/data/data/com.termux/files/home/tsukimori/src/town.js';
let pass = 0, fail = 0;
const ok = (c, m) => { c ? pass++ : (fail++, console.log('  FAIL:', m)); };

// determinism: same inputs twice
for (let i = 0; i < 200; i++) {
  const x = (i * 37.7) % 160 - 80, z = (i * 53.3) % 160 - 80;
  if (heightAt(x, z) !== heightAt(x, z) || biomeAt(x, z) !== biomeAt(x, z)) { ok(false, `nondeterministic at ${x},${z}`); break; }
}
ok(true, 'deterministic fields');
// plateau EXACT zero over every lot footprint (corners + center)
let checked = 0;
for (const lot of LAYOUT) {
  const pts = [[lot.cx, lot.cz], [lot.cx - lot.w / 2, lot.cz - lot.d / 2], [lot.cx + lot.w / 2, lot.cz - lot.d / 2], [lot.cx - lot.w / 2, lot.cz + lot.d / 2], [lot.cx + lot.w / 2, lot.cz + lot.d / 2]];
  for (const [x, z] of pts) { ok(heightAt(x, z) === 0, `plateau nonzero at ${lot.name} (${x},${z})=${heightAt(x, z)}`); checked++; }
}
console.log(`plateau points checked: ${checked}`);
// terrain varies outside
let varied = false;
for (let x = -120; x <= 120; x += 8) for (let z = -120; z <= 120; z += 8) {
  if (Math.abs(heightAt(x, z)) > 0.5) { varied = true; break; }
}
ok(varied, 'terrain varies outside district');
// ranges
for (let i = 0; i < 100; i++) {
  const x = (i * 91.7) % 200 - 100, z = (i * 47.3) % 200 - 100;
  const mo = moistureAt(x, z);
  if (!(mo >= 0 && mo <= 1) || !(slopeAt(x, z) >= 0)) { ok(false, 'range'); break; }
}
ok(true, 'moisture/slope ranges');
// stream independence + determinism
{
  const a1 = streamFor(3, -2, 11), a2 = streamFor(3, -2, 11), b = streamFor(3, -2, 12);
  const sa = [a1(), a1(), a1()].join(','), sa2 = [a2(), a2(), a2()].join(','), sb = [b(), b(), b()].join(',');
  ok(sa === sa2, 'same stream deterministic');
  ok(sa !== sb, 'different salt diverges');
  ok(chunkSeed(3, -2) === chunkSeed(3, -2), 'chunkSeed stable');
}
// chunks/ids/lod
{
  const [cx, cz] = chunkOf(35, -20);
  ok(cx === 2 && cz === -2, `chunkOf (got ${cx},${cz})`);
  ok(stableId('house', 2, -2, 7) === 'house_e2_n2_007', 'stableId format');
  ok(stableId('house', 2, -2, 7) === stableId('house', 2, -2, 7), 'stableId stable');
  ok(lodFor(10) === 0 && lodFor(60) === 1 && lodFor(200) === 2, 'lod bands');
  const r = residentChunks(0, 0, 40);
  ok(r.length > 20 && r.length < 60, `residency count ${r.length}`);
  const b = chunkBounds(1, 1);
  ok(b.x0 === 16 && b.z1 === 32, 'chunk bounds');
}
// registry
{
  registerObjects(0, 0, [{ id: stableId('house', 0, 0, 1), type: 'house', x: 1, z: 1 }]);
  registerObjects(5, 5, [{ id: 'x', type: 'rock', x: 81, z: 81 }]);
  ok(queryRadius(0, 0, 5).length === 1, 'query near');
  ok(queryRadius(0, 0, 200).length === 2, 'query far');
  const st = registryStats();
  ok(st.objects === 2 && st.chunks === 2, 'registry stats');
}
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
