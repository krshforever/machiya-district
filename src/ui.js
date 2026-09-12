// ui.js — TSUKIMORI 月森 overlay UI (DOM-only, no imports, deterministic boot)
// Contract: buildUI({ daytime, weather, cine, hudEl, audio? })
//  daytime: { state, set(s), cycle(), toggleAuto() }
//  weather: { state, setState(s) }
//  cine: { idx, mode, label, count, names[12], setMode(m), goTo(i,dur,applyMood),
//          next(), prev(), toggleAdvance(), update(dt) }
//  hudEl: the #hud div (may be null — every write guarded)
//  audio?: { setEnabled(b), setVolume(v), state() } — OPTIONAL, guard every use
export function buildUI(opts) {
  opts = opts || {};
  var daytime = opts.daytime || {};
  var weather = opts.weather || {};
  var cine = opts.cine || {};
  var hudEl = opts.hudEl || null;
  var audio = opts.audio || null;

  var TIME_KEYS = ['DAWN', 'DAY', 'GOLDEN', 'SUNSET', 'BLUE_HOUR', 'NIGHT', 'MOONLIT', 'RAIN_NIGHT', 'MIST_NIGHT'];
  var TIME_SHORT = { DAWN: 'DAWN', DAY: 'DAY', GOLDEN: 'GOLDEN', SUNSET: 'SUNSET', BLUE_HOUR: 'BLUE', NIGHT: 'NIGHT', MOONLIT: 'MOON', RAIN_NIGHT: 'RAIN', MIST_NIGHT: 'MIST' };
  var WX_KEYS = ['clear', 'windy', 'rainy', 'misty', 'snow'];
  var WX_SHORT = { clear: 'CLEAR', windy: 'WINDY', rainy: 'RAIN', misty: 'MIST', snow: 'SNOW' };
  var QUALITIES = ['low', 'medium', 'high', 'cinematic'];
  var Q_LABEL = { low: 'LOW', medium: 'MED', high: 'HIGH', cinematic: 'CINE' };
  var POST_MAP = { low: 'off', medium: 'off', high: 'off', cinematic: 'high' };
  var SEED = '20260911';

  function cur(v) { return (typeof v === 'function') ? v() : v; }
  function safeStr(v, fb) { try { return (v === undefined || v === null) ? fb : String(v); } catch (e) { return fb; } }
  function mk(tag, cls, text) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (text !== undefined && text !== null) d.textContent = text;
    return d;
  }
  function onBtn(btn, fn) {
    try {
      btn.addEventListener('click', function (ev) {
        try { ev.stopPropagation(); } catch (e) {}
        try { fn(); } catch (e) {}
      });
    } catch (e) {}
  }

  // ---- deterministic boot state (no localStorage) ----
  var smallScreen = false;
  try { smallScreen = window.innerWidth < 700; } catch (e) { smallScreen = true; }
  var collapsed = smallScreen;          // collapsed on phones, expanded on desktop
  var present = false;                  // fullscreen cinematic presentation mode
  var openSec = 'time';                 // accordion: exactly one open
  var quality = smallScreen ? 'medium' : 'high';
  var advMirror = true;                 // write-only mirror: cine exposes no getter
  var autoMirror = false;               // write-only mirror: daytime exposes no getter
  var audioMirror = false;              // fallback when audio.state() unavailable
  var savedHudDisplay = '';
  var savedCapDisplay = '';
  var lastTapT = 0;

  var isDev = false;
  try { isDev = /[?&]dev=1\b/.test(window.location.search || ''); } catch (e) { isDev = false; }

  // ---- CSS (inline <style>, like the previous file) ----
  var css = ''
    + '.tsuki-root{position:fixed;inset:0;z-index:20;pointer-events:none;font-family:system-ui,-apple-system,"Hiragino Sans","Noto Sans JP",sans-serif;color:#f2efe6;}'
    + '.tsuki-root button,.tsuki-root input,.tsuki-l1,.tsuki-l2{pointer-events:auto;}'
    + '.tsuki-l1{position:fixed;top:calc(env(safe-area-inset-top,0px) + 12px);right:calc(env(safe-area-inset-right,0px) + 12px);'
    + 'background:rgba(9,11,18,.55);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);'
    + 'border:1px solid rgba(255,255,255,.14);border-radius:14px;box-shadow:0 4px 18px rgba(0,0,0,.35);'
    + 'padding:8px 10px;min-width:172px;max-width:62vw;display:flex;align-items:center;gap:8px;}'
    + '.tsuki-title{font-size:12px;letter-spacing:.22em;font-weight:650;white-space:nowrap;}'
    + '.tsuki-title .jp{font-weight:400;opacity:.75;letter-spacing:.35em;margin-left:6px;}'
    + '#du-state{font-size:11px;letter-spacing:.08em;opacity:.85;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}'
    + '.tsuki-chev{margin-left:auto;min-width:44px;min-height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.07);color:#f2efe6;font-size:15px;line-height:1;}'
    + '.tsuki-l2{position:fixed;top:calc(env(safe-area-inset-top,0px) + 96px);right:calc(env(safe-area-inset-right,0px) + 12px);width:300px;'
    + 'max-height:calc(100vh - 130px);overflow-y:auto;-webkit-overflow-scrolling:touch;'
    + 'background:rgba(9,11,18,.72);-webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);'
    + 'border:1px solid rgba(255,255,255,.12);border-radius:16px;box-shadow:0 8px 28px rgba(0,0,0,.45);padding:6px 6px calc(env(safe-area-inset-bottom,0px) + 8px);}'
    + '.tsuki-sec{border-top:1px solid rgba(255,255,255,.08);}'
    + '.tsuki-sec:first-child{border-top:none;}'
    + '.tsuki-sec-head{display:flex;width:100%;min-height:44px;align-items:center;background:none;border:none;color:#f2efe6;font-size:11px;letter-spacing:.24em;padding:6px 10px;}'
    + '.tsuki-sec-head .dot{width:6px;height:6px;border-radius:50%;background:#c8a86a;margin-right:8px;opacity:.9;}'
    + '.tsuki-sec-head .st{margin-left:auto;opacity:.55;font-size:10px;letter-spacing:.1em;}'
    + '.tsuki-sec-body{padding:2px 8px 12px;display:none;}'
    + '.tsuki-sec.open .tsuki-sec-body{display:block;}'
    + '.tsuki-row{display:flex;flex-wrap:wrap;gap:6px;}'
    + '.tsuki-seg{flex:1 1 30%;min-height:44px;min-width:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:11px;letter-spacing:.06em;}'
    + '.tsuki-seg.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}'
    + '.tsuki-shotname{font-size:17px;letter-spacing:.04em;margin:2px 2px 0;font-weight:650;}'
    + '.tsuki-mood{font-size:11px;letter-spacing:.2em;opacity:.7;margin:2px;}'
    + '.tsuki-counter{font-size:11px;letter-spacing:.14em;opacity:.55;margin:0 2px 8px;}'
    + '.tsuki-trans{display:flex;gap:6px;margin-bottom:8px;}'
    + '.tsuki-trans button{flex:1;min-height:44px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#f2efe6;font-size:12px;}'
    + '.tsuki-present-btn{width:100%;min-height:44px;border-radius:9px;border:1px solid rgba(200,168,106,.6);background:rgba(200,168,106,.14);color:#f2efe6;font-size:11px;letter-spacing:.22em;margin-bottom:8px;}'
    + '.tsuki-l3{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:6px;}'
    + '.tsuki-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;}'
    + '.tsuki-grid button{min-height:44px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#f2efe6;font-size:11px;text-align:left;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}'
    + '.tsuki-grid button.on{background:rgba(200,168,106,.22);border-color:rgba(200,168,106,.65);}'
    + '.tsuki-track{font-size:12px;margin:2px 2px 8px;opacity:.9;}'
    + '.tsuki-vol{display:flex;align-items:center;gap:8px;margin:0 2px 6px;}'
    + '.tsuki-vol input{flex:1;min-height:44px;}'
    + '.tsuki-note{font-size:11px;line-height:1.5;opacity:.65;margin:4px 2px;font-family:ui-monospace,Menlo,monospace;}'
    + '.tsuki-about{font-size:11px;line-height:1.9;letter-spacing:.18em;opacity:.8;padding:2px;}'
    + '.tsuki-root.tsuki-present .tsuki-l1,.tsuki-root.tsuki-present .tsuki-l2{display:none;}'
    + '.tsuki-anim{transition:opacity .22s ease-out,transform .22s ease-out;}'
    + '.tsuki-dev{position:fixed;right:calc(env(safe-area-inset-right,0px) + 10px);bottom:calc(env(safe-area-inset-bottom,0px) + 10px);z-index:21;pointer-events:none;'
    + 'background:rgba(0,0,0,.72);border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:8px 10px;'
    + 'font-family:ui-monospace,Menlo,monospace;font-size:10.5px;line-height:1.65;color:#cfe3cf;white-space:pre;max-width:70vw;overflow:hidden;}'
    + '@media (max-width:700px) and (orientation:portrait){'
    + '.tsuki-l2{top:auto;bottom:0;right:0;left:0;width:auto;border-radius:16px 16px 0 0;max-height:45vh;'
    + 'padding-bottom:calc(env(safe-area-inset-bottom,0px) + 10px);}'
    + '.tsuki-l1{max-width:calc(100vw - 24px);}}'
    + '@media (max-width:700px) and (orientation:landscape){'
    + '.tsuki-l2{width:278px;max-height:72vh;top:calc(env(safe-area-inset-top,0px) + 88px);}}';
  try {
    var st = document.createElement('style');
    st.setAttribute('data-tsuki', '1');
    st.textContent = css;
    document.head.appendChild(st);
  } catch (e) {}

  // ---- root / L1 capsule ----
  var root = mk('div', 'tsuki-root tsuki-anim');
  var l1 = mk('div', 'tsuki-l1');
  var titleWrap = mk('div', null);
  var title = mk('div', 'tsuki-title', 'TSUKIMORI');
  try {
    var jp = mk('span', 'jp', '月森');
    title.appendChild(jp);
  } catch (e) {}
  var duState = mk('div', null);           // PROBE CONTRACT id (do not rename)
  try { duState.id = 'du-state'; } catch (e) {}
  titleWrap.appendChild(title);
  titleWrap.appendChild(duState);
  var chev = mk('button', 'tsuki-chev', '▾');
  try { chev.setAttribute('aria-label', 'toggle panel'); } catch (e) {}
  l1.appendChild(titleWrap);
  l1.appendChild(chev);
  root.appendChild(l1);

  // ---- L2 panel + accordion sections ----
  var panel = mk('div', 'tsuki-l2');
  root.appendChild(panel);
  var bodies = {};
  var headStates = {};

  function addSection(key, headLabel) {
    var sec = mk('div', 'tsuki-sec');
    var head = mk('button', 'tsuki-sec-head');
    try { head.setAttribute('aria-expanded', 'false'); } catch (e) {}
    var dot = mk('span', 'dot');
    var lab = mk('span', null, headLabel);
    var stx = mk('span', 'st', '');
    head.appendChild(dot); head.appendChild(lab); head.appendChild(stx);
    var body = mk('div', 'tsuki-sec-body');
    sec.appendChild(head); sec.appendChild(body); panel.appendChild(sec);
    bodies[key] = body; headStates[key] = { sec: sec, head: head, tag: stx };
    onBtn(head, function () { setOpen(openSec === key ? '' : key); });
    return body;
  }
  function setOpen(key) {
    openSec = key;
    try {
      for (var k in headStates) {
        if (!Object.prototype.hasOwnProperty.call(headStates, k)) continue;
        var open = (k === openSec);
        var h = headStates[k];
        h.sec.className = 'tsuki-sec' + (open ? ' open' : '');
        try { h.head.setAttribute('aria-expanded', open ? 'true' : 'false'); } catch (e) {}
      }
    } catch (e) {}
  }

  // TIME — 9 segmented buttons
  var timeBody = addSection('time', 'TIME');
  var timeRow = mk('div', 'tsuki-row');
  timeBody.appendChild(timeRow);
  var timeBtns = {};
  TIME_KEYS.forEach(function (k) {
    var b = mk('button', 'tsuki-seg', TIME_SHORT[k] || k);
    try { b.title = k; } catch (e) {}
    timeRow.appendChild(b);
    timeBtns[k] = b;
    onBtn(b, function () { try { daytime.set(k); } catch (e) {} refresh(); });
  });

  // WEATHER — 4 segmented buttons
  var wxBody = addSection('weather', 'WEATHER');
  var wxRow = mk('div', 'tsuki-row');
  wxBody.appendChild(wxRow);
  var wxBtns = {};
  WX_KEYS.forEach(function (k) {
    var b = mk('button', 'tsuki-seg', WX_SHORT[k] || k.toUpperCase());
    wxRow.appendChild(b);
    wxBtns[k] = b;
    onBtn(b, function () { try { weather.setState(k); } catch (e) {} refresh(); });
  });

  // CINEMATIC — transport + shot surface (L3)
  var cineBody = addSection('cine', 'CINEMATIC');
  var shotName = mk('div', 'tsuki-shotname', '—');
  var moodLine = mk('div', 'tsuki-mood', '—');
  var counter = mk('div', 'tsuki-counter', '—');
  cineBody.appendChild(shotName); cineBody.appendChild(moodLine); cineBody.appendChild(counter);
  var trans = mk('div', 'tsuki-trans');
  var bPrev = mk('button', null, '◀');
  var bAdv = mk('button', null, '❚❚ ADV');
  var bNext = mk('button', null, '▶');
  var bMode = mk('button', null, 'MODE');
  var bAuto = mk('button', null, 'AUTO');
  [bPrev, bAdv, bNext, bMode, bAuto].forEach(function (b) { trans.appendChild(b); });
  cineBody.appendChild(trans);
  var bPresent = mk('button', 'tsuki-present-btn', 'ENTER CINEMATIC');
  cineBody.appendChild(bPresent);
  var l3 = mk('div', 'tsuki-l3');
  var grid = mk('div', 'tsuki-grid');
  l3.appendChild(grid);
  cineBody.appendChild(l3);
  var shotBtns = [];
  function shotNames() {
    try {
      if (cine && Object.prototype.toString.call(cine.names) === '[object Array]' && cine.names.length) return cine.names;
    } catch (e) {}
    var fb = [];
    for (var i = 0; i < 12; i++) fb.push('SHOT ' + ('0' + (i + 1)).slice(-2));
    return fb;
  }
  onBtn(bPrev, function () { try { cine.prev(); } catch (e) {} refresh(); });
  onBtn(bNext, function () { try { cine.next(); } catch (e) {} refresh(); });
  onBtn(bAdv, function () { try { cine.toggleAdvance(); } catch (e) {} advMirror = !advMirror; refresh(); });
  onBtn(bMode, function () {
    try { cine.setMode(cur(cine.mode) === 'cine' ? 'free' : 'cine'); } catch (e) {}
    refresh();
  });
  onBtn(bAuto, function () { try { daytime.toggleAuto(); } catch (e) {} autoMirror = !autoMirror; refresh(); });
  onBtn(bPresent, function () { setPresent(!present); });
  function rebuildShots() {
    try {
      grid.textContent = '';
      shotBtns = [];
      var names = shotNames();
      for (var i = 0; i < names.length; i++) {
        (function (idx, nm) {
          var b = mk('button', null, ('0' + (idx + 1)).slice(-2) + ' · ' + nm);
          grid.appendChild(b);
          shotBtns.push(b);
          onBtn(b, function () {
            try { cine.setMode('cine'); } catch (e) {}
            try { cine.goTo(idx, 2.5, true); } catch (e) {}   // preserved click behavior
            refresh();
          });
        })(i, safeStr(names[i], 'SHOT'));
      }
    } catch (e) {}
  }
  rebuildShots();

  // AUDIO — fully guarded, works when audio is undefined
  var auBody = addSection('audio', 'AUDIO');
  var trackLine = mk('div', 'tsuki-track', '♫ Suzume');
  auBody.appendChild(trackLine);
  var auRow = mk('div', 'tsuki-row');
  var auToggle = mk('button', 'tsuki-seg', 'MUSIC OFF');
  auRow.appendChild(auToggle);
  auBody.appendChild(auRow);
  var volWrap = mk('div', 'tsuki-vol');
  var volLab = mk('span', null, 'VOL');
  try { volLab.style.fontSize = '11px'; volLab.style.opacity = '.6'; } catch (e) {}
  var vol = mk('input', null);
  try { vol.type = 'range'; vol.min = '0'; vol.max = '100'; vol.value = '80'; vol.setAttribute('aria-label', 'music volume'); } catch (e) {}
  volWrap.appendChild(volLab); volWrap.appendChild(vol);
  auBody.appendChild(volWrap);
  var auNote = mk('div', 'tsuki-note', '');
  auBody.appendChild(auNote);
  if (!audio) {
    try { auToggle.disabled = true; vol.disabled = true; } catch (e) {}
    auNote.textContent = 'audio offline — running silent';
  }
  onBtn(auToggle, function () {
    if (!audio) return;
    var next = !audioMirror;
    try {
      var s0 = audio.state ? audio.state() : null;
      if (s0 && typeof s0.enabled === 'boolean') next = !s0.enabled;
    } catch (e) {}
    try { audio.setEnabled(next); } catch (e) {}
    audioMirror = next;
    refresh();
  });
  try {
    vol.addEventListener('input', function () {
      if (!audio) return;
      try {
        var v = parseFloat(vol.value) / 100;
        if (!(v >= 0)) v = 0; if (v > 1) v = 1;
        audio.setVolume(v);
      } catch (e) {}
    });
  } catch (e) {}
  // Local track picker: play the visitor's own mp3/m4a/ogg/wav through the
  // diegetic radio. File never leaves this browser (object URL only).
  var fileBtn = mk('button', 'tsuki-seg', '+ ADD TRACK');
  try { fileBtn.title = 'Play your own audio file through the village radio'; } catch (e) {}
  auRow.appendChild(fileBtn);
  var fileInput = null;
  try {
    fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*,.mp3,.m4a,.ogg,.wav,.flac';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    fileInput.addEventListener('change', function () {
      try {
        var f = fileInput.files && fileInput.files[0];
        if (!f || !audio || typeof audio.loadCustom !== 'function') return;
        var url = URL.createObjectURL(f);
        if (audio.loadCustom(url, f.name.replace(/\.[^.]+$/, ''))) {
          try { audio.setEnabled(true); } catch (e) {}
          audioMirror = true;
        }
      } catch (e) {}
      try { fileInput.value = ''; } catch (e) {}
      refresh();
    });
  } catch (e) { fileInput = null; }
  onBtn(fileBtn, function () {
    if (!audio) return;
    try { if (fileInput) fileInput.click(); } catch (e) {}
  });

  // QUALITY — dispatches event (main owns renderer) + syncs window.__post if present
  var qBody = addSection('quality', 'QUALITY');
  var qRow = mk('div', 'tsuki-row');
  qBody.appendChild(qRow);
  var qBtns = {};
  QUALITIES.forEach(function (q) {
    var b = mk('button', 'tsuki-seg', Q_LABEL[q]);
    qRow.appendChild(b);
    qBtns[q] = b;
    onBtn(b, function () { setQuality(q); });
  });
  function setQuality(q) {
    quality = q;
    try { window.dispatchEvent(new CustomEvent('tsuki-quality', { detail: q })); } catch (e) {}
    try {
      if (window.__post && typeof window.__post.setQuality === 'function') window.__post.setQuality(POST_MAP[q] || 'off');
    } catch (e) {}
    refresh();
  }

  // ABOUT — minimal
  var abBody = addSection('about', 'ABOUT');
  var ab = mk('div', 'tsuki-about', 'TSUKIMORI 月森 / THE MOON FOREST / LGCY STUDIOS / LGCY AI');
  abBody.appendChild(ab);
  // Version line + behind/current check (guarded, once, 8s timeout).
  // Compares the baked build hash against latest main on GitHub.
  var verLine = mk('div', 'tsuki-note', 'BUILD ' + buildId + ' · checking…');
  abBody.appendChild(verLine);
  try {
    var verCtl = null;
    try { verCtl = new AbortController(); } catch (e) { verCtl = null; }
    var verTo = setTimeout(function () { try { if (verCtl) verCtl.abort(); } catch (e) {} }, 8000);
    var verOpts = verCtl ? { signal: verCtl.signal } : {};
    fetch('https://api.github.com/repos/krshforever/tsukimori/commits/main?per_page=1', verOpts)
      .then(function (r) { try { clearTimeout(verTo); } catch (e) {} return r.ok ? r.json() : null; })
      .then(function (j) {
        var latest = (j && j.sha) ? String(j.sha).slice(0, 7) : null;
        var cur = (buildId.split(' ')[0] || '').toLowerCase();
        var msg;
        if (!latest) msg = 'BUILD ' + buildId + ' · ● OFFLINE';
        else if (cur && latest.toLowerCase() === cur) msg = 'BUILD ' + buildId + ' · ● CURRENT';
        else msg = 'BUILD ' + buildId + ' · ● UPDATE AVAILABLE (' + latest + ')';
        try { verLine.textContent = msg; } catch (e) {}
        try { window.__updateCheck = { latest: latest, current: cur, build: buildId }; } catch (e) {}
      })
      .catch(function () {
        try { clearTimeout(verTo); } catch (e) {}
        try { verLine.textContent = 'BUILD ' + buildId + ' · ● OFFLINE'; } catch (e) {}
        try { window.__updateCheck = { latest: null, current: null, build: buildId }; } catch (e) {}
      });
  } catch (e) {
    try { verLine.textContent = 'BUILD ' + buildId; } catch (ex) {}
  }

  // Build stamp baked at build time via vite define (falls back to 'dev').
  // Powers the ABOUT version line + dev overlay + behind/current check.
  var buildId = 'dev';
  try { if (typeof __BUILD_ID__ !== 'undefined' && __BUILD_ID__) buildId = String(__BUILD_ID__); } catch (e) {}

  // ---- dev overlay (?dev=1 only, read once) ----
  var devPre = null;
  if (isDev) {
    try {
      devPre = mk('pre', 'tsuki-dev', 'dev…');
      document.body.appendChild(devPre);
    } catch (e) { devPre = null; }
  }

  // ---- present (fullscreen cinematic) mode ----
  function setPresent(p) {
    present = !!p;
    try {
      if (present) {
        try {
          var cap = document.getElementById('caption');
          if (cap) { savedCapDisplay = cap.style.display; cap.style.display = 'none'; }
        } catch (e) {}
        try {
          if (hudEl) { savedHudDisplay = hudEl.style.display; hudEl.style.display = 'none'; }
        } catch (e) {}
        root.className = 'tsuki-root tsuki-anim tsuki-present';
        try { bPresent.textContent = 'EXIT CINEMATIC'; } catch (e) {}
      } else {
        try {
          var cap2 = document.getElementById('caption');
          if (cap2) cap2.style.display = savedCapDisplay || '';
        } catch (e) {}
        try { if (hudEl) hudEl.style.display = savedHudDisplay || ''; } catch (e) {}
        root.className = 'tsuki-root tsuki-anim';
        try { bPresent.textContent = 'ENTER CINEMATIC'; } catch (e) {}
      }
    } catch (e) {}
    refresh();
  }
  function toggleCollapsed() {
    collapsed = !collapsed;
    try {
      panel.style.display = collapsed ? 'none' : '';
      chev.textContent = collapsed ? '▸' : '▾';
    } catch (e) {}
  }
  onBtn(chev, toggleCollapsed);

  function onDbl(e) {
    try {
      if (e && e.target && e.target.closest) {
        var t = e.target;
        if (t.closest('.tsuki-l2') || t.closest('input') || t.closest('select') || t.closest('textarea')) return;
      }
    } catch (ex) {}
    setPresent(!present);
  }
  try { window.addEventListener('dblclick', onDbl); } catch (e) {}
  try {
    window.addEventListener('touchend', function (e) {
      try {
        var now = Date.now();
        if (now - lastTapT < 350) { lastTapT = 0; onDbl(e); } else { lastTapT = now; }
      } catch (ex) {}
    }, { passive: true });
  } catch (e) {}
  try {
    document.addEventListener('keydown', function (e) {
      try { if (e && e.key === 'Escape' && present) setPresent(false); } catch (ex) {}
    });
  } catch (e) {}

  // ---- refresh (250 ms cadence; never throws; safe while hidden) ----
  function timeKey() { try { return safeStr(cur(daytime.state), 'NIGHT'); } catch (e) { return 'NIGHT'; } }
  function wxKey() { try { return safeStr(cur(weather.state), 'clear'); } catch (e) { return 'clear'; } }
  function refresh() {
    try {
      var tk = timeKey();
      var wk = wxKey();
      var tShort = TIME_SHORT[tk] || tk;
      var wShort = WX_SHORT[wk] || String(wk).toUpperCase();
      var label = 'FREE';
      try { label = safeStr(cur(cine.label), 'FREE') || 'FREE'; } catch (e) {}
      var idx = 0, count = shotNames().length;
      try { idx = parseInt(cine.idx, 10); if (!(idx >= 0)) idx = 0; } catch (e) {}
      try { count = parseInt(cine.count, 10) || shotNames().length; } catch (e) {}
      var nn = ('0' + (idx + 1)).slice(-2);
      var cc = ('0' + count).slice(-2);

      // PROBE #du-state: must contain "TIME · WEATHER · LABEL"
      try { duState.textContent = tShort + ' · ' + wShort + ' · ' + label; } catch (e) {}
      // PROBE #hud: must keep receiving text (even display:none — textContent still writes).
      // Perf numbers appended for headless verification (harmless on device).
      try {
        var perfTxt = '';
        try {
          var pp = window.__perf ? window.__perf() : null;
          if (pp) perfTxt = ' <' + pp.calls + 'c ' + pp.triangles + 't ' + pp.fps + 'f>';
        } catch (e) {}
        if (hudEl) hudEl.textContent = 'TSUKIMORI 月森 — ' + tShort + ' · ' + wShort + ' · ' + label + ' | SHOT ' + nn + '/' + cc + perfTxt;
      } catch (e) {}

      try {
        var names = shotNames();
        shotName.textContent = safeStr(names[idx] || label, label);
        moodLine.textContent = tShort + ' · ' + wShort;
        counter.textContent = 'SHOT ' + nn + '/' + cc;
      } catch (e) {}
      try {
        for (var i = 0; i < shotBtns.length; i++) {
          shotBtns[i].className = (i === idx) ? 'on' : '';
        }
      } catch (e) {}
      try {
        for (var k in timeBtns) {
          if (Object.prototype.hasOwnProperty.call(timeBtns, k)) timeBtns[k].className = 'tsuki-seg' + (k === tk ? ' on' : '');
        }
        for (var w in wxBtns) {
          if (Object.prototype.hasOwnProperty.call(wxBtns, w)) wxBtns[w].className = 'tsuki-seg' + (w === wk ? ' on' : '');
        }
        for (var q in qBtns) {
          if (Object.prototype.hasOwnProperty.call(qBtns, q)) qBtns[q].className = 'tsuki-seg' + (q === quality ? ' on' : '');
        }
      } catch (e) {}
      try {
        var md = safeStr(cur(cine.mode), '');
        bMode.textContent = 'MODE ' + (md ? md.toUpperCase() : '—');
        bAdv.textContent = (advMirror ? '❚❚' : '▶') + ' ADV';
        bAuto.textContent = 'AUTO ' + (autoMirror ? 'ON' : 'OFF');
      } catch (e) {}
      try {
        if (headStates.time) headStates.time.tag.textContent = tShort;
        if (headStates.weather) headStates.weather.tag.textContent = wShort;
        if (headStates.cine) headStates.cine.tag.textContent = nn + '/' + cc;
        if (headStates.quality) headStates.quality.tag.textContent = Q_LABEL[quality] || '';
      } catch (e) {}

      // AUDIO (all guarded; audio may be undefined)
      try {
        if (audio && typeof audio.state === 'function') {
          var s = null;
          try { s = audio.state(); } catch (e2) { s = null; }
          if (s) {
            if (typeof s.enabled === 'boolean') audioMirror = s.enabled;
            trackLine.textContent = '♫ ' + safeStr(s.track, 'Suzume') + (s.playing ? ' — PLAYING' : '');
            auToggle.textContent = audioMirror ? 'MUSIC ON' : 'MUSIC OFF';
            auToggle.className = 'tsuki-seg' + (audioMirror ? ' on' : '');
            auNote.textContent = s.missing ? 'drop audio/suzume.mp3 into public/audio/' : '';
          }
        } else if (audio) {
          auToggle.textContent = audioMirror ? 'MUSIC ON' : 'MUSIC OFF';
          auNote.textContent = '';
        }
      } catch (e) {}

      // DEV overlay (never part of public UI)
      if (isDev && devPre) {
        var lines = [];
        try {
          var fps = 'n/a', calls = 'n/a', tris = 'n/a';
          try {
            var p = (typeof window.__perf === 'function') ? window.__perf() : window.__perf;
            if (p) {
              if (p.fps !== undefined) fps = String(p.fps);
              if (p.calls !== undefined) calls = String(p.calls);
              if (p.tris !== undefined) tris = String(p.tris);
              if (p.draws !== undefined && calls === 'n/a') calls = String(p.draws);
              if (p.triangles !== undefined && tris === 'n/a') tris = String(p.triangles);
            }
          } catch (e2) {}
          var qcur = 'n/a';
          try {
            if (window.__post) {
              if (typeof window.__post.quality === 'string') qcur = window.__post.quality;
              else if (typeof window.__post.getQuality === 'function') qcur = String(window.__post.getQuality());
              else if (typeof window.__post.current === 'string') qcur = window.__post.current;
            }
          } catch (e2) {}
          var campos = 'n/a', camtgt = 'n/a';
          try {
            if (window.__cam) {
              if (window.__cam.pos && window.__cam.pos.length >= 3) {
                campos = window.__cam.pos[0].toFixed(1) + ',' + window.__cam.pos[1].toFixed(1) + ',' + window.__cam.pos[2].toFixed(1);
              }
              if (window.__cam.tgt && window.__cam.tgt.length >= 3) {
                camtgt = window.__cam.tgt[0].toFixed(1) + ',' + window.__cam.tgt[1].toFixed(1) + ',' + window.__cam.tgt[2].toFixed(1);
              }
            }
          } catch (e2) {}
          lines.push('FPS ' + fps + '  calls ' + calls + '  tris ' + tris);
          try {
            var uc = null;
            try { uc = window.__updateCheck || null; } catch (e) {}
            var ust = !uc ? '' : (!uc.latest ? 'offline' : (uc.latest.toLowerCase() === String(uc.current || '').toLowerCase() ? 'current' : 'BEHIND(' + uc.latest + ')'));
            lines.push('build ' + buildId + (ust ? '  ' + ust : ''));
          } catch (e) { try { lines.push('build ' + buildId); } catch (ex) {} }
          lines.push('gl WebGL2  post ' + qcur + '  seed ' + SEED);
          lines.push('cam ' + campos + '  tgt ' + camtgt);
          lines.push(tShort + ' · ' + wShort + ' · ' + label);
          devPre.textContent = lines.join('\n');
        } catch (e2) {}
      }
    } catch (e) {}
  }

  try { document.body.appendChild(root); } catch (e) {}
  try {
    panel.style.display = collapsed ? 'none' : '';
    chev.textContent = collapsed ? '▸' : '▾';
  } catch (e) {}
  setOpen(openSec);
  refresh();
  var timer = null;
  try { timer = setInterval(refresh, 250); } catch (e) {}

  function destroy() {
    try { if (timer) clearInterval(timer); } catch (e) {}
    try { window.removeEventListener('dblclick', onDbl); } catch (e) {}
    try { if (root && root.parentNode) root.parentNode.removeChild(root); } catch (e) {}
    try { if (devPre && devPre.parentNode) devPre.parentNode.removeChild(devPre); } catch (e) {}
  }

  return { root: root, refresh: refresh, destroy: destroy, setQuality: setQuality, setPresent: setPresent };
}