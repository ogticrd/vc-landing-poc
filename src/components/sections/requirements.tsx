import { CheckCircle2 } from 'lucide-react';

interface RequirementsProps {
  title: string;
  bullets: string[];
}

export function Requirements({ title, bullets }: RequirementsProps) {
  return (
    <section id="requisitos" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      <div className="mx-auto mt-12 max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          {bullets.map((bullet, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 p-4 shadow-sm"
            >
              <div className="h-10 w-10 shrink-0 grid place-items-center rounded-lg bg-primary text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="text-sm leading-relaxed">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
