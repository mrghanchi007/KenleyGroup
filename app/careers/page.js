import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Careers — Kenley Group",
  description:
    "Join a team that transforms lives through housing, support and social innovation. Roles include support workers, housing officers and referral coordinators.",
};

const ROLES = [
  {
    icon: "🧑‍🤝‍🧑",
    title: "Support Workers",
    text: "Work directly with residents — delivering support plans, building trust and helping people develop the skills for independent living.",
  },
  {
    icon: "🏠",
    title: "Housing Officers",
    text: "Keep our properties safe, compliant and well maintained — the stable foundation everything else is built on.",
  },
  {
    icon: "📞",
    title: "Referral Coordinators",
    text: "Be the first point of contact for professionals — assessing referrals and matching people to the right accommodation.",
  },
  {
    icon: "📈",
    title: "Management & Office Roles",
    text: "From service management to operations — help lead and grow an organisation with real social purpose.",
  },
];

const PERKS = [
  "Meaningful work with visible impact",
  "Supportive, values-driven team culture",
  "Training and career development",
  "Growing organisation with progression opportunities",
];

export default function CareersPage() {
  return (
    <PageShell>
      <PageHero
        label="Careers"
        title="Work That Changes Lives"
        watermark="Careers"
        text="Join a team that transforms lives through housing, support and social innovation — every role at Kenley Group contributes to someone's brighter future."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {ROLES.map((role) => (
            <div key={role.title} className="notch-br bg-ink p-8 text-cream">
              <div className="text-3xl">{role.icon}</div>
              <h2 className="mt-5 font-serif text-2xl font-bold">
                {role.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                {role.text}
              </p>
            </div>
          ))}
        </div>

        <div className="notch-br mx-auto mt-12 max-w-5xl bg-coral p-8 md:p-10">
          <h2 className="font-serif text-2xl font-bold text-ink">
            Why Work With Us
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-[#4a2e26] md:grid-cols-2">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="mt-[2px] text-ink">&#10003;</span>
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        watermark="Join Us"
        title="Join Our Team"
        text="We are always interested in hearing from passionate, values-driven people. Send us your CV and tell us why you would like to work at Kenley Group."
        buttons={[
          {
            label: "Email Your CV",
            href: "mailto:office@kenleygroup.co.uk?subject=Career%20Enquiry",
          },
        ]}
      />
    </PageShell>
  );
}
