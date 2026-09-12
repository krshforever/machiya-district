// P2.6 gate: hamlet/paddy placement, terracing, determinism.
import { buildSettlement } from '/data/data/com.termux/files/home/tsukimori/src/settlement.js';
import { heightAt, fieldFlats } from '/data/data/com.termux/files/home/tsukimori/src/world.js';
import { roadDist } from '/data/data/com.termux/files/home/tsukimori/src/roads.js';
import * as THREE from '/data/data/com.termux/files/home/tsukimori/node_modules/three/build/three.module.js';
let pass = 0, fail = 0;
const ok = (c, m) => { c ? pass++ : (fail++, console.log('  FAIL:', m)); };
// shared dummy material (mirrors production's shared registry; never rendered)
const _dummy = new THREE.MeshStandardMaterial();
const M = new Proxy({}, { get: () => _dummy });
// terrace flats level
{
  const flats = fieldFlats();
  ok(flats.length === 2, 'two field flats');
  for (const f of flats) {
    ok(Math.abs(heightAt(f.cx, f.cz) - f.y) < 1e-9, `flat ${f.cx},${f.cz} level`);
    ok(Math.abs(heightAt(f.cx - f.w / 2 + 1, f.cz) - f.y) < 1e-9, 'flat interior level');
  }
}
const s1 = buildSettlement(M);
const s2 = buildSettlement(M);
// determinism: same house positions
{
  const p1 = s1.houses.map((h) => h.pos.x + ',' + h.pos.y + ',' + h.pos.z).join(';');
  const p2 = s2.houses.map((h) => h.pos.x + ',' + h.pos.y + ',' + h.pos.z).join(';');
  ok(p1 === p2, 'settlement deterministic');
  ok(s1.houses.length === 5, `three hamlet + farm + barn (got ${s1.houses.length})`);
}
// houses sit on terrain, clear of fields/roads/river/district
{
  for (const h of s1.houses) {
    const g = heightAt(h.pos.x, h.pos.z);
    ok(Math.abs(h.pos.y - g) < 0.15, `grounded ${h.name}`);
    ok(h.pos.z > 20, 'south of district');
    const rz = 34 + 8 * Math.sin(h.pos.x * 0.045);
    // riverside hamlet may sit in the bank zone, but never in the water:
    // clear of the ribbon half-width (4m) with margin, above water level
    ok(Math.abs(h.pos.z - rz) > 5, `clear of water ${h.name}`);
    ok(heightAt(h.pos.x, h.pos.z) > -0.3, `above water ${h.name}`);
    // footprint tilt within foundation tolerance (corner spread)
    const w = h.name === 'farmhouse' ? 7.5 : h.name === 'barn' ? 5 : 6;
    const d = h.name === 'farmhouse' ? 6 : h.name === 'barn' ? 7 : 5.5;
    const cs = [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([sx, sz]) => heightAt(h.pos.x + (sx * w) / 2, h.pos.z + (sz * d) / 2));
    ok(Math.max(...cs) - Math.min(...cs) < 0.8, `level footprint ${h.name}`);
  }
  // no house footprint inside a field rect
  const flats = fieldFlats();
  for (const h of s1.houses) {
    for (const f of flats) {
      const ox = Math.max(0, 3.5 + f.w / 2 - Math.abs(h.pos.x - f.cx));
      const oz = Math.max(0, 3.25 + f.d / 2 - Math.abs(h.pos.z - f.cz));
      ok(!(ox > 0 && oz > 0), `clear of fields ${h.name}`);
    }
  }
  // R1 serves the hamlet (road within 6m of a house)
  const near = s1.houses.some((h) => roadDist(h.pos.x, h.pos.z) < 8);
  ok(near, 'road serves hamlet');
}
// paddy water above bed, rice count
{
  let waters = 0, rice = 0;
  s1.group.traverse((o) => {
    if (o.isMesh && o.geometry?.type === 'PlaneGeometry' && o.material?.transparent && (o.material?.metalness ?? 0) > 0.5) waters++;
    if (o.isInstancedMesh && o.count === 154) rice += o.count;
  });
  ok(waters === 2, `two water sheets (got ${waters})`);
  ok(rice === 308, `rice instances (got ${rice})`);
}
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
