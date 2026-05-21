"use client";

import { skills } from "@/data/portfolio";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { key: "languages" as const, label: "Languages" },
  { key: "frameworks" as const, label: "Frameworks & Libraries" },
  { key: "tools" as const, label: "Tools & Technologies" },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Skills"
            title="Tech stack I work with"
            description="Organized by category from my resume."
          />
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {groups.map((group) => (
            <AnimatedSection key={group.key}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#0d1528]/60 p-6 backdrop-blur-sm">
                <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-pink-400">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[group.key].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-[#0a1020] px-3 py-1.5 text-sm text-zinc-300 transition hover:border-cyan-500/40 hover:text-cyan-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
