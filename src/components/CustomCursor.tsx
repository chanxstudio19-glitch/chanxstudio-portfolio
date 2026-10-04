"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with fine pointing
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".interactive") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary cursor dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 2.5 : 1})`,
          width: "6px",
          height: "6px",
          backgroundColor: isHovered ? "#d4b978" : "#e8e8e3",
          boxShadow: isHovered ? "0 0 12px #d4b978" : "0 0 8px rgba(232, 232, 227, 0.5)",
        }}
      />
      {/* Outer atmospheric follower aura */}
      <div
        className="pointer-events-none fixed z-40 rounded-full transition-transform duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          width: "320px",
          height: "320px",
          background: isHovered
            ? "radial-gradient(circle, rgba(184, 154, 90, 0.12) 0%, rgba(28, 42, 34, 0.08) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(28, 42, 34, 0.25) 0%, rgba(16, 26, 21, 0.08) 50%, transparent 70%)",
        }}
      />
    </>
  );
}
