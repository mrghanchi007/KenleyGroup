import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FloatCard from "@/components/FloatCard";
import StepList from "@/components/StepList";
import CTASection from "@/components/CTASection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Landlords & Investors — Kenley Group",
  description:
    "Guaranteed rental income, long-term leases, reduced void periods and professional property management — partner with Kenley Group through our landlord leasing programme.",
};

const BENEFITS = [
  {
    icon: "💷",
    title: "Guaranteed Rental Income",
    text: "Rent paid reliably — no missed payments, no chasing.",
  },
  {
    icon: "📅",
    title: "Long-Term Leases",
    text: "Secure, long-term lease agreements that give you certainty.",
  },
  {
    icon: "🔒",
    title: "Reduced Void Periods",
    text: "Consistent demand for quality accommodation keeps properties occupied.",
  },
  {
    icon: "🛠️",
    title: "Professional Property Management",
    text: "Day-to-day management handled by our experienced housing team.",
  },
  {
    icon: "🔍",
    title: "Regular Inspections",
    text: "Scheduled inspections keep your property maintained to standard.",
  },
  {
    icon: "🌟",
    title: "Social Impact Investment",
    text: "Your property directly helps vulnerable people rebuild their lives.",
  },
];

const REQUIREMENTS = [
  "Good quality accommodation",
  "Compliance with safety standards",
  "Suitable for supported accommodation use",
];

const PROCESS = [
  "Initial discussion",
  "Property assessment",
  "Due diligence",
  "Lease agreement",
  "Resident placement",
  "Ongoing management",
];

export default function LandlordsPage() {
  return (
    <PageShell>
      <PageHero
        label="Landlords & Investors"
        title="Landlord Leasing Programme"
        watermark="Partner"
        text="Lease your property to Kenley Group for guaranteed rental income, professional management and genuine social impact."
      />

      {/* Benefits */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Why Partner With Kenley
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold">
            The Benefits
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <FloatCard key={benefit.title} i={i} className="bg-ink p-8 text-cream">
              <div className="text-3xl">{benefit.icon}</div>
              <h3 className="mt-5 font-serif text-xl font-bold">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {benefit.text}
              </p>
            </FloatCard>
          ))}
        </div>
      </section>

      {/* Requirements + Process */}
      <section className="diag-bottom bg-ink px-6 pb-36 pt-24 text-cream">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
              Property Requirements
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold">
              What We Look For
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-300">
              {REQUIREMENTS.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <span className="mt-[2px] text-coral">&#10003;</span>
                  {req}
                </li>
              ))}
            </ul>
            <FloatCard i={1} className="mt-10 bg-card p-8">
              <h3 className="font-serif text-xl font-bold">
                Property Portfolio
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                Our growing portfolio spans Peterborough, Cambridgeshire and
                surrounding regions — from shared supported houses to
                semi-independent flats. See a selection of our homes below.
              </p>
            </FloatCard>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
              Simple Process
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold">
              How It Works
            </h2>
            <ol className="mt-6 space-y-5">
              {PROCESS.map((step, i) => (
                <li key={step} className="flex items-center gap-5">
                  <span className="font-serif text-3xl font-bold leading-none text-coral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-neutral-300">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Property portfolio gallery */}
      <section id="portfolio" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Property Portfolio
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold">
            A Look Inside Our Homes
          </h2>
        </div>
        <div className="mt-14">
          <GalleryGrid
            cols={3}
            photos={[
              {
                src: "/images/garden-patio.webp",
                alt: "Communal garden with outdoor seating area",
              },
              {
                src: "/images/bedroom.webp",
                alt: "Fully furnished bedroom",
              },
              {
                src: "/images/kitchen.webp",
                alt: "Modern fitted kitchen",
              },
              {
                src: "/images/dining-room.webp",
                alt: "Shared dining area",
              },
              {
                src: "/images/lounge.webp",
                alt: "Communal lounge and study space",
              },
              {
                src: "/images/garden-george.webp",
                alt: "Garden space with seating at The George by Kenley Group",
              },
            ]}
          />
        </div>
      </section>

      <CTASection
        watermark="Lease to Us"
        title="Become a Landlord Partner"
        text="Have a property that could provide a stable home? Start with a no-obligation conversation with our property team."
        buttons={[
          { label: "Speak to Our Property Team", href: "/contact" },
          { label: "Call 01733 567888", href: "tel:01733567888" },
        ]}
      />
    </PageShell>
  );
}
