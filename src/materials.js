import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Procedural canvas textures. These are SURFACE DETAIL ONLY — every object
// they shade is real geometry (boxes, lathes, instanced meshes).
// ---------------------------------------------------------------------------

function canvasTex(size, draw, repeatX = 1, repeatY = 1) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  draw(g, size);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeatX, repeatY);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// deterministic pseudo-random for stable textures
function mulberry(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function woodDrawTone(seed, base, streak, hi) {
  return (g, s) => {
    const rnd = mulberry(seed);
    g.fillStyle = base; g.fillRect(0, 0, s, s);
    // pass 1: long directional grain streaks
    for (let i = 0; i < 130; i++) {
      const y = rnd() * s;
      g.strokeStyle = rnd() < 0.3 ? hi : streak;
      g.globalAlpha = 0.14 + rnd() * 0.24;
      g.lineWidth = 0.6 + rnd() * 2.2;
      g.beginPath();
      g.moveTo(0, y);
      for (let x = 0; x <= s; x += 16) g.lineTo(x, y + Math.sin(x * 0.05 + i) * 2.5);
      g.stroke();
    }
    // pass 2: fine dark pores + occasional weathering speckle near base tone
    for (let i = 0; i < 420; i++) {
      g.fillStyle = streak;
      g.globalAlpha = 0.10 + rnd() * 0.12;
      g.fillRect(rnd() * s, rnd() * s, 1 + rnd() * 1.5, 1);
    }
    g.globalAlpha = 0.5;
    for (let i = 0; i < 7; i++) { // knots
      const x = rnd() * s, y = rnd() * s;
      g.strokeStyle = streak; g.lineWidth = 1.2;
      for (let r = 2; r < 9; r += 2) { g.beginPath(); g.ellipse(x, y, r * 1.8, r, 0.3, 0, Math.PI * 2); g.stroke(); }
    }
    g.globalAlpha = 1;
  };
}

// legacy wrapper: dark posts/beams (seed 7) vs warm boards (seed 21)
function woodDraw(dark) {
  return dark
    ? woodDrawTone(7, '#3d2a1c', '#2a1d12', '#54402c')
    : woodDrawTone(21, '#8a6844', '#6e5233', '#a37f52');
}

// T1-fix: leaf-cluster alpha card. Tip cards are quads — without breakup they
// read as paper sheets ("triangles"). This draws ~50 small leaves with gaps on
// transparency; shared by ALL leaf mats (species tint comes from instance color).
// Deterministic (seeded), one 128px canvas, zero downloads.
function leafClusterDraw(seed) {
  return (g, s) => {
    const rnd = mulberry(seed);
    g.clearRect(0, 0, s, s);
    // back layer (dark, depth) then front layer (lit)
    for (let layer = 0; layer < 2; layer++) {
      const n = layer ? 30 : 18;
      for (let i = 0; i < n; i++) {
        const x = s * 0.12 + rnd() * s * 0.76, y = s * 0.12 + rnd() * s * 0.76;
        const w = 5 + rnd() * 9, h = 3.5 + rnd() * 6, a = rnd() * Math.PI;
        const v = layer ? 150 + rnd() * 70 : 70 + rnd() * 50; // lit vs shaded green
        g.fillStyle = `rgb(${(v * 0.62) | 0},${v | 0},${(v * 0.52) | 0})`;
        g.globalAlpha = 0.95;
        g.beginPath(); g.ellipse(x, y, w, h, a, 0, Math.PI * 2); g.fill();
        // center vein notch (leaf read, not blob read)
        g.globalAlpha = 0.5; g.fillStyle = layer ? '#2a4028' : '#1c2e1e';
        g.beginPath(); g.ellipse(x, y, w * 0.5, h * 0.18, a, 0, Math.PI * 2); g.fill();
      }
    }
    g.globalAlpha = 1;
  };
}

function plasterDraw(g, s) {
  const rnd = mulberry(99);
  g.fillStyle = '#efe7d6'; g.fillRect(0, 0, s, s);
  // WAVE-B: large soft mottling (uneven coloration) under the original tooth
  for (let i = 0; i < 22; i++) {
    const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.16);
    const c = rnd() < 0.5 ? '210,203,188' : '228,222,206';
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(' + c + ',0.10)');
    gr.addColorStop(1, 'rgba(' + c + ',0)');
    g.fillStyle = gr; g.globalAlpha = 1;
    g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
  }
  for (let i = 0; i < 2600; i++) {
    const v = 225 + Math.floor(rnd() * 28);
    g.fillStyle = `rgb(${v},${v - 6},${v - 20})`;
    g.globalAlpha = 0.35;
    g.fillRect(rnd() * s, rnd() * s, 1.4, 1.4);
  }
  g.globalAlpha = 0.08; g.fillStyle = '#b09a78';
  for (let i = 0; i < 8; i++) { g.beginPath(); g.arc(rnd() * s, rnd() * s, 12 + rnd() * 30, 0, 7); g.fill(); }
  g.globalAlpha = 1;
}

function tatamiDraw(g, s) {
  const rnd = mulberry(5);
  g.fillStyle = '#a8a06a'; g.fillRect(0, 0, s, s);
  for (let y = 0; y < s; y += 3) {
    g.fillStyle = (y / 3) % 2 ? '#9d955f' : '#b3ab74';
    g.fillRect(0, y, s, 2);
  }
  for (let i = 0; i < 500; i++) {
    g.fillStyle = rnd() < 0.5 ? '#8a824f' : '#c0b87e';
    g.globalAlpha = 0.4;
    g.fillRect(rnd() * s, rnd() * s, 2, 1);
  }
  g.globalAlpha = 1;
}

function paperDraw(g, s) {
  const rnd = mulberry(13);
  g.fillStyle = '#f6efdd'; g.fillRect(0, 0, s, s);
  for (let i = 0; i < 900; i++) {
    g.fillStyle = rnd() < 0.5 ? '#efe6d0' : '#fbf5e6';
    g.globalAlpha = 0.5;
    g.fillRect(rnd() * s, rnd() * s, 2, 1);
  }
  g.globalAlpha = 1;
}

function gravelDraw(g, s) {
  const rnd = mulberry(31);
  g.fillStyle = '#cfc6b4'; g.fillRect(0, 0, s, s);
  for (let i = 0; i < 1500; i++) {
    const v = 165 + Math.floor(rnd() * 70);
    g.fillStyle = `rgb(${v},${v - 4},${v - 14})`;
    g.beginPath(); g.arc(rnd() * s, rnd() * s, 0.8 + rnd() * 1.8, 0, 7); g.fill();
  }
}

function grassDraw(g, s) {
  const rnd = mulberry(77);
  g.fillStyle = '#7d8f57'; g.fillRect(0, 0, s, s);
  // WAVE-B: clump patchiness (varied blotch size 4..20px) under blade speckle
  for (let i = 0; i < 46; i++) {
    const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * 16;
    const pal = rnd();
    const c = pal < 0.4 ? '74,102,46' : pal < 0.75 ? '96,128,58' : '112,140,72';
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(' + c + ',0.55)'); gr.addColorStop(1, 'rgba(' + c + ',0)');
    g.fillStyle = gr; g.globalAlpha = 1;
    g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
  }
  for (let i = 0; i < 2200; i++) {
    g.fillStyle = rnd() < 0.5 ? '#71834e' : '#8a9c60';
    g.globalAlpha = 0.6;
    g.fillRect(rnd() * s, rnd() * s, 1.5, 3);
  }
  g.globalAlpha = 1;
}

function stoneDraw(g, s) {
  const rnd = mulberry(55);
  g.fillStyle = '#9a968c'; g.fillRect(0, 0, s, s);
  // WAVE-B: wide tonal patches first (stronger spread than the tooth below)
  for (let i = 0; i < 30; i++) {
    const x = rnd() * s, y = rnd() * s, r = 6 + rnd() * 30;
    const v = 118 + Math.floor(rnd() * 52) - 26;
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(' + v + ',' + v + ',' + (v + 4) + ',0.22)');
    gr.addColorStop(1, 'rgba(' + v + ',' + v + ',' + (v + 4) + ',0)');
    g.fillStyle = gr; g.globalAlpha = 1;
    g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
  }
  for (let i = 0; i < 1200; i++) {
    const v = 120 + Math.floor(rnd() * 60);
    g.fillStyle = `rgb(${v},${v},${v - 6})`;
    g.globalAlpha = 0.5;
    g.fillRect(rnd() * s, rnd() * s, 2, 2);
  }
  // WAVE-B: 3 dark crevice streaks (seeded diagonal walks)
  g.globalAlpha = 0.5; g.strokeStyle = 'rgba(38,38,42,1)'; g.lineCap = 'round';
  for (let k = 0; k < 3; k++) {
    let x = rnd() * s, y = rnd() * s;
    g.lineWidth = 1.5 + rnd() * 1.5; g.beginPath(); g.moveTo(x, y);
    for (let j = 0; j < 7; j++) { x += (rnd() - 0.35) * 26; y += (rnd() - 0.35) * 26; g.lineTo(x, y); }
    g.stroke();
  }
  g.globalAlpha = 0.25; g.strokeStyle = '#6f6b62';
  for (let i = 0; i < 6; i++) {
    g.beginPath(); g.moveTo(rnd() * s, rnd() * s);
    g.lineTo(rnd() * s, rnd() * s); g.stroke();
  }
  g.globalAlpha = 1;
}

// WAVE-B: shared 128px roughness noise (ONE canvas, linear, reused as roughnessMap)
function paintRoughNoise(g, s) {
  const rnd = mulberry(0x9e3779b9);
  g.fillStyle = '#808080'; g.fillRect(0, 0, s, s);
  for (let i = 0; i < 900; i++) {
    const v = 110 + Math.floor(rnd() * 60);
    g.fillStyle = 'rgb(' + v + ',' + v + ',' + v + ')';
    g.fillRect(Math.floor(rnd() * s), Math.floor(rnd() * s), 1 + Math.floor(rnd() * 3), 1 + Math.floor(rnd() * 3));
  }
}

// WAVE-B: soil painter (M.soil was flat color) + map wiring below in buildMaterials
function soilDraw(g, s) {
  const rnd = mulberry(0x50f1ed);
  g.fillStyle = '#5a4632'; g.fillRect(0, 0, s, s);
  for (let i = 0; i < 40; i++) {
    const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * 16;
    const c = rnd() < 0.5 ? '66,50,34' : '96,78,56';
    const gr = g.createRadialGradient(x, y, 0, x, y, r);
    gr.addColorStop(0, 'rgba(' + c + ',0.5)'); gr.addColorStop(1, 'rgba(' + c + ',0)');
    g.fillStyle = gr; g.globalAlpha = 1;
    g.beginPath(); g.arc(x, y, r, 0, 7); g.fill();
  }
  for (let i = 0; i < 300; i++) {
    g.fillStyle = rnd() < 0.5 ? 'rgba(40,30,20,0.5)' : 'rgba(140,115,85,0.5)';
    g.globalAlpha = 1;
    g.fillRect(Math.floor(rnd() * s), Math.floor(rnd() * s), 2, 2);
  }
  g.globalAlpha = 1;
}

function norenDraw(g, s) {
  g.fillStyle = '#2e3d5c'; g.fillRect(0, 0, s, s); // indigo
  g.fillStyle = '#efe7d2';
  g.fillRect(s * 0.18, 0, s * 0.1, s);
  g.fillRect(s * 0.72, 0, s * 0.1, s);
  g.beginPath(); g.arc(s / 2, s * 0.34, s * 0.13, 0, 7); g.fill(); // sun disc
  g.fillStyle = '#2e3d5c';
  g.font = `bold ${Math.floor(s * 0.16)}px serif`;
  g.textAlign = 'center';
  g.fillText('TEA', s / 2, s * 0.72);
}

// sumi-e style scroll: mist gradient + mountain strokes + red seal
function scrollDraw(g, s) {
  const grad = g.createLinearGradient(0, 0, 0, s);
  grad.addColorStop(0, '#f3ecdb'); grad.addColorStop(1, '#e4d8bd');
  g.fillStyle = grad; g.fillRect(0, 0, s, s);
  g.strokeStyle = '#4a4a48'; g.lineCap = 'round';
  const mtn = (y0, amp, w, x0) => {
    g.lineWidth = w; g.beginPath(); g.moveTo(x0, y0);
    g.quadraticCurveTo(x0 + s * 0.2, y0 - amp, x0 + s * 0.38, y0 - amp * 0.25);
    g.quadraticCurveTo(x0 + s * 0.5, y0 - amp * 0.7, x0 + s * 0.62, y0 - amp * 0.1);
    g.stroke();
  };
  g.globalAlpha = 0.75; mtn(s * 0.62, s * 0.3, 7, s * 0.05);
  g.globalAlpha = 0.5; mtn(s * 0.7, s * 0.2, 5, s * 0.35);
  g.globalAlpha = 0.9;
  g.fillStyle = '#b0533c'; g.beginPath(); g.arc(s * 0.68, s * 0.26, s * 0.05, 0, 7); g.fill();
  g.globalAlpha = 1;
  g.fillStyle = '#a33327'; g.fillRect(s * 0.12, s * 0.78, s * 0.1, s * 0.1);
  g.fillStyle = '#f3ecdb'; g.font = `${Math.floor(s * 0.07)}px serif`; g.textAlign = 'center';
  g.fillText('wa', s * 0.17, s * 0.855);
}

function fusumaDraw(g, s) {
  g.fillStyle = '#e9dfc6'; g.fillRect(0, 0, s, s);
  g.strokeStyle = '#c9b98f'; g.lineWidth = 2; g.globalAlpha = 0.7;
  for (let i = -s; i < s * 2; i += 26) {
    g.beginPath(); g.arc(i, s * 0.9, 22, Math.PI, 0); g.stroke();
    g.beginPath(); g.arc(i, s * 0.45, 22, Math.PI, 0); g.stroke();
  }
  g.globalAlpha = 1;
}

export function buildMaterials() {
  const woodTex = canvasTex(256, woodDraw(false), 1, 1);
  const darkWoodTex = canvasTex(256, woodDraw(true), 1, 1);

  const M = {
    woodDark: new THREE.MeshStandardMaterial({ map: darkWoodTex, color: 0xb99f83, roughness: 0.75, envMapIntensity: 0.25 }),
    wood: new THREE.MeshStandardMaterial({ map: woodTex, color: 0xcfa878, roughness: 0.8, envMapIntensity: 0.25 }),
    woodFloor: new THREE.MeshStandardMaterial({ map: canvasTex(256, woodDraw(false), 4, 1), color: 0xd8b183, roughness: 0.7, envMapIntensity: 0.3 }),
    plaster: new THREE.MeshStandardMaterial({ map: canvasTex(256, plasterDraw, 1, 1), color: 0xffffff, roughness: 0.95, envMapIntensity: 0.15 }),
    paper: new THREE.MeshStandardMaterial({
      map: canvasTex(128, paperDraw, 1, 1), color: 0xfff3da,
      emissive: 0xffdf9e, emissiveIntensity: 0.38,
      transparent: true, opacity: 0.92, roughness: 0.9, side: THREE.DoubleSide
    }),
    tatami: new THREE.MeshStandardMaterial({ map: canvasTex(256, tatamiDraw, 1, 1), color: 0xffffff, roughness: 0.95, envMapIntensity: 0.1 }),
    tatamiEdge: new THREE.MeshStandardMaterial({ color: 0x2f4a3a, roughness: 0.9 }),
    roofTile: new THREE.MeshStandardMaterial({ color: 0x4a4d55, roughness: 0.55, metalness: 0.08, envMapIntensity: 0.5 }),
    roofTileAlt: new THREE.MeshStandardMaterial({ color: 0x3c3f46, roughness: 0.6, metalness: 0.08, envMapIntensity: 0.5 }),
    ridge: new THREE.MeshStandardMaterial({ color: 0x35373d, roughness: 0.5, metalness: 0.1, envMapIntensity: 0.6 }),
    roofUnder: new THREE.MeshStandardMaterial({ map: darkWoodTex, color: 0x8a6f52, roughness: 0.9 }),
    stone: new THREE.MeshStandardMaterial({ map: canvasTex(256, stoneDraw, 1, 1), color: 0xffffff, roughness: 0.95, envMapIntensity: 0.15 }),
    gravel: new THREE.MeshStandardMaterial({ map: canvasTex(256, gravelDraw, 6, 6), color: 0xffffff, roughness: 1.0 }),
    grass: new THREE.MeshStandardMaterial({ map: canvasTex(256, grassDraw, 10, 10), color: 0xffffff, roughness: 1.0 }),
    moss: new THREE.MeshStandardMaterial({ color: 0x5d7d3a, roughness: 1.0, envMapIntensity: 0.1 }),
    mossDark: new THREE.MeshStandardMaterial({ color: 0x46652c, roughness: 1.0, envMapIntensity: 0.1 }),
    bamboo: new THREE.MeshStandardMaterial({ color: 0x7fa04e, roughness: 0.6, envMapIntensity: 0.3 }),
    bambooLeaf: new THREE.MeshStandardMaterial({ color: 0x4e7a34, roughness: 0.8, side: THREE.DoubleSide }),
    trunk: new THREE.MeshStandardMaterial({ map: darkWoodTex, color: 0x9a7a5c, roughness: 0.9 }),
    mapleLeaf: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75, side: THREE.DoubleSide }),
    fusuma: new THREE.MeshStandardMaterial({ map: canvasTex(256, fusumaDraw, 1, 1), color: 0xffffff, roughness: 0.9 }),
    noren: new THREE.MeshStandardMaterial({ map: canvasTex(256, norenDraw, 1, 1), color: 0xffffff, roughness: 0.9, side: THREE.DoubleSide }),
    scroll: new THREE.MeshStandardMaterial({ map: canvasTex(256, scrollDraw, 1, 1), color: 0xffffff, roughness: 0.9 }),
    lanternGlow: new THREE.MeshStandardMaterial({ color: 0xffd9a0, emissive: 0xff9c46, emissiveIntensity: 2.2 }),
    paperLantern: new THREE.MeshStandardMaterial({ color: 0xffe4b8, emissive: 0xffb46b, emissiveIntensity: 1.4, roughness: 0.8 }),
    bronze: new THREE.MeshStandardMaterial({ color: 0x4c4238, roughness: 0.45, metalness: 0.7, envMapIntensity: 0.8 })
  };

// --- district extension: aged/new wood, glass, metals, soil, wet registry ---
// REMASTERED-A: woodNew/woodAged graduate from flat colors to real grain maps
// (distinct seeds + palettes so new vs aged read differently, not just tinted).
M.woodNew   = M.woodNew   || new THREE.MeshStandardMaterial({ map: canvasTex(256, woodDrawTone(501, '#9a7040', '#7a5630', '#bd9257'), 1, 1), color: 0xffffff, roughness: 0.7 });
M.woodAged  = M.woodAged  || new THREE.MeshStandardMaterial({ map: canvasTex(256, woodDrawTone(502, '#77685a', '#5c5148', '#8d8172'), 2, 1), color: 0xffffff, roughness: 0.9 });
M.glassDark = M.glassDark || new THREE.MeshStandardMaterial({ color: 0x10151c, roughness: 0.08, metalness: 0.9 });
M.bronze    = M.bronze    || new THREE.MeshStandardMaterial({ color: 0x6b5a33, roughness: 0.35, metalness: 0.9 });
M.iron      = M.iron      || new THREE.MeshStandardMaterial({ color: 0x2b2b2e, roughness: 0.5, metalness: 0.8 });
M.soil      = M.soil      || new THREE.MeshStandardMaterial({ color: 0x4a3f33, roughness: 1 });
M.thatch    = M.thatch    || new THREE.MeshStandardMaterial({ color: 0x9a8a5f, roughness: 1 });
// wettable registry for weather.js
M._wet = M._wet || [];
M.registerWet = (m) => { if (m && !M._wet.includes(m)) M._wet.push(m); return m; };
M.plasterTinted = (hex) => new THREE.MeshStandardMaterial({ color: hex, roughness: 0.95 });
// register the core set once:
[M.wood, M.woodDark, M.woodNew, M.woodAged, M.plaster, M.tile, M.stone, M.soil].forEach(m => m && M.registerWet(m));
// shared aliases so district builders reuse textured mothership materials:
M.tile = M.tile || M.roofTile;
M.shoji = M.shoji || M.paper;
M.registerWet(M.tile);
// WAVE-B: single shared roughness texture (+1 texture total) + soil map wiring
const _rc = document.createElement('canvas'); _rc.width = _rc.height = 128;
paintRoughNoise(_rc.getContext('2d'), 128);
const _roughTex = new THREE.CanvasTexture(_rc);
_roughTex.wrapS = _roughTex.wrapT = THREE.RepeatWrapping;
_roughTex.repeat.set(3, 3);
_roughTex.colorSpace = THREE.NoColorSpace; // roughnessMap must stay linear
for (const _k of ['wood', 'woodDark', 'woodNew', 'woodAged', 'plaster', 'stone', 'soil']) {
  if (M[_k]) { M[_k].roughnessMap = _roughTex; M[_k].roughness = 1.0; }
}
// REMASTERED-A: roof ceramics get micro response from the same shared noise
// (zero new textures): roughness variation + bump so tiles catch raking light.
for (const _k of ['roofTile', 'roofTileAlt', 'ridge']) {
  if (M[_k]) {
    M[_k].roughnessMap = _roughTex; M[_k].roughness = 1.0;
    M[_k].bumpMap = _roughTex; M[_k].bumpScale = 0.25;
  }
}
M.soil.map = canvasTex(128, soilDraw, 4, 4);
M.soil.needsUpdate = true;
// --- T1 village vegetation keys (branch forge3d-rebuild): bark mats carry
// procedural colors until vendor.js slots wire CC0 scans onLoad (never black).
// Leaf mats are solid DoubleSide quads (tip-cluster cards, not shells).
{
  const bark = (c, r = 0.9) => new THREE.MeshStandardMaterial({ color: c, roughness: r, envMapIntensity: 0.15 });
  const leaf = (c, r = 0.8) => new THREE.MeshStandardMaterial({ color: c, roughness: r, side: THREE.DoubleSide, envMapIntensity: 0.1 });
  M.barkSugi = M.barkSugi || bark(0x6a4a34);
  M.barkHinoki = M.barkHinoki || bark(0x7a5a40);
  M.barkKeyaki = M.barkKeyaki || bark(0x8a8a86, 0.85); // smooth grey village bark
  M.barkMomiji = M.barkMomiji || bark(0x7a6a5c, 0.85);
  M.barkOrchard = M.barkOrchard || bark(0x6a5a4a);
  M.leafSugi = M.leafSugi || leaf(0x2d4a2a, 0.9);
  M.leafBroad = M.leafBroad || leaf(0x476b35);
  M.leafMomiji = M.leafMomiji || leaf(0x5a7a3a, 0.75);
  M.leafBlossom = M.leafBlossom || leaf(0xe8a8b8, 0.7);
  M.leafPine = M.leafPine || leaf(0x3d5a30, 0.85);
  M.leafBamboo = M.leafBamboo || leaf(0x4a7038, 0.75);
  M.leafSasa = M.leafSasa || leaf(0x3f6b34);
  M.leafFern = M.leafFern || leaf(0x3a6b40);
  M.leafSeedling = M.leafSeedling || leaf(0x557a3a);
  // T1-fix: every leaf mat gets the cluster alpha card (alphaTest cutout, NOT
  // transparent blend — no sort issues, keeps depth). Colors go WHITE so the
  // per-instance species tint (tipCluster) carries the hue, not double-darken.
  const _cluster = canvasTex(128, leafClusterDraw(7701), 1, 1);
  for (const _lk of ['leafSugi', 'leafBroad', 'leafMomiji', 'leafBlossom', 'leafPine', 'leafBamboo', 'leafSasa', 'leafFern', 'leafSeedling', 'bambooLeaf']) {
    const _lm = M[_lk];
    if (_lm) {
      _lm.map = _cluster;
      _lm.alphaTest = 0.45;
      _lm.color.setHex(0xffffff);
      _lm.needsUpdate = true;
    }
  }
  // mapleLeaf EXCLUDED on purpose: momiji leaves are lobed ShapeGeometry (real
  // leaf silhouettes already) + instance-tinted autumn reds that a green map
  // would muddy. Quads get the cluster card; shaped leaves don't need it.
  M.shoot = M.shoot || new THREE.MeshStandardMaterial({ color: 0x9aa86a, roughness: 0.8 });
  M.litter = M.litter || new THREE.MeshStandardMaterial({ color: 0x4a3826, roughness: 1 });
  M.impostor = M.impostor || new THREE.MeshBasicMaterial({ color: 0x33482e, side: THREE.DoubleSide, fog: true });
  // moss mounds + bamboo culms reuse existing M.moss / M.bamboo (no new keys).
}
return M;
}
