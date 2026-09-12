// src/explore.js — first-person explore mode (eyes of a wanderer, no character model).
// WASD/arrows + drag-look (desktop), left-thumb stick + right-drag look (touch).
// Feet follow world heightAt; circle-vs-rect pushout against building footprints.
// No allocations in the hot loop. Deterministic (no RNG at all).
import * as THREE from 'three';

const EYE = 1.6;
const WALK = 3.4;
const LOOK_DAMP = 9;

export function createExplore(camera, dom, opts = {}) {
  const heightFn = typeof opts.heightFn === 'function' ? opts.heightFn : () => 0;
  const solids = Array.isArray(opts.solids) ? opts.solids : []; // {x0,x1,z0,z1}
  let enabled = false;
  let yaw = 0, pitch = 0;
  const pos = new THREE.Vector3(0, EYE, 10);
  const keys = {};
  const fwd = new THREE.Vector3(), rgt = new THREE.Vector3(), mv = new THREE.Vector3();
  // touch state
  let moveId = -1, lookId = -1;
  let mx0 = 0, my0 = 0, mx = 0, my = 0; // stick origin + current
  let lx0 = 0, ly0 = 0, lx = 0, ly = 0, lookActive = false;
  let stickEl = null;

  function groundY(x, z) {
    let h = 0;
    try { h = heightFn(x, z); } catch (e) { h = 0; }
    return (Number.isFinite(h) ? h : 0) + EYE;
  }
  function collide(p) {
    for (const r of solids) {
      const x0 = r.x0 - 0.35, x1 = r.x1 + 0.35, z0 = r.z0 - 0.35, z1 = r.z1 + 0.35;
      if (p.x > x0 && p.x < x1 && p.z > z0 && p.z < z1) {
        const dxl = p.x - x0, dxr = x1 - p.x, dzl = p.z - z0, dzr = z1 - p.z;
        const m = Math.min(dxl, dxr, dzl, dzr);
        if (m === dxl) p.x = x0; else if (m === dxr) p.x = x1;
        else if (m === dzl) p.z = z0; else p.z = z1;
      }
    }
  }
  function showStick(x, y) {
    if (!stickEl) {
      stickEl = document.createElement('div');
      stickEl.style.cssText = 'position:fixed;width:96px;height:96px;border-radius:50%;border:2px solid rgba(255,255,255,.35);background:rgba(255,255,255,.06);z-index:30;pointer-events:none;display:none;';
      document.body.appendChild(stickEl);
    }
    stickEl.style.display = 'block';
    stickEl.style.left = (x - 48) + 'px';
    stickEl.style.top = (y - 48) + 'px';
  }
  function hideStick() { try { if (stickEl) stickEl.style.display = 'none'; } catch (e) {} }

  function setEnabled(b, spawn) {
    enabled = !!b;
    if (enabled) {
      if (spawn) { pos.set(spawn.x ?? 0, 0, spawn.z ?? 10); yaw = spawn.yaw ?? 0; pitch = 0; }
      pos.y = groundY(pos.x, pos.z);
    camera.position.copy(pos);
      camera.rotation.order = 'YXZ';
      camera.rotation.set(pitch, yaw, 0);
    } else hideStick();
    return enabled;
  }

  try {
    window.addEventListener('keydown', (e) => { keys[e.code] = true; });
    window.addEventListener('keyup', (e) => { keys[e.code] = false; });
    let dragId = -1, dragX = 0, dragY = 0;
    dom.addEventListener('pointerdown', (e) => {
      if (!enabled) return;
      if (e.pointerType === 'touch') {
        if (e.clientX < window.innerWidth / 2 && moveId < 0) {
          moveId = e.pointerId; mx0 = mx = e.clientX; my0 = my = e.clientY;
          showStick(mx0, my0);
        } else if (lookId < 0) {
          lookId = e.pointerId; lx0 = lx = e.clientX; ly0 = ly = e.clientY; lookActive = true;
        }
      } else if (dragId < 0) { dragId = e.pointerId; dragX = e.clientX; dragY = e.clientY; }
    });
    const endPointer = (e) => {
      if (e.pointerId === moveId) { moveId = -1; hideStick(); }
      if (e.pointerId === lookId) { lookId = -1; lookActive = false; }
      if (e.pointerId === dragId) dragId = -1;
    };
    window.addEventListener('pointerup', endPointer);
    window.addEventListener('pointercancel', endPointer);
    window.addEventListener('pointermove', (e) => {
      if (!enabled) return;
      if (e.pointerId === moveId) { mx = e.clientX; my = e.clientY; }
      else if (e.pointerId === lookId && lookActive) {
        yaw -= (e.clientX - lx) * 0.0042; pitch -= (e.clientY - ly) * 0.0042;
        pitch = Math.max(-1.48, Math.min(1.48, pitch));
        lx = e.clientX; ly = e.clientY;
      } else if (e.pointerId === dragId && e.buttons) {
        yaw -= (e.clientX - dragX) * 0.0042; pitch -= (e.clientY - dragY) * 0.0042;
        pitch = Math.max(-1.48, Math.min(1.48, pitch));
        dragX = e.clientX; dragY = e.clientY;
      }
    });
  } catch (e) { /* headless: inert but safe */ }

  function update(dt) {
    if (!enabled) return;
    let step = Number(dt);
    if (!Number.isFinite(step) || step < 0) step = 0;
    if (step > 0.1) step = 0.1;
    // wish direction: keys + stick
    let ix = 0, iz = 0;
    if (keys.KeyW || keys.ArrowUp) iz += 1;
    if (keys.KeyS || keys.ArrowDown) iz -= 1;
    if (keys.KeyA || keys.ArrowLeft) ix -= 1;
    if (keys.KeyD || keys.ArrowRight) ix += 1;
    if (moveId >= 0) {
      ix += (mx - mx0) / 40;
      iz -= (my - my0) / 40;
    }
    const l = Math.hypot(ix, iz);
    if (l > 1) { ix /= l; iz /= l; }
    const slow = step === 0 ? 1 : 1; // fixed intensity; speed via dt only
    void slow;
    fwd.set(-Math.sin(yaw), 0, -Math.cos(yaw));
    rgt.set(-fwd.z, 0, fwd.x);
    mv.set(0, 0, 0).addScaledVector(fwd, iz).addScaledVector(rgt, ix);
    if (mv.lengthSq() > 0) {
      mv.normalize().multiplyScalar(WALK * step);
      pos.x += mv.x; pos.z += mv.z;
      collide(pos);
    }
    // smooth height follow (stairs/terrain without popping)
    const gy = groundY(pos.x, pos.z);
    pos.y += (gy - pos.y) * Math.min(1, step * 10 + (step === 0 ? 1 : 0));
    camera.position.copy(pos);
    camera.rotation.order = 'YXZ';
    // look smoothing toward target yaw/pitch (kills jitter, keeps response)
    const k = 1 - Math.exp(-LOOK_DAMP * (step || 0.016));
    camera.rotation.y += (yaw - camera.rotation.y) * k;
    camera.rotation.x += (pitch - camera.rotation.x) * k;
    camera.rotation.z = 0;
    camera.fov = 55;
    camera.updateProjectionMatrix();
  }

  return { update, setEnabled, get enabled() { return enabled; } };
}
