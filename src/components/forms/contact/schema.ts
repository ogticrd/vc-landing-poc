'use client';

import { z } from 'zod';

// Zod schema for contact form validation
export const contactFormSchema = z.object({
  institution: z.string().min(1, 'Institution is required'),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  domain: z
    .string()
    .regex(
      /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i,
      'Please enter a valid domain (e.g., gobierno.gob.do)'
    ),
  techLead: z.string().min(1, 'Technical lead is required'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
