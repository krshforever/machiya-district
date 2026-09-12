// P2.2/P2.3 gate: terrain mesh integrity + river placement.
import { buildTerrain, buildRiver } from '/data/data/com.termux/files/home/tsukimori/src/terrain.js';
import { heightAt } from '/data/data/com.termux/files/home/tsukimori/src/world.js';
let pass = 0, fail = 0;
const ok = (c, m) => { c ? pass++ : (fail++, console.log('  FAIL:', m)); };
const t1 = buildTerrain(), t2 = buildTerrain();
// determinism: identical positions
{
  const a = t1.mesh.geometry.attributes.position.array;
  const b = t2.mesh.geometry.attributes.position.array;
  let same = a.length === b.length;
  for (let i = 0; i < a.length && same; i += 7) if (a[i] !== b[i]) same = false;
  ok(same, 'terrain deterministic');
}
// plateau area flat at -0.05, no NaN
{
  const p = t1.mesh.geometry.attributes.position;
  let bad = 0, n = 0;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    if (!Number.isFinite(x + y + z)) bad++;
    if (Math.abs(x) < 20 && Math.abs(z - 4) < 18) { n++; if (Math.abs(y + 0.05) > 1e-9) bad++; }
  }
  ok(bad === 0, `plateau flat+finite (${n} verts)`);
}
// vertex colors present + sane
{
  const c = t1.mesh.geometry.attributes.color;
  ok(!!c && c.count === t1.mesh.geometry.attributes.position.count, 'vertex colors');
  let s = 0; for (let i = 0; i < c.count; i += 13) s += c.getX(i) + c.getY(i) + c.getZ(i);
  ok(s > 0, 'colors nonzero');
}
// budget: quads ≈ (300/3)^2
{
  const tris = t1.mesh.geometry.index.count / 3;
  ok(tris <= 22000, `terrain tris ${tris}`);
}
// river: y=-0.8 everywhere, x span ±150, inside carve (terrain below water level at edges?)
{
  const r = buildRiver();
  const p = r.mesh.geometry.attributes.position;
  let yOk = true, xMin = 1e9, xMax = -1e9;
  for (let i = 0; i < p.count; i++) {
    if (Math.abs(p.getY(i) + 0.8) > 1e-6) yOk = false; // float32 tolerance
    xMin = Math.min(xMin, p.getX(i)); xMax = Math.max(xMax, p.getX(i));
  }
  ok(yOk && xMin <= -149 && xMax >= 149, 'river ribbon geometry');
  ok(!!r.waterMat, 'waterMat exposed for weather');
  // banks above water near channel middle: sample terrain at channel edges
  const zx = 34 + 8 * Math.sin(0);
  ok(heightAt(0, zx - 6) > -0.8 && heightAt(0, zx + 6) > -0.8, 'banks hold water');
}
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
