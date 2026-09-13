// src/ezHeroes.js — EZ-Tree hero sugi (branch forge3d-rebuild).
// Baked offline from @dgreenheck/ez-tree 'Pine Small' (MIT) via correct string
// API; vendored as static JSON + PNG/JPG under public/vendor/eztree/.
// Zero runtime dependency on the package, zero CDN. Missing files → heroes
// absent, build never breaks (onLoad-only binding). Side-by-side with T1
// skeleton sugi: same preview camera, director's eyes pick the survivor.
import * as THREE from 'three';

const HEROES = [
  // testing-zone ends (visible from the entry board, beside T1 sugi row)
  { name: 'sugiA', x: 37, z: 57, ry: 0.7, h: 11 },
  { name: 'sugiB', x: 73, z: 57, ry: 2.4, h: 10 },
];

function ezBarkMat() {
  const m = new THREE.MeshStandardMaterial({ color: 0xb99a80, roughness: 0.95, envMapIntensity: 0.15 });
  const L = new THREE.TextureLoader();
  const noop = () => {};
  const prep = (t, srgb) => {
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 4;
    return t;
  };
  L.load('vendor/eztree/pine_color_1k.jpg', (t) => { m.map = prep(t, true); m.needsUpdate = true; }, undefined, noop);
  L.load('vendor/eztree/pine_normal_1k.jpg', (t) => { m.normalMap = prep(t, false); m.needsUpdate = true; }, undefined, noop);
  L.load('vendor/eztree/pine_roughness_1k.jpg', (t) => { m.roughnessMap = prep(t, false); m.roughness = 1.0; m.needsUpdate = true; }, undefined, noop);
  return m;
}

function ezLeafMat() {
  const m = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness: 0.85, side: THREE.DoubleSide,
    alphaTest: 0.45, envMapIntensity: 0.1,
  });
  new THREE.TextureLoader().load('vendor/eztree/pine_color.png',
    (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      m.map = t; m.needsUpdate = true;
    }, undefined, () => {});
  return m;
}

export function buildEzHeroes(heightAt) {
  const g = new THREE.Group();
  g.name = 'ezHeroes';
  const loader = new THREE.BufferGeometryLoader();
  const barkMat = ezBarkMat();
  const leafMat = ezLeafMat();
  const noop = () => {};
  for (const h of HEROES) {
    const y = heightAt(h.x, h.z);
    const holder = new THREE.Group();
    holder.position.set(h.x, y - 0.05, h.z);
    holder.rotation.y = h.ry;
    holder.visible = false; // shown only when both parts land
    g.add(holder);
    let parts = 0;
    // ONE scale from BARK height for both parts (separate bboxes would misalign;
    // network order must not change it → leaf waits for bark's scale).
    let pendingLeaf = null;
    const place = (geo, mat, shadow, isBark) => {
      geo.computeBoundingBox();
      const bb = geo.boundingBox;
      if (isBark) {
        holder.userData.s = h.h / Math.max(0.001, bb.max.y - bb.min.y);
        if (pendingLeaf) {
          const pg = pendingLeaf; pendingLeaf = null;
          place(pg, leafMat, false, false);
        }
      } else if (holder.userData.s === undefined) {
        pendingLeaf = geo; // bark hasn't landed: wait (no part counted)
        return;
      }
      const s = holder.userData.s;
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.setScalar(s);
      mesh.position.y = -bb.min.y * s;
      mesh.castShadow = shadow;
      holder.add(mesh);
      if (++parts === 2) holder.visible = true;
    };
    loader.load(`vendor/eztree/ezhero-${h.name}-bark.json`,
      (geo) => place(geo, barkMat, true, true), undefined, noop);
    loader.load(`vendor/eztree/ezhero-${h.name}-leaf.json`,
      (geo) => place(geo, leafMat, false, false), undefined, noop);
  }
  return g;
}
