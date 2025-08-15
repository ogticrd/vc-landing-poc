import { FileKey2, Smartphone, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';
import { Step } from '@/components/ui/step';

interface HowItWorksProps {
  title: string;
  steps: Array<{
    title: string;
    body: string;
  }>;
}

export function HowItWorks({ title, steps }: HowItWorksProps) {
  const icons = [<FileKey2 key="0" />, <Smartphone key="1" />, <ShieldCheck key="2" />];

  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle title={title} />
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <Step key={index} icon={icons[index]} title={step.title} body={step.body} />
        ))}
      </ol>
    </section>
  );
}
