"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function CircleButton({ size, filled, delay, show, href, lines }) {
  const dim =
    size === "lg"
      ? "h-40 w-40 md:h-44 md:w-44"
      : "h-32 w-32 md:h-36 md:w-36";
  return (
    <motion.div
      className="relative"
      initial={{ scale: 0, opacity: 0 }}
      animate={show ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay, duration: 0.55, ease: "backOut" }}
    >
      {/* Offset arc ring around the circle — larger than the button with a gap */}
      <svg
        viewBox="0 0 100 100"
        className={`pointer-events-none absolute -inset-2 ${
          filled
            ? "translate-x-[5px] translate-y-[5px] text-ink"
            : "-translate-x-[5px] translate-y-[5px] text-coral"
        }`}
        style={{ width: "calc(100% + 16px)", height: "calc(100% + 16px)" }}
      >
        <circle
          cx="50"
          cy="50"
          r="47.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="225 300"
          transform={filled ? "rotate(-90 50 50)" : "rotate(0 50 50)"}
        />
      </svg>
      <Link
        href={href}
        className={`${dim} flex flex-col items-center justify-center rounded-full px-1 text-center font-serif text-[9px] font-semibold uppercase leading-relaxed tracking-[0.1em] transition-transform duration-300 hover:scale-105 sm:text-[10px] md:text-xs md:tracking-[0.14em] ${
          filled ? "bg-coral text-ink" : "bg-ink text-cream"
        }`}
      >
        {lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </Link>
    </motion.div>
  );
}

export default function Hero({ show }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24">
      {/* Giant "Kenley" watermark behind everything */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[38%] select-none font-serif text-[26vw] font-bold leading-none text-[#c5bfae]/60"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : {}}
        transition={{ delay: 0.55, duration: 1 }}
      >
        Kenley
      </motion.span>

      {/* Heading */}
      <div className="relative z-10 text-center">
        <div className="overflow-hidden">
          <motion.h1
            className="font-serif text-[11vw] font-black leading-[1.05] md:text-[6vw]"
            initial={{ y: "110%" }}
            animate={show ? { y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            Building Stable Homes
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-serif text-[11vw] font-black leading-[1.05] text-coral md:text-[6vw]"
            initial={{ y: "110%" }}
            animate={show ? { y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 1, 0.5, 1] }}
          >
            & Brighter Futures
          </motion.h1>
        </div>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          Award-winning supported and semi-independent accommodation for care
          leavers, vulnerable young people and adults.
        </motion.p>
      </div>

      {/* Three circular CTAs — stacked on mobile, in a row on desktop */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-7 pb-10 md:flex-row md:justify-center md:gap-8 md:pb-0">
        <CircleButton
          size="sm"
          filled={false}
          delay={0.35}
          show={show}
          href="/contact"
          lines={["Speak to", "Our Team"]}
        />
        <CircleButton
          size="lg"
          filled={true}
          delay={0.75}
          show={show}
          href="/referrals"
          lines={["Make a", "Referral"]}
        />
        <CircleButton
          size="sm"
          filled={false}
          delay={1.15}
          show={show}
          href="/community"
          lines={["Partner", "With Us"]}
        />
      </div>
    </section>
  );
}
