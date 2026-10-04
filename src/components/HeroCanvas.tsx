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
      mouse.targetX = (e.clientX - rect.left - width / 2) * 0.08;
      mouse.targetY = (e.clientY - rect.top - height / 2) * 0.08;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 3D Orbital particle nodes setup
    const numParticles = 65;
    const particles = Array.from({ length: numParticles }, () => ({
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 600,
      z: Math.random() * 500,
      size: Math.random() * 2.2 + 0.8,
      speed: Math.random() * 0.4 + 0.15,
      opacity: Math.random() * 0.7 + 0.3,
      color: Math.random() > 0.4 ? "#D4B978" : "#1C2A22",
    }));

    let rotationAngle = 0;

    const draw = () => {
      // Ease mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2 + mouse.x;
      const centerY = height / 2 + mouse.y;
      rotationAngle += 0.004;

      // 1. Central Deep Atmospheric Green & Gold Spotlight Gradient
      const radialGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        15,
        centerX,
        centerY,
        Math.min(width, height) * 0.55
      );
      radialGlow.addColorStop(0, "rgba(184, 154, 90, 0.22)");
      radialGlow.addColorStop(0.35, "rgba(28, 42, 34, 0.45)");
      radialGlow.addColorStop(0.7, "rgba(16, 26, 21, 0.15)");
      radialGlow.addColorStop(1, "rgba(8, 10, 9, 0)");
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      const baseRadius = Math.min(width, height) * 0.28;

      // 2. Outer Segmented Precision Ring
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle * 0.4);
      ctx.strokeStyle = "rgba(28, 42, 34, 0.9)";
      ctx.lineWidth = 1.8;
      ctx.setLineDash([12, 16, 4, 16]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.35, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 3. Middle Glowing Soft Gold Radar Arc
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-rotationAngle * 0.7);
      ctx.strokeStyle = "rgba(212, 185, 120, 0.45)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([45, 18, 15, 18]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 4. Inner Active Pulse Sweeping Arc
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle * 1.1);
      const arcGrad = ctx.createLinearGradient(-baseRadius, -baseRadius, baseRadius, baseRadius);
      arcGrad.addColorStop(0, "rgba(212, 185, 120, 0.9)");
      arcGrad.addColorStop(1, "rgba(28, 42, 34, 0.1)");
      ctx.strokeStyle = arcGrad;
      ctx.lineWidth = 2.5;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.88, 0, Math.PI * 0.8);
      ctx.stroke();
      ctx.restore();

      // 5. Central Holographic "CX / X" Monogram Core
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle * 0.2);

      const size = baseRadius * 0.62;

      // Diagonal 1: Top-Left to Bottom-Right
      const grad1 = ctx.createLinearGradient(-size, -size, size, size);
      grad1.addColorStop(0, "#FFFFFF");
      grad1.addColorStop(0.4, "#D4B978");
      grad1.addColorStop(0.8, "#B89A5A");
      grad1.addColorStop(1, "#1C2A22");
      ctx.strokeStyle = grad1;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(-size, -size);
      ctx.lineTo(size, size);
      ctx.stroke();

      // Diagonal 2: Bottom-Left to Top-Right
      const grad2 = ctx.createLinearGradient(-size, size, size, -size);
      grad2.addColorStop(0, "#B89A5A");
      grad2.addColorStop(0.4, "#D4B978");
      grad2.addColorStop(0.8, "#E8E8E3");
      grad2.addColorStop(1, "#1C2A22");
      ctx.strokeStyle = grad2;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(-size, size);
      ctx.lineTo(size, -size);
      ctx.stroke();

      // Outer Abstract "C" Arc framing the X emblem
      ctx.strokeStyle = "rgba(212, 185, 120, 0.85)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, size * 1.2, Math.PI * 0.4, Math.PI * 1.6);
      ctx.stroke();

      // Precision HUD Reticles
      ctx.strokeStyle = "rgba(184, 154, 90, 0.6)";
      ctx.lineWidth = 1;
      const corner = size * 1.4;
      // Top Left
      ctx.beginPath();
      ctx.moveTo(-corner, -corner + 12);
      ctx.lineTo(-corner, -corner);
      ctx.lineTo(-corner + 12, -corner);
      ctx.stroke();
      // Top Right
      ctx.beginPath();
      ctx.moveTo(corner - 12, -corner);
      ctx.lineTo(corner, -corner);
      ctx.lineTo(corner, -corner + 12);
      ctx.stroke();
      // Bottom Right
      ctx.beginPath();
      ctx.moveTo(corner, corner - 12);
      ctx.lineTo(corner, corner);
      ctx.lineTo(corner - 12, corner);
      ctx.stroke();
      // Bottom Left
      ctx.beginPath();
      ctx.moveTo(-corner + 12, corner);
      ctx.lineTo(-corner, corner);
      ctx.lineTo(-corner, corner - 12);
      ctx.stroke();

      ctx.restore();

      // 6. Floating Particle Constellation
      particles.forEach((p, idx) => {
        p.z -= p.speed;
        if (p.z <= 0) p.z = 500;

        const k = 320 / p.z;
        const px = centerX + p.x * k;
        const py = centerY + p.y * k;

        if (px > 0 && px < width && py > 0 && py < height) {
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity * (1 - p.z / 500);
          ctx.beginPath();
          ctx.arc(px, py, p.size * k * 0.85, 0, Math.PI * 2);
          ctx.fill();

          for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const k2 = 320 / p2.z;
            const px2 = centerX + p2.x * k2;
            const py2 = centerY + p2.y * k2;
            const dist = Math.hypot(px - px2, py - py2);

            if (dist < 100) {
              ctx.strokeStyle = "rgba(184, 154, 90, 0.15)";
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

      // 7. Telemetry HUD Coordinates Text
      ctx.font = "10px monospace";
      ctx.fillStyle = "rgba(133, 137, 130, 0.6)";
      ctx.fillText(`SYS.CX // POS.X: ${Math.round(centerX)} POS.Y: ${Math.round(centerY)}`, 24, height - 36);
      ctx.fillText(`MATRIX // ${rotationAngle.toFixed(3)} rad`, 24, height - 20);

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
    <div className="relative w-full h-[480px] lg:h-[650px] flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none"
      />
      <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[#D4B978] border border-[#1C2A22] px-3 py-1.5 bg-[#101A15]/80 backdrop-blur-md">
        CX-ENGINE v3.0 // HOLOGRAPHIC CORE
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-widest text-[#D4B978] border border-[#1C2A22] px-3 py-1.5 bg-[#101A15]/80 backdrop-blur-md flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#D4B978] animate-ping" />
        LIVE 3D MATRIX RENDER
      </div>
    </div>
  );
}
