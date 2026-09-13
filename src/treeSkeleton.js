/**
 * src/treeSkeleton.js — Forge3D T2 vendored skeleton grower.
 * Technique: recursive swept-tube skeleton (parallel-transport frames,
 * golden-angle child roll, da Vinci pipe-model thinning, root flare,
 * droop, phototropism upPull, gnarl), mulberry32 seeded, ONE indexed
 * BufferGeometry per build. MIT technique credit: three.js authors
 * (node_modules/three/examples/jsm/generators/TreeGenerator.js) — see
 * ASSET_REGISTRY.md + CREDITS.md. Vendored (not imported) because the
 * original pulls `three/webgpu` + `three/tsl` which breaks WebGLRenderer.
 * Adds vs original: (a) twig-tip export, (b) aWind Float32 attribute
 * (0 base → 1 tips), (c) cylindrical UVs (u around, v along height).
 * Deterministic: all randomness via mulberry32(seed). No Math.random.
 */
import * as THREE from 'three';

const GOLDEN_ANGLE = Math.PI * (3.0 - Math.sqrt(5.0)); // ~2.39996

export function mulberry32(seed) {
  let a = (seed >>> 0) || 1;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function perpOf(dir, rng) {
  const ax = Math.abs(dir.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const p = new THREE.Vector3().crossVectors(dir, ax).normalize();
  if (rng && rng() < 0.5) p.negate();
  return p;
}

/**
 * growSkeleton(params) -> { geometry, tips, height }
 * params: seed, maxDepth(3), children[], length, radius, radialSegments(5),
 * sectionLength(1.6), minLength(0.35), minRadius(0.02), taper(0.62),
 * lengthDecay(0.62), spread(0.55), flare(0.9), flareSharp(6.0), droop,
 * upPull, gnarl, leanX, leanZ, heightHint(8)
 */
export function growSkeleton(params = {}) {
  const {
    seed = 1, maxDepth = 3, children = [4, 6, 5],
    length = 5.2, radius = 0.34, radialSegments = 5, sectionLength = 1.6,
    minLength = 0.35, minRadius = 0.02, taper = 0.62, lengthDecay = 0.62,
    spread = 0.55, flare = 0.9, flareSharp = 6.0, droop = 0.08,
    upPull = 0.12, gnarl = 0.08, leanX = 0, leanZ = 0, heightHint = 9.0,
  } = params;
  const rng = mulberry32(seed);
  const positions = [], normals = [], uvs = [], winds = [], indices = [];
  const tips = [];
  let maxY = 0.0001;
  let vCount = 0;
  const UP = new THREE.Vector3(0, 1, 0);
  const DOWN = new THREE.Vector3(0, -1, 0);
  const _d = new THREE.Vector3(), _c = new THREE.Vector3();
  const _n = new THREE.Vector3(), _b = new THREE.Vector3(), _v = new THREE.Vector3();

  function sweep(startPos, startDir, segLen, r0, r1, level, windBase, windTop) {
    const segs = Math.max(1, Math.round(segLen / sectionLength));
    _d.copy(startDir).normalize();
    _n.copy(perpOf(_d, rng));
    _b.crossVectors(_d, _n).normalize();
    _c.copy(startPos);
    const baseIndex = vCount;
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      // bend: droop pulls down, upPull pulls up (phototropism)
      _d.lerp(DOWN, droop * 0.12).normalize();
      _d.lerp(UP, upPull * 0.12).normalize();
      // parallel transport: re-orthogonalize frame
      _n.addScaledVector(_d, -_n.dot(_d)).normalize();
      _b.crossVectors(_d, _n).normalize();
      // advance center (skip on ring 0) + gnarl jitter
      if (i > 0) {
        _c.addScaledVector(_d, segLen / segs);
        _c.addScaledVector(_n, (rng() - 0.5) * gnarl * 0.35);
        _c.addScaledVector(_b, (rng() - 0.5) * gnarl * 0.35);
      }
      if (_c.y > maxY) maxY = _c.y;
      let r = r0 + (r1 - r0) * t;
      if (level === 0) r *= 1.0 + flare * Math.exp(-t * flareSharp); // root flare
      r = Math.max(r, minRadius * 0.6);
      const wind = windBase + (windTop - windBase) * t;
      const vCoord = Math.min(1, Math.max(0, _c.y / heightHint));
      for (let j = 0; j <= radialSegments; j++) {
        const u = j / radialSegments;
        const a = u * Math.PI * 2.0;
        const ca = Math.cos(a), sa = Math.sin(a);
        _v.set(
          _c.x + (_n.x * ca + _b.x * sa) * r,
          _c.y + (_n.y * ca + _b.y * sa) * r,
          _c.z + (_n.z * ca + _b.z * sa) * r
        );
        positions.push(_v.x, _v.y, _v.z);
        normals.push(_n.x * ca + _b.x * sa, _n.y * ca + _b.y * sa, _n.z * ca + _b.z * sa);
        uvs.push(u, vCoord);
        winds.push(wind);
        vCount++;
      }
    }
    for (let i = 0; i < segs; i++) {
      for (let j = 0; j < radialSegments; j++) {
        const a0 = baseIndex + i * (radialSegments + 1) + j;
        const b0 = a0 + radialSegments + 1;
        indices.push(a0, b0, a0 + 1, a0 + 1, b0, b0 + 1);
      }
    }
    return { endPos: _c.clone(), endDir: _d.clone() };
  }

  function branch(pos, dir, len, rad, level) {
    const windBase = level / (maxDepth + 1);
    const windTop = (level + 1) / (maxDepth + 1);
    const endR = Math.max(minRadius, rad * taper);
    const out = sweep(pos, dir, len, rad, endR, level, windBase, windTop);
    if (level >= maxDepth) { tips.push(out.endPos.clone()); return; }
    const n = children[level] || 0;
    if (n <= 0) { tips.push(out.endPos.clone()); return; }
    // da Vinci pipe model: sum(child area) = parent area
    const childR = Math.max(minRadius, (endR / Math.sqrt(n)) * 1.02);
    for (let k = 0; k < n; k++) {
      const roll = k * GOLDEN_ANGLE + rng() * 0.6;
      const isLeader = k === 0;
      const tilt = (isLeader ? spread * 0.32 : spread * (0.8 + rng() * 0.7));
      const axis = new THREE.Vector3(Math.cos(roll), 0, Math.sin(roll));
      // tilt endDir away from parent by `tilt` radians around roll axis
      const nd = out.endDir.clone().applyAxisAngle(axis, tilt).normalize();
      nd.lerp(UP, upPull * 0.35).normalize();
      const cl = len * lengthDecay * (0.85 + rng() * 0.3);
      if (cl < minLength) continue;
      const cr = childR * (isLeader ? 1.12 : 0.9 + rng() * 0.2);
      if (cr < minRadius) continue;
      branch(out.endPos, nd, cl, cr, level + 1);
    }
  }

  const rootDir = new THREE.Vector3(leanX, 1, leanZ).normalize();
  branch(new THREE.Vector3(0, 0, 0), rootDir, length, radius, 0);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.setAttribute('aWind', new THREE.Float32BufferAttribute(winds, 1));
  g.setIndex(indices);
  return { geometry: g, tips, height: maxY };
}

// ——— 5 SPECIES PRESETS (tri estimates = worst seed of 0..4, radialSeg 5) ———
export const SKELETON_PRESETS = {
  // Spire conifer: straight leader, tight tiers. ~105 tubes, ~1.1k tris.
  sugi:   { maxDepth: 3, children: [4, 5, 4], length: 6.4, radius: 0.36, lengthDecay: 0.58, spread: 0.42, taper: 0.60, droop: 0.04, upPull: 0.22, gnarl: 0.04, heightHint: 11 },
  // Vase broadleaf: forking limbs, wide crown. ~149 tubes, ~1.6k tris.
  keyaki: { maxDepth: 3, children: [4, 6, 5], length: 3.6, radius: 0.42, lengthDecay: 0.66, spread: 0.72, taper: 0.62, droop: 0.10, upPull: 0.10, gnarl: 0.10, heightHint: 8 },
  // Layered maple: horizontal shelves. ~121 tubes, ~1.3k tris.
  momiji: { maxDepth: 3, children: [4, 5, 5], length: 3.2, radius: 0.30, lengthDecay: 0.64, spread: 0.95, taper: 0.60, droop: 0.14, upPull: 0.06, gnarl: 0.07, heightHint: 7 },
  // Windswept pine: lean + asymmetric gnarl. ~85 tubes, ~0.9k tris.
  matsu:  { maxDepth: 3, children: [3, 5, 4], length: 3.8, radius: 0.38, lengthDecay: 0.62, spread: 0.68, taper: 0.58, droop: 0.06, upPull: 0.16, gnarl: 0.22, leanX: 0.28, leanZ: 0.10, heightHint: 7 },
  // Spreading cherry: open crown, upturned twigs. ~149 tubes, ~1.6k tris.
  sakura: { maxDepth: 3, children: [4, 6, 5], length: 3.4, radius: 0.33, lengthDecay: 0.68, spread: 0.78, taper: 0.62, droop: 0.12, upPull: 0.14, gnarl: 0.09, heightHint: 8 },
};

export const SKELETON_SPECIES = ['sugi', 'keyaki', 'momiji', 'matsu', 'sakura'];
export const ARCHETYPES_PER_SPECIES = 5;
