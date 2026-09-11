import * as THREE from 'three';
import { makeBeam } from './helpers.js';
import { HOUSE } from './architecture.js';

// Visible through the open bay: tatami room, tokonoma alcove with scroll,
// fusuma panels, low table, hanging paper lantern (real point light).
export function buildInterior(M) {
  const g = new THREE.Group();
  const { floorY } = HOUSE;

  const roomX0 = -0.9, roomX1 = 4.9, roomZ0 = -2.9, roomZ1 = 2.9;
  const cx = (roomX0 + roomX1) / 2;

  // --- tatami mats: real thin boxes with woven texture + cloth edging ---
  {
    const matW = 0.92, matD = 1.82, th = 0.06, topY = floorY + 0.06;
    for (let z = roomZ0 + 0.1; z + matD < roomZ1 + 0.01; z += matD + 0.02) {
      for (let x = roomX0 + 0.1; x + matW < roomX1 + 0.01; x += matW + 0.02) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(matW, th, matD), M.tatami);
        m.position.set(x + matW / 2, topY, z + matD / 2);
        m.receiveShadow = true;
        g.add(m);
        const edge = makeBeam(matW + 0.02, th + 0.005, 0.035, M.tatamiEdge, x + matW / 2, topY, z + matD - 0.017);
        edge.castShadow = false;
        g.add(edge);
      }
    }
  }

  // --- interior posts + ceiling (dark, keeps roof void out of view) ---
  {
    const postH = 3.0 - floorY;
    [[roomX0, 0], [cx, 0], [roomX1, -2.0], [roomX1, 2.0]].forEach(([x, z]) =>
      g.add(makeBeam(0.16, postH, 0.16, M.woodDark, x, floorY + postH / 2, z)));
    const ceil = new THREE.Mesh(new THREE.BoxGeometry(roomX1 - roomX0 + 0.4, 0.08, roomZ1 - roomZ0 + 0.4), M.woodDark);
    ceil.position.set(cx, 3.02, 0);
    g.add(ceil);
  }

  // --- partition wall (west) with fusuma sliding panels ---
  {
    const wall = makeBeam(0.1, 2.2, roomZ1 - roomZ0, M.plaster, roomX0, floorY + 1.15, 0);
    g.add(wall);
    for (let i = 0; i < 3; i++) {
      const f = new THREE.Group();
      const fw = 1.75, fh = 1.7;
      f.add(makeBeam(fw, 0.06, 0.05, M.woodDark, 0, fh / 2, 0));
      f.add(makeBeam(fw, 0.06, 0.05, M.woodDark, 0, -fh / 2, 0));
      f.add(makeBeam(0.06, fh, 0.05, M.woodDark, -fw / 2, 0, 0));
      f.add(makeBeam(0.06, fh, 0.05, M.woodDark, fw / 2, 0, 0));
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(fw - 0.1, fh - 0.1), M.fusuma);
      panel.rotation.y = Math.PI / 2;
      f.add(panel);
      const pull = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03, 10), M.bronze);
      pull.rotation.z = Math.PI / 2;
      pull.position.set(0.04, 0, 0.35);
      f.add(pull);
      f.position.set(roomX0 + 0.09, floorY + 1.0, -1.85 + i * 1.85);
      g.add(f);
    }
  }

  // --- tokonoma alcove on back wall: raised floor, scroll, vase + flower ---
  {
    const alcX = -2.6, alcW = 2.2;
    const plat = makeBeam(alcW, 0.16, 1.0, M.wood, alcX, floorY + 0.14, roomZ0 + 0.55);
    g.add(plat);
    // alcove posts + lintel
    g.add(makeBeam(0.14, 2.2, 0.14, M.woodDark, alcX - alcW / 2, floorY + 1.1, roomZ0 + 0.15));
    g.add(makeBeam(0.14, 2.2, 0.14, M.woodDark, alcX + alcW / 2, floorY + 1.1, roomZ0 + 0.15));
    g.add(makeBeam(alcW + 0.2, 0.14, 0.16, M.woodDark, alcX, floorY + 2.25, roomZ0 + 0.15));
    // hanging scroll: real thin box + ink-wash texture + rods
    const scroll = new THREE.Group();
    const paper = new THREE.Mesh(new THREE.BoxGeometry(0.55, 1.05, 0.02), M.scroll);
    scroll.add(paper);
    const rodGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.7, 8);
    const rodT = new THREE.Mesh(rodGeo, M.woodDark);
    rodT.rotation.z = Math.PI / 2; rodT.position.y = 0.55;
    const rodB = rodT.clone(); rodB.position.y = -0.55;
    scroll.add(rodT, rodB);
    scroll.position.set(alcX - 0.45, floorY + 1.55, roomZ0 + 0.22);
    scroll.rotation.x = 0.03;
    g.add(scroll);
    // small vase (lathe) + simple flower (stem + bloom)
    const vasePts = [];
    for (let i = 0; i <= 8; i++) {
      const a = (i / 8) * Math.PI;
      vasePts.push(new THREE.Vector2(0.03 + Math.sin(a) * 0.11, i * 0.035));
    }
    const vase = new THREE.Mesh(new THREE.LatheGeometry(vasePts, 12),
      new THREE.MeshStandardMaterial({ color: 0x3a5a8c, roughness: 0.35, envMapIntensity: 0.7 }));
    vase.position.set(alcX + 0.55, floorY + 0.22, roomZ0 + 0.55);
    vase.castShadow = true;
    g.add(vase);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.5, 6), M.mossDark);
    stem.position.set(alcX + 0.55, floorY + 0.5, roomZ0 + 0.55);
    g.add(stem);
    const bloom = new THREE.Mesh(new THREE.IcosahedronGeometry(0.09, 0),
      new THREE.MeshStandardMaterial({ color: 0xd4698a, roughness: 0.7 }));
    bloom.position.set(alcX + 0.55, floorY + 0.78, roomZ0 + 0.55);
    bloom.castShadow = true;
    g.add(bloom);
    // small suiseki stone on alcove floor
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(0.14, 0), M.stone);
    s.scale.y = 0.6;
    s.position.set(alcX + 0.1, floorY + 0.26, roomZ0 + 0.6);
    s.castShadow = true;
    g.add(s);
  }

  // --- low table + cushions ---
  {
    const tx = 2.2, tz = 0.6;
    g.add(makeBeam(1.1, 0.07, 0.7, M.wood, tx, floorY + 0.42, tz));
    [[-0.45, -0.25], [0.45, -0.25], [-0.45, 0.25], [0.45, 0.25]].forEach(([dx, dz]) =>
      g.add(makeBeam(0.07, 0.32, 0.07, M.woodDark, tx + dx, floorY + 0.22, tz + dz)));
    const cushMat = new THREE.MeshStandardMaterial({ color: 0x7a2e35, roughness: 0.9 });
    [[tx - 0.2, tz + 0.75], [tx + 0.35, tz - 0.7]].forEach(([x, z]) => {
      const c = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.09, 0.5), cushMat);
      c.position.set(x, floorY + 0.12, z);
      c.rotation.y = 0.2;
      c.castShadow = c.receiveShadow = true;
      g.add(c);
    });
  }

  // --- hanging paper lantern + warm point light ---
  const lantern = new THREE.Group();
  {
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.5, 6), M.woodDark);
    cord.position.y = 0.45;
    lantern.add(cord);
    const shade = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.34, 12), M.paperLantern);
    lantern.add(shade);
    const capT = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.05, 10), M.woodDark);
    capT.position.y = 0.19;
    const capB = capT.clone(); capB.position.y = -0.19;
    lantern.add(capT, capB);
    const tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.03, 0.16, 8),
      new THREE.MeshStandardMaterial({ color: 0xa33327, roughness: 0.8 }));
    tassel.position.y = -0.3;
    lantern.add(tassel);
    lantern.position.set(2.0, 2.35, 0.4);
    g.add(lantern);
  }
  const lanternLight = new THREE.PointLight(0xffb46b, 5, 9, 2);
  lanternLight.position.set(2.0, 2.3, 0.4);
  g.add(lanternLight);

  return { group: g, lantern, lanternLight };
}
