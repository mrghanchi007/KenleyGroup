"use client";

import { motion } from "framer-motion";

export default function StepList({ steps }) {
  return (
    <ol className="mx-auto max-w-2xl space-y-6">
      {steps.map((step, i) => (
        <motion.li
          key={step}
          className="flex items-start gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: i * 0.07 }}
        >
          <span className="font-serif text-4xl font-bold leading-none text-coral">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="pt-2 leading-relaxed text-neutral-700">{step}</p>
        </motion.li>
      ))}
    </ol>
  );
}
