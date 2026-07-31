import Link from "next/link";
import FloatCard from "./FloatCard";
import FloatingShapes from "./FloatingShapes";
import LegalPopup from "./LegalPopup";

const PAGES = [
  { label: "Home", href: "/", featured: true },
  { label: "About Us", href: "/about" },
  { label: "Residents & Referrals", href: "/referrals" },
  { label: "Support Services", href: "/services" },
  { label: "Community", href: "/community" },
  { label: "Landlords & Investors", href: "/landlords" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact", featured: true },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-6 pb-10 pt-20 text-neutral-400">
      <FloatingShapes />
      <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-2 lg:grid-cols-4">
        <FloatCard i={0} className="bg-coral p-8">
          <p className="font-serif text-2xl font-bold leading-none text-ink">
            Kenley
            <br />
            Group
          </p>
          <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#4a2e26]">
            Stable Homes Built on Love
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#4a2e26]">
            Award-winning provider of supported and semi-independent
            accommodation for vulnerable young people and adults across
            Cambridgeshire and surrounding regions.
          </p>
        </FloatCard>

        <FloatCard i={1} className="bg-card p-8 md:mt-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Pages
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {PAGES.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={
                    page.featured
                      ? "font-serif text-[28px] font-bold leading-tight text-coral transition-colors hover:text-cream"
                      : "transition-colors hover:text-cream"
                  }
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </FloatCard>

        <FloatCard i={2} className="bg-white p-8 lg:-mt-3">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm text-neutral-700">
            <li>
              <a
                href="tel:01733567888"
                className="transition-colors hover:text-ink"
              >
                01733 567888
              </a>
            </li>
            <li>
              <a
                href="mailto:office@kenleygroup.co.uk"
                className="transition-colors hover:text-ink"
              >
                office@kenleygroup.co.uk
              </a>
            </li>
            <li className="leading-relaxed">
              33 Park Crescent,
              <br />
              Peterborough,
              <br />
              PE1 4DX, United Kingdom
            </li>
          </ul>
        </FloatCard>

        <FloatCard i={3} className="bg-card p-8 md:mt-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Connect
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {["Instagram", "LinkedIn", "Facebook"].map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-cream">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </FloatCard>
      </div>

      <LegalPopup />

      <div className="relative z-10 mx-auto mt-16 max-w-6xl border-t border-neutral-800 pt-6 text-xs text-neutral-600">
        &copy; {new Date().getFullYear()} Kenley Group Ltd. All rights
        reserved. &middot; Registered in England &amp; Wales &middot; Company
        No. 13871236
      </div>
    </footer>
  );
}
