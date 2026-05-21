"use client";

import { personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowDown, GitFork, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-sm text-pink-200">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Available for opportunities
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="gradient-heading">{personal.name}</span>
        </h1>

        <p className="mt-4 text-xl font-medium text-cyan-200/90 sm:text-2xl">
          {personal.title}
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          {personal.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-gradient-to-r from-pink-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-600/20 transition hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href={personal.resumePath}
            download
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/10"
          >
            Download CV
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          {[
            { href: personal.github, icon: GitFork, label: "GitHub" },
            { href: personal.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
            {
              href: personal.whatsappUrl,
              icon: WhatsAppIcon,
              label: "WhatsApp",
            },
            { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className={cn(
                "rounded-xl border border-white/10 bg-white/5 p-3 text-zinc-400 transition",
                label === "WhatsApp"
                  ? "hover:border-emerald-500/40 hover:text-emerald-400"
                  : "hover:border-pink-500/40 hover:text-cyan-300"
              )}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="mt-16 inline-flex flex-col items-center gap-2 text-zinc-500 transition hover:text-pink-300"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
