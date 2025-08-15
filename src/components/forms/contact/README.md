# Contact Form

This folder contains the organized contact form implementation using React Hook Form and Zod.

## Structure

- `contact-form.tsx` - Main form component
- `use-contact-form.ts` - Custom hook for form logic and state management
- `schema.ts` - Zod validation schema and TypeScript types
- `index.ts` - Exports for easy importing

## Usage

```tsx
import { ContactForm } from '@/components/forms/contact';

// Or import individual parts
import {
  useContactForm,
  contactFormSchema,
  type ContactFormData,
} from '@/components/forms/contact';
```

## Features

- ✅ React Hook Form integration
- ✅ Zod validation schema
- ✅ TypeScript support
- ✅ Error handling and display
- ✅ Loading states
- ✅ Form reset functionality
- ✅ Accessibility features

## Validation Rules

- **Institution**: Required
- **Name**: Required
- **Email**: Required, valid email format
- **Phone**: Required
- **Domain**: Required, valid domain format (e.g., gobierno.gob.do)
- **Technical Lead**: Required
