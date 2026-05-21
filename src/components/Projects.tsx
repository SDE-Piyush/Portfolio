"use client";

import { projects } from "@/data/portfolio";
import { ExternalLink, GitFork, Star } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Full-stack applications built during training and personal development."
          />
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <AnimatedSection key={project.name}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1528]/60 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-pink-500/25">
                {project.featured && (
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-pink-500/20 px-2 py-1 text-xs text-pink-300">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}

                <p className="font-mono text-xs text-zinc-500">{project.period}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{project.name}</h3>
                <p className="text-sm text-cyan-300/90">{project.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-zinc-500">
                      <span className="text-pink-400">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-500/40 hover:text-white"
                  >
                    <GitFork size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-600/90 to-cyan-600/90 px-4 py-2 text-sm text-white transition hover:opacity-90"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
