"use client";

import { motion } from "framer-motion";

/*
  Decorative shapes drifting behind content — a mix of solid circles,
  outline rings and squares in theme colours. Some travel left → right,
  others right → left, each at its own size and speed.
*/
const SHAPES = [
  { type: "solid", size: 90, cls: "bg-coral/20", top: "10%", dir: 1, duration: 38, delay: 0 },
  { type: "ring", size: 150, cls: "border-coral/30", top: "55%", dir: -1, duration: 46, delay: 2 },
  { type: "solid", size: 26, cls: "bg-cream/15", top: "30%", dir: 1, duration: 30, delay: 6 },
  { type: "ring", size: 64, cls: "border-beige/25", top: "78%", dir: 1, duration: 34, delay: 10 },
  { type: "square", size: 42, cls: "border-coral/25", top: "18%", dir: -1, duration: 40, delay: 4 },
  { type: "solid", size: 58, cls: "bg-beige/10", top: "66%", dir: -1, duration: 28, delay: 8 },
  { type: "ring", size: 36, cls: "border-cream/25", top: "42%", dir: 1, duration: 24, delay: 12 },
  { type: "square", size: 22, cls: "bg-coral/15", top: "86%", dir: 1, duration: 36, delay: 3 },
  { type: "ring", size: 100, cls: "border-coral/20", top: "6%", dir: -1, duration: 52, delay: 14 },
  { type: "solid", size: 16, cls: "bg-coral/25", top: "50%", dir: 1, duration: 20, delay: 1 },
];

function shapeClasses(shape) {
  if (shape.type === "solid") {
    return `rounded-full ${shape.cls}`;
  }
  if (shape.type === "ring") {
    return `rounded-full border-2 bg-transparent ${shape.cls}`;
  }
  // square — tilted like a diamond
  return `rotate-45 ${
    shape.cls.startsWith("border") ? "border-2 bg-transparent" : ""
  } ${shape.cls}`;
}

export default function FloatingShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {SHAPES.map((shape, i) => (
        <motion.span
          key={i}
          className={`absolute block ${shapeClasses(shape)}`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.dir === 1 ? "-12%" : "auto",
            right: shape.dir === -1 ? "-12%" : "auto",
          }}
          animate={{ x: shape.dir === 1 ? ["0vw", "124vw"] : ["0vw", "-124vw"] }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
