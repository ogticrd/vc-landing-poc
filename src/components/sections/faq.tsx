'use client';

import { useState } from 'react';
import { SectionTitle } from '@/components/ui/section-title';
import { AccordionItem } from '@/components/ui/accordion-item';

interface FAQProps {
  title: string;
  items: Array<{
    q: string;
    a: string;
  }>;
}

export function FAQ({ title, items }: FAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16">
      <SectionTitle title={title} />
      <div className="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            index={i}
            q={item.q}
            a={item.a}
            openIndex={openFAQ}
            setOpenIndex={setOpenFAQ}
          />
        ))}
      </div>
    </section>
  );
}
