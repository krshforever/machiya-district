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
  const c = document.createElement('canvas');
  c.width = 64; c.height = 32;
  const ctx = c.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, 32);
  grad.addColorStop(0, '#87a9c8');
  grad.addColorStop(0.48, '#f7c98b');
  grad.addColorStop(0.55, '#8a6f52');
  grad.addColorStop(1, '#3a3428');
  ctx.fillStyle = grad; ctx.fillRect(0, 0, 64, 32);
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
