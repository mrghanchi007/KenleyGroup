import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FloatCard from "@/components/FloatCard";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Kenley Group",
  description:
    "Speak to our team about referrals, partnerships, landlord opportunities or careers. Call 01733 567888 or email office@kenleygroup.co.uk.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        label="Contact"
        title="Speak to Our Team"
        watermark="Contact"
        text="Whether it's a referral, a partnership, a property or a career — our team is ready to help."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.3fr]">
          {/* Contact details */}
          <div className="space-y-6">
            <FloatCard i={0} className="bg-ink p-8 text-cream">
              <h2 className="font-serif text-2xl font-bold">Get In Touch</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li>
                  <p className="text-xs uppercase tracking-[0.25em] text-coral">
                    Telephone
                  </p>
                  <a
                    href="tel:01733567888"
                    className="mt-1 block text-lg transition-colors hover:text-coral"
                  >
                    01733 567888
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.25em] text-coral">
                    Email
                  </p>
                  <a
                    href="mailto:office@kenleygroup.co.uk"
                    className="mt-1 block transition-colors hover:text-coral"
                  >
                    office@kenleygroup.co.uk
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-[0.25em] text-coral">
                    Address
                  </p>
                  <p className="mt-1 leading-relaxed">
                    33 Park Crescent,
                    <br />
                    Peterborough,
                    <br />
                    PE1 4DX,
                    <br />
                    United Kingdom
                  </p>
                </li>
              </ul>
            </FloatCard>
            <FloatCard i={1} className="bg-coral p-8">
              <h3 className="font-serif text-xl font-bold text-ink">
                Company Registration
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4a2e26]">
                Kenley Group Ltd
                <br />
                Registered in England &amp; Wales
                <br />
                Company Number: 13871236
              </p>
            </FloatCard>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold">Send a Message</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Fill in the form below and our team will get back to you as soon
              as possible.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
