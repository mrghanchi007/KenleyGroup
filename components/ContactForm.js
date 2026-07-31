"use client";

import { useState } from "react";

const inputClass =
  "w-full border border-neutral-400 bg-transparent px-4 py-3 text-sm text-ink placeholder-neutral-500 outline-none transition-colors focus:border-ink";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    subject: "General Enquiry",
    message: "",
  });

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Organisation: ${form.organisation}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:office@kenleygroup.co.uk?subject=${encodeURIComponent(
      `${form.subject} — ${form.name}`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          placeholder="Full Name *"
          value={form.name}
          onChange={update("name")}
          className={inputClass}
        />
        <input
          required
          type="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={update("email")}
          className={inputClass}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          placeholder="Phone Number"
          value={form.phone}
          onChange={update("phone")}
          className={inputClass}
        />
        <input
          placeholder="Organisation (if applicable)"
          value={form.organisation}
          onChange={update("organisation")}
          className={inputClass}
        />
      </div>
      <select
        value={form.subject}
        onChange={update("subject")}
        className={inputClass}
      >
        <option>General Enquiry</option>
        <option>Referral Enquiry</option>
        <option>Landlord / Investor Enquiry</option>
        <option>Partnership Enquiry</option>
        <option>Career Enquiry</option>
      </select>
      <textarea
        required
        rows={6}
        placeholder="Your Message *"
        value={form.message}
        onChange={update("message")}
        className={inputClass}
      />
      <button
        type="submit"
        className="notch-br group inline-flex items-center gap-3 bg-ink px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-cream"
      >
        Send Message
        <span className="transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </button>
    </form>
  );
}
