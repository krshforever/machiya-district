// src/interact.js — P2.12: tap-to-interact (sliding doors, radio toggle).
// Click-vs-drag discrimination (moved <6px, <400ms) so orbit never misfires.
// Hover shows pointer over targets. All motion eased, absolute (deterministic).
// No per-frame allocations in update.
import * as THREE from 'three';

export function createInteract(camera, dom) {
  const slides = []; // {node, closed, open, t, target}
  const actions = []; // {meshes[], fn}
  const ray = new THREE.Raycaster();
  const ptr = new THREE.Vector2();
  let downX = 0, downY = 0, downT = 0;
  let hoverCheck = 0;

  function castAt(cx, cy) {
    const r = dom.getBoundingClientRect();
    ptr.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ptr, camera);
    const targets = [];
    for (const s of slides) targets.push(s.node);
    for (const a of actions) targets.push(...a.meshes);
    const hits = ray.intersectObjects(targets, true);
    if (!hits.length) return null;
    let o = hits[0].object;
    for (const s of slides) {
      let p = o;
      while (p) { if (p === s.node) return { kind: 'slide', item: s }; p = p.parent; }
    }
    for (const a of actions) {
      for (const m of a.meshes) {
        let p = o;
        while (p) { if (p === m) return { kind: 'action', item: a }; p = p.parent; }
      }
    }
    return null;
  }

  function addSlide(node, openX) {
    if (!node) return null;
    const s = { node, closed: node.position.x, open: openX, t: 0, target: 0 };
    slides.push(s);
    return s;
  }
  function onTap(meshes, fn) {
    if (!meshes || !meshes.length || typeof fn !== 'function') return;
    actions.push({ meshes: meshes.slice(), fn });
  }

  try {
    dom.addEventListener('pointerdown', (e) => {
      downX = e.clientX; downY = e.clientY; downT = performance.now();
    });
    dom.addEventListener('pointerup', (e) => {
      const moved = Math.hypot(e.clientX - downX, e.clientY - downY);
      if (moved > 6 || performance.now() - downT > 400) return; // it was a drag
      let hit = null;
      try { hit = castAt(e.clientX, e.clientY); } catch (err) { hit = null; }
      if (!hit) return;
      if (hit.kind === 'slide') hit.item.target = hit.item.target > 0.5 ? 0 : 1;
      else { try { hit.item.fn(); } catch (err) {} }
    });
    dom.addEventListener('pointermove', (e) => {
      const now = performance.now();
      if (now - hoverCheck < 120) return; // throttled hover raycast
      hoverCheck = now;
      let hit = null;
      try { hit = castAt(e.clientX, e.clientY); } catch (err) { hit = null; }
      try { dom.style.cursor = hit ? 'pointer' : ''; } catch (err) {}
    });
  } catch (e) { /* headless: listeners unavailable, system inert but safe */ }

  function update(dt) {
    let step = Number(dt);
    if (!Number.isFinite(step) || step < 0) step = 0;
    if (step > 0.1) step = 0.1;
    const k = 1 - Math.exp(-3 * step || 0.0001);
    for (const s of slides) {
      s.t += (s.target - s.t) * (step === 0 ? 1 : k);
      if (Math.abs(s.target - s.t) < 0.002) s.t = s.target;
      const e = s.t * s.t * (3 - 2 * s.t);
      s.node.position.x = s.closed + (s.open - s.closed) * e;
    }
  }

  const api = { addSlide, onTap, update, get count() { return slides.length + actions.length; } };
  return api;
}
