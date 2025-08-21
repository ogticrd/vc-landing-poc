'use client';

import { Languages } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';

interface LanguageToggleProps {
  lang: Locale;
}

export function LanguageToggle({ lang }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = lang === 'es' ? 'en' : 'es';
    const newPath = pathname.replace(`/${lang}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-xs cursor-pointer"
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Languages className="size-4" /> {lang.toUpperCase()}
    </button>
  );
}
