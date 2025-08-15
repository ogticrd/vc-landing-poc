import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { OfficialHeader } from '@/components/sections/official-header';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: `${dict.hero.h1} · VC Interop`,
    description: dict.hero.sub,
    openGraph: {
      title: `${dict.hero.h1} · VC Interop`,
      description: dict.hero.sub,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
          <OfficialHeader />
          <Navbar locale={locale} />
          {children}
          <Footer
            content={{
              columns: dict.footer.columns,
              follow: dict.footer.follow,
              copyright: dict.footer.copyright,
              line: dict.footer.line,
            }}
          />
        </div>
      </body>
    </html>
  );
}
