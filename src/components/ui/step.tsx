'use client';

import { ReactNode } from 'react';

interface StepProps {
  icon: ReactNode;
  title: string;
  body: string;
}

export function Step({ icon, title, body }: StepProps) {
  return (
    <div className="relative flex gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 p-5 shadow-sm">
      <div className="h-10 w-10 shrink-0 grid place-items-center rounded-xl bg-primary text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{body}</p>
      </div>
    </div>
  );
}
