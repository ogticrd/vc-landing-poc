'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from './schema';

export function useContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: ContactFormData) => {
    // Simulate submit & analytics
    console.log('form_submit', {
      ...data,
      ts: Date.now(),
    });

    setSubmitted(true);
    form.reset();
  };

  const resetForm = () => {
    setSubmitted(false);
    form.reset();
  };

  return {
    form,
    submitted,
    onSubmit,
    resetForm,
  };
}
