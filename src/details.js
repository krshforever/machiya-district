// src/details.js — architecture-tied props. Shared geo/mat per type; merged or instanced.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { srand } from './houses.js';

function kanjiTexture(seed, bg, fg) {
  const R = srand(seed);
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 256;
  const x = cv.getContext('2d');
  x.fillStyle = bg; x.fillRect(0, 0, 128, 256);
  x.strokeStyle = fg; x.lineCap = 'round';
  for (let g = 0; g < 3; g++) { // abstract brush-mark glyphs (no roman letters)
    const cx = 34 + R() * 60, cy = 50 + g * 70;
    for (let s = 0; s < 4; s++) {
      x.lineWidth = 4 + R() * 7;
      x.beginPath();
      x.moveTo(cx - 22 + R() * 10, cy + (R() - 0.5) * 30);
      x.quadraticCurveTo(cx, cy + (R() - 0.5) * 34, cx + 22 - R() * 8, cy + (R() - 0.5) * 30);
      x.stroke();
    }
    x.lineWidth = 5; x.beginPath(); x.moveTo(cx, cy - 26); x.lineTo(cx + (R() - 0.5) * 12, cy + 26); x.stroke();
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function buildDetails({ lampPositions = [], polePositions = [] } = {}) {
  const R = srand(4242);
  const g = new THREE.Group(); g.name = 'details';
  const cloth = [];   // {mesh, phase, amp} — animated by update()
  const M = {
    wood: new THREE.MeshStandardMaterial({ color: 0x4a3a28, roughness: 0.85 }),
    woodD: new THREE.MeshStandardMaterial({ color: 0x33291d, roughness: 0.9 }),
    iron: new THREE.MeshStandardMaterial({ color: 0x232326, roughness: 0.5, metalness: 0.85 }),
    bronze: new THREE.MeshStandardMaterial({ color: 0x6b5a33, roughness: 0.35, metalness: 0.9 }),
    paper: new THREE.MeshStandardMaterial({ color: 0xf0e8d5, roughness: 0.9 }),
    stone: new THREE.MeshStandardMaterial({ color: 0x8d8d88, roughness: 0.95 }),
    leaf: new THREE.MeshStandardMaterial({ color: 0x4a6b35, roughness: 1 }),
    indigo: new THREE.MeshStandardMaterial({ color: 0x2b3c5e, roughness: 0.95, side: THREE.DoubleSide }),
    cream: new THREE.MeshStandardMaterial({ color: 0xd8cfb8, roughness: 0.95, side: THREE.DoubleSide }),
  };
  const buckets = {};
  const put = (key, geo, x, y, z, ry = 0, rx = 0, rz = 0) => {
    const m = new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz));
    m.setPosition(x, y, z); geo.applyMatrix4(m); (buckets[key] ||= []).push(geo);
  };
  const BOX = (w, h, d) => new THREE.BoxGeometry(w, h, d);
  const CYL = (rt, rb, h, s = 8) => new THREE.CylinderGeometry(rt, rb, h, s);

  // ---- utility poles + sagging catenary wires ----
  const poleTops = [];
  for (const [x, z] of polePositions) {
    put('woodD', CYL(0.11, 0.14, 6.4), x, 3.2, z);
    put('woodD', BOX(1.4, 0.1, 0.1), x, 5.9, z);
    put('woodD', BOX(1.1, 0.09, 0.09), x, 5.4, z);
    poleTops.push(new THREE.Vector3(x, 5.9, z));
  }
  // ---- street lamps: emissive heads everywhere, REAL PointLight on first 3 ----
  const lampHeads = [];
  const lampGlowM = new THREE.MeshStandardMaterial({ color: 0x555044, emissive: 0xffc06a, emissiveIntensity: 0 });
  lampPositions.forEach(([x, z], i) => {
    put('iron', CYL(0.06, 0.09, 3.4), x, 1.7, z);
    put('iron', BOX(0.7, 0.07, 0.07), x + 0.3, 3.35, z);
  });
  const realLights = [];
  // ---- bicycles (2 torus wheels + frame cylinders + bar), leaning ----
  const bikeAt = (x, z, ry, lean) => {
    const wg = new THREE.TorusGeometry(0.34, 0.035, 8, 20);
    put('iron', wg.clone(), x - 0.45, 0.34, z, ry);
    put('iron', wg.clone(), x + 0.45, 0.34, z, ry);
    const fr = (x1, y1, x2, y2) => {
      const len = Math.hypot(x2 - x1, y2 - y1);
      const geo = CYL(0.025, 0.025, len, 6);
      const e = new THREE.Euler(0, ry, Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2 + lean);
      geo.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(e));
      geo.translate((x1 + x2) / 2 + x, (y1 + y2) / 2, z);
      (buckets['iron'] ||= []).push(geo);
    };
    fr(-0.45, 0.34, 0, 0.75); fr(0.45, 0.34, 0, 0.75); fr(0, 0.75, -0.15, 0.95); fr(-0.45, 0.34, 0.45, 0.34);
    put('woodD', BOX(0.28, 0.05, 0.22), x - 0.05, 0.78, z, ry); // saddle
    put('iron', CYL(0.02, 0.02, 0.4, 6), x + 0.45, 0.95, z, 0, 0, Math.PI / 2); // handlebar
  };
  bikeAt(11.2, 10.6, 0.2, 0.12); bikeAt(-10.8, 10.7, -0.15, -0.1); bikeAt(-4.9, 3.4, 1.45, 0.14);

  // ---- shop sign boards + wooden house signs (canvas glyphs) ----
  const signBoards = [];
  const shopSign = (x, y, z, ry, seed) => {
    const t = kanjiTexture(seed, '#2b3c5e', '#e8e0cc');
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.8, 0.08),
      new THREE.MeshStandardMaterial({ map: t, roughness: 0.85 }));
    m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = true; g.add(m); signBoards.push(m);
  };
  shopSign(10.6, 2.6, 10.9, 0.3, 7); shopSign(-10.2, 2.5, 10.9, -0.25, 21);
  for (const [x, z, s] of [[-7.2, 2.9, 5], [6.9, 2.9, 9], [5.4, -9.4, 13]]) {
    const t = kanjiTexture(s, '#4a3a28', '#efe6d0');
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.7, 0.05),
      new THREE.MeshStandardMaterial({ map: t, roughness: 0.85 }));
    m.position.set(x, 2.0, z); g.add(m);
  }
  // ---- vending machine beside shop1 ----
  {
    const vm = new THREE.Mesh(BOX(1.0, 1.9, 0.7), new THREE.MeshStandardMaterial({ color: 0xb8332a, roughness: 0.4, metalness: 0.3 }));
    vm.position.set(17.9, 0.95, 10.6); vm.castShadow = true; g.add(vm);
    const stripM = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xbfe6ff, emissiveIntensity: 1.2, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.2), stripM);
    strip.position.set(17.9, 1.0, 10.24); strip.rotation.y = Math.PI; g.add(strip);
    g.userData.vendGlow = stripM;
  }
  // ---- crates / buckets / benches / flower pots / umbrella stand ----
  const crateAt = (x, z, s = 0.45, ry = 0) => put('wood', BOX(s, s, s), x, s / 2, z, ry);
  crateAt(12.6, 10.7, 0.5, 0.2); crateAt(12.6, 10.7 + 0, 0.42, 0.5); // stacked (y fixed below)
  buckets['wood'][buckets['wood'].length - 1].translate(0, 0.46, 0);
  crateAt(-14.8, 10.6, 0.45, -0.3); crateAt(5.2, 3.6, 0.4, 0.7);
  for (const [x, z] of [[1.8, 3.2], [-2.2, 3.3], [11.9, 10.5]]) put('woodD', CYL(0.16, 0.13, 0.3), x, 0.15, z);
  const benchAt = (x, z, ry) => { put('wood', BOX(1.6, 0.08, 0.4), x, 0.45, z, ry); put('woodD', BOX(0.08, 0.45, 0.36), x - 0.6, 0.22, z, ry); put('woodD', BOX(0.08, 0.45, 0.36), x + 0.6, 0.22, z, ry); };
  benchAt(0.5, 4.4, 0.1); benchAt(-9.5, 3.2, -0.1);
  // lathe flower pots + umbrella stand
  const potProfile = []; for (let i = 0; i <= 6; i++) potProfile.push(new THREE.Vector2(0.14 + (i / 6) * 0.1, (i / 6) * 0.28));
  const potG = new THREE.LatheGeometry(potProfile, 10);
  for (const [x, z] of [[-3.4, 3.1], [3.2, 3.0], [10.9, 10.8], [-11.5, 10.6], [2.2, 4.3]]) {
    put('stone', potG.clone(), x, 0, z);
    put('leaf', new THREE.SphereGeometry(0.2, 7, 6), x, 0.42, z);
  }
  put('woodD', CYL(0.2, 0.17, 0.5), -1.8, 0.25, 3.5); // umbrella stand
  for (let i = 0; i < 3; i++) put('cream', CYL(0.015, 0.09, 0.9, 6), -1.85 + i * 0.06, 0.7, 3.5 + (i - 1) * 0.05);
  // drain covers
  for (const x of [-10, 2, 12]) put('iron', BOX(0.8, 0.04, 0.5), x, 0.1, 9.05);

  // ---- micro-detail pack (deterministic, shared geo/mat; +6 GL draws) ----
  // Firewood goes through put() -> merged into the wood bucket (+0 draws).
  // Lantern spheres + cloth strips + rock/weeds InstancedMeshes: +6 draws.
  const dh = (i, s) => { const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453; return x - Math.floor(x); };
  // (a) firewood stacks against hero side walls (clear of fence z=2.8, vines z<=0.2)
  for (const [sx, sz] of [[5.6, 0.9], [-5.6, 0.9]]) {
    for (let r = 0; r < 14; r++) {
      const row = Math.floor(r / 5), col = r % 5;
      const lg = BOX(0.85 + dh(r, sx) * 0.2, 0.15, 0.15);
      const m = new THREE.Matrix4().makeRotationY((dh(r, sz) - 0.5) * 0.2);
      m.setPosition(sx + (dh(r, 3) - 0.5) * 0.06, 0.1 + row * 0.16, sz + (col - 2) * 0.17);
      lg.applyMatrix4(m);
      (buckets['wood'] ||= []).push(lg);
    }
  }
  // (b) hanging paper lanterns under street-lamp arms (emissive only, no lights)
  {
    const lg = new THREE.SphereGeometry(0.15, 12, 10);
    const lm = new THREE.MeshStandardMaterial({ color: 0xfff2d8, emissive: 0xffb45e, emissiveIntensity: 1.2, roughness: 0.6 });
    for (const [x, z] of [[-3.9, 8.9], [6.8, 8.9]]) {
      const m = new THREE.Mesh(lg, lm);
      m.position.set(x, 3.02, z); // hangs just below the lamp arm (y 3.35)
      g.add(m);
    }
  }
  // (c) hanging cloth on shop1 front (face z=11 after PI rotation; strips proud of it)
  for (const [x, key] of [[13.5, 'indigo'], [14.5, 'cream']]) {
    const geo = new THREE.PlaneGeometry(0.5, 0.9, 1, 2);
    geo.translate(0, -0.45, 0);
    const mesh = new THREE.Mesh(geo, M[key]);
    mesh.position.set(x, 2.6, 10.8); mesh.rotation.y = x < 14 ? 0.15 : -0.12;
    mesh.castShadow = true;
    g.add(mesh); cloth.push({ mesh, phase: dh(x, 1) * 6.28, amp: 0.08 });
  }
  // (d) stone arrangement ring outside the pond rim (pond at (-6,13) r~2.4/1.55)
  {
    const rg = new THREE.IcosahedronGeometry(0.32, 1);
    const pa = rg.attributes.position;
    for (let i = 0; i < pa.count; i++) {
      const f = 1 + 0.22 * Math.sin(i * 3.7) + 0.12 * Math.sin(i * 9.1 + 1.3);
      pa.setXYZ(i, pa.getX(i) * f, pa.getY(i) * f * 0.72, pa.getZ(i) * f);
    }
    rg.computeVertexNormals();
    const RK = new THREE.InstancedMesh(rg, M.stone, 5);
    const d4 = new THREE.Object3D();
    [[-8.5, 11.5], [-3.5, 14.2], [-7.8, 14.5], [-3.8, 11.3], [-6.0, 11.0]].forEach(([x, z], i) => {
      d4.position.set(x, 0.1, z); d4.rotation.set(0, dh(i, 21) * 6.28, 0);
      const sc = 0.7 + dh(i, 22) * 0.9; d4.scale.set(sc, sc * 0.8, sc); d4.updateMatrix();
      RK.setMatrixAt(i, d4.matrix);
    });
    RK.instanceMatrix.needsUpdate = true; RK.castShadow = true; RK.receiveShadow = true;
    g.add(RK);
  }
  // (e) weeds at wall/fence/road bases (ONE instanced mesh, no shadow casting)
  {
    const wg = new THREE.PlaneGeometry(0.36, 0.3);
    wg.translate(0, 0.15, 0);
    const WD = new THREE.InstancedMesh(wg, M.leaf, 24);
    const d4 = new THREE.Object3D();
    const sites = [[-4.6, 3.3], [-2.0, 3.3], [1.5, 3.3], [4.6, 3.3], [-5.15, 0.9], [5.15, 0.9],
      [13.0, 10.6], [15.0, 10.6], [-14.0, 10.6], [-12.0, 10.6], [-6.2, 1.0], [7.2, 5.2]];
    let k2 = 0;
    for (let i = 0; i < 12; i++) for (let c = 0; c < 2; c++) {
      d4.position.set(sites[i][0], 0.02, sites[i][1]);
      d4.rotation.set(0, (c * Math.PI) / 2 + dh(i, 31) * 0.6, 0);
      const sc2 = 0.7 + dh(i, 32 + c) * 0.7; d4.scale.set(sc2, sc2, sc2); d4.updateMatrix();
      WD.setMatrixAt(k2++, d4.matrix);
    }
    WD.instanceMatrix.needsUpdate = true; WD.castShadow = false; WD.receiveShadow = false;
    g.add(WD);
  }

  // --- diegetic radio prop inside shop1 (audio.js source anchor) ---
  // Shop1 interior (after its PI rotation) is x 10.5..17.5, z 11..16;
  // (15.5, 14.5) is clear of walls and furniture. g.add meshes only.
  {
    const RX = 15.5, RZ = 14.5;
    const crate = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.9, 0.62), M.wood);
    crate.position.set(RX, 0.45, RZ); crate.castShadow = true; g.add(crate);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.35, 0.3), M.wood);
    cab.position.set(RX, 1.075, RZ); cab.castShadow = true; g.add(cab);
    const face = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.28, 0.02), M.iron);
    face.position.set(RX, 1.075, RZ - 0.16); g.add(face);
    const knobGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.03, 10);
    for (const dx of [-0.12, -0.05]) {
      const knob = new THREE.Mesh(knobGeo, M.bronze);
      knob.rotation.x = Math.PI / 2;
      knob.position.set(RX + dx, 0.99, RZ - 0.18); g.add(knob);
    }
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.7, 6), M.bronze);
    ant.position.set(RX + 0.18, 1.55, RZ + 0.05);
    ant.rotation.z = -0.35; ant.rotation.x = 0.12; g.add(ant);
    const dialMat = new THREE.MeshStandardMaterial({
      color: 0x201408, emissive: 0xffb45e, emissiveIntensity: 1.0, roughness: 0.6
    });
    const dial = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.045, 0.012), dialMat);
    dial.position.set(RX + 0.05, 1.16, RZ - 0.175); g.add(dial);
    g.userData.radioGlow = dialMat;
    g.userData.radioPos = new THREE.Vector3(15.5, 1.15, 14.5);
  }

  // merge static buckets
  const matFor = (k) => M[{ WOOD: 'wood', wood: 'wood', woodD: 'woodD', iron: 'iron', stone: 'stone', leaf: 'leaf', cream: 'cream' }[k] || 'wood'];
  for (const k of Object.keys(buckets)) {
    const mesh = new THREE.Mesh(mergeGeometries(buckets[k], false), matFor(k));
    mesh.castShadow = k !== 'leaf'; mesh.receiveShadow = true; g.add(mesh);
  }
  // lamp head meshes (need individual glow mat) + real lights on first 3
  lampPositions.forEach(([x, z], i) => {
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), i < 3 ? lampGlowM : lampGlowM.clone());
    head.position.set(x + 0.6, 3.25, z); g.add(head); lampHeads.push(head.material);
    if (i < 3) {
      const pl = new THREE.PointLight(0xffbe6e, 0, 12, 2); // intensity driven by daytime (0 by day)
      pl.position.set(x + 0.6, 3.2, z); g.add(pl); realLights.push(pl);
    }
  });
  g.userData.lampGlows = lampHeads; g.userData.lampLights = realLights;

  // ---- hanging cloth strips (noren/tenugui lines at shops + hero) ----
  const clothAt = (x, y, z, wdt, len, mKey, ry = 0) => {
    const geo = new THREE.PlaneGeometry(wdt, len, 1, 4);
    geo.translate(0, -len / 2, 0);
    const mesh = new THREE.Mesh(geo, M[mKey]);
    mesh.position.set(x, y, z); mesh.rotation.y = ry; mesh.castShadow = true;
    g.add(mesh); cloth.push({ mesh, phase: R() * 6.28, amp: 0.08 + R() * 0.06 });
  };
  for (let i = 0; i < 3; i++) clothAt(12.4 + i * 0.55, 2.5, 10.95, 0.45, 0.8, 'indigo');
  for (let i = 0; i < 2; i++) clothAt(-14.2 + i * 0.55, 2.4, 10.95, 0.45, 0.7, 'cream');
  clothAt(1.5, 2.2, 2.62, 0.4, 0.6, 'cream');

  // ---- wires AFTER poles exist (catenary tubes) ----
  const wireM = new THREE.MeshBasicMaterial({ color: 0x111114 });
  for (let i = 0; i < poleTops.length - 1; i++) {
    const a = poleTops[i], b = poleTops[i + 1];
    if (a.distanceTo(b) > 16) continue;
    const mid = a.clone().lerp(b, 0.5); mid.y -= 0.7;
    for (const dy of [0, -0.22]) {
      const curve = new THREE.QuadraticBezierCurve3(
        a.clone().add(new THREE.Vector3(0, dy, 0)),
        mid.clone().add(new THREE.Vector3(0, dy, 0)),
        b.clone().add(new THREE.Vector3(0, dy, 0)));
      const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.015, 5), wireM);
      g.add(tube);
    }
  }
  // potted pines (flanking hero + shops)
  for (const [x, z] of [[-4.9, 2.9], [4.9, 2.9], [10.4, 10.9], [-9.9, 10.9]]) {
    const trunk = new THREE.Mesh(CYL(0.05, 0.07, 0.7, 7), M.woodD);
    trunk.position.set(x, 0.55, z); trunk.castShadow = true; g.add(trunk);
    for (let k = 0; k < 3; k++) {
      const puff = new THREE.Mesh(new THREE.SphereGeometry(0.32 - k * 0.06, 8, 6), M.leaf);
      puff.position.set(x + (R() - 0.5) * 0.2, 1.0 + k * 0.28, z + (R() - 0.5) * 0.2);
      puff.scale.y = 0.75; puff.castShadow = true; g.add(puff);
    }
    const pot = new THREE.Mesh(potG.clone(), M.stone); pot.position.set(x, 0, z); g.add(pot);
  }

  return { group: g, cloth, lampGlows: lampHeads, lampLights: realLights };
}

/** per-frame: cheap cloth sway at GROUP level (no instance matrix updates). */
export function updateDetails(det, t, wind = { strength: 0.5 }) {
  if (!det?.cloth) return;
  const s = 0.4 + (wind.strength ?? 0.5);
  for (const c of det.cloth) c.mesh.rotation.x = Math.sin(t * 2.1 + c.phase) * c.amp * s;
}
