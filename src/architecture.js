import * as THREE from 'three';
import { makeBeam, fillInstances, displacedRock, contactShadow, makeLatticeBars, mulberry } from './helpers.js';

export const HOUSE = {
  w: 10, d: 6.4, floorY: 0.7, wallTop: 3.6,
  eaveY: 3.78, pillar: 0.22
};

// One shoji sliding panel: wood frame + translucent paper + lattice bars.
export function makeShoji(w, h, M, latticeCells = [4, 6]) {
  const g = new THREE.Group();
  const t = 0.07, fd = 0.06;
  const frame = M.woodDark;
  g.add(makeBeam(w, t, fd, frame, 0, h / 2 - t / 2, 0));
  g.add(makeBeam(w, t, fd, frame, 0, -h / 2 + t / 2, 0));
  g.add(makeBeam(t, h, fd, frame, -w / 2 + t / 2, 0, 0));
  g.add(makeBeam(t, h, fd, frame, w / 2 - t / 2, 0, 0));
  g.add(makeBeam(0.05, h - 2 * t, fd * 0.7, frame, 0, 0, 0)); // center stile
  const paper = new THREE.Mesh(new THREE.PlaneGeometry(w - 2 * t, h - 2 * t), M.paper);
  paper.position.z = -0.005;
  paper.receiveShadow = true;
  g.add(paper);
  const lat = makeLatticeBars(latticeCells[0], latticeCells[1], w - 2 * t, h - 2 * t, 0.028, 0.02, M.woodDark);
  lat.position.z = 0.018;
  g.add(lat);
  // small round pull handle
  const pull = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.03, 12), M.bronze);
  pull.rotation.x = Math.PI / 2;
  pull.position.set(w / 2 - 0.16, 0, 0.035);
  g.add(pull);
  return g;
}

export function buildArchitecture(M) {
  const g = new THREE.Group();
  const rnd = mulberry(1234);
  const { w, d, floorY, wallTop, pillar } = HOUSE;
  const hx = w / 2, hz = d / 2;

  // --- ground shadow blob under house ---
  const blob = contactShadow(w + 3.4, d + 3.6, 0.9);
  blob.position.set(0, 0.02, 0);
  g.add(blob);

  // --- stone base (kame-ishi style footings, instanced rough stones) ---
  {
    const geo = displacedRock(0.32, 900, 0.62, 0);
    const pts = [];
    for (let x = -hx; x <= hx + 0.01; x += 1.25)
      for (let z = -hz; z <= hz + 0.01; z += 1.6)
        pts.push({ p: [x + (rnd() - 0.5) * 0.15, 0.18, z + (rnd() - 0.5) * 0.15], ry: rnd() * 6.3, s: 0.8 + rnd() * 0.5 });
    const im = new THREE.InstancedMesh(geo, M.stone, pts.length);
    fillInstances(im, pts);
    g.add(im);
  }

  // --- floor frame: perimeter + joists + platform ---
  g.add(makeBeam(w + 0.3, 0.24, 0.24, M.woodDark, 0, floorY - 0.12, hz));
  g.add(makeBeam(w + 0.3, 0.24, 0.24, M.woodDark, 0, floorY - 0.12, -hz));
  g.add(makeBeam(0.24, 0.24, d, M.woodDark, -hx, floorY - 0.12, 0));
  g.add(makeBeam(0.24, 0.24, d, M.woodDark, hx, floorY - 0.12, 0));
  for (let x = -hx + 0.8; x < hx; x += 1.1)
    g.add(makeBeam(0.14, 0.18, d - 0.2, M.wood, x, floorY - 0.1, 0));
  const platform = makeBeam(w + 0.2, 0.1, d, M.woodFloor, 0, floorY - 0.02, 0);
  g.add(platform);

  // --- pillars (hashira) ---
  const pillarH = wallTop - floorY;
  const pillarY = floorY + pillarH / 2;
  const xs = [];
  for (let i = 0; i <= 5; i++) xs.push(-hx + (i * w) / 5);
  const pillarPos = [];
  xs.forEach(x => { pillarPos.push([x, hz]); pillarPos.push([x, -hz]); });
  [-hz + d / 4, 0, hz - d / 4].forEach(z => { pillarPos.push([-hx, z]); pillarPos.push([hx, z]); });
  pillarPos.forEach(([x, z]) => g.add(makeBeam(pillar, pillarH, pillar, M.woodDark, x, pillarY, z)));

  // --- horizontal beams: nageshi (top) + kamoi (shoji head rail) ---
  const beamY = wallTop - 0.12;
  g.add(makeBeam(w + 0.24, 0.24, 0.2, M.woodDark, 0, beamY, hz));
  g.add(makeBeam(w + 0.24, 0.24, 0.2, M.woodDark, 0, beamY, -hz));
  g.add(makeBeam(0.2, 0.24, d + 0.24, M.woodDark, -hx, beamY, 0));
  g.add(makeBeam(0.2, 0.24, d + 0.24, M.woodDark, hx, beamY, 0));
  const railY = floorY + 2.32;
  g.add(makeBeam(w, 0.14, 0.12, M.woodDark, 0, railY, hz));   // kamoi front
  g.add(makeBeam(w, 0.1, 0.14, M.woodDark, 0, floorY + 0.08, hz)); // sill
  g.add(makeBeam(w, 0.14, 0.12, M.woodDark, 0, railY, -hz));
  g.add(makeBeam(0.14, 0.14, d, M.woodDark, -hx, railY, 0));
  g.add(makeBeam(0.14, 0.14, d, M.woodDark, hx, railY, 0));

  // --- transom plaster bands above kamoi (close the attic gap) ---
  const bandY = (railY + 0.07 + beamY - 0.12) / 2;
  const bandH = (beamY - 0.12) - (railY + 0.07);
  g.add(makeBeam(w - 0.2, bandH, 0.1, M.plaster, 0, bandY, hz));
  g.add(makeBeam(w - 0.2, bandH, 0.1, M.plaster, 0, bandY, -hz));
  g.add(makeBeam(0.1, bandH, d - 0.2, M.plaster, -hx, bandY, 0));
  g.add(makeBeam(0.1, bandH, d - 0.2, M.plaster, hx, bandY, 0));

  // --- plaster infill walls (back full; sides full-height, windows mounted proud) ---
  const wallT = 0.1, wallH = railY - (floorY + 0.1);
  const wallY = (railY + floorY + 0.1) / 2;
  g.add(makeBeam(w - 0.2, wallH, wallT, M.plaster, 0, wallY, -hz));
  [-hx, hx].forEach(x => {
    g.add(makeBeam(wallT, wallH, d - 0.2, M.plaster, x, wallY, 0));
  });

  // --- side windows: frame + lattice + paper, 2 per side, surface-mounted ---
  [-hx, hx].forEach(x => {
    const out = x > 0 ? 1 : -1;
    [-1.5, 1.5].forEach(z => {
      const wy = floorY + 1.75;
      const fr = new THREE.Group();
      const fw = 1.5, fh = 1.0;
      fr.add(makeBeam(fw + 0.14, 0.09, 0.14, M.woodDark, 0, fh / 2, 0));
      fr.add(makeBeam(fw + 0.14, 0.09, 0.14, M.woodDark, 0, -fh / 2, 0));
      fr.add(makeBeam(0.09, fh, 0.14, M.woodDark, -fw / 2, 0, 0));
      fr.add(makeBeam(0.09, fh, 0.14, M.woodDark, fw / 2, 0, 0));
      const pp = new THREE.Mesh(new THREE.PlaneGeometry(fw, fh), M.paper);
      pp.rotation.y = Math.PI / 2;
      fr.add(pp);
      const lat = makeLatticeBars(5, 3, fw, fh, 0.03, 0.02, M.woodDark);
      lat.rotation.y = Math.PI / 2;
      lat.position.x = out * 0.06;
      fr.add(lat);
      fr.position.set(x + out * 0.09, wy, z);
      g.add(fr);
    });
  });

  // --- front facade: 5 bays of 2m. bay0 = genkan, bay4 = OPEN ---
  const bayW = w / 5;
  const doorH = railY - (floorY + 0.12);
  const doorY = floorY + 0.12 + doorH / 2;
  for (let b = 1; b <= 3; b++) {
    const cx = -hx + bayW * (b + 0.5);
    const s1 = makeShoji(bayW - 0.3, doorH, M);
    s1.position.set(cx - (bayW - 0.3) / 4, doorY, hz + 0.03);
    const s2 = makeShoji(bayW - 0.3, doorH, M);
    s2.position.set(cx + (bayW - 0.3) / 4, doorY, hz - 0.04);
    g.add(s1, s2);
  }
  // bay4 OPEN: both panels double-stacked over bay3, doorway fully clear
  {
    const s1 = makeShoji(bayW - 0.3, doorH, M);
    s1.position.set(2.0, doorY, hz - 0.04);
    const s2 = makeShoji(bayW - 0.3, doorH, M);
    s2.position.set(2.0, doorY, hz + 0.10);
    g.add(s1, s2);
  }

  // --- genkan (bay0): stone entry pad, step stone, door frame + noren ---
  let noren;
  {
    const cx = -hx + bayW * 0.5;
    const pad = makeBeam(bayW - 0.4, 0.12, 1.6, M.stone, cx, floorY - 0.06, hz - 0.7);
    pad.receiveShadow = true;
    g.add(pad);
    const step = makeBeam(1.5, 0.28, 0.55, M.stone, cx, 0.2, hz + 1.65);
    g.add(step);
    // door frame posts + lintel
    g.add(makeBeam(0.16, doorH + 0.1, 0.16, M.woodDark, cx - 0.85, doorY, hz + 0.05));
    g.add(makeBeam(0.16, doorH + 0.1, 0.16, M.woodDark, cx + 0.85, doorY, hz + 0.05));
    g.add(makeBeam(1.9, 0.18, 0.2, M.woodDark, cx, railY + 0.05, hz + 0.05));
    // noren curtain: 3 hanging strips (real thin boxes) with indigo dye texture
    noren = new THREE.Group();
    for (let i = 0; i < 3; i++) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.85, 0.02), M.noren);
      strip.position.set(-0.53 + i * 0.53, -0.5, 0);
      strip.castShadow = true;
      noren.add(strip);
    }
    noren.position.set(cx, railY - 0.06, hz + 0.12);
    g.add(noren);
  }

  // --- engawa veranda: front + east side ---
  {
    const deckY = floorY - 0.06;
    const front = makeBeam(w + 0.6, 0.12, 1.25, M.woodFloor, 0, deckY, hz + 0.65);
    g.add(front);
    const side = makeBeam(1.25, 0.12, d + 0.6, M.woodFloor, hx + 0.65, deckY, 0);
    g.add(side);
    // deck support posts
    for (let x = -hx - 0.2; x <= hx + 0.25; x += 1.7)
      g.add(makeBeam(0.14, deckY, 0.14, M.woodDark, x, deckY / 2, hz + 1.2));
    for (let z = -hz; z <= hz + 0.01; z += 1.6)
      g.add(makeBeam(0.14, deckY, 0.14, M.woodDark, hx + 1.2, deckY / 2, z));
    // slim veranda posts carrying the eave + edge beam
    const postH = 3.78 - deckY;
    for (let x = -hx - 0.2; x <= hx + 0.25; x += 2.55)
      g.add(makeBeam(0.13, postH, 0.13, M.woodDark, x, deckY + postH / 2, hz + 1.2));
    for (let z = -hz; z <= hz + 0.01; z += 2.1)
      g.add(makeBeam(0.13, postH, 0.13, M.woodDark, hx + 1.2, deckY + postH / 2, z));
    g.add(makeBeam(w + 0.7, 0.16, 0.14, M.woodDark, 0, 3.62, hz + 1.2));
    g.add(makeBeam(0.14, 0.16, d + 0.7, M.woodDark, hx + 1.2, 3.62, 0));
    // railing on east side section
    const ry = deckY + 0.55;
    for (let z = -hz; z <= 1.0; z += 1.05)
      g.add(makeBeam(0.09, 0.62, 0.09, M.woodDark, hx + 1.2, deckY + 0.31, z));
    g.add(makeBeam(0.08, 0.08, 4.4, M.wood, hx + 1.2, ry, -hz + 2.2));
    g.add(makeBeam(0.06, 0.06, 4.4, M.wood, hx + 1.2, ry - 0.28, -hz + 2.2));
    // veranda step stone (clear of the deck edge)
    g.add(makeBeam(1.6, 0.22, 0.5, M.stone, -hx + bayW * 4.5, 0.16, hz + 1.65));
  }

  // --- gutters: half-cylinder troughs under eaves + downspouts + rain chain ---
  let rainChain;
  {
    const gutMat = new THREE.MeshStandardMaterial({ color: 0x5a4a38, roughness: 0.7, side: THREE.DoubleSide });
    // thetaStart PI => shell covers x<=0 half; after rotZ(90°) bulge faces down = trough
    const gutGeo = new THREE.CylinderGeometry(0.09, 0.09, w + 2.6, 10, 1, true, Math.PI, Math.PI);
    gutGeo.rotateZ(Math.PI / 2); // axis Y -> X
    [hz + 1.55, -hz - 1.55].forEach(z => {
      const gut = new THREE.Mesh(gutGeo, gutMat);
      gut.position.set(0, 3.66, z);
      g.add(gut);
    });
    // bamboo downspouts at west corners
    const dsGeo = new THREE.CylinderGeometry(0.055, 0.055, 3.5, 8);
    [[-hx - 1.2, hz + 1.55], [-hx - 1.2, -hz - 1.55]].forEach(([x, z]) => {
      const ds = new THREE.Mesh(dsGeo, M.bamboo);
      ds.position.set(x, 1.85, z);
      ds.castShadow = true;
      g.add(ds);
    });
    // rain chain (kusari-doi) at front-east corner: stacked small rings
    rainChain = new THREE.Group();
    const ringGeo = new THREE.TorusGeometry(0.055, 0.014, 6, 10);
    for (let i = 0; i < 16; i++) {
      const r = new THREE.Mesh(ringGeo, M.bronze);
      r.position.y = -i * 0.2;
      r.rotation.y = (i % 2) * Math.PI / 2;
      rainChain.add(r);
    }
    rainChain.position.set(hx + 1.2, 3.6, hz + 1.55);
    g.add(rainChain);
    // stone water basin below chain
    const pts = [];
    for (let i = 0; i <= 8; i++) {
      const a = (i / 8) * Math.PI;
      pts.push(new THREE.Vector2(0.12 + Math.sin(a) * 0.3, i * 0.045));
    }
    const basin = new THREE.Mesh(new THREE.LatheGeometry(pts, 14), M.stone);
    basin.position.set(hx + 1.2, 0, hz + 1.55);
    basin.castShadow = basin.receiveShadow = true;
    g.add(basin);
  }

  return { group: g, noren, rainChain, openBayX: -hx + bayW * 4.5 };
}
