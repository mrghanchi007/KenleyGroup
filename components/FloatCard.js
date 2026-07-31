"use client";

import { motion } from "framer-motion";

/*
  Shared tilted "floating" card — slight random rotation with a drop
  shadow, straightens on hover. Pass `i` to vary the angle per card.
*/
const ROTATIONS = [-3, 2, -2, 2.5, -1.5, 3];

export default function FloatCard({ children, className = "", i = 0, delay }) {
  const rotate = ROTATIONS[i % ROTATIONS.length];
  return (
    <motion.div
      className={`shadow-[0_18px_40px_rgba(12,13,13,0.2)] ${className}`}
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: delay ?? (i % 3) * 0.1 }}
    >
      {children}
    </motion.div>
  );
}
