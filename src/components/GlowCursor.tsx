"use client";

import { useEffect, useState } from "react";

export function GlowCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);

    let trailFrame = 0;
    let targetX = -100;
    let targetY = -100;
    let currentTrailX = -100;
    let currentTrailY = -100;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
    };

    const animateTrail = () => {
      currentTrailX += (targetX - currentTrailX) * 0.12;
      currentTrailY += (targetY - currentTrailY) * 0.12;
      setTrail({ x: currentTrailX, y: currentTrailY });
      trailFrame = requestAnimationFrame(animateTrail);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest(
          "a, button, input, textarea, select, label, [data-cursor-hover], .education-card"
        )
      );
    };

    trailFrame = requestAnimationFrame(animateTrail);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);

    return () => {
      cancelAnimationFrame(trailFrame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  const size = hovering ? 44 : 28;

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[10000] mix-blend-screen"
        style={{
          transform: `translate(${trail.x}px, ${trail.y}px) translate(-50%, -50%)`,
        }}
      >
        <div
          className="rounded-full opacity-40 blur-md transition-all duration-300"
          style={{
            width: size * 2,
            height: size * 2,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.5) 0%, rgba(236,72,153,0.3) 45%, transparent 70%)",
          }}
        />
      </div>

      <div
        className="pointer-events-none fixed left-0 top-0 z-[10001]"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
      >
        <div
          className="rounded-full border-2 transition-all duration-200"
          style={{
            width: size,
            height: size,
            borderColor: hovering
              ? "rgba(34, 211, 238, 0.9)"
              : "rgba(192, 132, 252, 0.7)",
            boxShadow: hovering
              ? "0 0 20px rgba(34, 211, 238, 0.6), 0 0 40px rgba(236, 72, 153, 0.3)"
              : "0 0 14px rgba(192, 132, 252, 0.5)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_#fff]" />
      </div>
    </>
  );
}
