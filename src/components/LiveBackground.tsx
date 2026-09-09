"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  color: string;
}

export default function LiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking for interactive proximity glow
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Color palette matching the theme
    const colors = [
      "rgba(168, 85, 247, ", // Violet / Neon Purple
      "rgba(192, 132, 252, ", // Lilac
      "rgba(124, 58, 237, ",  // Deep Purple
      "rgba(217, 70, 239, "   // Soft Magenta
    ];

    let particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.6 + 0.8,
          baseAlpha: Math.random() * 0.35 + 0.15,
          color
        });
      }
    };

    initParticles();

    // Floating ambient glow orbs state
    let orbAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw soft drifting radial ambient blobs
      orbAngle += 0.003;
      const orb1X = width * 0.25 + Math.sin(orbAngle) * 80;
      const orb1Y = height * 0.35 + Math.cos(orbAngle) * 60;
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 10, orb1X, orb1Y, 400);
      grad1.addColorStop(0, "rgba(168, 85, 247, 0.07)");
      grad1.addColorStop(1, "transparent");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * 0.75 + Math.cos(orbAngle * 0.8) * 100;
      const orb2Y = height * 0.65 + Math.sin(orbAngle * 0.8) * 70;
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 10, orb2X, orb2Y, 450);
      grad2.addColorStop(0, "rgba(192, 132, 252, 0.05)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw connections between close particles
      const maxDistance = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse interaction: slight attraction & alpha boost
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let currentAlpha = p.baseAlpha;

        if (dist < 140) {
          currentAlpha = Math.min(0.9, p.baseAlpha + (1 - dist / 140) * 0.6);
          // Gently repel or attract
          p.x -= (dx / dist) * 0.4;
          p.y -= (dy / dist) * 0.4;
        }

        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  );
}
