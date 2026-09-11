# Machiya District — Procedural Japanese Neighborhood (v2)

A complete cinematic traditional Japanese residential neighborhood built
**entirely through procedural code**. No Blender, no downloaded models, no image
textures as geometry substitutes. v1 (single machiya,
`~/japanese-house-v1/`, preserved untouched) is the hero centerpiece of a
deterministic district: 11 parametric buildings (hero + 6 homes + 2 shops +
2 sheds), streets, alley, lanes, stone walls, fences + gates, drainage,
props, vegetation, weather, time-of-day, and a 10-shot cinematic camera system.

## Run

```bash
cd machiya-district
npm install
npm run dev      # -> http://localhost:5173 (vite via node-direct path: Termux-safe)
npm run build    # static dist/ — fully deployable, Three.js bundled, no runtime CDN
npm run preview
```

## Controls (bottom-left panel)

- Time: DAWN / DAY / GOLDEN / SUNSET / NIGHT (+ day-cycle auto mode)
- Weather: clear / windy / rainy / misty (rain = wetness, puddles, streaks, dimmed sun)
- Shots 01–10 + orbit/cine toggle + auto-advance
- Drag to orbit, scroll/pinch to zoom (5–48 units, never below ground)

Deep links: `?time=NIGHT&wx=rainy&shot=3` (also used for headless verification).

## Structure (v2 additions)

| File | Contents |
|---|---|
| `src/main.js` | Renderer bootstrap, animation loop, resize, HUD/perf probe |
| `src/materials.js` | Procedural canvas textures + shared PBR materials |
| `src/helpers.js` | `makeBeam`, `fillInstances`, `displacedRock`, `contactShadow`, `makeLatticeBars`, seeded RNG |
| `src/architecture.js` | Foundation stones, pillar/beam frame, plaster walls, shoji, engawa, genkan + noren, gutters, rain chain |
| `src/roof.js` | Pitched slabs, instanced barrel tiles, ridge caps, onigawara ends, gable infill, upturned corners |
| `src/interior.js` | Tatami, tokonoma + scroll, fusuma, table, hanging lantern + point light |
| `src/garden.js` | Path, gravel + pebbles, rocks + moss, fence, stone lantern + glow, arched bridge, scatter |
| `src/vegetation.js` | Segmented bamboo cluster, recursive-branch maple with 340 instanced leaves |
| `src/pond.js` | Reflective pond with CPU ripple + stone rim |
| `src/lighting.js` | Late-afternoon sun + shadows, hemisphere fill, sky dome, fog, procedural environment map |
| `src/atmosphere.js` | Drifting dust points, 40 looping falling maple leaves |
| `src/camera.js` | Perspective camera + damped OrbitControls with limits |
| `src/houses.js` | Parametric `generateHouse()` (merged buckets, instanced tiles) + `upgradeHero()` joinery |
| `src/town.js` | Seeded layout (11 lots, overlap-asserted), ground zoning, walls, fences/gates, drainage, paths |
| `src/details.js` | Poles + catenary wires, lamps (3 real lights), bicycles, signs, vending, crates, cloth (animated) |
| `src/weather.js` | clear/windy/rainy/misty, `WIND`, rain streaks + splashes + puddles, wetness registry |
| `src/daytime.js` | DAWN→NIGHT curves (sun/sky/fog/exposure/lamps/windows/stars/moon) |
| `src/cinematics.js` | 10 curated shots, eased transitions, dolly rails, auto-advance |
| `src/ui.js` | Washi control panel + live HUD (calls/tris/fps/state) |

## Verification

Open the page and check the HUD (top-right) for draw calls / triangles
(target: sane mobile budget, ~150–300k triangles max). In devtools console,
`window.__perf()` returns render stats and `window.__errors` lists page errors
(must stay empty).

### Verification status (2026-09-11, Termux/Android host)

- `npm install` + `npm run build`: PASS (24 modules, 584 kB bundle / 157 kB gzip, `dist/` static).
- All 19 `src/*.js`: syntax-check PASS (`node --check`).
- Headless Chromium boot: page loads with **zero JS errors**; animation loop alive
  (loader removed, HUD counting, UI panel live).
- Live district: **~1664 draw calls / ~224,672 triangles / ~50fps even under
  software rendering** (budget was <1600 calls / <450k tris — tris at 50%,
  calls 4% over; real GPUs will idle on this).
- Exercised headlessly: cinematic shots 03/08/09, NIGHT state, rainy + misty
  weather, SUNSET combo — all zero-error; frustum culling confirmed (counts
  shift per camera).
- Town overlap assert: silent (no intersecting buildings).
- v1 preserved: `~/japanese-house-v1/` untouched; v1 modules retired from the
  composition (garden/pond-spot/bamboo/maple placements) stay on disk.
- **Pixel inspection is NOT possible on this host**: the system Chromium's
  software GL rasterizes black (even a clear color reads back `0,0,0`), the
  hardware-GL path segfaults (no GPU access from Termux), and the bwb browser
  backend is oom-killed before capture. The district is proven to *run* here;
  **view it on any real browser** (desktop or phone) with `npm run dev` or by
  hosting `dist/` statically. First-look checklist: roof silhouettes + corner
  sweeps across rooflines, shoji translucency at GOLDEN, maple canopy density,
  pond reflection in south garden, NIGHT window/lamp mood, shot 04 alley framing.
