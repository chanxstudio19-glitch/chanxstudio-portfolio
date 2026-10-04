"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left - width / 2) * 0.05;
      mouse.targetY = (e.clientY - rect.top - height / 2) * 0.05;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle nodes setup
    const numParticles = 45;
    const particles = Array.from({ length: numParticles }, () => ({
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500,
      z: Math.random() * 400,
      size: Math.random() * 2 + 0.8,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.4 ? "#1C2A22" : "#B89A5A",
    }));

    let rotationAngle = 0;

    const draw = () => {
      // Ease mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mouse.x;
      const centerY = height / 2 + mouse.y;
      rotationAngle += 0.003;

      // 1. Draw central atmospheric green & gold radial lighting glow
      const radialGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        10,
        centerX,
        centerY,
        Math.min(width, height) * 0.45
      );
      radialGlow.addColorStop(0, "rgba(28, 42, 34, 0.4)");
      radialGlow.addColorStop(0.5, "rgba(16, 26, 21, 0.2)");
      radialGlow.addColorStop(1, "rgba(8, 10, 9, 0)");
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Orbital Concentric Rings
      const baseRadius = Math.min(width, height) * 0.22;

      // Ring 1 - Outer segmented ring
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle * 0.5);
      ctx.strokeStyle = "rgba(28, 42, 34, 0.8)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12, 2, 12]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.4, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Ring 2 - Muted Gold Thin Precision Orbital
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-rotationAngle * 0.8);
      ctx.strokeStyle = "rgba(184, 154, 90, 0.35)";
      ctx.lineWidth = 1;
      ctx.setLineDash([40, 20, 10, 20]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Ring 3 - Inner Active Radar Sweep Arc
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle * 1.2);
      ctx.strokeStyle = "rgba(212, 185, 120, 0.6)";
      ctx.lineWidth = 2;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.85, 0, Math.PI * 0.6);
      ctx.stroke();
      ctx.restore();

      // 3. Central Abstract Geometric "CX / X" Emblem
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle * 0.15);

      const size = baseRadius * 0.65;

      // Draw "X" Diagonals with metallic stroke
      ctx.lineWidth = 3;

      // Line 1: Top-Left to Bottom-Right
      const grad1 = ctx.createLinearGradient(-size, -size, size, size);
      grad1.addColorStop(0, "rgba(232, 232, 227, 0.9)");
      grad1.addColorStop(0.5, "rgba(212, 185, 120, 0.95)");
      grad1.addColorStop(1, "rgba(28, 42, 34, 0.7)");
      ctx.strokeStyle = grad1;
      ctx.beginPath();
      ctx.moveTo(-size, -size);
      ctx.lineTo(size, size);
      ctx.stroke();

      // Line 2: Bottom-Left to Top-Right
      const grad2 = ctx.createLinearGradient(-size, size, size, -size);
      grad2.addColorStop(0, "rgba(184, 154, 90, 0.9)");
      grad2.addColorStop(0.5, "rgba(232, 232, 227, 0.95)");
      grad2.addColorStop(1, "rgba(28, 42, 34, 0.7)");
      ctx.strokeStyle = grad2;
      ctx.beginPath();
      ctx.moveTo(-size, size);
      ctx.lineTo(size, -size);
      ctx.stroke();

      // Outer Abstract "C" Arc framing the X
      ctx.strokeStyle = "rgba(212, 185, 120, 0.8)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, size * 1.15, Math.PI * 0.45, Math.PI * 1.55);
      ctx.stroke();

      // Corner Precision HUD reticles
      ctx.strokeStyle = "rgba(133, 137, 130, 0.4)";
      ctx.lineWidth = 1;
      const corner = size * 1.35;
      // Top Left
      ctx.beginPath();
      ctx.moveTo(-corner, -corner + 10);
      ctx.lineTo(-corner, -corner);
      ctx.lineTo(-corner + 10, -corner);
      ctx.stroke();
      // Top Right
      ctx.beginPath();
      ctx.moveTo(corner - 10, -corner);
      ctx.lineTo(corner, -corner);
      ctx.lineTo(corner, -corner + 10);
      ctx.stroke();
      // Bottom Right
      ctx.beginPath();
      ctx.moveTo(corner, corner - 10);
      ctx.lineTo(corner, corner);
      ctx.lineTo(corner - 10, corner);
      ctx.stroke();
      // Bottom Left
      ctx.beginPath();
      ctx.moveTo(-corner + 10, corner);
      ctx.lineTo(-corner, corner);
      ctx.lineTo(-corner, corner - 10);
      ctx.stroke();

      ctx.restore();

      // 4. Floating Ambient Particles & Grid Connections
      particles.forEach((p, idx) => {
        p.z -= p.speed;
        if (p.z <= 0) p.z = 400;

        const k = 300 / p.z;
        const px = centerX + p.x * k;
        const py = centerY + p.y * k;

        if (px > 0 && px < width && py > 0 && py < height) {
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity * (1 - p.z / 400);
          ctx.beginPath();
          ctx.arc(px, py, p.size * k * 0.8, 0, Math.PI * 2);
          ctx.fill();

          // Connect nearby particles with subtle green/gold lines
          for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const k2 = 300 / p2.z;
            const px2 = centerX + p2.x * k2;
            const py2 = centerY + p2.y * k2;
            const dist = Math.hypot(px - px2, py - py2);

            if (dist < 90) {
              ctx.strokeStyle = "rgba(28, 42, 34, 0.25)";
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(px2, py2);
              ctx.stroke();
            }
          }
        }
      });
      ctx.globalAlpha = 1.0;

      // 5. Tech Readout Coordinates Overlay
      ctx.font = "10px monospace";
      ctx.fillStyle = "rgba(133, 137, 130, 0.5)";
      ctx.fillText(`SYS.CX // POS.X: ${Math.round(centerX)}`, 20, height - 35);
      ctx.fillText(`ROT.RAD // ${rotationAngle.toFixed(3)} rad`, 20, height - 20);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[620px] flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none"
      />
      {/* Sci-fi corner badges */}
      <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[#858982]/60 border border-[#1C2A22]/40 px-2 py-1 bg-[#101A15]/40 backdrop-blur-xs">
        CX-ENGINE v2.6 // OPTICAL MATRIX
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-[#B89A5A]/80 border border-[#1C2A22]/40 px-2.5 py-1 bg-[#101A15]/40 backdrop-blur-xs flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4B978] animate-pulse" />
        LIVE GEOMETRIC RENDER
      </div>
    </div>
  );
}
