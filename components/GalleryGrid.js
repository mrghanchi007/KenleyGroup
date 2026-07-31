"use client";

import { motion } from "framer-motion";

/*
  Animated photo grid:
  - left column slides in from the left
  - middle column scales up from the centre
  - right column slides in from the right
*/
export default function GalleryGrid({ photos, cols = 3 }) {
  const initialFor = (i) => {
    const pos = i % cols;
    if (cols === 2) {
      return pos === 0 ? { opacity: 0, x: -70 } : { opacity: 0, x: 70 };
    }
    if (pos === 0) return { opacity: 0, x: -70 };
    if (pos === 1) return { opacity: 0, scale: 0.6 };
    return { opacity: 0, x: 70 };
  };

  const gridClass =
    cols === 2
      ? "mx-auto grid max-w-4xl gap-6 sm:grid-cols-2"
      : "mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={gridClass}>
      {photos.map((photo, i) => (
        <motion.div
          key={photo.src}
          className="aspect-[4/3] overflow-hidden bg-ink shadow-[0_18px_40px_rgba(12,13,13,0.25)]"
          initial={initialFor(i)}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: [-2, 1.5, 2, -1.5, 2.5, -2.5][i % 6],
          }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: (i % cols) * 0.08 }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
}
