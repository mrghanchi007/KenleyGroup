import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import StepList from "@/components/StepList";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Residents & Referrals — Kenley Group",
  description:
    "Who we support, referral criteria and our referral process. We work with local authorities, social workers and professionals to arrange placements quickly and safely.",
};

const WHO_WE_SUPPORT = [
  "Care leavers aged 16-25",
  "Homeless young adults",
  "Vulnerable adults",
  "Unaccompanied Asylum Seeking Children (18+ provision where appropriate)",
  "Individuals requiring supported move-on accommodation",
];

const CRITERIA = [
  "Be legally entitled to reside in the UK",
  "Require supported accommodation",
  "Demonstrate willingness to engage with support plans",
  "Meet local authority placement requirements",
];

const REFERRERS = [
  "Local Authorities",
  "Social Workers",
  "Leaving Care Teams",
  "Housing Officers",
  "Charities",
  "Support Providers",
  "Probation Services",
  "NHS Professionals",
];

const PROCESS = [
  "Initial referral submitted.",
  "Referral reviewed by placements team.",
  "Risk and needs assessment completed.",
  "Suitable property identified.",
  "Placement offer issued.",
  "Resident inducted and support plan agreed.",
  "Ongoing support delivered.",
];

export default function ReferralsPage() {
  return (
    <PageShell>
      <PageHero
        label="Residents & Referrals"
        title="Making a Referral"
        watermark="Referrals"
        text="We work with local authorities, social workers and professionals to arrange placements quickly and safely — with the right support plan from day one."
      />

      {/* Who we support + criteria */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="notch-br bg-ink p-8 text-cream">
            <h2 className="font-serif text-2xl font-bold">Who We Support</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-300">
              {WHO_WE_SUPPORT.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[2px] text-coral">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="notch-br bg-ink p-8 text-cream">
            <h2 className="font-serif text-2xl font-bold">
              Referral Criteria
            </h2>
            <p className="mt-3 text-sm text-neutral-400">Applicants should:</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-300">
              {CRITERIA.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-[2px] text-coral">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Specialist provision */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="notch-br bg-coral p-8">
            <div className="text-3xl">🎓</div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-ink">
              Care Leavers
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4a2e26]">
              We specialise in supporting care leavers aged 16-25 as they
              transition from care into independence — combining stable
              accommodation with life skills, education and employment support
              tailored to each young person&apos;s pathway plan.
            </p>
          </div>
          <div className="notch-br bg-coral p-8">
            <div className="text-3xl">🌍</div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-ink">
              Unaccompanied Asylum Seeking Children
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4a2e26]">
              We provide safe, culturally sensitive accommodation and support
              for unaccompanied asylum seeking young people, with 18+ provision
              where appropriate — working closely with local authority teams
              throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Referral process */}
      <section className="diag-bottom bg-beige px-6 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            How It Works
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
            Referral Process
          </h2>
        </div>
        <div className="mt-14">
          <StepList steps={PROCESS} />
        </div>
      </section>

      {/* Who can refer + commissioning */}
      <section className="diag-bottom bg-ink px-6 pb-36 pt-24 text-cream">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Professionals
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold">Who Can Refer</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {REFERRERS.map((referrer) => (
              <span
                key={referrer}
                className="rounded-full border border-neutral-700 px-5 py-2 text-sm text-neutral-300"
              >
                {referrer}
              </span>
            ))}
          </div>
          <div className="notch-br mx-auto mt-14 max-w-2xl bg-card p-8 text-left">
            <h3 className="font-serif text-2xl font-bold">
              Local Authority Commissioning
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              We work with local authority commissioning and placements teams
              across Peterborough, Cambridgeshire and surrounding regions —
              offering spot purchase and block contract arrangements, clear
              reporting and reliable placement availability. Contact our team
              to discuss commissioning requirements or to request our service
              specification.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        watermark="Refer Today"
        title="Ready to Refer?"
        text="Self-referrals are accepted, however professional referrals are preferred where support needs exist. Our placements team responds quickly to all enquiries."
        buttons={[
          { label: "Submit a Referral Enquiry", href: "/contact" },
          { label: "Call 01733 567888", href: "tel:01733567888" },
        ]}
      />
    </PageShell>
  );
}
