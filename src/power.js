// src/power.js — street-lamp circuit power states.
// Scope: STREET lamps only (lampLights / lampGlows from details.js).
// Window glow mats are owned by daytime.js — power NEVER touches them.
// Ordering contract: main runs power.update() AFTER daytime.update() every
// frame. Daytime resets intensities to base; power multiplies after. Never
// accumulates because the base is re-established each frame before we scale.
//
// update(dt, t, wx, night) — positional args, zero per-frame allocation.
//   dt    : seconds (reserved for future ramp smoothing; currently unused)
//   t     : elapsed seconds (drives deterministic brownout hash)
//   wx    : weather.state string ('rainy' enables storm dips, else dip = 1)
//   night : 0..1 night factor, composed in main from daytime.state
//           (suggested: NIGHT/MOONLIT/RAIN_NIGHT/MIST_NIGHT -> 1,
//            SUNSET/BLUE_HOUR -> 0.45, else 0).
// state() -> { circuits:[f0,f1,f2], dip } — probe-only (allocates; do not
//   call per frame in hot code, only for window.__ probes / debugging).

const ON = 1.0;
const DIM = 0.45;
const OFF = 0.0;

function hash01(n) {
  // Deterministic 0..1 hash, no Math.random. fract(sin(n*127.1)*43758.5453).
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

export function createPower({ lampLights, lampGlows, houses } = {}) {
  void houses; // accepted for call-site symmetry; intentionally untouched (daytime owns windows).
  const lights = lampLights || [];
  const glows = lampGlows || [];
  const n = Math.min(lights.length, glows.length);
  const circuits = [ON, ON, ON]; // zone factors, reused (no per-frame alloc).
  let dip = 1.0;

  function update(dt, t, wx, night) {
    void dt;
    const isNight = night > 0.05;
    // Base schedule (deterministic, dusk zoning visible, full night all ON).
    if (night >= 0.85) {
      circuits[0] = ON; circuits[1] = ON; circuits[2] = ON;
    } else if (isNight) {
      circuits[0] = ON; circuits[1] = DIM; circuits[2] = ON;
    } else {
      circuits[0] = OFF; circuits[1] = OFF; circuits[2] = OFF;
    }
    // Storm brownout: rainy only, ~12% of half-second slots, self-recovering.
    const slot = Math.floor(t * 2.0);
    dip = (wx === 'rainy' && hash01(slot) < 0.12) ? 0.25 : 1.0;
    if (!isNight) return; // daytime intensities are 0; nothing to scale.
    for (let i = 0; i < n; i++) {
      const f = circuits[i % 3] * dip;
      lights[i].intensity *= f;
      const g = glows[i];
      if (g && g.material && typeof g.material.emissiveIntensity === 'number') {
        g.material.emissiveIntensity *= f;
      } else if (g && typeof g.emissiveIntensity === 'number') {
        g.emissiveIntensity *= f; // fallback if glows carry the field directly
      }
    }
  }

  function state() {
    return { circuits: [circuits[0], circuits[1], circuits[2]], dip };
  }

  return { update, state };
}