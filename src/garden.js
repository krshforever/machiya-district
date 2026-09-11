import * as THREE from 'three';
import { makeBeam, fillInstances, displacedRock, contactShadow, mulberry } from './helpers.js';

// Courtyard: ground, stone path, gravel + pebbles, rock/moss cluster,
// wooden fence, stone lantern (tōrō) with glow, arched bridge, scatter.
export function buildGarden(M) {
  const g = new THREE.Group();
  const rnd = mulberry(4711);

  // --- ground ---
  {
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(70, 70), M.grass);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    g.add(ground);
  }

  // --- gravel beds (flat planes + instanced pebbles) ---
  const pebbleSpots = [];
  function gravelBed(cx, cz, w, d) {
    const bed = new THREE.Mesh(new THREE.PlaneGeometry(w, d), M.gravel);
    bed.rotation.x = -Math.PI / 2;
    bed.position.set(cx, 0.02, cz);
    bed.receiveShadow = true;
    g.add(bed);
    for (let i = 0; i < 90; i++)
      pebbleSpots.push([cx + (rnd() - 0.5) * (w - 0.3), 0.05, cz + (rnd() - 0.5) * (d - 0.3)]);
  }
  gravelBed(-3.2, 7.6, 4.6, 3.4);
  gravelBed(3.2, 9.0, 5.2, 2.6);
  gravelBed(7.6, 2.2, 3.4, 2.6);
  {
    const geo = new THREE.IcosahedronGeometry(0.05, 0);
    const im = new THREE.InstancedMesh(geo, M.stone, pebbleSpots.length);
    fillInstances(im, pebbleSpots.map(p => ({
      p, ry: rnd() * 6.3, s: 0.6 + rnd() * 0.9, sy: 0.55
    })));
    im.castShadow = false;
    g.add(im);
  }

  // --- stepping-stone path: genkan -> courtyard -> bridge ---
  {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4.0, 0, 4.9),
      new THREE.Vector3(-3.2, 0, 6.4),
      new THREE.Vector3(-1.4, 0, 7.4),
      new THREE.Vector3(0.8, 0, 7.8),
      new THREE.Vector3(3.0, 0, 7.4),
      new THREE.Vector3(4.9, 0, 6.6)
    ]);
    const n = 10;
    const geo = new THREE.CylinderGeometry(0.42, 0.48, 0.14, 9);
    const im = new THREE.InstancedMesh(geo, M.stone, n);
    const items = [];
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const p = curve.getPoint(t);
      items.push({
        p: [p.x + (rnd() - 0.5) * 0.2, 0.07, p.z + (rnd() - 0.5) * 0.2],
        ry: rnd() * 6.3, s: 0.85 + rnd() * 0.4, sy: 1, sx: 1 + (rnd() - 0.5) * 0.3
      });
    }
    fillInstances(im, items);
    g.add(im);
  }

  // --- rock cluster with moss (3 sizes, displaced geometry) ---
  {
    const rocks = [
      [0.85, -4.6, 6.9, 101], [0.55, -3.5, 7.5, 102], [0.4, -5.4, 7.8, 103],
      [0.65, 2.2, 9.3, 104], [0.38, 1.4, 8.8, 105],
      [0.7, 9.6, 3.4, 106], [0.42, 10.3, 4.3, 107]
    ];
    rocks.forEach(([r, x, z, seed]) => {
      const rock = new THREE.Mesh(displacedRock(r, seed, 0.72, 1), M.stone);
      rock.position.set(x, r * 0.32, z);
      rock.rotation.y = seed;
      rock.castShadow = rock.receiveShadow = true;
      g.add(rock);
      const blob = contactShadow(r * 3.0, r * 2.6, 0.55);
      blob.position.set(x, 0.025, z);
      g.add(blob);
    });
    // moss patches: flattened displaced discs, two greens
    const mossSpots = [
      [-4.2, 7.6, 1.1], [-5.2, 6.6, 0.8], [-3.3, 8.2, 0.9],
      [1.8, 9.0, 1.0], [2.6, 8.5, 0.7], [9.3, 3.0, 1.2], [6.9, 2.6, 0.8]
    ];
    mossSpots.forEach(([x, z, r], i) => {
      const geo = new THREE.CircleGeometry(r, 12);
      const p = geo.attributes.position;
      for (let k = 1; k < p.count; k++)
        p.setZ(k, (rnd() - 0.3) * 0.09);
      geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, i % 2 ? M.moss : M.mossDark);
      m.rotation.x = -Math.PI / 2;
      m.position.set(x, 0.035, z);
      m.receiveShadow = true;
      g.add(m);
    });
  }

  // --- wooden fence (west run + corner return) ---
  {
    const fence = new THREE.Group();
    const postGeo = new THREE.BoxGeometry(0.14, 1.25, 0.14);
    const runs = [];
    for (let z = -2; z <= 8.01; z += 1.45) runs.push([-8.5, z, 0]);
    for (let x = -8.5; x <= -3.9; x += 1.45) runs.push([x, 8.6, 1]);
    const pim = new THREE.InstancedMesh(postGeo, M.woodDark, runs.length);
    fillInstances(pim, runs.map(([x, z]) => ({ p: [x, 0.62, z] })));
    fence.add(pim);
    const rails = [];
    for (let i = 0; i < runs.length - 1; i++) {
      const [x0, z0, r0] = runs[i], [x1, z1, r1] = runs[i + 1];
      if (r0 !== r1) continue; // corner break
      rails.push([x0, z0, x1, z1]);
    }
    // rail boxes are long in Z; yaw by atan2(dx,dz) to lie along the run
    const yaw = (x0, z0, x1, z1) => Math.atan2(x1 - x0, z1 - z0);
    rails.forEach(([x0, z0, x1, z1]) => {
      const len = Math.hypot(x1 - x0, z1 - z0);
      const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
      [0.95, 0.55].forEach(y => {
        const r = makeBeam(0.07, 0.1, len, M.wood, mx, y, mz);
        r.rotation.y = yaw(x0, z0, x1, z1);
        fence.add(r);
      });
    });
    rails.forEach(([x0, z0, x1, z1]) => {
      const len = Math.hypot(x1 - x0, z1 - z0);
      const cap = makeBeam(0.2, 0.06, len, M.woodDark, (x0 + x1) / 2, 1.28, (z0 + z1) / 2);
      cap.rotation.y = yaw(x0, z0, x1, z1);
      fence.add(cap);
    });
    g.add(fence);
  }

  // --- stone lantern (tōrō): base, shaft, firebox + glow, roof, jewel ---
  let lanternLight;
  {
    const L = new THREE.Group();
    const y0 = 0;
    L.add(makeBeam(0.7, 0.22, 0.7, M.stone, 0, y0 + 0.11, 0));            // base
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.17, 0.75, 8), M.stone);
    shaft.position.y = y0 + 0.6; shaft.castShadow = true;
    L.add(shaft);
    L.add(makeBeam(0.5, 0.12, 0.5, M.stone, 0, y0 + 1.02, 0));            // middle platform
    // firebox with 4 glowing window openings
    const fb = new THREE.Group();
    fb.add(makeBeam(0.44, 0.4, 0.44, M.stone, 0, 0, 0));
    const winMat = M.lanternGlow;
    [[0, 0.221], [0, -0.221]].forEach(([x, z]) => {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.22), winMat);
      win.position.set(x, 0, z);
      if (z < 0) win.rotation.y = Math.PI;
      fb.add(win);
    });
    [[0.221, 0], [-0.221, 0]].forEach(([x, z]) => {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.22), winMat);
      win.rotation.y = x > 0 ? Math.PI / 2 : -Math.PI / 2;
      win.position.set(x, 0, z);
      fb.add(win);
    });
    fb.position.y = y0 + 1.3;
    L.add(fb);
    // roof: 4-sided cone slab + jewel
    const roof = new THREE.Mesh(new THREE.ConeGeometry(0.48, 0.3, 4), M.stone);
    roof.position.y = y0 + 1.66;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    L.add(roof);
    const jewel = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), M.stone);
    jewel.position.y = y0 + 1.88;
    jewel.castShadow = true;
    L.add(jewel);
    L.position.set(3.4, 0, 6.4);
    g.add(L);
    const blob = contactShadow(1.8, 1.8, 0.6);
    blob.position.set(3.4, 0.025, 6.4);
    g.add(blob);
    lanternLight = new THREE.PointLight(0xff9c46, 2.5, 6, 2);
    lanternLight.position.set(3.4, 1.32, 6.4);
    g.add(lanternLight);
  }

  // --- arched wooden bridge over the pond gap (with stone abutments) ---
  {
    const B = new THREE.Group();
    const span = 4.4, n = 9;
    const arcY = i => 0.42 + Math.sin((i / (n - 1)) * Math.PI) * 0.5;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const x = -span / 2 + t * span;
      const plank = makeBeam(0.46, 0.07, 1.3, M.wood, x, arcY(i), 0);
      const slope = (arcY(Math.min(i + 1, n - 1)) - arcY(Math.max(i - 1, 0))) / (span / (n - 1));
      plank.rotation.z = -Math.atan(slope) * 0.9;
      B.add(plank);
    }
    // stringers: 3 angled segments per side following the arc
    [-0.6, 0.6].forEach(z => {
      const segs = [[-1.65, 0.55, -0.25], [0, 0.92, 0], [1.65, 0.55, 0.25]];
      segs.forEach(([x, y, tilt]) => {
        const s = makeBeam(1.7, 0.14, 0.12, M.woodDark, x, y - 0.12, z);
        s.rotation.z = tilt;
        B.add(s);
      });
    });
    // rails: posts + segmented top rail
    [-0.6, 0.6].forEach(z => {
      for (let i = 0; i < n; i += 2) {
        const t = i / (n - 1);
        const x = -span / 2 + t * span;
        B.add(makeBeam(0.08, 0.75, 0.08, M.woodDark, x, arcY(i) + 0.38, z));
      }
      for (let i = 0; i < n - 2; i += 2) {
        const t0 = i / (n - 1), t1 = (i + 2) / (n - 1);
        const x0 = -span / 2 + t0 * span, x1 = -span / 2 + t1 * span;
        const y0 = arcY(i) + 0.75, y1 = arcY(i + 2) + 0.75;
        const len = Math.hypot(x1 - x0, y1 - y0);
        const rail = makeBeam(len + 0.1, 0.07, 0.09, M.wood, (x0 + x1) / 2, (y0 + y1) / 2, z);
        rail.rotation.z = Math.atan2(y1 - y0, x1 - x0);
        B.add(rail);
      }
    });
    // stone abutments grounding both ends
    B.add(makeBeam(0.7, 0.5, 1.5, M.stone, -span / 2, 0.2, 0));
    B.add(makeBeam(0.7, 0.5, 1.5, M.stone, span / 2, 0.2, 0));
    B.position.set(7.5, 0, 6.0);
    B.rotation.y = 0.12;
    g.add(B);
    const blob = contactShadow(5.2, 2.2, 0.4);
    blob.position.set(7.5, 0.025, 6.0);
    g.add(blob);
  }

  // --- scattered fallen leaves (static) + small stones ---
  {
    const leafGeo = new THREE.PlaneGeometry(0.16, 0.16);
    const n = 90;
    const im = new THREE.InstancedMesh(leafGeo, M.mapleLeaf, n);
    const items = [];
    const col = new THREE.Color();
    const palette = [0xc0392b, 0xd35400, 0xe67e22, 0xa93226, 0x7d8f57];
    for (let i = 0; i < n; i++) {
      const nearMaple = i < 55;
      const x = nearMaple ? 5.5 + (rnd() - 0.5) * 7 : -4 + (rnd() - 0.5) * 9;
      const z = nearMaple ? 5.5 + (rnd() - 0.5) * 7 : 6.5 + (rnd() - 0.5) * 5;
      items.push({ p: [x, 0.045, z], rx: -Math.PI / 2 + (rnd() - 0.5) * 0.5, ry: rnd() * 6.3, s: 0.7 + rnd() * 0.8 });
      col.setHex(palette[Math.floor(rnd() * palette.length)]);
      im.setColorAt(i, col);
    }
    fillInstances(im, items);
    im.instanceColor.needsUpdate = true;
    im.castShadow = false;
    g.add(im);

    const sgeo = new THREE.IcosahedronGeometry(0.09, 0);
    const sim = new THREE.InstancedMesh(sgeo, M.stone, 36);
    const sitems = [];
    for (let i = 0; i < 36; i++)
      sitems.push({ p: [-7 + rnd() * 16, 0.04, 3 + rnd() * 7], ry: rnd() * 6.3, s: 0.5 + rnd() * 0.8, sy: 0.6 });
    fillInstances(sim, sitems);
    sim.castShadow = false;
    g.add(sim);
  }

  return { group: g, lanternLight };
}
