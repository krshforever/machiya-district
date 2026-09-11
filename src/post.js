// post.js — restrained post skeleton. Default 'off' is BIT-IDENTICAL to plain render.
// 'low': RenderPass + OutputPass (validates composer path, no bloom).
// 'high': + UnrealBloomPass(strength 0.18, radius 0.6, threshold 0.85) — VERY restrained.
// Explicitly NO BokehPass/DoF: deferred — blind focus tuning + mobile fill cost.
// No DOM at module top. No Math.random. No lights.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export function createPost({ renderer, scene, camera }) {
  let current = 'off';
  let composer = null;
  let bloomPass = null;
  let W = 1, H = 1;

  function readSize() {
    try {
      const s = renderer.getSize(new THREE.Vector2());
      W = Math.max(1, Math.round(s.x));
      H = Math.max(1, Math.round(s.y));
    } catch (e) { W = W || 1; H = H || 1; }
  }

  function teardown() {
    if (composer) {
      try { composer.dispose(); } catch (e) { /* guarded */ }
    }
    composer = null;
    bloomPass = null;
  }

  function build(q) {
    teardown();
    readSize();
    if (q === 'low' || q === 'high') {
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      if (q === 'high') {
        bloomPass = new UnrealBloomPass(new THREE.Vector2(W, H), 0.18, 0.6, 0.85);
        composer.addPass(bloomPass);
      }
      composer.addPass(new OutputPass());
      try { composer.setSize(W, H); } catch (e) { /* guarded */ }
    }
  }

  const api = {
    get quality() { return current; },
    setQuality(q) {
      const v = q === 'high' ? 'high' : q === 'low' ? 'low' : 'off';
      try {
        if (v === current && (v === 'off' || composer)) return current;
        if (v === 'off') { teardown(); current = 'off'; return current; }
        build(v);
        current = v;
      } catch (e) {
        try { teardown(); } catch (_e) { /* guarded */ }
        current = 'off';
      }
      return current;
    },
    setSize(w, h) {
      W = Math.max(1, Math.round(w));
      H = Math.max(1, Math.round(h));
      if (composer) { try { composer.setSize(W, H); } catch (e) { /* guarded */ } }
    },
    render() {
      if (current === 'off' || !composer) renderer.render(scene, camera);
      else { try { composer.render(); } catch (e) { renderer.render(scene, camera); } }
    },
    dispose() { teardown(); current = 'off'; },
  };
  return api;
}
