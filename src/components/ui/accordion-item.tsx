'use client';

import { cn } from '@/lib/cn.util';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  q: string;
  a: string;
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}

export function AccordionItem({ q, a, index, openIndex, setOpenIndex }: AccordionItemProps) {
  const open = openIndex === index;

  return (
    <div className="p-3">
      <button
        className="w-full text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={() => setOpenIndex(open ? null : index)}
        aria-expanded={open}
        aria-controls={`faq-${index}`}
      >
        <span className="font-semibold text-primary dark:text-zinc-100">{q}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`faq-${index}`}
        className={cn(
          'pt-1 text-sm text-zinc-600 dark:text-zinc-300 transition-all ease-in-out overflow-clip',
          {
            'h-auto': open,
            'h-0': !open,
          }
        )}
      >
        {a}
      </div>
    </div>
  );
}
