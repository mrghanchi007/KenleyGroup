import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Community & Partnerships — Kenley Group",
  description:
    "We partner with local authorities, housing providers, NHS services, education providers, employment services and charities to create sustainable solutions and positive change.",
};

const PARTNER_TYPES = [
  { icon: "🏛️", title: "Local Authorities" },
  { icon: "🏘️", title: "Housing Providers" },
  { icon: "🫶", title: "Social Care Providers" },
  { icon: "🏥", title: "NHS Services" },
  { icon: "🎓", title: "Education Providers" },
  { icon: "💼", title: "Employment Services" },
  { icon: "🤝", title: "Charities & Community Organisations" },
];

const OPPORTUNITIES = [
  {
    title: "Property Leasing",
    text: "Lease your property to Kenley Group for guaranteed income and professional management.",
  },
  {
    title: "Supported Accommodation Commissioning",
    text: "Commission placements with clear reporting, quality assurance and reliable availability.",
  },
  {
    title: "Joint Service Delivery",
    text: "Deliver services together — combining expertise to improve outcomes for residents.",
  },
  {
    title: "Community Projects",
    text: "Partner on projects that help residents build skills, networks and opportunities.",
  },
];

export default function CommunityPage() {
  return (
    <PageShell>
      <PageHero
        label="Community & Partnerships"
        title="A Community-Wide Effort"
        watermark="Together"
        text="Addressing housing challenges requires collaboration, innovation and shared purpose. We bring together various partners to create sustainable solutions and positive change."
      />

      {/* Partnership types */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Who We Work With
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold">
            Current Partnership Types
          </h2>
        </div>
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          {PARTNER_TYPES.map((partner) => (
            <div
              key={partner.title}
              className="notch-sm flex items-center gap-3 bg-ink px-6 py-4 text-cream"
            >
              <span className="text-2xl">{partner.icon}</span>
              <span className="text-sm font-medium">{partner.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunities */}
      <section className="diag-bottom bg-ink px-6 pb-36 pt-24 text-cream">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Opportunities
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold">
            Partnership Opportunities
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {OPPORTUNITIES.map((opp, i) => (
            <div key={opp.title} className="notch-br bg-card p-8">
              <span className="font-serif text-4xl font-bold text-coral">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-bold">
                {opp.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {opp.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        watermark="Partner"
        title="Partner With Us"
        text="If your organisation shares our commitment to better outcomes for vulnerable people, we would love to explore how we can work together."
        buttons={[
          { label: "Speak to Our Team", href: "/contact" },
          { label: "Landlords & Investors", href: "/landlords" },
        ]}
      />
    </PageShell>
  );
}
