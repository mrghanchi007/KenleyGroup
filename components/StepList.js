"use client";

import { motion } from "framer-motion";

/*
  Numbered steps scattered at random horizontal offsets (desktop)
  instead of one straight column.
*/
const OFFSETS = [
  "md:ml-0",
  "md:ml-24",
  "md:-ml-10",
  "md:ml-40",
  "md:ml-8",
  "md:-ml-16",
  "md:ml-28",
];

export default function StepList({ steps }) {
  return (
    <ol className="mx-auto max-w-2xl space-y-7">
      {steps.map((step, i) => (
        <motion.li
          key={step}
          className={`flex items-start gap-6 ${OFFSETS[i % OFFSETS.length]}`}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
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
