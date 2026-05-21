"use client";

import { useEffect, useRef } from "react";

type Vec3 = [number, number, number];

type WireShape = {
  vertices: Vec3[];
  edges: [number, number][];
  position: Vec3;
  rotation: Vec3;
  rotSpeed: Vec3;
  drift: Vec3;
  scale: number;
  hue: "pink" | "cyan" | "violet";
};

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  twinkle: number;
  speed: number;
};

const COLORS = {
  pink: { line: "rgba(236, 72, 153, 0.45)", glow: "rgba(236, 72, 153, 0.12)" },
  cyan: { line: "rgba(34, 211, 238, 0.5)", glow: "rgba(34, 211, 238, 0.14)" },
  violet: { line: "rgba(192, 132, 252, 0.45)", glow: "rgba(167, 139, 250, 0.12)" },
};

function makeCube(): { vertices: Vec3[]; edges: [number, number][] } {
  const s = 1;
  const vertices: Vec3[] = [
    [-s, -s, -s],
    [s, -s, -s],
    [s, s, -s],
    [-s, s, -s],
    [-s, -s, s],
    [s, -s, s],
    [s, s, s],
    [-s, s, s],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 4],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
  ];
  return { vertices, edges };
}

function makeOctahedron(): { vertices: Vec3[]; edges: [number, number][] } {
  const vertices: Vec3[] = [
    [0, 1.2, 0],
    [0, -1.2, 0],
    [1.2, 0, 0],
    [-1.2, 0, 0],
    [0, 0, 1.2],
    [0, 0, -1.2],
  ];
  const edges: [number, number][] = [
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 4],
    [4, 3],
    [3, 5],
    [5, 2],
  ];
  return { vertices, edges };
}

function rotateX(v: Vec3, a: number): Vec3 {
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  return [v[0], v[1] * cos - v[2] * sin, v[1] * sin + v[2] * cos];
}

function rotateY(v: Vec3, a: number): Vec3 {
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  return [v[0] * cos + v[2] * sin, v[1], -v[0] * sin + v[2] * cos];
}

function rotateZ(v: Vec3, a: number): Vec3 {
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  return [v[0] * cos - v[1] * sin, v[0] * sin + v[1] * cos, v[2]];
}

function transformVertex(v: Vec3, shape: WireShape): Vec3 {
  let p: Vec3 = [v[0] * shape.scale, v[1] * shape.scale, v[2] * shape.scale];
  p = rotateX(p, shape.rotation[0]);
  p = rotateY(p, shape.rotation[1]);
  p = rotateZ(p, shape.rotation[2]);
  return [p[0] + shape.position[0], p[1] + shape.position[1], p[2] + shape.position[2]];
}

function project(
  v: Vec3,
  w: number,
  h: number,
  focal: number,
  parallaxX: number,
  parallaxY: number
): { x: number; y: number; scale: number } {
  const depth = focal + v[2] + 4;
  const scale = focal / depth;
  return {
    x: (v[0] + parallaxX * 0.04) * scale + w / 2,
    y: (v[1] + parallaxY * 0.04) * scale + h / 2,
    scale,
  };
}

function createShapes(count: number): WireShape[] {
  const hues: WireShape["hue"][] = ["pink", "cyan", "violet"];
  return Array.from({ length: count }, (_, i) => {
    const geo = i % 2 === 0 ? makeCube() : makeOctahedron();
    return {
      ...geo,
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4,
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      rotSpeed: [
        (Math.random() - 0.5) * 0.004,
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.003,
      ],
      drift: [(Math.random() - 0.5) * 0.002, (Math.random() - 0.5) * 0.002, 0],
      scale: 0.55 + Math.random() * 0.65,
      hue: hues[i % hues.length],
    };
  });
}

function createStars(count: number, w: number, h: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    z: Math.random(),
    size: Math.random() * 1.4 + 0.3,
    twinkle: Math.random() * Math.PI * 2,
    speed: 0.002 + Math.random() * 0.004,
  }));
}

export function SpaceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let frameId = 0;
    let shapes: WireShape[] = [];
    let stars: Star[] = [];
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    let time = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = w < 768;
      shapes = createShapes(isMobile ? 5 : 9);
      stars = createStars(isMobile ? 80 : 140, w, h);
      nodes = Array.from({ length: isMobile ? 18 : 32 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      frameId = requestAnimationFrame(draw);
      if (document.hidden) return;

      time += reducedMotion ? 0 : 0.008;
      ctx.clearRect(0, 0, w, h);

      const px = mouseRef.current.x - w / 2;
      const py = mouseRef.current.y - h / 2;

      stars.forEach((star) => {
        star.y -= star.speed * 12;
        if (star.y < 0) {
          star.y = h;
          star.x = Math.random() * w;
        }
        const twinkle = 0.35 + Math.sin(time * 3 + star.twinkle) * 0.35;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${twinkle * (0.4 + star.z * 0.6)})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(34, 211, 238, 0.35)";
        ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });

      shapes.forEach((shape) => {
        if (!reducedMotion) {
          shape.rotation[0] += shape.rotSpeed[0];
          shape.rotation[1] += shape.rotSpeed[1];
          shape.rotation[2] += shape.rotSpeed[2];
          shape.position[0] += shape.drift[0];
          shape.position[1] += shape.drift[1];
          if (Math.abs(shape.position[0]) > 5) shape.drift[0] *= -1;
          if (Math.abs(shape.position[1]) > 3.5) shape.drift[1] *= -1;
        }

        const palette = COLORS[shape.hue];
        const projected = shape.vertices.map((v) =>
          project(transformVertex(v, shape), w, h, 420, px, py)
        );

        shape.edges.forEach(([a, b]) => {
          const p1 = projected[a];
          const p2 = projected[b];
          ctx.beginPath();
          ctx.strokeStyle = palette.line;
          ctx.lineWidth = 1;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });

        const cx =
          projected.reduce((s, p) => s + p.x, 0) / projected.length;
        const cy =
          projected.reduce((s, p) => s + p.y, 0) / projected.length;
        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
        glow.addColorStop(0, palette.glow);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fillRect(cx - 40, cy - 40, 80, 80);
      });

      if (!reducedMotion && Math.random() < 0.003) {
        const sx = Math.random() * w;
        const sy = Math.random() * h * 0.5;
        ctx.strokeStyle = "rgba(255,255,255,0.5)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + 60, sy + 30);
        ctx.stroke();
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
