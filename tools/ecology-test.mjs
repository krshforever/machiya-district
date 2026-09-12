// P2.4 gate: placement exclusions + determinism (builders proven by village boot).
import { findPockets } from '/data/data/com.termux/files/home/tsukimori/src/ecology.js';
import { biomeAt, slopeAt, heightAt } from '/data/data/com.termux/files/home/tsukimori/src/world.js';
import { roadDist } from '/data/data/com.termux/files/home/tsukimori/src/roads.js';
let pass = 0, fail = 0;
const ok = (c, m) => { c ? pass++ : (fail++, console.log('  FAIL:', m)); };
const riverZ = (x) => 34 + 8 * Math.sin(x * 0.045);
// determinism
{
  const a = JSON.stringify(findPockets(['maple'], 3, 18, 101));
  const b = JSON.stringify(findPockets(['maple'], 3, 18, 101));
  ok(a === b, 'pockets deterministic');
}
// exclusion audit across many pocket sets
{
  const sets = [
    findPockets(['maple'], 3, 18, 101), findPockets(['bamboo'], 2, 25, 102),
    findPockets(['maple', 'grassland', 'outskirts', 'slope'], 8, 12, 103),
    findPockets(['grassland', 'field', 'outskirts', 'riverbank'], 6, 14, 104),
  ];
  let n = 0;
  for (const set of sets) for (const [x, z] of set) {
    n++;
    if (!(Math.hypot(x, z - 4) > 28)) { ok(false, `in village (${x},${z})`); break; }
    if (!(roadDist(x, z) >= 3.9)) { ok(false, `near road (${x},${z})`); break; }
    if (!(Math.abs(z - riverZ(x)) >= 4.9)) { ok(false, `in channel (${x},${z})`); break; }
    if (!(slopeAt(x, z) <= 0.56)) { ok(false, `too steep (${x},${z})`); break; }
    if (!Number.isFinite(heightAt(x, z))) { ok(false, 'NaN height'); break; }
  }
  ok(true, `exclusions hold (${n} pockets)`);
  ok(sets[0].length === 3 && sets[1].length === 2, 'counts found');
}
// road network sanity: R1 reaches the river, trails leave the district
{
  ok(roadDist(2, 34.7) < 2, 'R1 crosses river');
  ok(roadDist(0, 0) > 20, 'district interior road-free');
  ok(roadDist(-42, -6) < 4, 'west trail exists');
  ok(roadDist(45, 20) < 4, 'east path exists');
}
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
