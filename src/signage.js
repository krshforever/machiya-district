// src/signage.js — TSUKIMORI identity + studio plaque
// Dimensional box-stroke lettering. No FontLoader, no external fonts,
// no canvas-as-letterforms. Canvas used ONLY for microscopic fine print.
// Deterministic. Shared geometry + InstancedMesh. No per-frame allocs.
import * as THREE from 'three';

const BOX = { geo: null };
function boxGeo() {
  if (!BOX.geo) BOX.geo = new THREE.BoxGeometry(1, 1, 1);
  return BOX.geo;
}

// ---------- tiny rectilinear stroke font (Latin caps + digits + 月森) ----------
// Grid: x 0..2, y 0..4 (y up). Each glyph = segments [x1,y1,x2,y2].
// Block/engraved-plaque style — intentional restraint, not display type.
const FONT = {
  'A': [[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,2,2,2]],
  'B': [[0,0,0,4],[0,4,2,4],[0,2,2,2],[0,0,2,0],[2,4,2,2],[2,2,2,0]],
  'C': [[2,4,0,4],[0,4,0,0],[0,0,2,0]],
  'D': [[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],
  'E': [[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2]],
  'F': [[2,4,0,4],[0,4,0,0],[0,2,2,2]],
  'G': [[2,4,0,4],[0,4,0,0],[0,0,2,0],[2,0,2,2],[2,2,1,2]],
  'H': [[0,0,0,4],[2,0,2,4],[0,2,2,2]],
  'I': [[0,4,2,4],[1,4,1,0],[0,0,2,0]],
  'J': [[2,4,2,0],[2,0,0,0],[0,0,0,2]],
  'K': [[0,0,0,4],[2,4,0,2],[0,2,2,0]],
  'L': [[0,4,0,0],[0,0,2,0]],
  'M': [[0,0,0,4],[0,4,1,2],[1,2,2,4],[2,4,2,0]],
  'N': [[0,0,0,4],[0,4,2,0],[2,0,2,4]],
  'O': [[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0]],
  'P': [[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2]],
  'Q': [[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[1,1,2,0]],
  'R': [[0,0,0,4],[0,4,2,4],[2,4,2,2],[2,2,0,2],[1,2,2,0]],
  'S': [[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],
  'T': [[0,4,2,4],[1,4,1,0]],
  'U': [[0,4,0,0],[0,0,2,0],[2,0,2,4]],
  'V': [[0,4,1,0],[1,0,2,4]],
  'W': [[0,4,0,0],[0,0,1,2],[1,2,2,0],[2,0,2,4]],
  'X': [[0,0,2,4],[0,4,2,0]],
  'Y': [[0,4,1,2],[2,4,1,2],[1,2,1,0]],
  'Z': [[0,4,2,4],[2,4,0,0],[0,0,2,0]],
  '0': [[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,0,2,4]],
  '1': [[1,4,1,0],[0,0,2,0]],
  '2': [[0,4,2,4],[2,4,2,2],[2,2,0,2],[0,2,0,0],[0,0,2,0]],
  '3': [[0,4,2,4],[2,4,2,0],[0,2,2,2],[0,0,2,0]],
  '4': [[0,4,0,2],[0,2,2,2],[2,4,2,0]],
  '5': [[2,4,0,4],[0,4,0,2],[0,2,2,2],[2,2,2,0],[2,0,0,0]],
  '6': [[2,4,0,4],[0,4,0,0],[0,0,2,0],[0,2,2,2],[2,2,2,0]],
  '7': [[0,4,2,4],[2,4,0,0]],
  '8': [[0,0,0,4],[0,4,2,4],[2,4,2,0],[2,0,0,0],[0,2,2,2]],
  '9': [[2,0,0,0],[0,0,0,4],[0,4,2,4],[2,4,2,0],[0,2,2,2]],
  ' ': [],
  '•': [[1,2,1,2]],
  '.': [[1,0,1,0]],
  '-': [[0,2,2,2]],
  '/': [[0,0,2,4]],
  '&': [[0,0,0,4],[0,4,2,4],[2,4,2,2],[0,2,2,0],[2,0,0,0]],
  '©': null, // drawn as ring below (special-cased)
  // 月 — outer rect + 2 interior horizontals (rectilinear moon)
  '月': [[0,0,0,4],[2,0,2,4],[0,4,2,4],[0,0,2,0],[0,2.6,2,2.6],[0,1.3,2,1.3]],
  // 森 — three rectilinear trees: each = spine + top bar + 2 branch stubs
  // laid out: top-centre, bottom-left, bottom-right
  '森': 'COMPOUND_MORI',
};

function moriStrokes() {
  const s = [];
  const tree = (cx, y0, w, h) => {
    s.push([cx, y0, cx, y0 + h]);                       // trunk
    s.push([cx - w / 2, y0 + h, cx + w / 2, y0 + h]);   // crown bar
    s.push([cx - w / 2, y0 + h * 0.55, cx + w / 2, y0 + h * 0.55]); // branch bar
    s.push([cx - w * 0.28, y0, cx + w * 0.28, y0]);     // root bar
  };
  tree(1.0, 2.2, 1.7, 1.8);  // top tree
  tree(0.35, 0.0, 1.1, 1.9); // bottom-left
  tree(1.65, 0.0, 1.1, 1.9); // bottom-right
  return s;
}
function glyphStrokes(ch) {
  if (ch === '森') return moriStrokes();
  if (ch === '©') return [[0.2,0,0.2,4],[0.2,4,1.8,4],[1.8,4,1.8,0],[1.8,0,0.2,0],[0.5,1.2,1.5,1.2],[0.5,2.8,1.5,2.8]];
  return FONT[ch] ?? FONT['-'];
}

// Layout one line into stroke instances. Returns {strokes, width}.
// size = cap height in metres. depth = extrusion. All deterministic.
export function layoutLine(text, { size = 0.22, tracking = 0.32, thickness = 0.13, depth = 0.035 } = {}) {
  const adv = 2 * (size / 4) + tracking * size; // grid 2 wide + tracking
  const sx = size / 4, sy = size / 4;
  const strokes = [];
  let cx = 0;
  const upper = String(text).toUpperCase();
  for (const ch of upper) {
    if (ch === ' ') { cx += adv; continue; }
    for (const [x1, y1, x2, y2] of glyphStrokes(ch)) {
      const dot = (x1 === x2 && y1 === y2);
      const wx1 = cx + x1 * sx, wy1 = y1 * sy;
      const wx2 = cx + x2 * sx, wy2 = y2 * sy;
      const dx = wx2 - wx1, dy = wy2 - wy1;
      const len = Math.hypot(dx, dy);
      const t = thickness * size;
      if (dot) {
        strokes.push({ x: wx1, y: wy1, len: t * 1.1, ang: 0, t, sq: true });
      } else {
        strokes.push({ x: (wx1 + wx2) / 2, y: (wy1 + wy2) / 2, len: len + t * 0.9, ang: Math.atan2(dy, dx), t });
      }
    }
    cx += adv;
  }
  return { strokes, width: Math.max(0, cx - tracking * size), depth };
}

// Build an InstancedMesh of box strokes for N lines. ONE draw call per material.
export function buildStrokeText(lines, material, { depth = 0.035 } = {}) {
  const all = [];
  for (const L of lines) {
    const { strokes } = layoutLine(L.text, L);
    for (const s of strokes) all.push({ ...s, ox: L.ox || 0, oy: L.oy || 0, oz: L.oz || 0, depth: L.depth ?? depth });
  }
  const geo = boxGeo();
  const im = new THREE.InstancedMesh(geo, material, Math.max(1, all.length));
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  const p = new THREE.Vector3(), sc = new THREE.Vector3();
  all.forEach((s, i) => {
    e.set(0, 0, s.ang); q.setFromEuler(e);
    p.set(s.ox + s.x, s.oy + s.y, s.oz);
    sc.set(s.len, s.t, s.depth);
    if (s.sq) sc.set(s.t, s.t, s.depth * 0.7);
    m.compose(p, q, sc);
    im.setMatrixAt(i, m);
  });
  im.instanceMatrix.needsUpdate = true;
  im.castShadow = false; im.receiveShadow = false;
  im.frustumCulled = true;
  return im;
}

function pickMats(MATS) {
  const std = (c, r = 0.85, extra = {}) =>
    new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: 0.0, ...extra });
  return {
    post: MATS?.woodAged || MATS?.woodDark || MATS?.wood || std(0x3a2c1e, 0.9),
    beam: MATS?.woodDark || MATS?.woodAged || MATS?.wood || std(0x2e2318, 0.9),
    board: MATS?.woodNew || MATS?.wood || std(0x4a3a26, 0.85),
    stone: MATS?.stone || MATS?.stoneDark || MATS?.rock || std(0x8a8578, 0.95),
    bronze: MATS?.bronze || MATS?.brass || MATS?.iron || std(0x8c6b3a, 0.45, { metalness: 0.85 }),
    glyphMain: MATS?.brass || std(0xc9a86a, 0.38, { metalness: 0.9 }),
    glyphSub: MATS?.bronze || std(0x9a7d4f, 0.5, { metalness: 0.8 }),
    wash: new THREE.MeshStandardMaterial({ color: 0x2b2118, emissive: 0xffc98a, emissiveIntensity: 0.55, roughness: 0.6 }),
  };
}

function box(w, h, d, mat, x, y, z, ry = 0) {
  const ms = new THREE.Mesh(boxGeo(), mat);
  ms.scale.set(w, h, d); ms.position.set(x, y, z); ms.rotation.y = ry;
  ms.castShadow = true; ms.receiveShadow = true;
  return ms;
}

// Contact blob that respects the repo's anti-z-fight convention:
// y=0.03 base, polygonOffset, depthWrite false. Never coplanar with moss.
function contactBlob(w, d) {
  const g = new THREE.CircleGeometry(1, 20);
  const mt = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  const ms = new THREE.Mesh(g, mt);
  ms.rotation.x = -Math.PI / 2; ms.position.y = 0.03; ms.scale.set(w, d, 1);
  ms.renderOrder = 2;
  return ms;
}
function mossDisc(r, x, z, mat) {
  const g = new THREE.CircleGeometry(1, 12);
  const ms = new THREE.Mesh(g, mat || new THREE.MeshStandardMaterial({ color: 0x4a5a33, roughness: 1 }));
  ms.rotation.x = -Math.PI / 2; ms.position.set(x, 0.035, z); ms.scale.set(r, r * 0.8, 1);
  ms.receiveShadow = true; ms.renderOrder = 1;
  return ms;
}

// ---------------- MAIN SIGN ----------------
export function buildMainSign(MATS, opts = {}) {
  const M = pickMats(MATS);
  const g = new THREE.Group();
  g.name = 'tsukimori-main-sign';

  // Frame: 2 posts + stone feet + top/bottom beams + plaque board
  const W = 3.4, postH = 2.5, postW = 0.16;
  for (const s of [-1, 1]) {
    g.add(box(0.5, 0.28, 0.5, M.stone, s * (W / 2), 0.14, 0));                 // stone feet
    g.add(box(postW, postH, postW, M.post, s * (W / 2), 0.28 + postH / 2, 0)); // posts
    g.add(box(0.22, 0.06, 0.22, M.bronze, s * (W / 2), 0.30, 0));              // bronze shoe
  }
  g.add(box(W + 0.5, 0.14, 0.2, M.beam, 0, 0.28 + postH + 0.07, 0)); // top beam
  g.add(box(W + 0.3, 0.1, 0.12, M.beam, 0, 0.62, 0));               // low stretcher
  const boardW = W - 0.2, boardH = 1.35, boardY = 1.72, boardZ = 0.02;
  const board = box(boardW, boardH, 0.07, M.board, 0, boardY, boardZ);
  g.add(board);
  g.add(box(boardW + 0.1, 0.05, 0.1, M.beam, 0, boardY + boardH / 2 + 0.03, boardZ)); // cap
  g.add(box(boardW + 0.1, 0.05, 0.1, M.beam, 0, boardY - boardH / 2 - 0.03, boardZ)); // sill
  // bronze corner fittings (4, shared geo/mat — 4 draws, trivial tris)
  for (const sx of [-1, 1]) for (const sy of [-1, 1])
    g.add(box(0.09, 0.09, 0.1, M.bronze, sx * (boardW / 2 - 0.05), boardY + sy * (boardH / 2 - 0.05), boardZ));

  // Dimensional lettering — proud of board face (+0.075, clears houses.js 0.068/0.072 convention)
  const face = boardZ + 0.035 + 0.075;
  const cx = (w) => -w / 2;
  const l1 = layoutLine('LGCY STUDIOS PRESENTS', { size: 0.115, tracking: 0.30 });
  const l2 = layoutLine('TSUKIMORI', { size: 0.30, tracking: 0.30 });
  const l3 = layoutLine('月森', { size: 0.30, tracking: 0.30 });
  const l4 = layoutLine('THE MOON FOREST', { size: 0.13, tracking: 0.30 });
  const l5 = layoutLine('BUILT WITH LGCY AI', { size: 0.10, tracking: 0.30 });
  const main = buildStrokeText([
    { text: 'TSUKIMORI', size: 0.30, tracking: 0.30, ox: cx(l2.width), oy: boardY + 0.28, oz: face },
    { text: '月森', size: 0.30, tracking: 0.30, ox: cx(l3.width), oy: boardY - 0.14, oz: face },
  ], M.glyphMain);
  const sub = buildStrokeText([
    { text: 'LGCY STUDIOS PRESENTS', size: 0.115, tracking: 0.30, ox: cx(l1.width), oy: boardY + 0.52, oz: face - 0.012 },
    { text: 'THE MOON FOREST', size: 0.13, tracking: 0.30, ox: cx(l4.width), oy: boardY - 0.44, oz: face - 0.012 },
    { text: 'BUILT WITH LGCY AI', size: 0.10, tracking: 0.30, ox: cx(l5.width), oy: boardY - 0.58, oz: face - 0.012 },
  ], M.glyphSub);
  g.add(main, sub);

  // Restrained warm wash: thin emissive strip under cap + ONE cheap spot (no shadow)
  const strip = box(boardW - 0.2, 0.02, 0.02, M.wash, 0, boardY + boardH / 2 - 0.06, boardZ + 0.06);
  strip.castShadow = false;
  g.add(strip);
  const spot = new THREE.SpotLight(0xffd9a0, 6, 7, 0.55, 0.7, 1.6);
  spot.position.set(0, 2.6, 1.6);
  spot.target.position.set(0, boardY - 0.1, 0);
  spot.castShadow = false;
  g.add(spot, spot.target);
  g.userData.signLight = spot;
  g.userData.washMat = M.wash;

  g.add(contactBlob(2.3, 0.8));
  g.add(mossDisc(0.30, -W / 2, 0.32), mossDisc(0.26, W / 2, -0.3));

  g.position.set(...(opts.pos || [6.5, 0, 14.5]));
  g.rotation.y = opts.ry ?? -0.5;
  return g;
}

// ---------------- STUDIO PLAQUE (hidden signature) ----------------
export function buildStudioPlaque(MATS, opts = {}) {
  const M = pickMats(MATS);
  const g = new THREE.Group();
  g.name = 'lgcy-studio-plaque';
  // Low double-post bronze plate, leans back 8°
  for (const s of [-1, 1]) g.add(box(0.07, 0.62, 0.07, M.post, s * 0.42, 0.31, 0));
  const plate = box(1.05, 0.52, 0.04, M.bronze, 0, 0.62, 0.02);
  plate.rotation.x = -0.14;
  g.add(plate);
  const face = 0.02 + 0.02 + 0.045;
  const lines = [
    { text: 'LGCY STUDIOS', size: 0.085, tracking: 0.30, oy: 0.78 },
    { text: 'WORLD DESIGNED & BUILT WITH LGCY AI', size: 0.038, tracking: 0.28, oy: 0.66 },
    { text: 'PROCEDURAL ENVIRONMENT • CODE • AI', size: 0.038, tracking: 0.28, oy: 0.585 },
    { text: '© 2026 LGCY STUDIOS', size: 0.038, tracking: 0.28, oy: 0.51 },
  ];
  const tmp = lines.map((L) => ({ ...L, ox: -layoutLine(L.text, L).width / 2, oz: face }));
  const im = buildStrokeText(tmp, M.glyphSub, { depth: 0.014 });
  im.rotation.x = -0.14; im.position.z = 0.005;
  g.add(im);
  // Microscopic fine print ONLY (allowed canvas use): etched hairline under plate
  const cv = document.createElement('canvas'); cv.width = 256; cv.height = 16;
  const cx2 = cv.getContext('2d');
  cx2.fillStyle = '#3a2c16'; cx2.fillRect(0, 0, 256, 16);
  cx2.fillStyle = '#d8b988'; cx2.font = '9px sans-serif'; cx2.textAlign = 'center';
  cx2.fillText('tsukimori — moon forest district', 128, 11);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
  const fine = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.044),
    new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.6 }));
  fine.position.set(0, 0.44, 0.045); fine.rotation.x = -0.14;
  g.add(fine);
  g.add(contactBlob(0.8, 0.4));
  g.position.set(...(opts.pos || [2.8, 0, 9.6]));
  g.rotation.y = opts.ry ?? -0.35;
  return g;
}

export function buildSignage(scene, MATS, opts = {}) {
  const g = new THREE.Group(); g.name = 'signage';
  const sign = buildMainSign(MATS, { pos: opts.signPos, ry: opts.signRy });
  const plaque = buildStudioPlaque(MATS, { pos: opts.plaquePos, ry: opts.plaqueRy });
  g.add(sign, plaque);
  scene.add(g);
  return { group: g, sign, plaque, signLight: sign.userData.signLight };
}