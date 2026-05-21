"use client";

import { personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GitFork, Mail, Phone, Send } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            description="Reach out for collaborations, internships, or full-time roles."
          />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: personal.email,
                  href: `mailto:${personal.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: personal.phone,
                  href: `tel:${personal.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: WhatsAppIcon,
                  label: "WhatsApp",
                  value: personal.whatsapp,
                  href: personal.whatsappUrl,
                },
                {
                  icon: LinkedInIcon,
                  label: "LinkedIn",
                  value: "piyush-kumar-b575a81b5",
                  href: personal.linkedin,
                },
                {
                  icon: GitFork,
                  label: "GitHub",
                  value: "SDE-Piyush",
                  href: personal.github,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={
                    label !== "Email" && label !== "Phone" ? "_blank" : undefined
                  }
                  rel={
                    label !== "Email" && label !== "Phone"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ x: 6 }}
                  className={cn(
                    "flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition",
                    label === "WhatsApp"
                      ? "hover:border-emerald-500/30"
                      : "hover:border-violet-500/30"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-lg p-3",
                      label === "WhatsApp"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-violet-500/15 text-violet-300"
                    )}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">
                      {label}
                    </p>
                    <p className="text-sm text-white">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-zinc-400">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-[#0a0a12] px-4 py-2.5 text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-zinc-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-[#0a0a12] px-4 py-2.5 text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-white/10 bg-[#0a0a12] px-4 py-2.5 text-white outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20"
                    placeholder="Tell me about your project or role..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                <Send size={16} />
                {submitted ? "Opening your email client..." : "Send Message"}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
