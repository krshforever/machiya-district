// src/ezNear.js — EZ-Tree near-field sugi (migration, branch forge3d-rebuild).
// Real 'Pine Small' bakes (sugiA/sugiB) as 2 round-robin archetypes sharing the
// skeleton placement discipline: same {x,y,z,ry,sc} items, same seed-family
// tints, hidden-until-whole per archetype, cullable bounds, never casts
// (instanced). Queue filled by ecology.js; momiji/pine stay skeleton.
import * as THREE from 'three';
import { EZ_NEAR_QUEUE } from './ecology.js';

const BAKES = [
  { id: 'sugiA', bark: 'vendor/eztree/ezhero-sugiA-bark.json', leaf: 'vendor/eztree/ezhero-sugiA-leaf.json', h: 39.161 },
  { id: 'sugiB', bark: 'vendor/eztree/ezhero-sugiB-bark.json', leaf: 'vendor/eztree/ezhero-sugiB-leaf.json', h: 39.161 },
];
const TEX = { color: 'pine_color_1k.jpg', normal: 'pine_normal_1k.jpg', rough: 'pine_roughness_1k.jpg', leaf: 'pine_color.png' };

let _mats = null;
function mats() {
  if (_mats) return _mats;
  const bark = new THREE.MeshStandardMaterial({ color: 0xb99a80, roughness: 0.95, envMapIntensity: 0.15 });
  const L = new THREE.TextureLoader();
  const noop = () => {};
  const prep = (t, srgb) => {
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 4;
    return t;
  };
  L.load(`vendor/eztree/${TEX.color}`, (t) => { bark.map = prep(t, true); bark.needsUpdate = true; }, undefined, noop);
  L.load(`vendor/eztree/${TEX.normal}`, (t) => { bark.normalMap = prep(t, false); bark.needsUpdate = true; }, undefined, noop);
  L.load(`vendor/eztree/${TEX.rough}`, (t) => { bark.roughnessMap = prep(t, false); bark.roughness = 1.0; bark.needsUpdate = true; }, undefined, noop);
  const leaf = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness: 0.85, side: THREE.DoubleSide,
    alphaTest: 0.45, envMapIntensity: 0.1,
  });
  L.load(`vendor/eztree/${TEX.leaf}`, (t) => { t.colorSpace = THREE.SRGBColorSpace; leaf.map = t; leaf.needsUpdate = true; }, undefined, noop);
  _mats = { bark, leaf };
  return _mats;
}

function h2(x, z, salt) {
  let h = (Math.imul(x, 374761393) + Math.imul(z, 668265263) + Math.imul(salt, 1442695041)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

export function buildEzNear() {
  const g = new THREE.Group();
  g.name = 'ezNear';
  if (!EZ_NEAR_QUEUE.length) return g;
  const { bark: barkMat, leaf: leafMat } = mats();
  const loader = new THREE.BufferGeometryLoader();
  const noop = () => {};
  const m4 = new THREE.Object3D();
  const col = new THREE.Color();
  BAKES.forEach((bake, a) => {
    const owned = EZ_NEAR_QUEUE.filter((_, k) => k % BAKES.length === a);
    if (!owned.length) return;
    const barkIM = new THREE.InstancedMesh(new THREE.BufferGeometry(), barkMat, owned.length);
    const leafIM = new THREE.InstancedMesh(new THREE.BufferGeometry(), leafMat, owned.length);
    barkIM.visible = false; leafIM.visible = false; // hidden-until-whole
    barkIM.castShadow = false; barkIM.receiveShadow = false;
    leafIM.castShadow = false; leafIM.receiveShadow = false;
    barkIM.frustumCulled = true; leafIM.frustumCulled = true;
    // matrices now (geometry swaps in on load — same item order)
    owned.forEach((t, i) => {
      const s = (t.sc || 1) * 10 / bake.h; // skeleton sc≈1 → ~10m tree
      m4.position.set(t.x, (t.y || 0) - 0.05, t.z);
      m4.rotation.set(0, t.ry || 0, 0);
      m4.scale.set(s, s, s);
      m4.updateMatrix();
      barkIM.setMatrixAt(i, m4.matrix);
      leafIM.setMatrixAt(i, m4.matrix);
      col.setHSL(0.33 + h2(i, a, 45) * 0.04, 0.45, 0.25 + h2(i, a, 46) * 0.08);
      leafIM.setColorAt(i, col);
      col.setHSL(0.36 + h2(i, a, 43) * 0.03, 0.42, 0.16 + h2(i, a, 44) * 0.06);
      barkIM.setColorAt(i, col);
    });
    barkIM.instanceMatrix.needsUpdate = true;
    leafIM.instanceMatrix.needsUpdate = true;
    if (barkIM.instanceColor) barkIM.instanceColor.needsUpdate = true;
    if (leafIM.instanceColor) leafIM.instanceColor.needsUpdate = true;
    let parts = 0;
    const show = (im, geo) => {
      geo.computeBoundingBox();
      im.geometry.dispose();
      im.geometry = geo;
      im.computeBoundingSphere();
      if (++parts === 2) { barkIM.visible = true; leafIM.visible = true; }
    };
    loader.load(bake.bark, (geo) => show(barkIM, geo), undefined, noop);
    loader.load(bake.leaf, (geo) => show(leafIM, geo), undefined, noop);
    g.add(barkIM, leafIM);
  });
  return g;
}
