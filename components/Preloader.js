"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/*
  Intro sequence (copied from the reference video):
  step 0 — small black dot pops in, then grows into a large circle
  step 1 — circle morphs into a rounded square and the logo fades in
  step 2 — the card shrinks back into a circle and flies up to the
           header badge position, while the beige overlay fades away
*/
export default function Preloader({ onFinish }) {
  const [step, setStep] = useState(0);
  const [flyY, setFlyY] = useState(-400);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1800);
    const t2 = setTimeout(() => {
      setFlyY(-(window.innerHeight / 2) - 10);
      setStep(2);
    }, 3200);
    const t3 = setTimeout(() => onFinish(), 4100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ backgroundColor: "rgba(216,207,198,1)" }}
      animate={
        step === 2
          ? { backgroundColor: "rgba(216,207,198,0)" }
          : { backgroundColor: "rgba(216,207,198,1)" }
      }
      transition={{ duration: 0.55, delay: step === 2 ? 0.3 : 0 }}
      style={{ pointerEvents: step === 2 ? "none" : "auto" }}
    >
      <motion.div
        className="flex items-center justify-center overflow-hidden bg-ink"
        initial={{ width: 14, height: 14, borderRadius: "50%", scale: 0 }}
        animate={
          step === 0
            ? {
                scale: 1,
                width: [14, 14, 210],
                height: [14, 14, 210],
                transition: {
                  scale: { duration: 0.45, ease: "backOut" },
                  width: { duration: 0.9, delay: 0.8, ease: "easeInOut" },
                  height: { duration: 0.9, delay: 0.8, ease: "easeInOut" },
                },
              }
            : step === 1
              ? {
                  scale: 1,
                  width: 232,
                  height: 232,
                  borderRadius: "20px",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }
              : {
                  scale: 1,
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  y: flyY,
                  transition: { duration: 0.85, ease: [0.65, 0, 0.35, 1] },
                }
        }
      >
        <motion.div
          className="px-3 text-center text-cream"
          initial={{ opacity: 0 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            scale: step === 2 ? 0.6 : 1,
          }}
          transition={{ duration: 0.45 }}
        >
          <p className="font-serif text-[34px] font-bold leading-[0.95]">
            Kenley
            <br />
            Group
          </p>
          <motion.p
            className="mt-3 text-[8px] uppercase tracking-[0.18em]"
            animate={{ opacity: step === 2 ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Stable Homes Built on Love
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
