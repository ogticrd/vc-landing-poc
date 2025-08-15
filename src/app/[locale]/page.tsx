import type { Locale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Benefits } from '@/components/sections/benefits';
import { Requirements } from '@/components/sections/requirements';
import { Standards } from '@/components/sections/standards';
import { FAQ } from '@/components/sections/faq';
import { ContactForm } from '@/components/sections/contact-form';
import { GovCta } from '@/components/sections/gov-cta';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: dict.hero.h1,
    url: 'https://vc.example.gov',
    inLanguage: locale,
    description: dict.hero.sub,
    publisher: {
      '@type': 'Organization',
      name: 'VC Interop Initiative',
    },
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero title={dict.hero.h1} subtitle={dict.hero.sub} ctaText={dict.hero.cta} />

      <HowItWorks title={dict.how.title} steps={dict.how.steps} />

      <Benefits
        title={dict.benefits.title}
        citizen={dict.benefits.citizen}
        org={dict.benefits.org}
      />

      <Requirements title={dict.reqs.title} bullets={dict.reqs.bullets} />

      <Standards
        title={dict.standards.title}
        body={dict.standards.body}
        coreMessages={dict.standards.coreMessages}
      />

      <FAQ title={dict.faq.title} items={dict.faq.items} />

      {/* <GovCta title={dict.govCta.title} body={dict.govCta.body} button={dict.govCta.button} /> */}

      <ContactForm title={dict.cta.title} subtitle={dict.cta.subtitle} form={dict.cta.form} />
    </>
  );
}
