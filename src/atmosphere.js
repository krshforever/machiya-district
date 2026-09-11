import * as THREE from 'three';
import { fillInstances, mulberry } from './helpers.js';
import { WIND } from './weather.js'; // cycle-safe: weather.js never imports atmosphere

// Floating dust (Points drift) + looping falling maple leaves (instanced).
export function buildAtmosphere(M) {
  const g = new THREE.Group();
  const rnd = mulberry(999);

  // --- dust motes ---
  const DUST = 170;
  const dustGeo = new THREE.BufferGeometry();
  const dPos = new Float32Array(DUST * 3);
  const dSeed = new Float32Array(DUST);
  for (let i = 0; i < DUST; i++) {
    dPos[i * 3] = -22 + rnd() * 44; // district-wide drift volume
    dPos[i * 3 + 1] = 0.3 + rnd() * 6;
    dPos[i * 3 + 2] = -14 + rnd() * 30;
    dSeed[i] = rnd() * 100;
  }
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dPos, 3));
  const sprite = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 32;
    const ctx = c.getContext('2d');
    const gr = ctx.createRadialGradient(16, 16, 1, 16, 16, 15);
    gr.addColorStop(0, 'rgba(255,240,214,1)');
    gr.addColorStop(1, 'rgba(255,240,214,0)');
    ctx.fillStyle = gr; ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(c);
  })();
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({
    map: sprite, size: 0.09, transparent: true, opacity: 0.55,
    depthWrite: false, color: 0xffe8c0, sizeAttenuation: true
  }));
  g.add(dust);

  // --- falling maple leaves: 40 instanced, looping fall + sway + tumble ---
  const FALL = 40;
  const leafGeo = new THREE.PlaneGeometry(0.17, 0.17);
  const fall = new THREE.InstancedMesh(leafGeo, M.mapleLeaf, FALL);
  fall.castShadow = false;
  fall.receiveShadow = false;
  fall.frustumCulled = false;
  const seeds = [];
  const col = new THREE.Color();
  const palette = [0xc0392b, 0xd35400, 0xe67e22, 0xa93226];
  for (let i = 0; i < FALL; i++) {
    seeds.push({
      bx: -6 + (rnd() - 0.5) * 30, // district-wide leaf fall (was: single v1 maple)
      bz: 2 + (rnd() - 0.5) * 26,
      speed: 0.35 + rnd() * 0.4,
      phase: rnd() * 6.28,
      sway: 0.4 + rnd() * 0.7,
      spin: 1 + rnd() * 2
    });
    col.setHex(palette[Math.floor(rnd() * palette.length)]);
    fall.setColorAt(i, col);
  }
  fall.instanceColor.needsUpdate = true;
  g.add(fall);
  const dummy = new THREE.Object3D();

  function update(t) {
    const w = 0.5 + WIND.gust(t); // district wind scales drift + fall rate
    // dust drift
    const p = dustGeo.attributes.position;
    for (let i = 0; i < DUST; i++) {
      const s = dSeed[i];
      p.array[i * 3] += Math.sin(t * 0.3 + s) * 0.0012 * (0.5 + w);
      p.array[i * 3 + 1] += (0.0016 + Math.sin(t * 0.5 + s * 2.0) * 0.0008) * (0.5 + w);
      if (p.array[i * 3 + 1] > 6.5) p.array[i * 3 + 1] = 0.2;
    }
    p.needsUpdate = true;
    // falling leaves
    for (let i = 0; i < FALL; i++) {
      const s = seeds[i];
      const span = 4.6;
      let y = 4.8 - ((t * s.speed * (0.6 + w) + s.phase) % span);
      const x = s.bx + Math.sin(t * 0.9 + s.phase) * s.sway * (0.6 + w);
      const z = s.bz + Math.cos(t * 0.7 + s.phase * 1.3) * s.sway * 0.7;
      dummy.position.set(x, y, z);
      dummy.rotation.set(t * s.spin + s.phase, s.phase, t * s.spin * 0.7);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      fall.setMatrixAt(i, dummy.matrix);
    }
    fall.instanceMatrix.needsUpdate = true;
  }

  // prime matrices so first frame is never empty
  update(0.01);
  void fillInstances;
  return { group: g, update };
}
