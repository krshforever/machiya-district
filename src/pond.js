import * as THREE from 'three';
import { fillInstances, mulberry } from './helpers.js';

// Pond: dark basin, reflective plane with cheap CPU ripple, stone rim ring.
export const POND = { x: 7.5, z: 6.0, w: 4.6, d: 2.9 };

export function buildPond(M) {
  const g = new THREE.Group();
  const { x, z, w, d } = POND;

  // basin (dark bed seen through water edges)
  const basin = new THREE.Mesh(
    new THREE.CircleGeometry(1, 40),
    new THREE.MeshStandardMaterial({ color: 0x22332b, roughness: 1 })
  );
  basin.rotation.x = -Math.PI / 2;
  basin.scale.set(w / 2 + 0.15, d / 2 + 0.15, 1);
  basin.position.set(x, -0.1, z);
  basin.receiveShadow = true;
  g.add(basin);

  // water surface: reflective standard material + vertex ripple
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x51707c, roughness: 0.1, metalness: 0.85, envMapIntensity: 1.1,
    transparent: true, opacity: 0.93
  });
  const segX = 30, segZ = 18;
  const waterGeo = new THREE.PlaneGeometry(w, d, segX, segZ);
  const water = new THREE.Mesh(waterGeo, waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.set(x, 0.06, z);
  water.receiveShadow = true;
  g.add(water);
  const base = waterGeo.attributes.position.array.slice();

  // rim stones: instanced flattened rocks around an ellipse
  {
    const rnd = mulberry(646);
    const n = 22;
    const geo = new THREE.IcosahedronGeometry(0.22, 0);
    const im = new THREE.InstancedMesh(geo, M.stone, n);
    const items = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      items.push({
        p: [x + Math.cos(a) * (w / 2 + 0.1), 0.1, z + Math.sin(a) * (d / 2 + 0.1)],
        ry: rnd() * 6.3, s: 0.8 + rnd() * 0.6, sy: 0.55
      });
    }
    fillInstances(im, items);
    g.add(im);
  }

  function update(t, weather = null) {
    const p = waterGeo.attributes.position;
    // wetness widens the ripple slightly (rain); default path unchanged
    const wet = weather && typeof weather.wetness === 'number' ? Math.min(Math.max(weather.wetness, 0), 1) : 0;
    const amp = 1 + wet * 0.35;
    for (let i = 0; i < p.count; i++) {
      const bx = base[i * 3], by = base[i * 3 + 1];
      p.setZ(i, (Math.sin(bx * 2.1 + t * 1.7) * 0.022 + Math.cos(by * 2.8 + t * 2.2) * 0.02) * amp);
    }
    p.needsUpdate = true;
    waterGeo.computeVertexNormals();
  }

  return { group: g, update, waterMat };
}
