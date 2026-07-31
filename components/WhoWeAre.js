"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const STATS = [
  { value: "24/7", label: "Emergency Support" },
  { value: "16-25", label: "Care Leavers Supported" },
  { value: "6", label: "Support Service Areas" },
  { value: "4+", label: "Regions Covered", accent: true },
];

export default function WhoWeAre() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Who We Are
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
            Stable Homes Built on Love
          </h2>
          <p className="mt-6 leading-relaxed text-neutral-600">
            At Kenley Group we believe housing is more than a roof over
            someone&apos;s head. We provide safe accommodation alongside
            personalised support that enables individuals to build
            independence, confidence and brighter futures.
          </p>
          <p className="mt-4 leading-relaxed text-neutral-600">
            Our mission is to provide stable homes built on love, empowering
            vulnerable individuals to develop the independence, confidence and
            life skills needed for successful adulthood.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 border-b border-coral pb-1 text-sm font-medium uppercase tracking-[0.2em]"
          >
            Read Our Story
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`p-7 shadow-[0_18px_40px_rgba(12,13,13,0.2)] ${
                stat.accent ? "bg-coral" : "bg-ink"
              }`}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: [-2.5, 2, -1.5, 3][i] }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p
                className={`font-serif text-5xl font-bold ${
                  stat.accent ? "text-ink" : "text-coral"
                }`}
              >
                {stat.value}
              </p>
              <p
                className={`mt-3 text-sm ${
                  stat.accent ? "text-[#4a2e26]" : "text-neutral-400"
                }`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
