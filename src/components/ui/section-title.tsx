import { cn } from '@/lib/cn.util';

interface SectionTitleProps {
  id?: string;
  title: string;
  subtitle?: string;
  whiteText?: boolean;
}

export function SectionTitle({ id, title, subtitle, whiteText = false }: SectionTitleProps) {
  return (
    <div id={id} className="mx-auto max-w-4xl text-center">
      <h2
        className={cn(
          'text-2xl md:text-4xl font-bold',
          whiteText ? 'text-white' : 'text-zinc-900 dark:text-zinc-100'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-3', whiteText ? 'text-white/80' : 'text-zinc-600 dark:text-zinc-300')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
