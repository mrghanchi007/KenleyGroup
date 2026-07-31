import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FloatCard from "@/components/FloatCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Support Services — Kenley Group",
  description:
    "Accommodation support, independent living skills, tenancy support, health and wellbeing, education and employment, and move-on support.",
};

const SERVICES = [
  {
    icon: "🏠",
    title: "Accommodation Support",
    items: [
      "Fully furnished accommodation",
      "Safe and secure environments",
      "24-hour emergency support",
    ],
  },
  {
    icon: "🧭",
    title: "Independent Living",
    items: [
      "Budgeting skills",
      "Cooking and nutrition",
      "Cleaning and housekeeping",
      "Utility management",
    ],
  },
  {
    icon: "📋",
    title: "Tenancy Support",
    items: [
      "Rent management",
      "Understanding tenancy agreements",
      "Sustaining accommodation",
    ],
  },
  {
    icon: "💚",
    title: "Health & Wellbeing",
    items: [
      "GP registration",
      "Mental health support referrals",
      "Substance misuse services",
    ],
  },
  {
    icon: "🎓",
    title: "Education & Employment",
    items: [
      "CV preparation",
      "Job applications",
      "College enrolment",
      "Training opportunities",
    ],
  },
  {
    icon: "🚪",
    title: "Move-On Support",
    items: [
      "Transition into independent living",
      "Private rented sector support",
      "Housing applications",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        label="Support Services"
        title="Support That Builds Independence"
        watermark="Support"
        text="Every resident receives a personalised support plan — practical, consistent help across every area of life, from day one through to move-on."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <FloatCard key={service.title} i={i} className="bg-ink p-8 text-cream">
              <div className="text-4xl">{service.icon}</div>
              <h2 className="mt-5 font-serif text-2xl font-bold">
                {service.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-300">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[2px] text-coral">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FloatCard>
          ))}
        </div>
      </section>

      <CTASection
        watermark="Get Support"
        title="Discuss a Placement"
        text="Our placements team can talk through support needs, availability and how our services can be tailored around the individual."
        buttons={[
          { label: "Make a Referral", href: "/referrals" },
          { label: "Contact Our Team", href: "/contact" },
        ]}
      />
    </PageShell>
  );
}
