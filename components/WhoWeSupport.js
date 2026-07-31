"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ForgetfulArrow } from "./FunFx";

/*
  Scattered "polaroid" layout — each card sits at a slightly random
  rotation and vertical offset on a white band, straightening on hover.
*/
const GROUPS = [
  {
    icon: "🎓",
    title: "Care Leavers (16-25)",
    text: "Supporting young people leaving care with stable homes and the practical skills needed for a confident transition into adulthood.",
    rotate: -3,
    offset: "lg:mt-2",
  },
  {
    icon: "🌍",
    title: "Unaccompanied Asylum Seeking Children",
    text: "Safe, culturally sensitive accommodation and support for unaccompanied asylum seeking young people, with 18+ provision where appropriate.",
    rotate: 2,
    offset: "lg:mt-10",
  },
  {
    icon: "🔑",
    title: "Homeless Young Adults",
    text: "A stable base and tailored support for young adults experiencing homelessness, helping them rebuild routine, confidence and independence.",
    rotate: -2,
    offset: "lg:-mt-3",
  },
  {
    icon: "🤲",
    title: "Vulnerable Adults",
    text: "Supported accommodation for vulnerable adults who need additional help to maintain their home and wellbeing.",
    rotate: 2.5,
    offset: "lg:mt-6",
  },
  {
    icon: "🏡",
    title: "Move-On Accommodation",
    text: "Semi-independent, supported move-on accommodation for individuals preparing for fully independent living.",
    rotate: -1.5,
    offset: "lg:-mt-2",
  },
];

export default function WhoWeSupport() {
  return (
    <>
      {/* Wavy edge: beige → white */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-[40px] w-full md:h-[60px]"
        aria-hidden
      >
        <path
          fill="#ffffff"
          d="M0,60 L0,38 C180,10 360,52 540,34 C720,16 900,54 1080,30 C1260,10 1380,40 1440,24 L1440,60 Z"
        />
      </svg>
    <section className="bg-white px-6 pb-24 pt-8">
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

      <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            className={`bg-ink p-8 text-cream shadow-[0_20px_45px_rgba(12,13,13,0.22)] ${group.offset}`}
            initial={{ opacity: 0, y: 60, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: group.rotate }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.12 }}
          >
            <div className="text-4xl">{group.icon}</div>
            <h3 className="mt-5 font-serif text-xl font-bold">{group.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {group.text}
            </p>
          </motion.div>
        ))}

        <motion.div
          className="flex flex-col items-start justify-center bg-coral p-8 shadow-[0_20px_45px_rgba(12,13,13,0.22)] lg:mt-8"
          initial={{ opacity: 0, y: 60, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 3 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.24 }}
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
            <ForgetfulArrow />
          </Link>
        </motion.div>
      </div>
    </section>
      {/* Wavy edge: white → beige */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-[40px] w-full md:h-[60px]"
        aria-hidden
      >
        <path
          fill="#ffffff"
          d="M0,0 L1440,0 L1440,20 C1280,48 1100,8 920,30 C740,52 560,12 380,34 C220,52 80,20 0,40 Z"
        />
      </svg>
    </>
  );
}
