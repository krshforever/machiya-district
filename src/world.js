// src/world.js — P2.1 world foundation: deterministic coordinates, chunks,
// analytic terrain/moisture/biome fields, stable IDs, LOD + residency.
//
// RULES (locked roadmap §34 + philosophy): independent hash streams per chunk
// (adding systems never rearranges existing content); district plateau returns
// EXACTLY 0 so every Phase-1 building keeps its footing; pure functions only,
// no storage except the object registry. No DOM, no THREE import (math only).
export const WORLD_SEED = 20260912;
export const CHUNK = 16; // metres per chunk edge

// --- deterministic hashing (independent streams, stable across versions) ---
function hash2(x, y, seed) {
  let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(seed, 1442695041)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
export function chunkSeed(cx, cz) {
  return Math.floor(hash2(cx, cz, WORLD_SEED) * 4294967296);
}
export function streamFor(cx, cz, salt) {
  let a = (chunkSeed(cx, cz) ^ Math.imul(salt | 0, 2246822519)) >>> 0 || 1;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// --- value noise (seeded, smooth) ---
function vnoise(x, z, seed) {
  const xi = Math.floor(x), zi = Math.floor(z);
  const xf = x - xi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = hash2(xi, zi, seed), b = hash2(xi + 1, zi, seed);
  const c = hash2(xi, zi + 1, seed), d = hash2(xi + 1, zi + 1, seed);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v; // 0..1
}
function fbm(x, z, seed, octaves = 4) {
  let sum = 0, amp = 0.5, f = 1, norm = 0;
  for (let o = 0; o < octaves; o++) {
    sum += amp * vnoise(x * f, z * f, seed + o * 101);
    norm += amp; amp *= 0.5; f *= 2.03;
  }
  return sum / norm; // 0..1
}

// --- district plateau: EXACTLY 0 inside the Phase-1 village bounds ---
// Rounded-rect mask over x -24..24, z -18..26 with 10m soft edge.
function plateauMask(x, z) {
  const ex = Math.max(Math.abs(x) - 24, 0);
  const ez = Math.max(Math.abs(z - 4) - 22, 0); // village z span ≈ -18..26
  const d = Math.hypot(ex, ez);
  const t = Math.min(Math.max(d / 10, 0), 1); // 10m soft edge
  return t * t * (3 - 2 * t); // 0 inside, ->1 outside
}

// Human terracing: leveled field rects blend terrain to a fixed level,
// exactly like the district plateau (humans flatten what they farm).
const FIELD_FLATS = [
  { cx: -8, cz: 48.5, w: 14, d: 9, y: null }, // south paddy cluster (level solved below)
  { cx: 9, cz: 50.5, w: 12, d: 8, y: null },
];
function fieldLevel(f) {
  // deterministic level: sample raw hills at rect center, snap to 0.5m
  const raw = (fbm(f.cx / 42 + 7.3, f.cz / 42 - 2.1, 501, 4) - 0.5) * 11
    + Math.max(0, Math.hypot(f.cx, f.cz) - 85) * 0.35;
  return Math.round(raw * 2) / 2;
}
function fieldMask(x, z) {
  // returns {m, y} of the strongest flat, or null
  let best = null;
  for (const f of FIELD_FLATS) {
    const ex = Math.max(Math.abs(x - f.cx) - f.w / 2, 0);
    const ez = Math.max(Math.abs(z - f.cz) - f.d / 2, 0);
    const d = Math.hypot(ex, ez);
    const t = Math.min(Math.max(d / 6, 0), 1);
    const m = 1 - (t * t * (3 - 2 * t)); // 1 inside, ->0 at 6m edge
    if (m > 0 && (!best || m > best.m)) best = { m, y: fieldLevel(f) };
  }
  return best;
}
export function fieldFlats() {
  return FIELD_FLATS.map((f) => ({ ...f, y: fieldLevel(f) }));
}
// --- analytic height field (metres) ---
function sstep(a, b, x) {
  const t = Math.min(Math.max((x - a) / (b - a), 0), 1);
  return t * t * (3 - 2 * t);
}
export function heightAt(x, z) {
  const m = plateauMask(x, z);
  if (m <= 0) return 0;
  const hills = (fbm(x / 42 + 7.3, z / 42 - 2.1, 501, 4) - 0.5) * 11;
  const r = Math.hypot(x, z);
  const mountain = Math.max(0, r - 85) * 0.35; // distant rim lift
  let h = (hills + mountain) * m;
  // AUTHORITATIVE river channel: bed -1.6 at center, banks +0.6 at rd 8,
  // blended to hills by rd 14. Guarantees water (y=-0.8, half-width 4)
  // always sits inside its channel regardless of hill noise.
  const rz = 34 + 8 * Math.sin(x * 0.045);
  const rd = Math.abs(z - rz);
  const prof = -1.6 + 2.2 * sstep(0, 8, rd);
  const t = sstep(7, 14, rd);
  let out = prof * (1 - t) + h * t;
  // terraced fields override everything (humans level what they farm)
  const f = fieldMask(x, z);
  if (f && f.m > 0) out = f.y * f.m + out * (1 - f.m);
  return out;
}
export function slopeAt(x, z) {
  const e = 0.6;
  const dx = heightAt(x + e, z) - heightAt(x - e, z);
  const dz = heightAt(x, z + e) - heightAt(x, z - e);
  return Math.hypot(dx, dz) / (2 * e); // rise per metre
}
// windAt(x, z, t, base=0.45): pure deterministic approximation of the global
// gust × terrain channeling. Same module as heightAt (no imports, no cycles).
// factor = 1 + river-channel speedup + slope speedup. Smoke/leaves consume it
// where a position is known; global WIND.gust(t) remains the fallback.
export function windAt(x, z, t, base = 0.45) {
  const gust = 0.65 + 0.35 * Math.sin(t * 0.6) * Math.sin(t * 0.23 + 1.7);
  // River channeling: sample valley depth via heightAt (cheap, 3 taps).
  const h0 = heightAt(x, z);
  const hx = heightAt(x + 1.5, z);
  const hz = heightAt(x, z + 1.5);
  const slope = Math.min(1.5, Math.abs(hx - h0) + Math.abs(hz - h0));
  const valley = Math.max(0, Math.min(1, (h0 + 2.0) / 6.0)); // lower ground -> more channel
  const channel = 1 + 0.35 * (1 - valley) + slope * 0.45;
  return base * 2 * gust * channel; // base 0.45 -> mean ≈ gust scale of WIND
}
// moisture 0..1: lowland + noise + river proximity
export function moistureAt(x, z) {
  const h = heightAt(x, z);
  const low = Math.min(Math.max(1 - h / 9, 0), 1);
  const n = fbm(x / 25 - 3.7, z / 25 + 9.2, 777, 3);
  const rz = 34 + 8 * Math.sin(x * 0.045);
  const river = Math.max(0, 1 - Math.abs(z - rz) / 12);
  return Math.min(Math.max(low * 0.45 + n * 0.35 + river * 0.45, 0), 1);
}
// biome classifier (gradual by construction — continuous fields, no hard borders
// except the village plateau, which is a real land-use boundary)
export function biomeAt(x, z) {
  if (plateauMask(x, z) <= 0) return 'village';
  const h = heightAt(x, z), mo = moistureAt(x, z), s = slopeAt(x, z);
  const rz = 34 + 8 * Math.sin(x * 0.045);
  if (Math.abs(z - rz) < 5) return 'riverbank';
  if (h > 9) return 'mountain';
  if (s > 0.45) return 'slope';
  if (mo > 0.55) return h < 1.2 ? 'field' : 'bamboo'; // moist low slopes (groves), wet flats (paddy)
  if (mo > 0.42) return 'maple';
  if (mo > 0.25) return 'grassland';
  return 'outskirts';
}

// --- chunk coordinates + stable IDs (§30: same seed = same locations) ---
export function chunkOf(x, z) {
  return [Math.floor(x / CHUNK), Math.floor(z / CHUNK)];
}
export function chunkBounds(cx, cz) {
  return { x0: cx * CHUNK, z0: cz * CHUNK, x1: (cx + 1) * CHUNK, z1: (cz + 1) * CHUNK };
}
export function stableId(type, cx, cz, slot) {
  return `${type}_${cx >= 0 ? 'e' + cx : 'w' + -cx}_${cz >= 0 ? 's' + cz : 'n' + -cz}_${String(slot).padStart(3, '0')}`;
}

// --- LOD + residency (foundation; full streaming when content exists) ---
export function lodFor(dist) {
  if (dist < 40) return 0;   // near: full fidelity
  if (dist < 90) return 1;   // mid: simplified simulation
  return 2;                  // far: representation only
}
export function residentChunks(camX, camZ, radius) {
  const out = [];
  const [ccx, ccz] = chunkOf(camX, camZ);
  const r = Math.ceil(radius / CHUNK);
  for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) {
    const cx = ccx + dx, cz = ccz + dz;
    const b = chunkBounds(cx, cz);
    const nx = Math.min(Math.max(camX, b.x0), b.x1);
    const nz = Math.min(Math.max(camZ, b.z0), b.z1);
    if (Math.hypot(camX - nx, camZ - nz) <= radius) out.push([cx, cz]);
  }
  return out;
}

// --- object registry ("what exists here, and why") ---
const _reg = new Map(); // key "cx,cz" -> array of {id, type, x, z, y, data}
function _key(cx, cz) { return cx + ',' + cz; }
export function registerObjects(cx, cz, items) {
  const k = _key(cx, cz);
  if (!_reg.has(k)) _reg.set(k, []);
  _reg.get(k).push(...items);
  return items.length;
}
export function queryRadius(x, z, r) {
  const out = [];
  const [ccx, ccz] = chunkOf(x, z);
  const cr = Math.ceil(r / CHUNK) + 1;
  for (let dx = -cr; dx <= cr; dx++) for (let dz = -cr; dz <= cr; dz++) {
    const arr = _reg.get(_key(ccx + dx, ccz + dz));
    if (!arr) continue;
    for (const o of arr) {
      if (Math.hypot(o.x - x, o.z - z) <= r) out.push(o);
    }
  }
  return out;
}
export function registryStats() {
  let n = 0, chunks = 0;
  for (const arr of _reg.values()) { chunks++; n += arr.length; }
  return { objects: n, chunks };
}
