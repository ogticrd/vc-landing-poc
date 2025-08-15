import { Facebook, Twitter, Youtube, Instagram, Landmark } from 'lucide-react';
import Link from 'next/link';

interface FooterContent {
  columns: {
    know: { title: string; body: string };
    contact: { title: string; tel: string; fax: string; email: string };
    find: { title: string; address: string };
    learn: { title: string; terms: string; privacy: string; faq: string };
  };
  follow: string;
  copyright: string;
  line?: string;
}

interface FooterProps {
  content: FooterContent;
}

export function Footer({ content }: FooterProps) {
  const { columns, follow, copyright, line } = content;
  return (
    <footer className="mt-20 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top: brand + columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand / Logos placeholder */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-wide opacity-90">
                Gobierno de la República Dominicana
              </div>
              <div className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-2 py-2 hover:bg-white/6 transition-colors">
                <div className="h-6 w-6 rounded bg-white/20 flex items-center justify-center">
                  <Landmark size={16} className="text-white" />
                </div>
                <span className="text-sm font-semibold">VC Interop</span>
              </div>
            </div>
            {line && <p className="text-sm/6 text-white/80 max-w-sm">{line}</p>}
          </div>

          {/* Columns */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                {columns.know.title}
              </h4>
              <p className="mt-3 text-sm/6 text-white/85">{columns.know.body}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                {columns.contact.title}
              </h4>
              <ul className="mt-3 space-y-1 text-sm/6 text-white/85">
                <li>Tel: {columns.contact.tel}</li>
                <li>Fax: {columns.contact.fax}</li>
                <li>
                  <a
                    href={`mailto:${columns.contact.email}`}
                    className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
                  >
                    {columns.contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                {columns.find.title}
              </h4>
              <p className="mt-3 text-sm/6 text-white/85">{columns.find.address}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide">
                {columns.learn.title}
              </h4>
              <ul className="mt-3 space-y-2 text-sm/6">
                <li>
                  <Link href="#" className="hover:underline">
                    {columns.learn.terms}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    {columns.learn.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:underline">
                    {columns.learn.faq}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom: social + copyright */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/15 pt-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-semibold uppercase tracking-wide text-white/90">{follow}</span>
            <nav className="flex items-center gap-3">
              <Link href="#" aria-label="Facebook" className="p-2 rounded-lg hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="YouTube" className="p-2 rounded-lg hover:bg-white/10">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Twitter" className="p-2 rounded-lg hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Instagram" className="p-2 rounded-lg hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Link>
            </nav>
          </div>
          <p className="text-xs text-white/80">
            {copyright} <span className="font-semibold">ogtic</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
