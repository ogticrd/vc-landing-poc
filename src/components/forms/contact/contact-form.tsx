'use client';

import { SendHorizontal } from 'lucide-react';
import { SectionTitle } from '@/components/ui/section-title';
import { Input } from '@/components/ui/input';
import { SuccessBox } from '@/components/ui/success-box';
import { useContactForm } from './use-contact-form';

interface ContactFormProps {
  title: string;
  subtitle: string;
  form: {
    institution: string;
    name: string;
    email: string;
    phone: string;
    domain: string;
    techLead: string;
    submit: string;
    successTitle: string;
    successBody: string;
    errorMessage: string;
    disclaimer: string;
  };
}

export function ContactForm({ title, subtitle, form }: ContactFormProps) {
  const { form: hookForm, submitted, onSubmit } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = hookForm;

  return (
    <section
      id="integrarse"
      className="mx-auto max-w-5xl px-4 py-12 relative overflow-hidden rounded-3xl bg-primary text-white w-full flex flex-col items-center"
    >
      <SectionTitle title={title} subtitle={subtitle} whiteText />
      <div className="mt-8 min-w-2xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 p-6 shadow ">
        {submitted ? (
          <SuccessBox title={form.successTitle} body={form.successBody} />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6 ">
            <Input
              id="institution"
              label={form.institution}
              {...register('institution')}
              error={errors.institution?.message}
              required
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                id="name"
                label={form.name}
                {...register('name')}
                error={errors.name?.message}
                required
              />
              <Input
                id="email"
                label={form.email}
                type="email"
                {...register('email')}
                error={errors.email?.message}
                required
                patternHint="mail@dominio.tld"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                id="phone"
                label={form.phone}
                type="tel"
                {...register('phone')}
                error={errors.phone?.message}
                required
              />
              <Input
                id="domain"
                label={form.domain}
                {...register('domain')}
                error={errors.domain?.message}
                required
                patternHint="ej. gobierno.gob.do"
              />
            </div>
            <Input
              id="techLead"
              label={form.techLead}
              {...register('techLead')}
              error={errors.techLead?.message}
              required
            />

            {/* Error summary (if any) */}
            {Object.keys(errors).length > 0 && (
              <div className="rounded-xl border border-red-300/60 bg-red-50 p-3 text-sm text-red-900">
                {form.errorMessage}
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="text-xs text-zinc-500">{form.disclaimer}</div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary text-white px-5 py-3 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                aria-label={form.submit}
              >
                <SendHorizontal className="h-4 w-4" />
                {isSubmitting ? 'Enviando...' : form.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
