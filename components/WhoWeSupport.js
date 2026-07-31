"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const GROUPS = [
  {
    icon: "🎓",
    title: "Care Leavers (16-25)",
    text: "Supporting young people leaving care with stable homes and the practical skills needed for a confident transition into adulthood.",
  },
  {
    icon: "🌍",
    title: "Unaccompanied Asylum Seeking Children",
    text: "Safe, culturally sensitive accommodation and support for unaccompanied asylum seeking young people, with 18+ provision where appropriate.",
  },
  {
    icon: "🔑",
    title: "Homeless Young Adults",
    text: "A stable base and tailored support for young adults experiencing homelessness, helping them rebuild routine, confidence and independence.",
  },
  {
    icon: "🤲",
    title: "Vulnerable Adults",
    text: "Supported accommodation for vulnerable adults who need additional help to maintain their home and wellbeing.",
  },
  {
    icon: "🏡",
    title: "Move-On Accommodation",
    text: "Semi-independent, supported move-on accommodation for individuals preparing for fully independent living.",
  },
];

export default function WhoWeSupport() {
  return (
    <section className="px-6 pb-28">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
          Residents
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
          Who We Support
        </h2>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            className="notch-br bg-ink p-8 text-cream"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
          >
            <div className="text-4xl">{group.icon}</div>
            <h3 className="mt-5 font-serif text-xl font-bold">{group.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {group.text}
            </p>
          </motion.div>
        ))}
        <motion.div
          className="notch-br flex flex-col items-start justify-center bg-coral p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-serif text-2xl font-bold text-ink">
            Need to place someone?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#4a2e26]">
            We work with local authorities, social workers and professionals to
            arrange placements quickly and safely.
          </p>
          <Link
            href="/referrals"
            className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
          >
            Make a Referral
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
