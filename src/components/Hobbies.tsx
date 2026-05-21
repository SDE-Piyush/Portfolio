"use client";

import { hobbies } from "@/data/portfolio";
import { Camera, Code2, Film, PenLine } from "lucide-react";
import { HobbyCube } from "./hobbies/HobbyCube";

const hobbyIcons = [Camera, PenLine, Film, Code2];

export function Hobbies() {
  return (
    <section id="hobbies" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="gradient-heading text-4xl font-bold tracking-[0.15em] sm:text-5xl">
            HOBBIES
          </h2>
          <div className="gradient-divider mx-auto mt-4 h-0.5 w-24" />
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.35em] text-zinc-300">
            {hobbies.subtitle}
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <HobbyCube />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              {hobbies.introTitle}
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
              {hobbies.introDescription}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {hobbies.items.map((item, i) => {
                const Icon = hobbyIcons[i];
                return (
                  <article
                    key={item.title}
                    className="hobby-card group flex gap-4 rounded-2xl border border-white/10 bg-[#0d1528]/80 p-5 backdrop-blur-sm transition hover:border-pink-500/30 hover:bg-[#111d36]/90"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-cyan-500/20">
                      <Icon
                        size={22}
                        className="text-cyan-300 transition group-hover:text-pink-300"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-zinc-500 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
