'use client';

import { motion } from 'motion/react';
import { SendHorizontal, Network, KeyRound, Smartphone } from 'lucide-react';
import { Pill } from '@/components/ui/pill';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

export function Hero({ title, subtitle, ctaText }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute inset-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            {title}
          </motion.h1>
          <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300">{subtitle}</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#integrarse"
              className="inline-flex items-center gap-2 rounded-2xl bg-primary text-white px-6 py-3 text-sm font-semibold shadow hover:bg-primary/90 transition-colors"
            >
              <SendHorizontal className="h-4 w-4" /> {ctaText}
            </a>
            <div className="flex gap-2">
              <Pill>
                <Network className="mr-1 h-4 w-4" /> X‑Road
              </Pill>
              <Pill>
                <KeyRound className="mr-1 h-4 w-4" /> DID
              </Pill>
              <Pill>
                <Smartphone className="mr-1 h-4 w-4" /> Wallet
              </Pill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
