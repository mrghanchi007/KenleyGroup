"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Residents & Referrals", href: "/referrals" },
  { label: "Support Services", href: "/services" },
  { label: "Community", href: "/community" },
  { label: "Landlords & Investors", href: "/landlords" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ showBadge }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <motion.button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className={`notch-sm fixed left-6 top-6 z-[70] flex h-11 w-11 flex-col items-center justify-center gap-[5px] transition-colors duration-300 ${
          open ? "bg-coral" : "bg-ink hover:bg-coral"
        }`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: showBadge ? 1 : 0, x: showBadge ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span
          className={`h-[2px] w-5 bg-cream transition-transform duration-300 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[2px] w-5 bg-cream transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[2px] w-5 bg-cream transition-transform duration-300 ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </motion.button>

      {/* Logo badge — half circle hanging from the top center */}
      {showBadge && (
        <div className="pointer-events-none fixed left-1/2 top-[-85px] z-[60] h-[150px] w-[150px] -translate-x-1/2">
          <div className="flex h-full w-full flex-col items-center justify-end rounded-full bg-ink pb-4 text-center text-cream">
            <p className="translate-y-[3px] font-serif text-[20px] font-bold leading-[0.95]">
              Kenley
              <br />
              Group
            </p>
          </div>
        </div>
      )}

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="menu-panel fixed inset-0 z-[65] bg-ink"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <ul className="flex h-full flex-col justify-center gap-2 pl-7 md:gap-1 md:pl-16">
              {MENU_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-[26px] font-bold text-cream transition-colors hover:text-coral md:text-5xl"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
