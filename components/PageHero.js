"use client";

import { motion } from "framer-motion";

export default function PageHero({ label, title, text, watermark }) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-40 text-center md:pt-44">
      {watermark && (
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[16vw] font-bold leading-none text-[#c3b8ad]/50"
        >
          {watermark}
        </span>
      )}
      <motion.div
        className="relative mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
          {label}
        </p>
        <h1 className="mt-4 font-serif text-4xl font-black leading-tight md:text-6xl">
          {title}
        </h1>
        {text && (
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-neutral-600">
            {text}
          </p>
        )}
      </motion.div>
    </section>
  );
}
