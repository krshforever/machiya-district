import * as THREE from 'three';
import { makeBeam, fillInstances, mulberry } from './helpers.js';
import { HOUSE } from './architecture.js';

// Kirizuma-style gabled roof: real pitch, thick eaves, instanced barrel
// tiles, ridge caps + onigawara end ornaments, lifted corner sweeps.
export function buildRoof(M) {
  const g = new THREE.Group();
  M.ridge.side = THREE.DoubleSide; // open half-caps must read solid from below

  const ridgeY = 6.42;          // ridge top height
  const eaveY = 3.70;           // eave edge height
  const eaveZ = 4.70;           // eave edge (covers engawa at z=4.4)
  const gableX = 6.0;           // slab half-length (1m gable overhang)
  const run = eaveZ, rise = ridgeY - eaveY;
  const slopeLen = Math.hypot(run, rise);
  const A = Math.atan2(rise, run);      // pitch ≈ 30°
  const cosA = run / slopeLen, sinA = rise / slopeLen;
  const slabLen = gableX * 2;

  // --- main slabs (dark wood = visible eave underside + thickness) ---
  const slabGeo = new THREE.BoxGeometry(slabLen, 0.16, slopeLen + 0.35);
  const yMid = (ridgeY + eaveY) / 2 - 0.06;
  const zMid = eaveZ / 2;
  const slabF = new THREE.Mesh(slabGeo, M.roofUnder);
  slabF.position.set(0, yMid, zMid);
  slabF.rotation.x = A;
  const slabB = slabF.clone();
  slabB.position.z = -zMid;
  slabB.rotation.x = -A;
  slabF.castShadow = slabB.castShadow = true;
  slabF.receiveShadow = slabB.receiveShadow = true;
  g.add(slabF, slabB);

  // --- eave fascia boards (visible thickness edge) ---
  g.add(makeBeam(slabLen + 0.15, 0.3, 0.09, M.woodDark, 0, eaveY - 0.02, eaveZ + 0.02));
  g.add(makeBeam(slabLen + 0.15, 0.3, 0.09, M.woodDark, 0, eaveY - 0.02, -eaveZ - 0.02));

  // --- rafter tails tucked just under the slab (instanced shadow line) ---
  {
    const geo = new THREE.BoxGeometry(0.12, 0.15, 0.9);
    const items = [];
    for (let x = -5.6; x <= 5.61; x += 0.62) {
      items.push({ p: [x, eaveY - 0.02, eaveZ - 0.35], rx: A });
      items.push({ p: [x, eaveY - 0.02, -(eaveZ - 0.35)], rx: -A });
    }
    const im = new THREE.InstancedMesh(geo, M.woodDark, items.length);
    fillInstances(im, items);
    im.castShadow = false;
    g.add(im);
  }

  // --- barrel tile rows (ONE instanced mesh, subtle per-tile tone shift) ---
  {
    const tileGeo = new THREE.CylinderGeometry(0.085, 0.095, 0.55, 7, 1, true);
    tileGeo.rotateZ(Math.PI / 2);   // axis Y -> X
    tileGeo.rotateY(Math.PI / 2);   // axis X -> Z (runs downslope)
    const rows = 11, cols = 56;
    const im = new THREE.InstancedMesh(tileGeo, M.roofTile, rows * cols * 2);
    const rnd = mulberry(20240);
    const col = new THREE.Color();
    let k = 0;
    const items = [];
    for (let side = 0; side < 2; side++) {
      const sgn = side === 0 ? 1 : -1;
      for (let r = 0; r < rows; r++) {
        const s = 0.32 + r * ((slopeLen - 0.35) / rows);
        const z = sgn * (eaveZ - s * cosA);
        const y = eaveY + s * sinA + 0.10;
        for (let c = 0; c < cols; c++) {
          const x = -5.78 + c * (11.56 / (cols - 1));
          items.push({ p: [x, y, z], rx: sgn * A });
          const v = 0.82 + rnd() * 0.3;
          col.setRGB(v, v * 1.01, v * 1.06);
          im.setColorAt(k++, col);
        }
      }
    }
    fillInstances(im, items);
    im.instanceColor.needsUpdate = true;
    im.castShadow = false;   // slabs already cast; saves shadow pass
    im.receiveShadow = true;
    g.add(im);
  }

  // --- ridge caps (half-round tubes, axis along X, bulge up) ---
  {
    const capGeo = new THREE.CylinderGeometry(0.17, 0.17, 0.72, 9, 1, true, 0, Math.PI);
    capGeo.rotateZ(Math.PI / 2); // axis Y -> X, theta 0..PI shell (x>=0) -> y'>=0 bulge up
    const n = 16;
    const im = new THREE.InstancedMesh(capGeo, M.ridge, n);
    const items = [];
    for (let i = 0; i < n; i++)
      items.push({ p: [-5.6 + i * (11.2 / (n - 1)), ridgeY + 0.02, 0] });
    fillInstances(im, items);
    im.castShadow = false;
    g.add(im);
    // ridge end mortar blocks
    g.add(makeBeam(0.5, 0.22, 0.4, M.ridge, -5.85, ridgeY - 0.05, 0));
    g.add(makeBeam(0.5, 0.22, 0.4, M.ridge, 5.85, ridgeY - 0.05, 0));
  }

  // --- onigawara-style ridge end ornaments (stacked boxes + disc + knob) ---
  [-1, 1].forEach(sgn => {
    const o = new THREE.Group();
    o.add(makeBeam(0.22, 0.5, 0.55, M.ridge, 0, 0.2, 0));
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.14, 12), M.ridge);
    disc.rotation.z = Math.PI / 2;
    disc.position.y = 0.55;
    disc.castShadow = true;
    o.add(disc);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), M.ridge);
    knob.position.y = 0.78;
    knob.castShadow = true;
    o.add(knob);
    o.position.set(sgn * 5.95, ridgeY - 0.1, 0);
    g.add(o);
  });

  // --- gable plaster infill triangles (both ends) ---
  {
    const shape = new THREE.Shape();
    shape.moveTo(-3.2, 3.55);
    shape.lineTo(3.2, 3.55);
    shape.lineTo(0, ridgeY - 0.12);
    shape.closePath();
    const geo = new THREE.ShapeGeometry(shape);
    [4.94, -4.94].forEach(x => {
      const m = new THREE.Mesh(geo, M.plaster);
      m.rotation.y = Math.PI / 2;
      m.position.x = x;
      m.castShadow = m.receiveShadow = true;
      m.material.side = THREE.DoubleSide;
      g.add(m);
    });
    // bargeboards along gable slopes
    [1, -1].forEach(sgnX => {
      [1, -1].forEach(sgnZ => {
        const b = makeBeam(0.1, 0.24, slopeLen + 0.4, M.woodDark, sgnX * (gableX - 0.02), yMid + 0.12, sgnZ * zMid);
        b.rotation.x = sgnZ * A;
        g.add(b);
      });
    });
  }

  // --- upturned corner sweeps (sorimashi): flatter wing slabs at 4 corners ---
  {
    const wingGeo = new THREE.BoxGeometry(2.0, 0.09, 1.7);
    const lift = A - 0.30; // flatter than main slope => tip kicks upward
    const corners = [
      [5.55, 1, 4.35, 1], [-5.55, -1, 4.35, 1],
      [5.55, 1, -4.35, -1], [-5.55, -1, -4.35, -1]
    ];
    corners.forEach(([x, sx, z, sz]) => {
      const wmesh = new THREE.Mesh(wingGeo, M.roofUnder);
      wmesh.position.set(x, eaveY + 0.16, z);
      wmesh.rotation.order = 'YXZ';
      wmesh.rotation.y = sx * sz * 0.42;
      wmesh.rotation.x = sz * lift;
      wmesh.castShadow = wmesh.receiveShadow = true;
      g.add(wmesh);
      // a few lifted tiles riding on the wing surface
      const tg = new THREE.CylinderGeometry(0.085, 0.095, 0.55, 7, 1, true);
      tg.rotateZ(Math.PI / 2); tg.rotateY(Math.PI / 2);
      const tim = new THREE.InstancedMesh(tg, M.roofTileAlt, 5);
      const items = [];
      for (let i = 0; i < 5; i++)
        items.push({ p: [x - 0.7 + i * 0.35, eaveY + 0.38, z - sz * 0.15], rx: sz * lift });
      fillInstances(tim, items);
      tim.castShadow = false;
      g.add(tim);
    });
  }

  return { group: g, ridgeY, eaveY, eaveZ };
}
