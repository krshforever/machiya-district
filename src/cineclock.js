// src/cineclock.js — deterministic fixed-step driver. Pure logic: no THREE
// import, no DOM, no Date.now/performance.now, no Math.random.
// time = frame * dt EXACTLY (derived, never accumulated), so the same
// seed + frame always reproduces the same result.

export function createClock(options = {}) {
  let fps = options.fps && options.fps > 0 ? Math.floor(options.fps) : 30;
  let frame = 0;
  const updaters = [];
  let shotHandler = typeof options.onShot === 'function' ? options.onShot : null;

  const dtOf = (f) => 1 / f;
  const timeOf = (fr, f) => fr * (1 / f);

  const clock = {
    get frame() { return frame; },
    get fps() { return fps; },
    get t() { return timeOf(frame, fps); },
    get dt() { return dtOf(fps); },

    setFps(next) {
      if (next && next > 0) {
        // Keep the absolute FRAME stable; time re-derives exactly.
        fps = Math.floor(next);
      }
      return fps;
    },

    // Register an updater called in registration order with (dt, t, frame).
    // Returns an unsubscribe closure.
    register(fn) {
      if (typeof fn !== 'function') return () => {};
      if (!updaters.includes(fn)) updaters.push(fn);
      return () => clock.unregister(fn);
    },

    unregister(fn) {
      const i = updaters.indexOf(fn);
      if (i >= 0) updaters.splice(i, 1);
      return updaters.length;
    },

    clear() { updaters.length = 0; },

    onShot(fn) { shotHandler = typeof fn === 'function' ? fn : null; },

    // Advance exactly one frame; idempotent time derivation.
    step(dtOverride) {
      const dt = dtOverride && dtOverride > 0 ? dtOverride : dtOf(fps);
      frame += 1;
      const t = timeOf(frame, fps);
      for (let i = 0; i < updaters.length; i++) updaters[i](dt, t, frame);
      return { frame, t, dt };
    },

    // Absolute seek + single step at that frame. Calling renderFrame(f) twice
    // with the same f yields the same (dt, t, frame) — seeks backwards reset
    // time exactly because t is derived, not accumulated.
    renderFrame(f) {
      frame = Math.max(0, Math.floor(f));
      const dt = dtOf(fps);
      const t = timeOf(frame, fps);
      for (let i = 0; i < updaters.length; i++) updaters[i](dt, t, frame);
      return { frame, t, dt };
    },

    reset() { frame = 0; return { frame, t: 0, dt: dtOf(fps) }; },

    // Optional camera-shot hook, then the absolute frame step.
    renderShot(shotId, f) {
      if (shotHandler) shotHandler(shotId, Math.max(0, Math.floor(f)));
      return { shotId, ...clock.renderFrame(f) };
    },

    // Headless-friendly: pure frame/time list, invokes NO updaters,
    // renders NO pixels. Optional per-call fps override (no state change).
    renderSequence(shotId, start, end, seqFps) {
      const f = seqFps && seqFps > 0 ? Math.floor(seqFps) : fps;
      const s = Math.max(0, Math.floor(start));
      const e = Math.max(s, Math.floor(end));
      const frames = [];
      const times = [];
      for (let fr = s; fr <= e; fr++) { frames.push(fr); times.push(fr * (1 / f)); }
      return { shotId, fps: f, frames, times };
    },
  };

  return clock;
}

export default createClock;
