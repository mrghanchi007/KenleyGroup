"use client";

import { motion } from "framer-motion";

const QUOTES = [
  {
    text: "Kenley Group provided stability at a time when I needed it most.",
    author: "Resident",
  },
  {
    text: "The support team helped me move into independent living with confidence.",
    author: "Former Resident",
  },
  {
    text: "Professional, responsive and genuinely committed to delivering positive outcomes.",
    author: "Professional Partner",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-28">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
          Voices
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
          Kind Words
        </h2>
      </motion.div>

      <div className="mx-auto mt-14 max-w-3xl space-y-8">
        {QUOTES.map((quote, i) => (
          <motion.blockquote
            key={quote.author}
            className="bg-ink p-8 text-cream shadow-[0_18px_40px_rgba(12,13,13,0.2)]"
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: [-2, 1.5, -1.5][i] }}
            whileHover={{ rotate: 0, scale: 1.01 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="font-serif text-3xl leading-none text-coral">
              &ldquo;
            </span>
            <p className="mt-1 font-serif text-lg italic leading-relaxed">
              {quote.text}
            </p>
            <footer className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              — {quote.author}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
