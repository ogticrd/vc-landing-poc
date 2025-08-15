import { CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';

interface StandardsProps {
  title: string;
  body: string;
  coreMessages: string[];
}

export function Standards({ title, body, coreMessages }: StandardsProps) {
  return (
    <section id="estandares" className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle title={title} subtitle={body} />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {coreMessages.map((message, i) => (
          <div
            key={i}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 p-5"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
              <p className="text-sm text-zinc-700 dark:text-zinc-200">{message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
