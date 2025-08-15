import { Smartphone, Building2 } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';
import { CheckItem } from '@/components/ui/check-item';

interface BenefitsProps {
  title: string;
  citizen: {
    title: string;
    items: string[];
  };
  org: {
    title: string;
    items: string[];
  };
}

export function Benefits({ title, citizen, org }: BenefitsProps) {
  return (
    <section id="beneficios" className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle title={title} />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 p-6 shadow-sm">
          <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
            <Smartphone className="h-5 w-5" />
            <h3 className="font-semibold">{citizen.title}</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {citizen.items.map((item, i) => (
              <CheckItem key={i}>{item}</CheckItem>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 p-6 shadow-sm">
          <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-200">
            <Building2 className="h-5 w-5" />
            <h3 className="font-semibold">{org.title}</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {org.items.map((item, i) => (
              <CheckItem key={i}>{item}</CheckItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
