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
  // Slice 2: AmbientCG CC0 PBR (1K-JPG, Color+NormalGL+Roughness only).
  // materialKeys use REAL keys from buildMaterials() (materials.js).
  {
    key: 'ground037-soil',
    albedo: 'vendor/ambientcg/Ground037/Ground037_1K-JPG_Color.jpg',
    normal: 'vendor/ambientcg/Ground037/Ground037_1K-JPG_NormalGL.jpg',
    rough: 'vendor/ambientcg/Ground037/Ground037_1K-JPG_Roughness.jpg',
    hasRough: true, hasNormal: true,
    materialKeys: ['soil'],
    repeat: [110, 110],
    fallbackNote: 'procedural soilDraw canvas stays when file missing',
  },
  {
    key: 'moss002',
    albedo: 'vendor/ambientcg/Moss002/Moss002_1K-JPG_Color.jpg',
    normal: 'vendor/ambientcg/Moss002/Moss002_1K-JPG_NormalGL.jpg',
    rough: 'vendor/ambientcg/Moss002/Moss002_1K-JPG_Roughness.jpg',
    hasRough: true, hasNormal: true,
    materialKeys: ['moss', 'mossDark'],
    repeat: [60, 60],
    fallbackNote: 'flat moss colors stay when file missing',
  },
  {
    key: 'rock035',
    albedo: 'vendor/ambientcg/Rock035/Rock035_1K-JPG_Color.jpg',
    normal: 'vendor/ambientcg/Rock035/Rock035_1K-JPG_NormalGL.jpg',
    rough: 'vendor/ambientcg/Rock035/Rock035_1K-JPG_Roughness.jpg',
    hasRough: true, hasNormal: true,
    materialKeys: ['stone'],
    repeat: [24, 24],
    fallbackNote: 'procedural stoneDraw canvas stays when file missing',
  },
  {
    key: 'gravel043',
    albedo: 'vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Color.jpg',
    normal: 'vendor/ambientcg/Gravel043/Gravel043_1K-JPG_NormalGL.jpg',
    rough: 'vendor/ambientcg/Gravel043/Gravel043_1K-JPG_Roughness.jpg',
    hasRough: true, hasNormal: true,
    materialKeys: ['gravel'],
    repeat: [6, 6],
    fallbackNote: 'procedural gravelDraw canvas stays when file missing',
  },
  {
    key: 'bark006',
    albedo: 'vendor/ambientcg/Bark006/Bark006_1K-JPG_Color.jpg',
    normal: 'vendor/ambientcg/Bark006/Bark006_1K-JPG_NormalGL.jpg',
    rough: 'vendor/ambientcg/Bark006/Bark006_1K-JPG_Roughness.jpg',
    hasRough: true, hasNormal: true,
    materialKeys: ['trunk'],
    repeat: [1, 2],
    fallbackNote: 'procedural darkWood canvas stays when file missing',
  },
  {
    key: 'woodsiding013',
    albedo: 'vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Color.jpg',
    normal: 'vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_NormalGL.jpg',
    rough: 'vendor/ambientcg/WoodSiding013/WoodSiding013_1K-JPG_Roughness.jpg',
    hasRough: true, hasNormal: true,
    materialKeys: ['woodAged', 'wood'],
    repeat: [2, 1],
    fallbackNote: 'procedural woodDrawTone canvases stay when file missing (woodNew untouched: new vs aged history)',
  },
  {
    key: 'plaster001',
    albedo: 'vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Color.jpg',
    normal: 'vendor/ambientcg/Plaster001/Plaster001_1K-JPG_NormalGL.jpg',
    rough: 'vendor/ambientcg/Plaster001/Plaster001_1K-JPG_Roughness.jpg',
    hasRough: true, hasNormal: true,
    materialKeys: ['plaster'],
    repeat: [1, 1],
    fallbackNote: 'procedural plasterDraw canvas stays when file missing',
  },
  {
    key: 'roofing006',
    albedo: 'vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_Color.jpg',
    normal: 'vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_NormalGL.jpg',
    rough: 'vendor/ambientcg/RoofingTiles006/RoofingTiles006_1K-JPG_Roughness.jpg',
    hasRough: true, hasNormal: true,
    materialKeys: ['roofTile', 'roofTileAlt'],
    repeat: [4, 4],
    fallbackNote: 'flat ceramic + shared noise stay when file missing',
  },
  // Slice V1 (branch forge3d-rebuild): village bark truth — CC0 PBR sets via
  // Commons mirrors. bark_pbr (Tuytel) → conifer/orchard bark; zelkova
  // (Baglioni) → keyaki village trunks. Same onLoad-only contract.
  {
    key: 'barkPBR',
    albedo: 'vendor/commons/bark_pbr/bark_brown_diff.jpg',
    normal: 'vendor/commons/bark_pbr/bark_brown_nor_1k.png',
    rough: 'vendor/commons/bark_pbr/bark_brown_rough_1k.png',
    hasRough: true, hasNormal: true,
    materialKeys: ['barkSugi', 'barkHinoki', 'barkOrchard'],
    repeat: [1, 3],
    fallbackNote: 'procedural bark colors stay when files missing',
  },
  {
    key: 'zelkovaBark',
    albedo: 'vendor/commons/zelkova_bark/zelkova_bark.jpg',
    hasRough: false, hasNormal: false,
    materialKeys: ['barkKeyaki', 'barkMomiji'],
    repeat: [1, 2],
    fallbackNote: 'procedural smooth-grey bark stays when file missing',
  },
  // Reserved: Poly Haven drops (unreachable slice 1 — paths reserved, no fetch attempted).
  // { key: 'polyhaven_bark', albedo: 'vendor/polyhaven/bark_albedo.jpg', ... }
];

export function scannedAlbedoFor(key) {
  const s = SCANNED_SLOTS.find((x) => x.key === key);
  return s ? s.albedo : null;
}

// Path set for direct PBR wiring (terrain mesh uses this; missing files → nulls).
export function scannedSetFor(key) {
  const s = SCANNED_SLOTS.find((x) => x.key === key);
  if (!s) return null;
  return { albedo: s.albedo || null, normal: s.normal || null, rough: s.rough || null };
}

// HDRI presets for lighting.js PMREM (MIT, three.js examples). Weather/night
// switching across presets lands in a later slice; default is warm/clear.
export const HDRI_PRESETS = {
  clear: 'vendor/hdri/venice_sunset_1k.hdr',
  overcast: 'vendor/hdri/quarry_01_1k.hdr',
  night: 'vendor/hdri/moonless_golf_1k.hdr',
};

function prepAlbedo(tex, repeat) {
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  if (repeat) tex.repeat.set(repeat[0], repeat[1]);
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

function prepData(tex, repeat) {
  tex.colorSpace = THREE.NoColorSpace; // normal/roughness stay linear
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
      // Assign INSIDE onLoad: a missing file never leaves a broken texture bound.
      loader.load(
        slot.albedo,
        (tex) => {
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
          if (touched) { if (!out.applied.includes(slot.key)) out.applied.push(slot.key); }
          else if (!out.missing.includes(slot.key)) out.missing.push(slot.key);
        },
        undefined,
        () => {
          if (!out.missing.includes(slot.key)) out.missing.push(slot.key);
          if (opts.verbose) console.warn(`[vendor] missing scan, fallback kept: ${slot.key} <- ${slot.albedo}`);
        },
      );
      // PBR data maps (linear): wire normal + roughness when the slot has them.
      if (slot.normal) {
        try {
          loader.load(slot.normal,
            (ntex) => {
              prepData(ntex, slot.repeat);
              for (const mk of slot.materialKeys) {
                const mat = M[mk];
                if (mat && 'normalMap' in mat) {
                  if (mat.normalMap && mat.normalMap.repeat) ntex.repeat.copy(mat.normalMap.repeat);
                  mat.normalMap = ntex;
                  if ('normalScale' in mat && mat.normalScale) mat.normalScale.setScalar(0.7);
                  mat.needsUpdate = true;
                }
              }
            }, undefined, () => {});
        } catch (e) { /* fallback kept */ }
      }
      if (slot.rough) {
        try {
          loader.load(slot.rough,
            (rtex) => {
              prepData(rtex, slot.repeat);
              for (const mk of slot.materialKeys) {
                const mat = M[mk];
                if (mat && 'roughnessMap' in mat) {
                  mat.roughnessMap = rtex;
                  if ('roughness' in mat) mat.roughness = 1.0;
                  mat.needsUpdate = true;
                }
              }
            }, undefined, () => {});
        } catch (e) { /* fallback kept */ }
      }
    } catch (e) {
      if (!out.missing.includes(slot.key)) out.missing.push(slot.key);
    }
  }
  return out;
}
