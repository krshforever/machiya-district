// Isolated WebGPU prototype — reuses REAL Tsukimori builders, touches nothing else.
// NOT referenced by index.html: excluded from the production bundle by construction.
// Open via vite DEV server only: http://127.0.0.1:5173/proto/webgpu.html
import * as THREE from 'three';
import WebGPURenderer from 'three/addons/renderers/webgpu/WebGPURenderer.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildMaterials } from '../src/materials.js';
import { setSharedM, generateHouse } from '../src/houses.js';
import { buildBambooCluster, buildMapleVar } from '../src/vegetation.js';
import { buildPond } from '../src/pond.js';

const report = { hasNavigatorGPU: !!navigator.gpu, backend: 'unknown', errors: [] };
window.addEventListener('error', (e) => report.errors.push(String(e.message)));
window.__proto = report;

const renderer = new WebGPURenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
document.getElementById('app').appendChild(renderer.domElement);
// Backend detection: r160 picks WebGPUBackend iff WebGPU.isAvailable(),
// else WebGLBackend + console warning. The backend instance is exposed here:
try {
  report.backend = renderer.backend?.constructor?.name || renderer.backend?.isWebGPUBackend === true
    ? String(renderer.backend?.constructor?.name)
    : 'unknown';
  report.isWebGPUBackend = !!renderer.backend?.isWebGPUBackend;
} catch (e) { report.errors.push('backend-probe: ' + e.message); }

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1220); // flat color: sky ShaderMaterial is GLSL-only (migration item #1)
scene.fog = new THREE.Fog(0x0b1220, 26, 62);

const M = buildMaterials();
setSharedM(M);

// 1 parametric house (real generator) + hero-ish params
const house = generateHouse({ seed: 7, w: 7, d: 6, wallH: 3.1, roofType: 'kirizuma', pitch: 30, facadeCols: 4, doorSide: 1, engawa: 0.9, woodTone: 0.4, age: 0.5, name: 'proto-house' });
scene.add(house.group);

// ground: soil base + one street strip (PBR response test surface)
{
  const soil = new THREE.Mesh(new THREE.PlaneGeometry(70, 70),
    new THREE.MeshStandardMaterial({ color: 0x5c5145, roughness: 0.95 }));
  soil.rotation.x = -Math.PI / 2; soil.receiveShadow = true; scene.add(soil);
  const street = new THREE.Mesh(new THREE.PlaneGeometry(30, 3),
    new THREE.MeshStandardMaterial({ color: 0x8f8a7d, roughness: 0.85 }));
  street.rotation.x = -Math.PI / 2; street.position.set(0, 0.02, 7); street.receiveShadow = true; scene.add(street);
}

const bamboo = buildBambooCluster(M, 3, -4, -4);
scene.add(bamboo);
const maple = buildMapleVar(M, 4, 1.2, 0.7, 6, 4);
maple.position.set(6, 0, 4);
scene.add(maple);
const pond = buildPond(M);
pond.group.position.set(-13.5, 0, 7); // same relocation as the village
scene.add(pond.group);

// night lighting: cool key + 2 warm lantern points (same recipe as the village)
const moon = new THREE.DirectionalLight(0x9db8e8, 0.5);
moon.position.set(-30, 25, -40);
moon.castShadow = true;
moon.shadow.mapSize.set(2048, 2048);
moon.shadow.camera.left = -15; moon.shadow.camera.right = 15;
moon.shadow.camera.top = 15; moon.shadow.camera.bottom = -15;
moon.shadow.camera.near = 10; moon.shadow.camera.far = 120;
moon.shadow.bias = -0.0004; moon.shadow.normalBias = 0.03;
scene.add(moon, moon.target);
scene.add(new THREE.HemisphereLight(0x24305c, 0x0a0c12, 0.22));
for (const [x, z] of [[-3, 6], [4, 8]]) {
  const pl = new THREE.PointLight(0xffbe6e, 14, 12, 2);
  pl.position.set(x, 3.2, z);
  scene.add(pl);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8),
    new THREE.MeshStandardMaterial({ color: 0x555044, emissive: 0xffc06a, emissiveIntensity: 2.2 }));
  bulb.position.set(x, 3.2, z);
  scene.add(bulb);
}

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.3, 160);
camera.position.set(11, 7, 13);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1.5, 0);
controls.update();
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const hud = document.getElementById('hud');
let frames = 0;
function animate() {
  requestAnimationFrame(animate);
  const t = frames * (1 / 30);
  pond.update(t);
  controls.update();
  renderer.render(scene, camera);
  frames++;
  if (frames === 30) {
    hud.innerHTML = `backend&nbsp; ${report.backend}<br>webgpu&nbsp; ${report.isWebGPUBackend}<br>` +
      `calls&nbsp; ${renderer.info.render.calls}<br>tris&nbsp; ${renderer.info.render.triangles}<br>` +
      `errors&nbsp; ${report.errors.length}`;
    console.log('PROTO-REPORT ' + JSON.stringify({
      backend: report.backend, isWebGPUBackend: report.isWebGPUBackend,
      calls: renderer.info.render.calls, tris: renderer.info.render.triangles,
      errors: report.errors,
    }));
  }
}
animate();
