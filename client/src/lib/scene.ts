import * as THREE from "three";

export function initScene(canvas: HTMLCanvasElement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create a sphere geometry
  const geometry = new THREE.SphereGeometry(2, 64, 64);
  const material = new THREE.MeshPhongMaterial({
    color: 0x3498db,
    wireframe: true,
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight);

  camera.position.z = 5;

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener("resize", handleResize);

  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.001;
    sphere.rotation.y += 0.002;
    renderer.render(scene, camera);
  }

  animate();

  return {
    cleanup: () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    },
  };
}
