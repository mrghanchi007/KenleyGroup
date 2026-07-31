"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CARDS = [
  {
    icon: "🧭",
    title: "Support Services",
    text: "From independent living skills and tenancy support to health, wellbeing, education and employment — every resident receives a personalised support plan.",
    href: "/services",
  },
  {
    icon: "🤝",
    title: "Community & Partnerships",
    text: "We work closely with local authorities, NHS services, education providers, charities and community organisations to achieve great outcomes together.",
    href: "/community",
  },
  {
    icon: "🏠",
    title: "Landlords & Investors",
    text: "Guaranteed rental income, long-term leases and professional property management — partner with us and create real social impact.",
    href: "/landlords",
  },
];

export default function Network() {
  return (
    <section className="diag-bottom bg-coral px-6 pb-36 pt-28 text-ink">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-ink">
          Our Network
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
          A Community-Wide Effort
        </h2>
        <p className="mt-6 leading-relaxed text-[#4a2e26]">
          Addressing housing challenges requires collaboration, innovation and
          shared purpose. We bring together residents, professionals and
          partners to create sustainable solutions and positive change.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            className="bg-ink p-8 text-cream shadow-[0_18px_40px_rgba(12,13,13,0.25)]"
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: [-2.5, 2, -2][i] }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="text-4xl">{card.icon}</div>
            <h3 className="mt-6 font-serif text-2xl font-bold">{card.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {card.text}
            </p>
            <Link
              href={card.href}
              className="group mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-coral"
            >
              Learn More
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
