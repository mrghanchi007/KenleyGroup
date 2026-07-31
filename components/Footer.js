import Link from "next/link";

const PAGES = [
  { label: "About Us", href: "/about" },
  { label: "Residents & Referrals", href: "/referrals" },
  { label: "Support Services", href: "/services" },
  { label: "Community", href: "/community" },
  { label: "Landlords & Investors", href: "/landlords" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 pt-16 text-neutral-400">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-bold leading-none text-cream">
            Kenley
            <br />
            Group
          </p>
          <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-neutral-500">
            Stable Homes Built on Love
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Award-winning provider of supported and semi-independent
            accommodation for vulnerable young people and adults across
            Cambridgeshire and surrounding regions.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Pages
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {PAGES.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="transition-colors hover:text-cream"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Contact
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href="tel:01733567888"
                className="transition-colors hover:text-cream"
              >
                01733 567888
              </a>
            </li>
            <li>
              <a
                href="mailto:office@kenleygroup.co.uk"
                className="transition-colors hover:text-cream"
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
        </div>

        <div>
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
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Legal
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="#" className="transition-colors hover:text-cream">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-cream">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-neutral-800 pt-6 text-xs text-neutral-600">
        &copy; {new Date().getFullYear()} Kenley Group Ltd. All rights
        reserved. &middot; Registered in England &amp; Wales &middot; Company
        No. 13871236
      </div>
    </footer>
  );
}
