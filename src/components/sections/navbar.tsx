import { Landmark, SendHorizontal } from 'lucide-react';
import { LanguageToggle } from '@/components/ui/language-toggle';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';

interface NavbarProps {
  locale: Locale;
}

export async function Navbar({ locale }: NavbarProps) {
  const intl = await getDictionary(locale);
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-zinc-200/70">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <Landmark size={22} className="text-white" />
          </div>
          <span className="text-lg font-semibold text-zinc-900">VC Interop</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#como-funciona" className="hover:underline">
            {intl.nav.comoFunciona}
          </a>
          <a href="#beneficios" className="hover:underline">
            {intl.nav.beneficios}
          </a>
          <a href="#requisitos" className="hover:underline">
            {intl.nav.requisitos}
          </a>
          <a href="#estandares" className="hover:underline">
            {intl.nav.estandares}
          </a>
          <a href="#faq" className="hover:underline">
            {intl.nav.faq}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle currentLocale={locale} />
          <a
            href="#integrarse"
            className="inline-flex items-center gap-2 rounded-xl bg-primary text-white px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <SendHorizontal className="h-4 w-4" /> {intl.nav.integrarse}
          </a>
        </div>
      </div>
    </header>
  );
}
