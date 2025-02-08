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

  // Create more intense particle system
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 5000; // Increased particle count
  const posArray = new Float32Array(particlesCount * 3);
  const colorsArray = new Float32Array(particlesCount * 3);

  for(let i = 0; i < particlesCount * 3; i += 3) {
    // Create a more dramatic spread of particles
    posArray[i] = (Math.random() - 0.5) * 15;
    posArray[i + 1] = (Math.random() - 0.5) * 15;
    posArray[i + 2] = (Math.random() - 0.5) * 15;

    // Add varying colors
    colorsArray[i] = Math.random() * 0.5 + 0.5; // R
    colorsArray[i + 1] = Math.random() * 0.3; // G
    colorsArray[i + 2] = Math.random() * 0.5 + 0.5; // B
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.01,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  camera.position.z = 5;

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  function onMouseMove(event: MouseEvent) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  window.addEventListener('mousemove', onMouseMove);

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener("resize", handleResize);

  let frame = 0;
  function animate() {
    requestAnimationFrame(animate);
    frame++;

    // Smooth mouse movement
    targetX += (mouseX - targetX) * 0.1;
    targetY += (mouseY - targetY) * 0.1;

    // Dynamic particle movement
    particlesMesh.rotation.y += 0.002;
    particlesMesh.rotation.x += 0.001;

    // Wave effect
    const positions = particlesGeometry.attributes.position.array as Float32Array;
    for(let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      positions[i + 1] = y + Math.sin((frame + x * 10) * 0.002) * 0.02;
    }
    particlesGeometry.attributes.position.needsUpdate = true;

    // Interactive rotation based on mouse
    particlesMesh.rotation.x += targetY * 0.002;
    particlesMesh.rotation.y += targetX * 0.002;

    renderer.render(scene, camera);
  }

  animate();

  return {
    cleanup: () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    },
  };
}