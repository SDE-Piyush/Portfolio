"use client";

import { EducationEntry } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ExternalLink, GraduationCap, Laptop } from "lucide-react";
import { TiltCard } from "./TiltCard";

type Props = {
  entry: EducationEntry;
  align: "left" | "right";
};

export function EducationCard({ entry, align }: Props) {
  const Icon = entry.icon === "graduation" ? GraduationCap : Laptop;

  return (
    <div
      className={cn(
        "relative w-full md:w-[calc(50%-2rem)]",
        align === "left" ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
      )}
    >
      <TiltCard>
        <article className="education-card rounded-2xl border border-white/10 bg-[#0d1528]/90 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-600 shadow-lg shadow-pink-500/20">
            <Icon size={22} className="text-white" strokeWidth={1.5} />
          </div>

          <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
            {entry.periodBadge}
          </span>

          <h3 className="mt-4 text-lg font-bold leading-snug text-white sm:text-xl">
            {entry.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-cyan-400">
            {entry.institution}
            {entry.location ? `, ${entry.location}` : ""}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {entry.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            ))}
            {entry.certificateUrl && (
              <a
                href={entry.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 underline decoration-cyan-500/50 underline-offset-4 transition hover:text-cyan-300"
              >
                View Certificate
                <ExternalLink size={12} />
              </a>
            )}
          </div>

          {entry.serialNo && (
            <p className="mt-3 font-mono text-[10px] text-zinc-600">
              Certificate Serial: {entry.serialNo}
            </p>
          )}
        </article>
      </TiltCard>
    </div>
  );
}
