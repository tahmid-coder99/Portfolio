import * as THREE from "three";
import { gsap } from "gsap";

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

  // Create enhanced particle system
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 7000; // Increased for more density
  const posArray = new Float32Array(particlesCount * 3);
  const colorsArray = new Float32Array(particlesCount * 3);
  const scalesArray = new Float32Array(particlesCount);

  for(let i = 0; i < particlesCount * 3; i += 3) {
    // Create a more dramatic spread of particles in a sphere
    const radius = Math.random() * 20;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;

    posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
    posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    posArray[i + 2] = radius * Math.cos(phi);

    // Dynamic color gradients
    colorsArray[i] = Math.random() * 0.5 + 0.5;     // R
    colorsArray[i + 1] = Math.random() * 0.3 + 0.2; // G
    colorsArray[i + 2] = Math.random() * 0.5 + 0.5; // B

    // Varying particle sizes
    scalesArray[i/3] = Math.random() * 2 + 0.5;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
  particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scalesArray, 1));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.015,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  camera.position.z = 5;

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  let scrollY = 0;
  let currentSection = 0;

  function onMouseMove(event: MouseEvent) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  function onScroll() {
    scrollY = window.scrollY;
    const newSection = Math.floor(scrollY / window.innerHeight);

    if (newSection !== currentSection) {
      currentSection = newSection;
      // Animate camera on section change
      gsap.to(camera.position, {
        z: 5 + (currentSection * 2),
        duration: 1,
        ease: "power2.inOut"
      });

      gsap.to(particlesMesh.rotation, {
        x: particlesMesh.rotation.x + Math.PI * 0.5,
        y: particlesMesh.rotation.y + Math.PI * 0.3,
        duration: 1.5,
        ease: "power2.inOut"
      });
    }
  }

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('scroll', onScroll);

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
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.0005;

    // Wave effect with scroll influence
    const positions = particlesGeometry.attributes.position.array as Float32Array;
    const scales = particlesGeometry.attributes.scale.array as Float32Array;
    const colors = particlesGeometry.attributes.color.array as Float32Array;

    for(let i = 0; i < positions.length; i += 3) {
      const ix = i / 3;
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      // Wavy movement
      positions[i + 1] = y + Math.sin((frame + x * 10) * 0.002 + scrollY * 0.001) * 0.03;

      // Breathing effect
      const breath = Math.sin(frame * 0.02 + ix) * 0.1 + 1;
      scales[ix] = scalesArray[ix] * breath;

      // Color pulsing
      const colorPulse = Math.sin(frame * 0.01 + ix) * 0.1 + 0.9;
      colors[i] *= colorPulse;
      colors[i + 1] *= colorPulse;
      colors[i + 2] *= colorPulse;
    }

    particlesGeometry.attributes.position.needsUpdate = true;
    particlesGeometry.attributes.scale.needsUpdate = true;
    particlesGeometry.attributes.color.needsUpdate = true;

    // Interactive rotation based on mouse
    particlesMesh.rotation.x += targetY * 0.001;
    particlesMesh.rotation.y += targetX * 0.001;

    // Scroll-based camera movement
    camera.position.y = -(scrollY / window.innerHeight) * 0.5;

    renderer.render(scene, camera);
  }

  animate();

  return {
    cleanup: () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      renderer.dispose();
    },
  };
}