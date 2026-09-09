"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera setup matching [0, 0, 1]
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    camera.position.set(0, 0, 1);

    // 3. WebGL Renderer with transparent clear
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.zIndex = "1"; // sits cleanly in viewport
    canvas.style.pointerEvents = "none";
    container.appendChild(canvas);

    // 4. Create crisp, high-contrast circular micro-dot texture
    const createStarTexture = () => {
      const cvs = document.createElement("canvas");
      cvs.width = 32;
      cvs.height = 32;
      const ctx = cvs.getContext("2d");
      if (!ctx) return null;

      // Crisp solid core with smooth anti-aliased edge
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.75, "rgba(255, 255, 255, 0.95)");
      grad.addColorStop(0.95, "rgba(255, 255, 255, 0.4)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 15, 0, Math.PI * 2);
      ctx.fill();

      const texture = new THREE.CanvasTexture(cvs);
      texture.needsUpdate = true;
      return texture;
    };

    const starTexture = createStarTexture();

    // 5. Dense, tiny, fast-moving starfield matching reference image
    const starCount = 3000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const radius = 1.2;

    for (let i = 0; i < starCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;

      const sinPhi = Math.sin(phi);
      const x = r * sinPhi * Math.cos(theta);
      const y = r * sinPhi * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // High-brightness crisp white & slight silver starlight
      const shade = 0.8 + Math.random() * 0.2;
      colors[i * 3] = shade;
      colors[i * 3 + 1] = shade;
      colors[i * 3 + 2] = shade;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    // 6. Very small micro-points (0.0038) matching the reference image's fine specks
    const material = new THREE.PointsMaterial({
      size: 0.0015,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.98,
      vertexColors: true,
      map: starTexture || undefined,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // 7. Group with initial rotation [0, 0, Math.PI / 4]
    const starGroup = new THREE.Group();
    starGroup.rotation.z = Math.PI / 4;

    const starPoints = new THREE.Points(geometry, material);
    starGroup.add(starPoints);
    scene.add(starGroup);

    // 8. Subtle mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.08;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.08;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 9. Fast-moving dynamic render loop matching reference speed
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Fast rotation (delta / 10 and delta / 15)
      starPoints.rotation.x -= delta / 100;
      starPoints.rotation.y -= delta / 150;

      starGroup.rotation.x += (mouseY - starGroup.rotation.x) * 0.03;
      starGroup.rotation.y += (mouseX - starGroup.rotation.y) * 0.03;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 10. Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      starTexture?.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full overflow-hidden"
      aria-hidden="true"
    />
  );
}

export { StarBackground as StarsCanvas };
