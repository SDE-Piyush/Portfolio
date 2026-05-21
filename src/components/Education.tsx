"use client";

import { educationEntries } from "@/data/portfolio";
import { EducationCard } from "./ui/EducationCard";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="gradient-heading text-4xl font-bold tracking-[0.12em] sm:text-5xl">
            EDUCATION
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.35em] text-zinc-400">
            MY ACADEMIC JOURNEY
          </p>
          <div className="gradient-divider mx-auto mt-5 h-0.5 w-24" />
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(180deg, rgba(192,132,252,0.8) 0%, rgba(34,211,238,0.8) 50%, rgba(236,72,153,0.6) 100%)",
              boxShadow: "0 0 12px rgba(139, 92, 246, 0.4)",
            }}
          />

          <div className="space-y-10 md:space-y-16">
            {educationEntries.map((entry, i) => {
              const align = i % 2 === 0 ? "left" : "right";
              return (
                <div key={entry.id} className="relative md:min-h-[200px]">
                  <span className="absolute left-4 top-8 z-10 h-3 w-3 rounded-full border-2 border-cyan-400 bg-[#060b18] shadow-[0_0_10px_rgba(34,211,238,0.8)] md:left-1/2 md:h-4 md:w-4 md:-translate-x-1/2" />

                  <div className="pl-10 md:pl-0">
                    <EducationCard entry={entry} align={align} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
