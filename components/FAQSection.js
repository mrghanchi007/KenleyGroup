"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Can someone self-refer?",
    a: "Yes, however professional referrals are preferred where support needs exist.",
  },
  {
    q: "What accommodation do you provide?",
    a: "Supported and semi-independent accommodation tailored to individual needs.",
  },
  {
    q: "Who can make referrals?",
    a: "Local authorities, social workers, charities, housing providers and professionals.",
  },
  {
    q: "What support is included?",
    a: "Accommodation, independent living support, tenancy sustainment and wellbeing support.",
  },
  {
    q: "How long can residents stay?",
    a: "Length of stay depends on support needs and agreed move-on plans.",
  },
  {
    q: "Do you work with landlords?",
    a: "Yes. We actively work with landlords and investors seeking long-term partnerships.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="px-6 pb-28">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
          FAQs
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <div className="mx-auto mt-14 max-w-3xl space-y-4">
        {FAQS.map((faq, i) => {
          const open = openIndex === i;
          return (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.3 : 1.3 }}
              whileHover={{ rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
            <motion.div
              className="bg-ink text-cream shadow-[0_16px_35px_rgba(12,13,13,0.18)]"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <button
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-serif text-lg font-semibold">
                  {faq.q}
                </span>
                <span
                  className={`font-serif text-2xl text-coral transition-transform duration-300 ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-neutral-400">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
