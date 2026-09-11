// src/ui.js — tiny collapsible washi panel (bottom-left) + HUD line. Georgia/serif.
export function buildUI({ daytime, weather, cine, hudEl }) {
  const root = document.createElement('div');
  root.id = 'district-ui';
  root.innerHTML = `
  <style>
    #district-ui{position:fixed;left:10px;bottom:10px;z-index:20;font-family:Georgia,serif;
      background:rgba(16,14,12,.72);color:#e9e2d2;border:1px solid rgba(233,226,210,.25);
      border-radius:8px;padding:8px 10px;font-size:12px;max-width:230px;backdrop-filter:blur(4px)}
    #district-ui button{background:rgba(233,226,210,.1);color:#e9e2d2;border:1px solid rgba(233,226,210,.3);
      border-radius:5px;font-family:inherit;font-size:11px;padding:2px 7px;margin:1px;cursor:pointer}
    #district-ui button.on{background:#c9a86a;color:#191512;border-color:#c9a86a}
    #district-ui .row{margin:3px 0} #district-ui .hd{opacity:.75;letter-spacing:.08em;font-size:10px}
    #district-ui.min .bd{display:none}
  </style>
  <div class="hd">TSUKIMORI 月森 — <span id="du-state">DAY · clear · orbit</span> <button id="du-min">–</button></div>
  <div class="bd">
    <div class="row" id="du-time"></div>
    <div class="row" id="du-wx"></div>
    <div class="row" id="du-shots"></div>
    <div class="row"><button id="du-mode">cine</button><button id="du-adv">auto-advance: off</button><button id="du-auto">day-cycle: off</button></div>
  </div>`;
  document.body.appendChild(root);
  const mk = (parent, label, fn) => {
    const b = document.createElement('button'); b.textContent = label;
    b.onclick = () => fn(b); parent.appendChild(b); return b;
  };
  const timeRow = root.querySelector('#du-time'), wxRow = root.querySelector('#du-wx'), shRow = root.querySelector('#du-shots');
  const st = root.querySelector('#du-state');
  const refresh = () => {
    st.textContent = `${daytime.state} · ${weather.state} · ${cine.label}`;
    const p = window.__perf?.();
    if (hudEl) hudEl.innerHTML = p
      ? `${p.calls} calls · ${p.triangles.toLocaleString('en-US')} tris · ${p.fps}fps<br>${daytime.state} · ${weather.state} · ${cine.label}`
      : `${daytime.state} · ${weather.state} · ${cine.label}`;
  };
  [['DAWN', 'DAWN'], ['DAY', 'DAY'], ['GOLDEN', 'GOLDEN'], ['SUNSET', 'SUNSET'], ['BLUE_HOUR', 'BLUE'], ['NIGHT', 'NIGHT'], ['MOONLIT', 'MOON'], ['RAIN_NIGHT', 'RAIN'], ['MIST_NIGHT', 'MIST']].forEach(([key, label]) => mk(timeRow, label, (b) => { daytime.set(key); refresh(); }));
  ['clear', 'windy', 'rainy', 'misty'].forEach(s => mk(wxRow, s, () => { weather.setState(s); refresh(); }));
  const shotCount = (cine && cine.count) || 10;
  for (let i = 0; i < shotCount; i++) mk(shRow, String(i + 1).padStart(2, '0'), () => { cine.setMode('cine'); cine.goTo(i, 2.5, true); refresh(); });
  root.querySelector('#du-min').onclick = () => root.classList.toggle('min');
  root.querySelector('#du-mode').onclick = (e) => {
    const m = cine.mode === 'cine' ? 'orbit' : 'cine'; cine.setMode(m);
    e.target.textContent = m === 'cine' ? 'orbit' : 'cine'; refresh();
  };
  root.querySelector('#du-adv').onclick = (e) => {
    const on = cine.toggleAdvance(); e.target.textContent = `auto-advance: ${on ? 'on' : 'off'}`; e.target.classList.toggle('on', on);
  };
  root.querySelector('#du-auto').onclick = (e) => {
    const on = daytime.toggleAuto(); e.target.textContent = `day-cycle: ${on ? 'on' : 'off'}`; e.target.classList.toggle('on', on);
  };
  // post-quality cycler (guarded; window.__post set by main.js when post.js loads)
  {
    const qb = document.createElement('button');
    qb.id = 'du-post';
    const paint = () => { qb.textContent = 'POST ' + ((window.__post && window.__post.quality) || 'off').toUpperCase(); };
    paint();
    qb.onclick = () => {
      try {
        const cur = (window.__post && window.__post.quality) || 'off';
        const nxt = cur === 'off' ? 'low' : cur === 'low' ? 'high' : 'off';
        if (window.__post) window.__post.setQuality(nxt);
      } catch (e) { /* guarded */ }
      paint();
    };
    root.querySelector('#du-shots').after(qb);
    setInterval(paint, 2000);
  }
  setInterval(refresh, 500);
  return { refresh };
}
