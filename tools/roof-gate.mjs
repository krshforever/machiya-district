// Compact roof-orientation gate (rebuild of the /tmp suite, lost to tmp purge).
// Asserts: tile slope sign per side, ridge-cap spine+dome via bbox, ridge height.
import * as THREE from '/data/data/com.termux/files/home/tsukimori/node_modules/three/build/three.module.js';
import { generateHouse } from '/data/data/com.termux/files/home/tsukimori/src/houses.js';
let pass = 0, fail = 0;
const ok = (c, m) => { c ? pass++ : (fail++, console.log('  FAIL:', m)); };
const M4 = new THREE.Matrix4(), P = new THREE.Vector3();
function check(name, params) {
  const h = generateHouse({ ...params, name });
  h.group.updateWorldMatrix(true, true);
  let tiles = null; const caps = [];
  h.group.traverse((o) => {
    if (o.isInstancedMesh && o.geometry?.type === 'BoxGeometry' && Math.abs((o.geometry.parameters?.width ?? 0) - 0.3) < 0.01) tiles = o;
    if (o.isMesh && o.geometry?.type === 'CylinderGeometry' && Math.abs((o.geometry.parameters?.thetaLength ?? 0) - Math.PI) < 0.01) caps.push(o);
  });
  ok(!!tiles, `${name}: tile mesh present`);
  if (tiles) for (const side of [1, -1]) {
    let sx = 0, sy = 0, sxx = 0, sxy = 0, n = 0;
    for (let i = 0; i < tiles.count; i++) {
      tiles.getMatrixAt(i, M4); P.setFromMatrixPosition(M4);
      if (Math.sign(P.z) !== side) continue;
      const x = Math.abs(P.z); sx += x; sy += P.y; sxx += x * x; sxy += x * P.y; n++;
    }
    const slope = (n * sxy - sx * sy) / (n * sxx - sx * sx);
    ok(slope < -0.25, `${name} side${side}: slope ${slope.toFixed(3)}`);
  }
  ok(caps.length > 0, `${name}: caps present`);
  let ax = 0, dm = 0;
  for (const c of caps) {
    c.geometry.computeBoundingBox(); const bb = c.geometry.boundingBox;
    if (Math.abs((bb.max.x - bb.min.x) - 0.46) < 0.05 && Math.abs((bb.max.z - bb.min.z) - 0.28) < 0.05) ax++;
    if (bb.min.y > -0.02 && bb.max.y > 0.1) dm++;
  }
  ok(ax === caps.length, `${name}: caps along X (${ax}/${caps.length})`);
  ok(dm === caps.length, `${name}: caps dome-up (${dm}/${caps.length})`);
  const ray = new THREE.Raycaster(); ray.set(new THREE.Vector3(0, 30, 0), new THREE.Vector3(0, -1, 0));
  const hit = ray.intersectObject(h.group, true)[0];
  ok(hit && Math.abs(hit.point.y - h.roofTopY) < 0.7, `${name}: ridge y=${hit?.point.y.toFixed(2)} vs ${h.roofTopY.toFixed(2)}`);
}
check('A', { seed: 11, w: 6.5, d: 6, wallH: 2.9, roofType: 'kirizuma', pitch: 30, facadeCols: 4, doorSide: -1, engawa: 0.9, woodTone: 0.3, age: 0.7 });
check('B', { seed: 22, w: 6, d: 6.5, wallH: 3.3, roofType: 'yosemune', pitch: 32, facadeCols: 3, doorSide: 1, engawa: 0, woodTone: 0.8, age: 0.2 });
check('shed', { seed: 111, w: 3, d: 2.5, wallH: 2.2, roofType: 'kirizuma', pitch: 24, facadeCols: 2, doorSide: 0, engawa: 0, woodTone: 0.2, age: 0.9, winLayout: [0, 0] });
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
