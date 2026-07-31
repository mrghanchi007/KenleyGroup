"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  Round "Legal" button pinned to the footer's bottom-right corner.
  Clicking it pops up a small card with the legal links.
*/
export default function LegalPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute bottom-6 right-5 z-20 md:right-10">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="absolute bottom-[76px] right-0 w-48 origin-bottom-right bg-white p-5 shadow-[0_18px_40px_rgba(12,13,13,0.4)]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>
                <a href="#" className="transition-colors hover:text-ink">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-ink">
                  Terms of Use
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Legal links"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-coral font-serif text-xs font-bold uppercase tracking-[0.1em] text-ink shadow-[0_12px_30px_rgba(230,156,133,0.4)]"
      >
        Legal
      </motion.button>
    </div>
  );
}
