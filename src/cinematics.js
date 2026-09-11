// src/cinematics.js — 10 curated shots, 30-55mm fov language, slow dolly rails,
// eased ~2.5s transitions, cine auto-advance + orbit passthrough.
import * as THREE from 'three';

// pos/target verified against town.js layout (alley x≈-5.9, hero at origin, street z≈7).
export const SHOTS = [
  { n: '01 establishing wide', pos: [24, 14, 30],   tgt: [0, 2, 2],    fov: 45, rail: [3, 0.5, 0] },
  { n: '02 hero three-quarter', pos: [9, 4.2, 11],  tgt: [0, 2.2, 0],  fov: 40, rail: [1.2, 0, 0.8] },
  { n: '03 street-level human', pos: [-6, 1.6, 7.2], tgt: [4, 2.2, 2], fov: 50, rail: [1.5, 0, 0] },
  { n: '04 alley compression', pos: [-5.9, 1.7, 4.5], tgt: [-5.9, 2.0, -9], fov: 35, rail: [0, 0.15, -1.2] },
  { n: '05 garden low',        pos: [3.5, 0.9, 4.8], tgt: [-1, 1.2, -1], fov: 50, rail: [0.8, 0.1, 0] },
  { n: '06 interior-out',      pos: [0, 1.6, 1.5],   tgt: [0, 1.5, 9],  fov: 55, rail: [0.5, 0, 0] },
  { n: '07 doorway framing',   pos: [2.8, 1.6, 4.2], tgt: [-1.5, 1.4, -2], fov: 45, rail: [0, 0.1, 0.5] },
  { n: '08 rooftop vista',     pos: [-14, 9, -12],  tgt: [5, 2, 8],    fov: 42, rail: [1.5, 0, 1.0] },
  { n: '09 golden long-lens',  pos: [-22, 3.2, 18], tgt: [6, 2.5, -2], fov: 30, rail: [1.0, 0.2, -0.6] },
  { n: '10 night moody',       pos: [8, 2.2, 12.5],  tgt: [-2, 2, 0],  fov: 40, rail: [1.0, 0, 0.4] },
];
// foreground framing: 02 (fence), 03 (pole/wires), 04 (alley walls), 05 (plantings) —
// ensured by layout; 09 shoots past rooftops/poles for layered depth.

export function createCinematics(camera, controls) {
  let idx = 1, mode = 'orbit', t = 0, advancing = false;
  let trans = null; // {p0,p1,t0,t1,f0,f1,k}
  const V = (a) => new THREE.Vector3(...a);
  function snap(i) {
    const s = SHOTS[i];
    camera.position.copy(V(s.pos)); controls.target.copy(V(s.tgt));
    camera.fov = s.fov; camera.updateProjectionMatrix(); controls.update();
  }
  function goTo(i, dur = 2.5) {
    idx = ((i % SHOTS.length) + SHOTS.length) % SHOTS.length;
    const s = SHOTS[idx];
    trans = { p0: camera.position.clone(), p1: V(s.pos), t0: controls.target.clone(), t1: V(s.tgt), f0: camera.fov, f1: s.fov, k: 0, dur };
  }
  return {
    get idx() { return idx; }, get mode() { return mode; },
    get label() { return mode === 'cine' ? SHOTS[idx].n : 'orbit'; },
    setMode(m) { mode = m; controls.enabled = (m === 'orbit'); if (m === 'cine') goTo(idx); },
    goTo, next() { goTo(idx + 1); }, prev() { goTo(idx - 1); },
    toggleAdvance() { advancing = !advancing; return advancing; },
    update(dt) {
      t += dt;
      if (trans) {
        trans.k = Math.min(1, trans.k + dt / trans.dur);
        const e = trans.k < 0.5 ? 4 * trans.k ** 3 : 1 - ((-2 * trans.k + 2) ** 3) / 2; // easeInOutCubic
        camera.position.lerpVectors(trans.p0, trans.p1, e);
        controls.target.lerpVectors(trans.t0, trans.t1, e);
        camera.fov = THREE.MathUtils.lerp(trans.f0, trans.f1, e);
        camera.updateProjectionMatrix();
        if (trans.k >= 1) trans = null;
      } else if (mode === 'cine') {
        // slow ping-pong dolly along rail
        const s = SHOTS[idx];
        const ph = (Math.sin(t * 0.12) * 0.5 + 0.5);
        camera.position.set(s.pos[0] + s.rail[0] * ph, s.pos[1] + s.rail[1] * ph, s.pos[2] + s.rail[2] * ph);
        camera.lookAt(controls.target);
        if (advancing && Math.sin(t * 0.12) > 0.999) this.next();
      }
    },
  };
}
