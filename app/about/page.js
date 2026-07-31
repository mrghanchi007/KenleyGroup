import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "About Us — Kenley Group",
  description:
    "Founded to address the shortage of high-quality supported accommodation, Kenley Group supports care leavers, homeless individuals and unaccompanied asylum seeking young people.",
};

const VALUES = [
  { icon: "💛", title: "Compassion" },
  { icon: "🏠", title: "Stability" },
  { icon: "🛡️", title: "Integrity" },
  { icon: "💡", title: "Innovation" },
  { icon: "💪", title: "Empowerment" },
  { icon: "🤝", title: "Collaboration" },
];

const AREAS = [
  "Peterborough",
  "Cambridgeshire",
  "East Midlands",
  "East of England",
  "Neighbouring Local Authority Areas",
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="About Us"
        title="Our Story"
        watermark="Story"
        text="Kenley Group was created to address the growing shortage of high-quality supported accommodation for vulnerable individuals transitioning into independence."
      />

      {/* Story */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-6 leading-relaxed text-neutral-700">
          <p>
            Founded by Abdul Khan, Kenley Group was created to address the
            growing shortage of high-quality supported accommodation for
            vulnerable individuals transitioning into independence.
          </p>
          <p>
            Drawing upon extensive experience in housing, social care and
            supported accommodation, the organisation was established to create
            environments where people are not simply housed but genuinely
            supported to succeed.
          </p>
          <p>
            Today Kenley Group operates across multiple accommodation settings
            supporting care leavers, homeless individuals and unaccompanied
            asylum seeking young people.
          </p>
        </div>
        <div className="mt-12">
          <GalleryGrid
            cols={2}
            photos={[
              {
                src: "/images/garden-courtyard.webp",
                alt: "Landscaped communal courtyard garden at a Kenley Group home",
              },
              {
                src: "/images/dining-room.webp",
                alt: "Shared dining area in a Kenley Group property",
                notch: "notch-bl",
              },
            ]}
          />
        </div>
      </section>

      {/* Mission / Vision / Purpose */}
      <section className="diag-bottom bg-ink px-6 pb-36 pt-24 text-cream">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="notch-br bg-card p-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
              Mission
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
              To provide stable homes built on love, empowering vulnerable
              individuals to develop independence, confidence and life skills
              needed for successful adulthood.
            </p>
          </div>
          <div className="notch-br bg-card p-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
              Vision
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
              A society where every vulnerable young person has access to safe
              accommodation, meaningful support and opportunities to thrive
              independently.
            </p>
          </div>
          <div className="notch-br bg-card p-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
              Core Purpose
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
              Transforming lives through housing, support and social
              innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Our Values
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
            What Guides Us
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title} className="notch-br bg-ink p-7 text-center">
              <div className="text-3xl">{value.icon}</div>
              <p className="mt-4 font-serif text-xl font-bold text-cream">
                {value.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Leadership
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
            Our Team
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-3xl gap-6 md:grid-cols-2">
          <div className="notch-br bg-ink p-8 text-center text-cream">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-coral font-serif text-3xl font-bold text-ink">
              AK
            </div>
            <h3 className="mt-5 font-serif text-2xl font-bold">Abdul Khan</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-coral">
              Chief Executive Officer
            </p>
          </div>
          <div className="notch-br bg-ink p-8 text-center text-cream">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-coral font-serif text-3xl font-bold text-ink">
              GD
            </div>
            <h3 className="mt-5 font-serif text-2xl font-bold">Ged Dempsey</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-coral">
              Chairman
            </p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center leading-relaxed text-neutral-600">
          Behind our leadership sits a dedicated team of senior managers,
          support workers, housing officers and referral coordinators working
          together to deliver positive outcomes every day.
        </p>
      </section>

      {/* Social Innovation + Compliance */}
      <section className="diag-bottom bg-ink px-6 pb-36 pt-24 text-cream">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="notch-br bg-card p-8">
            <div className="text-3xl">🚀</div>
            <h3 className="mt-5 font-serif text-2xl font-bold">
              Social Innovation
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              We continually look for new ways to improve outcomes — from
              partnerships with education and employment services to community
              projects that help our residents build networks, skills and
              opportunities beyond their front door.
            </p>
          </div>
          <div className="notch-br bg-card p-8">
            <div className="text-3xl">📋</div>
            <h3 className="mt-5 font-serif text-2xl font-bold">
              Regulation &amp; Compliance
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Our properties are maintained in line with all relevant health
              and safety requirements, our staff are subject to enhanced DBS
              checks, and our support delivery aligns with local authority
              commissioning and placement standards. Compliance documentation
              is available to commissioning partners on request.
            </p>
            <img
              src="/images/ofsted.webp"
              alt="Ofsted"
              loading="lazy"
              className="mt-6 h-16 w-auto rounded-md"
            />
          </div>
        </div>

        {/* Areas covered */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
            Areas Covered
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-neutral-700 px-5 py-2 text-sm text-neutral-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        watermark="Work With Us"
        title="Work With Us"
        text="Whether you are a professional looking to place someone, a landlord with property to lease, or a partner organisation — we would love to hear from you."
        buttons={[
          { label: "Speak to Our Team", href: "/contact" },
          { label: "Join Our Team", href: "/careers" },
        ]}
      />
    </PageShell>
  );
}
