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

## Slice 2 — P0-1 + HDRI/PBR (2026-09-13)
WORLD_SEED=20260912 unchanged. Poly Haven dead (000, skipped). All URLs verified HTTP 200 before listing.
### HDRI (MIT — Mr.doob / three.js contributors, three.js examples)
- public/vendor/hdri/venice_sunset_1k.hdr — https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/equirectangular/venice_sunset_1k.hdr — 1397783 B — warm/clear default
- public/vendor/hdri/quarry_01_1k.hdr — https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/equirectangular/quarry_01_1k.hdr — 1477951 B — overcast preset
- public/vendor/hdri/moonless_golf_1k.hdr — https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/equirectangular/moonless_golf_1k.hdr — 1672754 B — night preset
### PBR CC0 (AmbientCG, 1K-JPG; vendored Color+NormalGL+Roughness only, AO/height/displacement skipped)
- public/vendor/ambientcg/Ground037/… — https://ambientcg.com/get?file=Ground037_1K-JPG.zip — 10574958 B — forest soil
- public/vendor/ambientcg/Moss002/… — https://ambientcg.com/get?file=Moss002_1K-JPG.zip — 10391949 B — moss
- public/vendor/ambientcg/Rock035/… — https://ambientcg.com/get?file=Rock035_1K-JPG.zip — 9547643 B — rock
- public/vendor/ambientcg/Gravel043/… — https://ambientcg.com/get?file=Gravel043_1K-JPG.zip — 10405844 B — gravel
- public/vendor/ambientcg/Bark006/… — https://ambientcg.com/get?file=Bark006_1K-JPG.zip — 9549383 B — bark
- public/vendor/ambientcg/WoodSiding013/… — https://ambientcg.com/get?file=WoodSiding013_1K-JPG.zip — 7049367 B — weathered wood
- public/vendor/ambientcg/Plaster001/… — https://ambientcg.com/get?file=Plaster001_1K-JPG.zip — 7414156 B — plaster
- public/vendor/ambientcg/RoofingTiles006/… — https://ambientcg.com/get?file=RoofingTiles006_1K-JPG.zip — 6660039 B — roof tile

## Slice V1 — village truth textures via Commons (2026-09-13, branch forge3d-rebuild)
Poly Haven mirrors found on Wikimedia Commons (same CC0 scans, working door). All HTTP 200.
### Bark PBR CC0 (Rob Tuytel via Poly Haven / Charlotte Baglioni via Poly Haven)
- public/vendor/commons/bark_pbr/bark_brown_diff.jpg — https://commons.wikimedia.org/wiki/File:Bark_brown_01_diff_8k_(Rob_Tuytel_via_Poly_Haven).png — CC0 — generic bark albedo
- public/vendor/commons/bark_pbr/bark_brown_nor_1k.png — .../File:Bark_brown_01_nor_gl_8k_(Rob_Tuytel_via_Poly_Haven).png — CC0 — bark normal (OpenGL)
- public/vendor/commons/bark_pbr/bark_brown_rough_1k.png — .../File:Bark_brown_01_rough_8k_(Rob_Tuytel_via_Poly_Haven).png — CC0 — bark roughness
- public/vendor/commons/zelkova_bark/zelkova_bark.jpg — https://commons.wikimedia.org/wiki/File:Japanese_zelkova_bark_(Charlotte_Baglioni_via_Poly_Haven).png — CC0 — KEYAKI bark (village tree)
### Village surfaces (CC BY-SA, credited in CREDITS.md)
- public/vendor/commons/thatch/thatch_hamptonne_1k.jpg — https://commons.wikimedia.org/wiki/File:Thatch_1,_Hamptonne,_Jersey.jpg — CC BY-SA 4.0 — thatch roof
- public/vendor/commons/castle_stone/marugame_wall_1k.jpg — https://commons.wikimedia.org/wiki/File:Stone_wall_of_Marugame_Castle_04.jpg — CC BY-SA 4.0 — cut-stone wall (kura foundation, town walls)
- public/vendor/commons/planks/wood_planks_1k.jpg — https://commons.wikimedia.org/wiki/File:Wooden_Planks_Texture.jpg — CC BY-SA 3.0 — wood planks (engawa, doors, floors)

## T2 skeleton technique (2026-09-13, branch forge3d-rebuild)
Tree skeleton technique after three.js TreeGenerator (MIT, three.js authors, node_modules/three/examples/jsm/generators/TreeGenerator.js) — vendored as src/treeSkeleton.js with tip-export + aWind + cylindrical UV extensions (original pulls three/webgpu+three/tsl; vendored copy is WebGL-clean, core-three only).
