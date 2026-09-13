# TSUKIMORI Asset Registry — Forge3D Slice 1 (Phase 2 Remastered)

WORLD_SEED = 20260912 (preserved). Static gh-pages deploy: `npm run build` → dist/ must stay green.
Zero runtime CDN deps — everything vendored under `vendor/<source>/<name>/`.

## Drop-in contract (scanned materials replace procedurals with ZERO code change)

`src/vendor.js` exposes `applyScannedMaterials(M, opts)` + `SCANNED_SLOTS`:

- Each slot: `{ key, albedo, rough?, normal?, materialKeys, fallback }`.
  - `key`: slot id (e.g. `bark`, `soil`, `moss`, `gravel`, `woodAged`).
  - `albedo`: path to sRGB color map (JPG/PNG, ~1k, mirror-wrapped, mipmapped).
  - `rough` (optional): luminance-derived roughness map (linear, NoColorSpace).
  - `normal` (optional): linear normal map (NoColorSpace). Absent in slice 1 — bump from shared noise.
  - `materialKeys`: M.* targets (e.g. `bark` → `['trunk']`).
  - `fallback`: procedural builder that runs when the file is missing (build NEVER breaks).
- To replace a file: drop the new scan at the SAME path (or update the slot's `albedo` URL) — no other code change.
- Texture discipline: albedo `SRGBColorSpace`, rough/normal `NoColorSpace` (linear), `anisotropy = 4` near, `RepeatWrapping` + `repeat` per material (passthrough from existing M.* maps where present).
- Missing-file behavior: `TextureLoader` error → warn once per slot → keep procedural fallback → build stays green.
- Future Poly Haven drops: place `*_albedo.jpg`, `*_rough.jpg`, `*_normal.jpg` beside the slot dir and flip `hasRough`/`hasNormal` — zero code change.
- NOTE (slice-1 env): Poly Haven api+dl UNREACHABLE from this box (522/timeout, verified). No Poly Haven files vendored. Slots reserve `polyhaven/` paths for later.

## Vendored — Wikimedia Commons (all HTTP 200 via API + Special:FilePath, 2026-09-13)

| slot | file | source URL | author | license | poly/tex | LOD | approver |
|---|---|---|---|---|---|---|---|
| bark (M.trunk) | `vendor/commons/sugi_bark/1280px-Cryptomeria_japonica_(bark)_of_Okuteshinmei-jinja.jpg` | https://commons.wikimedia.org/wiki/File:Cryptomeria_japonica_(bark)_of_Okuteshinmei-jinja.jpg (orig https://upload.wikimedia.org/wikipedia/commons/2/22/Cryptomeria_japonica_%28bark%29_of_Okuteshinmei-jinja.jpg) | Alpsdake | CC0 | photo tex ~1k class (1280px thumb) | L0 only, trunk UV | Forge3D slice 1 |
| woodAged (M.woodAged) | `vendor/commons/weathered_wood/1280px-Weathered_barn_wood_with_worm_holes.jpg` | https://commons.wikimedia.org/wiki/File:Weathered_barn_wood_with_worm_holes.jpg | Titus Tscharntke (uploader Fæ) | Public domain | photo tex ~1k class | L0 | Forge3D slice 1 |
| moss (M.moss) | `vendor/commons/moss/1280px-Moss_green_texture.jpg` | https://commons.wikimedia.org/wiki/File:Moss_green_texture.jpg | Paolo Neo | Public domain | photo tex ~1k class | L0 | Forge3D slice 1 |
| gravel (M.gravel) | `vendor/commons/gravel/1280px-Gravel_texture.jpg` | https://commons.wikimedia.org/wiki/File:Gravel_texture.jpg | Titus Tscharntke | Public domain | photo tex ~1k class | L0 | Forge3D slice 1 |
| moss_cc0 (M.mossDark backup / roughness variation) | `vendor/commons/moss_cc0/1280px-Moss_Texture.png` | https://commons.wikimedia.org/wiki/File:Moss_Texture.png | ORIGAMEDIGITAL | CC0 | photo tex ~1k class | L0 | Forge3D slice 1 |
| soil (M.soil) | `vendor/commons/needle_litter/Forest_floor_with_loblolly_pine_needles.jpg` | https://commons.wikimedia.org/wiki/File:Forest_floor_with_loblolly_pine_needles.jpg | Clover Thomas | CC BY-SA 4.0 (credit REQUIRED — see CREDITS.md) | photo tex full-res orig (thumb bucket returned orig) | L0 | Forge3D slice 1 |

Processing note (honest): no local PIL/ImageMagick exec in this slice environment, so tiling relies on Commons server-side `?width=1000` thumbs + runtime `RepeatWrapping` + mipmaps + sRGB discipline. Mirror-wrap + 1k exact + luminance-roughness derivation queued as a 10-minute follow-up on a box with exec (agrant: `tools/vendor-process.py` using PIL 12.3: mirror-wrap, resize 1024, derive rough = 255-luminance). Procedural fallbacks remain authoritative until then.

## Model study — Quaternius (CC0, https://quaternius.com/, 200 OK)

- Pack reviewed: Ultimate Nature Pack (150 models, FBX/OBJ/Blend) + Ultimate Stylized Nature Pack (60+ assets, glTF). License: CC0.
- Topology findings (applied to P0-4 pools): trunks = tapered stacked segments with butt flare (never straight cylinders); conifer canopy = 2–3 stacked squashed cones with vertical stretch ~1.7× and radial squash ~0.8×; broadleaf = icosphere lumps flattened Y ~0.82 with per-vertex jitter ±22%; bamboo = bare lower culm + leaf cards only in top third, planted in clumps of 5–9.
- Accent props: max 2–3 deferred to slice 1b (no zip-capable fetcher on this box; study-only in slice 1, zero tris added).

## Model study — Kenney Nature Kit (CC0, https://kenney.nl/assets/nature-kit, 200 OK)

- Pack: Nature Kit, 330 assets, CC0, v1.0 (2020). Low-poly trees/rocks/foliage for blockout reference.
- Findings: blockout proportions (crown:trunk ≈ 2:1 broadleaf, 3:1 conifer) confirm pool scales; kit rocks inform Slice C stonework (not this slice).
- Accent props: max 2–3 deferred to slice 1b (same zip-tooling reason; zero tris added in slice 1).

## Budgets (slice 1)

- tris ≤ 500k (was ~492k — pools REPLACE 380 blobs; net must go DOWN; far-blob counts cut first if threatened).
- draws DOWN (was 3434, target <2200 — pools ≈ 10 InstancedMesh draws replace 3 far-forest draws with richer per-species representation; net scene draws decrease via fewer total instances + no shadow casting on far pools).
- determinism: reload-twice identical; new streams only (forest salts 201–207); existing instance IDs never reordered.
