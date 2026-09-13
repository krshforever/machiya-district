// src/testingZone.js — tree testing ground (branch forge3d-rebuild).
// A fenced row of labeled specimens on the south riverbank, far from the
// village, so the director always knows where to look: every species under
// test, one plot each, stake labels + entry board. Deterministic. Uses the
// signage stroke font (Latin caps) + T1 builders with fixed TREE_V2 keys.
import * as THREE from 'three';
import {
  buildSugi, buildKeyaki, buildMomiji, buildMatsu, buildSakura,
  buildHinoki, buildKaki, buildBambooClump, buildUnderstoryPatch,
  treeV2Stream,
} from './vegetation.js';
import { layoutLine, buildStrokeText } from './signage.js';

// [label, builder, x, z, scale, arg]
const PLOTS = [
  ['SUGI', 'sugi', 37, 52, 0.8],
  ['KEYAKI', 'keyaki', 46, 52, 0.8],
  ['MOMIJI', 'momiji', 55, 52, 0.85],
  ['MATSU', 'matsu', 64, 52, 0.9],
  ['SAKURA', 'sakura', 73, 52, 0.85],
  ['HINOKI', 'hinoki', 37, 61, 0.85],
  ['KAKI', 'kaki', 46, 61, 0.9],
  ['MOSO', 'moso', 55, 61, 1.0],
  ['MADAKE', 'madake', 64, 61, 0.9],
  ['SHITAKUSA', 'under', 73, 61, 1.0],
];

const BUILDERS = {
  sugi: (VM, rng) => buildSugi(VM, rng),
  keyaki: (VM, rng) => buildKeyaki(VM, rng),
  momiji: (VM, rng) => buildMomiji(VM, rng, { autumn: true }),
  matsu: (VM, rng) => buildMatsu(VM, rng),
  sakura: (VM, rng) => buildSakura(VM, rng),
  hinoki: (VM, rng) => buildHinoki(VM, rng),
  kaki: (VM, rng) => buildKaki(VM, rng),
  moso: (VM, rng) => buildBambooClump(VM, rng, 'moso'),
  madake: (VM, rng) => buildBambooClump(VM, rng, 'madake'),
  under: (VM, rng) => buildUnderstoryPatch(VM, rng, 5),
};

function stakeLabel(M, text, x, y, z, ry) {  const g = new THREE.Group();
  const postM = M.woodAged || M.woodDark || M.wood;
  const boardM = M.woodNew || M.wood;
  const post = new THREE.Mesh(new THREE.BoxGeometry(0.09, 1.1, 0.09), postM);
  post.position.y = 0.55;
  post.castShadow = true;
  const board = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.34, 0.05), boardM);
  board.position.y = 1.05;
  board.castShadow = true;
  g.add(post, board);
  const ll = layoutLine(text, { size: 0.16, tracking: 0.3 });
  const glyphM = new THREE.MeshStandardMaterial({ color: 0x2a2018, roughness: 0.9 });
  const im = buildStrokeText(
    [{ text, size: 0.16, tracking: 0.3, ox: -ll.width / 2, oy: 0.96, oz: 0.028 }],
    glyphM,
  );
  g.add(im);
  g.position.set(x, y, z);
  g.rotation.y = ry;
  return g;
}

// Board nailed ON the trunk (unmissable): plank + stroke text facing the path.
// Placed at trunk surface toward viewers (dz>0 side), no post.
function treeBoard(M, text, x, y, z, w = 1.0, h = 1.6, off = 0.3) {
  const g = new THREE.Group();
  const boardM = M.woodNew || M.wood;
  const plank = new THREE.Mesh(new THREE.BoxGeometry(w, 0.3, 0.045), boardM);
  plank.position.set(0, h, off); // proud of the bark, trunk behind
  plank.castShadow = true;
  g.add(plank);
  const size = text.length > 7 ? 0.12 : 0.15;
  const ll = layoutLine(text, { size, tracking: 0.3 });
  const glyphM = new THREE.MeshStandardMaterial({ color: 0x201812, roughness: 0.9 });
  const im = buildStrokeText(
    [{ text, size, tracking: 0.3, ox: -ll.width / 2, oy: h - 0.08, oz: off + 0.026 }],
    glyphM,
  );
  g.add(im);
  g.position.set(x, y, z);
  g.rotation.y = Math.PI; // face the north path (viewers approach from the river)
  return g;
}

export function buildTestingZone(M, heightAt) {
  const g = new THREE.Group();
  g.name = 'testingZone';
  const VM = {
    barkSugi: M.barkSugi, barkHinoki: M.barkHinoki, barkKeyaki: M.barkKeyaki,
    barkMomiji: M.barkMomiji, barkOrchard: M.barkOrchard,
    leafSugi: M.leafSugi, leafBroad: M.leafBroad, leafMomiji: M.leafMomiji,
    leafBlossom: M.leafBlossom, leafPine: M.leafPine, leafBamboo: M.leafBamboo,
    leafSasa: M.leafSasa, leafFern: M.leafFern, leafSeedling: M.leafSeedling,
    culm: M.bamboo, shoot: M.shoot, litter: M.litter, moss: M.moss,
    impostor: M.impostor,
  };
  // entry board (faces the river approach, ry = PI)
  g.add(stakeLabel(M, 'TREE TESTING ZONE', 55, heightAt(55, 47), 47, Math.PI));
  // EZ-Tree heroes stand at the zone ends (built by ezHeroes.js) — label them here
  g.add(stakeLabel(M, 'EZ SUGI A', 37, heightAt(37, 58.5), 58.5, Math.PI * 0.85));
  g.add(stakeLabel(M, 'EZ SUGI B', 73, heightAt(73, 58.5), 58.5, Math.PI * 0.85));
  for (const [label, key, x, z, s] of PLOTS) {
    const y = heightAt(x, z);
    const rng = treeV2Stream(`testzone:${key}`);
    const t = BUILDERS[key](VM, rng);
    t.position.set(x, y, z);
    t.rotation.y = rng() * 6.28;
    t.scale.setScalar(s);
    t.traverse((m) => { if (m.isMesh && !m.isInstancedMesh) m.castShadow = true; });
    g.add(t);
    // label stake 2.2m south-east of the specimen, facing the entry path
    g.add(stakeLabel(M, label, x + 2.2, heightAt(x + 2.2, z + 1.5), z + 1.5, Math.PI * 0.85));
    // board nailed ON the specimen (unmissable) — ground patches keep stakes only
    if (key === 'under') { /* shitakusa: stake suffices, no trunk to nail to */ }
    else if (key === 'moso' || key === 'madake') g.add(treeBoard(M, label, x, y, z, 1.0, 1.7, 0.14));
    else g.add(treeBoard(M, label, x, y, z));
  }
  // EZ heroes carry their boards too (built by ezHeroes.js, labeled here)
  g.add(treeBoard(M, 'EZ SUGI A', 37, heightAt(37, 57), 57, 1.25));
  g.add(treeBoard(M, 'EZ SUGI B', 73, heightAt(73, 57), 57, 1.25));
  g.add(treeBoard(M, 'EZ OAK A', 51, heightAt(51, 46), 46, 1.15));
  g.add(treeBoard(M, 'EZ OAK B', 59, heightAt(59, 46), 46, 1.15));
  return g;
}
