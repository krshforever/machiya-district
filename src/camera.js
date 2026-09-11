import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Opening cinematic 3/4 exterior framing; damped orbit, zoom limits,
// polar clamp keeps the camera above ground.
export function buildCamera(renderer) {
  const camera = new THREE.PerspectiveCamera(
    45, window.innerWidth / window.innerHeight, 0.1, 200
  );
  camera.position.set(12.5, 7.0, 15.5);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 2.2, 1.0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 5;
  controls.maxDistance = 48; // cinematic establishing shot sits at ~39
  controls.maxPolarAngle = 1.45;   // ~83°, never below ground
  controls.update();

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onResize);

  return { camera, controls, onResize };
}
