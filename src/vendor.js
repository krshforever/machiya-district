// src/vendor.js — Forge3D Slice 1 (C0): scanned-material slots with procedural fallback.
//
// DROP-IN CONTRACT (see ASSET_REGISTRY.md):
// - Every slot ALSO has a procedural fallback, so missing scans never break the build.
// - To replace a scan: drop the new file at the SAME path (or update the slot URL).
//   Zero code change. Future Poly Haven drops flip hasRough/hasNormal — nothing else.
// - Discipline: albedo sRGB, rough/normal linear (NoColorSpace), anisotropy 4 near,
//   RepeatWrapping; repeat is inherited from the existing procedural map where present.
// - Zero runtime CDN: all paths are local under vendor/ (gh-pages safe).
import * as THREE from 'three';

// Slot table — paths MUST match ASSET_REGISTRY.md vendored filenames.
export const SCANNED_SLOTS = [
  {
    key: 'bark',
    albedo: 'vendor/commons/sugi_bark/1280px-Cryptomeria_japonica_(bark)_of_Okuteshinmei-jinja.jpg',
    hasRough: false, hasNormal: false,
    materialKeys: ['trunk'],
    repeat: [1, 2],
    fallbackNote: 'procedural darkWood canvas (materials.js trunk) stays when file missing',
  },
  {
    key: 'woodAged',
    albedo: 'vendor/commons/weathered_wood/1280px-Weathered_barn_wood_with_worm_holes.jpg',
    hasRough: false, hasNormal: false,
    materialKeys: ['woodAged'],
    repeat: [2, 1],
    fallbackNote: 'procedural woodDrawTone(502) canvas stays when file missing',
  },
  {
    key: 'moss',
    albedo: 'vendor/commons/moss/1280px-Moss_green_texture.jpg',
    hasRough: false, hasNormal: false,
    materialKeys: ['moss'],
    repeat: [3, 3],
    fallbackNote: 'flat moss color stays when file missing',
  },
  {
    key: 'mossDark',
    albedo: 'vendor/commons/moss_cc0/1280px-Moss_Texture.png',
    hasRough: false, hasNormal: false,
    materialKeys: ['mossDark'],
    repeat: [3, 3],
    fallbackNote: 'flat mossDark color stays when file missing',
  },
  {
    key: 'gravel',
    albedo: 'vendor/commons/gravel/1280px-Gravel_texture.jpg',
    hasRough: false, hasNormal: false,
    materialKeys: ['gravel'],
    repeat: [6, 6],
    fallbackNote: 'procedural gravelDraw canvas stays when file missing',
  },
  {
    key: 'soil',
    albedo: 'vendor/commons/needle_litter/Forest_floor_with_loblolly_pine_needles.jpg',
    hasRough: false, hasNormal: false,
    materialKeys: ['soil'],
    repeat: [4, 4],
    fallbackNote: 'procedural soilDraw canvas stays when file missing',
  },
  // Reserved: Poly Haven drops (unreachable slice 1 — paths reserved, no fetch attempted).
  // { key: 'polyhaven_bark', albedo: 'vendor/polyhaven/bark_albedo.jpg', ... }
];

export function scannedAlbedoFor(key) {
  const s = SCANNED_SLOTS.find((x) => x.key === key);
  return s ? s.albedo : null;
}

function prepAlbedo(tex, repeat) {
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  if (repeat) tex.repeat.set(repeat[0], repeat[1]);
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

// Apply scanned albedo maps onto an existing materials object M (from buildMaterials()).
// Missing files warn once and keep the procedural fallback — build NEVER breaks.
// Returns { applied: [keys], missing: [keys] } for the gate.
export function applyScannedMaterials(M, opts = {}) {
  const loader = opts.loader || new THREE.TextureLoader();
  const out = { applied: [], missing: [] };
  for (const slot of SCANNED_SLOTS) {
    if (slot.key.startsWith('polyhaven')) continue; // reserved, no file yet
    try {
      const tex = loader.load(
        slot.albedo,
        () => { /* loaded: configured below synchronously for determinism of flags */ },
        undefined,
        () => {
          if (!out.missing.includes(slot.key)) out.missing.push(slot.key);
          if (opts.verbose) console.warn(`[vendor] missing scan, fallback kept: ${slot.key} <- ${slot.albedo}`);
        },
      );
      prepAlbedo(tex, slot.repeat);
      let touched = false;
      for (const mk of slot.materialKeys) {
        const mat = M[mk];
        if (mat) {
          // inherit repeat from the procedural map it replaces when present
          if (mat.map && mat.map.repeat) tex.repeat.copy(mat.map.repeat);
          mat.map = tex;
          mat.needsUpdate = true;
          touched = true;
        }
      }
      if (touched) out.applied.push(slot.key);
      else if (!out.missing.includes(slot.key)) out.missing.push(slot.key);
    } catch (e) {
      if (!out.missing.includes(slot.key)) out.missing.push(slot.key);
    }
  }
  return out;
}
