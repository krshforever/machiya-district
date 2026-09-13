// src/ezHeroes.js — EZ-Tree hero sugi (branch forge3d-rebuild).
// Baked offline from @dgreenheck/ez-tree 'Pine Small' (MIT) via correct string
// API; vendored as static JSON + PNG/JPG under public/vendor/eztree/.
// Zero runtime dependency on the package, zero CDN. Missing files → heroes
// absent, build never breaks (onLoad-only binding). Side-by-side with T1
// skeleton sugi: same preview camera, director's eyes pick the survivor.
import * as THREE from 'three';

const HEROES = [
  // testing zone: sugi ends + oak pair flanking the entry
  { name: 'sugiA', set: 'pine', x: 37, z: 57, ry: 0.7, h: 11 },
  { name: 'sugiB', set: 'pine', x: 73, z: 57, ry: 2.4, h: 10 },
  { name: 'oakA', set: 'oak', x: 51, z: 46, ry: 1.9, h: 8 },
  { name: 'oakB', set: 'oak', x: 59, z: 46, ry: 4.2, h: 8.5 },
];

const SET_TEX = {
  pine: { color: 'pine_color_1k.jpg', normal: 'pine_normal_1k.jpg', rough: 'pine_roughness_1k.jpg', leaf: 'pine_color.png' },
  oak: { color: 'oak_color_1k.jpg', normal: 'oak_normal_1k.jpg', rough: 'oak_roughness_1k.jpg', leaf: 'oak_color.png' },
};

const _mats = {};
function setMats(set) {
  if (_mats[set]) return _mats[set];
  const T = SET_TEX[set];
  const bark = new THREE.MeshStandardMaterial({ color: 0xb99a80, roughness: 0.95, envMapIntensity: 0.15 });
  const L = new THREE.TextureLoader();
  const noop = () => {};
  const prep = (t, srgb) => {
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 4;
    return t;
  };
  L.load(`vendor/eztree/${T.color}`, (t) => { bark.map = prep(t, true); bark.needsUpdate = true; }, undefined, noop);
  L.load(`vendor/eztree/${T.normal}`, (t) => { bark.normalMap = prep(t, false); bark.needsUpdate = true; }, undefined, noop);
  L.load(`vendor/eztree/${T.rough}`, (t) => { bark.roughnessMap = prep(t, false); bark.roughness = 1.0; bark.needsUpdate = true; }, undefined, noop);
  const leaf = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness: 0.85, side: THREE.DoubleSide,
    alphaTest: 0.45, envMapIntensity: 0.1,
  });
  L.load(`vendor/eztree/${T.leaf}`,
    (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      leaf.map = t; leaf.needsUpdate = true;
    }, undefined, () => {});
  _mats[set] = { bark, leaf };
  return _mats[set];
}

export function buildEzHeroes(heightAt) {
  const g = new THREE.Group();
  g.name = 'ezHeroes';
  const loader = new THREE.BufferGeometryLoader();
  const noop = () => {};
  for (const h of HEROES) {
    const { bark: barkMat, leaf: leafMat } = setMats(h.set);
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
