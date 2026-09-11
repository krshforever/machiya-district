import * as THREE from 'three';

// Seeded RNG so the scene is stable across reloads.
export function mulberry(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Box beam with shadows configured. Centralizes the repeat pattern.
export function makeBeam(w, h, d, mat, x = 0, y = 0, z = 0, ry = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.rotation.y = ry;
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

const _dummy = new THREE.Object3D();

// Fill an InstancedMesh from an array of {p:Vector3-ish, ry, s, sy...}.
export function fillInstances(mesh, items) {
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    _dummy.position.set(it.p[0], it.p[1], it.p[2]);
    _dummy.rotation.set(it.rx || 0, it.ry || 0, it.rz || 0);
    const s = it.s === undefined ? 1 : it.s;
    _dummy.scale.set(it.sx === undefined ? s : it.sx, it.sy === undefined ? s : it.sy, it.sz === undefined ? s : it.sz);
    _dummy.updateMatrix();
    mesh.setMatrixAt(i, _dummy.matrix);
    if (it.c) mesh.setColorAt(i, it.c);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// Natural rock: displaced icosahedron, flattened a touch, normals recomputed.
export function displacedRock(r, seed, squashY = 0.75, detail = 1) {
  const geo = new THREE.IcosahedronGeometry(r, detail);
  const rnd = mulberry(seed);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  // jitter per unique vertex direction so shared verts stay welded: quantize key
  const seen = new Map();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const key = `${v.x.toFixed(3)},${v.y.toFixed(3)},${v.z.toFixed(3)}`;
    let k = seen.get(key);
    if (k === undefined) { k = 0.78 + rnd() * 0.5; seen.set(key, k); }
    v.multiplyScalar(k);
    v.y *= squashY;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

// Soft baked contact-shadow disc (cheap AO trick, no postprocessing).
let _blobTex = null;
export function blobTexture() {
  if (_blobTex) return _blobTex;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(64, 64, 6, 64, 64, 62);
  grad.addColorStop(0, 'rgba(20,12,6,0.55)');
  grad.addColorStop(0.6, 'rgba(20,12,6,0.28)');
  grad.addColorStop(1, 'rgba(20,12,6,0)');
  g.fillStyle = grad; g.fillRect(0, 0, 128, 128);
  _blobTex = new THREE.CanvasTexture(c);
  return _blobTex;
}

export function contactShadow(w, d, opacity = 1) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    // polygonOffset: decals sit 5-25mm above ground strips; without the offset
    // the depth test shimmers at glancing angles (fixed function, no Y-hacking).
    new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, opacity, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })
  );
  m.rotation.x = -Math.PI / 2;
  m.renderOrder = 1;
  return m;
}

// Lattice panel of thin bars as ONE InstancedMesh (shared across shoji/windows).
export function makeLatticeBars(cellsX, cellsY, areaW, areaH, barT, barD, mat) {
  const vGeo = new THREE.BoxGeometry(barT, areaH, barD);
  const hGeo = new THREE.BoxGeometry(areaW, barT, barD);
  const count = (cellsX + 1) + (cellsY + 1);
  // NOTE: two box shapes differ, so use two InstancedMeshes grouped.
  const grp = new THREE.Group();
  const mk = (geo, n) => {
    const im = new THREE.InstancedMesh(geo, mat, n);
    im.castShadow = false; im.receiveShadow = true;
    return im;
  };
  const vm = mk(vGeo, cellsX + 1), hm = mk(hGeo, cellsY + 1);
  for (let i = 0; i <= cellsX; i++) {
    _dummy.position.set(-areaW / 2 + (i * areaW) / cellsX, 0, 0);
    _dummy.rotation.set(0, 0, 0); _dummy.scale.set(1, 1, 1);
    _dummy.updateMatrix(); vm.setMatrixAt(i, _dummy.matrix);
  }
  for (let j = 0; j <= cellsY; j++) {
    _dummy.position.set(0, -areaH / 2 + (j * areaH) / cellsY, 0);
    _dummy.rotation.set(0, 0, 0); _dummy.scale.set(1, 1, 1);
    _dummy.updateMatrix(); hm.setMatrixAt(j, _dummy.matrix);
  }
  vm.instanceMatrix.needsUpdate = hm.instanceMatrix.needsUpdate = true;
  grp.add(vm, hm);
  return grp;
}
