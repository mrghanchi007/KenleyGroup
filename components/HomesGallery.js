"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ForgetfulArrow } from "./FunFx";
import GalleryGrid from "./GalleryGrid";

const PHOTOS = [
  {
    src: "/images/garden-patio.webp",
    alt: "Communal garden with outdoor seating at a Kenley Group home",
  },
  {
    src: "/images/bedroom.webp",
    alt: "Fully furnished bedroom in a Kenley Group property",
  },
  {
    src: "/images/kitchen.webp",
    alt: "Modern fitted kitchen in a Kenley Group property",
  },
];

export default function HomesGallery() {
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
          Property Portfolio
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
          Our Homes
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-neutral-600">
          Safe, fully furnished and well-maintained accommodation — from
          communal gardens to comfortable bedrooms and modern kitchens.
        </p>
      </motion.div>

      <div className="mt-14">
        <GalleryGrid photos={PHOTOS} cols={3} />
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/landlords#portfolio"
          className="group inline-flex items-center gap-2 border-b border-coral pb-1 text-sm font-medium uppercase tracking-[0.2em]"
        >
          Explore the Portfolio
          <ForgetfulArrow />
        </Link>
      </div>
    </section>
  );
}
