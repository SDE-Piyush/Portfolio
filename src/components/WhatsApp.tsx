"use client";

import { personal } from "@/data/portfolio";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { AnimatedSection } from "./AnimatedSection";

const defaultMessage = encodeURIComponent(
  "Hi Piyush! I came across your portfolio and would like to connect."
);

export function WhatsApp() {
  const chatUrl = `${personal.whatsappUrl}?text=${defaultMessage}`;

  return (
    <section id="whatsapp" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-[#0c1410] to-[#07070d] p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                <WhatsAppIcon size={40} />
              </div>

              <div className="flex-1">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
                  Quick chat
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  DM me on WhatsApp
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                  Prefer a direct message? Tap below to start a conversation on
                  WhatsApp — I usually reply within a day.
                </p>
                <p className="mt-2 font-mono text-sm text-emerald-300/90">
                  {personal.whatsapp}
                </p>
              </div>

              <motion.a
                href={chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-[#20bd5a]"
              >
                <WhatsAppIcon size={22} />
                Chat on WhatsApp
                <MessageCircle size={18} className="opacity-80" />
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
