"use client";

import { about, personal } from "@/data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";
import { MapPin, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="About"
            title="Crafting full-stack experiences"
            description="From API design to polished UIs—I focus on secure, scalable, and user-friendly software."
          />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
              <p className="text-lg leading-relaxed text-zinc-300">{about.summary}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
                <MapPin size={16} className="text-violet-400" />
                {personal.location}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {about.highlights.map((item) => (
                <li
                  key={item}
                  className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-violet-500/30 hover:bg-violet-500/5"
                >
                  <Sparkles
                    size={18}
                    className="mt-0.5 shrink-0 text-violet-400 transition group-hover:scale-110"
                  />
                  <span className="text-sm leading-relaxed text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
