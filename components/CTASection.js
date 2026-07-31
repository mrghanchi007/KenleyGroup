"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection({ watermark, title, text, buttons }) {
  return (
    <section className="diag-top relative overflow-hidden bg-coral px-6 pb-28 pt-36 text-center">
      {/* Faint echo of the heading behind */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 select-none whitespace-nowrap font-serif text-[11vw] font-bold text-[#d47f6b]/70"
      >
        {watermark || title}
      </span>

      <motion.div
        className="relative mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-serif text-4xl font-black md:text-6xl">{title}</h2>
        <p className="mt-6 leading-relaxed text-[#4a2e26]">{text}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {buttons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className="notch-br group inline-flex items-center gap-3 bg-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-cream"
            >
              {btn.label}
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
