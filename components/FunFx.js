"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/*
  JiggleText — every few seconds one random letter slowly grows
  (1.5x–2x) and shifts colour, then settles back.
*/
export function JiggleText({
  text,
  base = "#EFEAE0",
  colors = ["#E69C85", "#ffffff"],
}) {
  const letters = Array.from(text);
  const [active, setActive] = useState(null);

  useEffect(() => {
    let alive = true;
    let timer;

    const loop = () => {
      if (!alive) return;
      const candidates = letters
        .map((ch, i) => (ch.trim() ? i : -1))
        .filter((i) => i >= 0);
      const idx = candidates[Math.floor(Math.random() * candidates.length)];
      const scale = 1.5 + Math.random() * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      setActive({ idx, scale, color });
      timer = setTimeout(() => {
        if (!alive) return;
        setActive(null);
        timer = setTimeout(loop, 2000 + Math.random() * 2500);
      }, 1300);
    };

    timer = setTimeout(loop, 600 + Math.random() * 2400);
    return () => {
      alive = false;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span className="inline-flex">
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={{
            scale: active && active.idx === i ? active.scale : 1,
            color: active && active.idx === i ? active.color : base,
          }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

/*
  ForgetfulArrow — drifts off to the left, then suddenly spins
  round and snaps back to the right, like it forgot the way.
*/
export function ForgetfulArrow({ className = "" }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{
        x: [0, -14, -14, 0, 0],
        rotate: [0, 0, 360, 360, 360],
      }}
      transition={{
        duration: 6,
        times: [0, 0.4, 0.55, 0.68, 1],
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
    >
      &rarr;
    </motion.span>
  );
}
