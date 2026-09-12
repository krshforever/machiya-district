import * as THREE from 'three';

// Cinematic late-afternoon: warm raking sun, hemisphere fill,
// gradient sky dome, warm distance fog, tiny procedural environment
// map so the pond (and tiles) have something to reflect.
export function buildLighting(scene, renderer) {
  // --- sky dome: warm horizon -> soft blue zenith ---
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new THREE.Color(0x7fa8c9) },
      mid: { value: new THREE.Color(0xf2c193) },
      bot: { value: new THREE.Color(0xe0a071) }
    },
    vertexShader: `
      varying vec3 vP;
      void main() {
        vP = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 top; uniform vec3 mid; uniform vec3 bot;
      varying vec3 vP;
      void main() {
        float h = normalize(vP).y;
        vec3 c = h > 0.0
          ? mix(mid, top, pow(min(h * 1.6, 1.0), 0.7))
          : mix(mid, bot, min(-h * 3.0, 1.0));
        gl_FragColor = vec4(c, 1.0);
      }`
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(70, 24, 16), skyMat);
  scene.add(sky);

  // --- fog: warm haze ---
  scene.fog = new THREE.Fog(0xf0c193, 26, 62);

  // --- sun: warm directional, shadow-mapped, tuned frustum ---
  const sun = new THREE.DirectionalLight(0xffd9a8, 3.0);
  sun.position.set(14, 8.5, 12);
  sun.target.position.set(0, 1.2, 0);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -15; sun.shadow.camera.right = 15;
  sun.shadow.camera.top = 15; sun.shadow.camera.bottom = -15;
  sun.shadow.camera.near = 10; sun.shadow.camera.far = 120; // daytime orbits sun at r=60
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  scene.add(sun, sun.target);

  // --- soft fill: hemisphere + faint warm bounce ---
  const hemi = new THREE.HemisphereLight(0xbcd3e8, 0x8a6f52, 0.6);
  scene.add(hemi);
  const bounce = new THREE.DirectionalLight(0xffcf9e, 0.35);
  bounce.position.set(-8, 4, -6);
  scene.add(bounce);

  // --- procedural environment (for pond/metal reflections) ---
  // REMASTERED-A: same 64x32 canvas + PMREM path, richer painting — sun glow
  // at the true sun azimuth, warm horizon band, mottled ground bounce.
  // Every MeshStandardMaterial's PBR response keys off this; cost is zero
  // (one 64x32 canvas at boot, identical runtime).
  const c = document.createElement('canvas');
  c.width = 64; c.height = 32;
  const ctx = c.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, 32);
  grad.addColorStop(0, '#6f96bd');
  grad.addColorStop(0.34, '#a8b8c4');
  grad.addColorStop(0.46, '#ffd9a0');
  grad.addColorStop(0.52, '#c08a5e');
  grad.addColorStop(0.60, '#6b5a44');
  grad.addColorStop(1, '#2e2a22');
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 64, 32);
  // sun glow: sun dir (14,8.5,12) → u≈0.64 → x≈41, elevation row ≈9
  const sg = ctx.createRadialGradient(41, 9, 0, 41, 9, 11);
  sg.addColorStop(0, 'rgba(255,244,220,0.95)');
  sg.addColorStop(0.4, 'rgba(255,214,150,0.45)');
  sg.addColorStop(1, 'rgba(255,200,130,0)');
  ctx.fillStyle = sg; ctx.fillRect(0, 0, 64, 32);
  // ground-bounce mottling (deterministic dabs, no RNG stream impact — local LCG)
  let _es = 1234567;
  const _er = () => (_es = (_es * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  for (let i = 0; i < 40; i++) {
    const x = _er() * 64, y = 18 + _er() * 14, r = 1 + _er() * 3;
    const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
    const warm = _er() < 0.5;
    g2.addColorStop(0, warm ? 'rgba(150,115,80,0.25)' : 'rgba(50,52,48,0.25)');
    g2.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g2; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }
  const envTex = new THREE.CanvasTexture(c);
  envTex.mapping = THREE.EquirectangularReflectionMapping;
  envTex.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envRT = pmrem.fromEquirectangular(envTex);
  scene.environment = envRT.texture;
  envTex.dispose();
  pmrem.dispose();

  return { sun, hemi, skyMat };
}
