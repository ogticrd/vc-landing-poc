# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project for a Verifiable Credentials (VC) Proof of Concept, specifically designed as a landing page for government institutions interested in implementing VC technology. The project showcases a bilingual (Spanish/English) landing page with form submission capabilities, dark mode support, and proper internationalization routing.

## Development Commands

- `bun run dev` - Start the development server (http://localhost:3000)
- `bun run build` - Build the production application
- `bun run start` - Start the production server
- `bun run lint` - Run ESLint for code quality checks

## Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Package Manager**: Bun
- **Language**: TypeScript with strict mode enabled
- **Styling**: TailwindCSS v4 with PostCSS
- **Animations**: Framer Motion (`motion` package)
- **Icons**: Lucide React
- **Runtime**: React 19.1.0
- **Internationalization**: Custom i18n setup with locale-based routing
- **Locale Detection**: @formatjs/intl-localematcher + negotiator

### Main Application Structure

- `src/app/page.tsx` - Root redirect to default locale (/es)
- `src/app/layout.tsx` - Minimal root layout for redirects
- `src/app/[locale]/layout.tsx` - Main layout with metadata and fonts
- `src/app/[locale]/page.tsx` - Localized landing page
- `src/app/globals.css` - Global styles with TailwindCSS configuration
- `src/app/initial.tsx` - Original monolithic component (for reference)
- `src/middleware.ts` - Locale detection and routing middleware

### Key Features

- **Internationalization**: Native Next.js i18n with locale-based routing (/es, /en)
- **Component Architecture**: Modular components split into UI and sections
- **Form Handling**: Institution registration form with client-side validation
- **Animations**: Framer Motion animations with staggered reveals
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels
- **SEO**: JSON-LD structured data and localized meta tags
- **Dark Mode**: Full dark mode support via Tailwind classes
- **Responsive Design**: Mobile-first approach with breakpoints
- **Language Toggle**: Client-side language switching with routing

### Component Architecture

**UI Components** (`src/components/ui/`):
- `SectionTitle` - Standardized section headers
- `Step` - Animated process steps with icons
- `AccordionItem` - Accessible FAQ accordion
- `Input` - Form inputs with validation states
- `CheckItem` - Checkmark list items
- `Pill` - Small badge/tag components
- `SuccessBox` - Success message display
- `LanguageToggle` - Client-side language switcher

**Section Components** (`src/components/sections/`):
- `Navbar` - Main navigation with locale toggle
- `Hero` - Landing hero section with CTA
- `HowItWorks` - Process explanation with steps
- `Benefits` - Benefits for citizens and institutions
- `Requirements` - Technical requirements list
- `Standards` - Standards and trust information
- `FAQ` - Collapsible FAQ section
- `ContactForm` - Institution registration form
- `Footer` - Site footer with compliance badges

## Configuration Files

- `tsconfig.json` - TypeScript configuration with strict mode, path mapping (`@/*`)
- `eslint.config.mjs` - ESLint with Next.js core-web-vitals and TypeScript rules
- `next.config.ts` - Basic Next.js configuration (currently empty)
- `postcss.config.mjs` - PostCSS with TailwindCSS plugin
- `src/middleware.ts` - Locale detection and routing middleware
- `src/lib/i18n.ts` - i18n configuration (locales, default locale)
- `src/lib/dictionaries.ts` - Server-side dictionary loader
- `src/messages/` - Translation files (es.json, en.json)

## Styling Approach

- Uses TailwindCSS v4 with `@import "tailwindcss"` in globals.css
- Custom CSS variables for theming (--background, --foreground)
- Geist font family integration with CSS variables
- Dark mode via `prefers-color-scheme` media query

## Internationalization

- **Routing**: Locale-based routing with `/[locale]/` structure
- **Middleware**: Automatic locale detection based on Accept-Language header
- **Dictionaries**: JSON translation files in `src/messages/`
- **Default Locale**: Spanish (`es`) with English (`en`) support
- **Language Toggle**: Client-side switching with proper routing
- **SEO**: Localized metadata and structured data per language

## Form Functionality

The registration form in `ContactForm` component includes:

- Institution name, contact details, official domain
- Client-side validation with regex patterns (email/domain)
- Success state with localized confirmation message
- Error handling with field-specific validation
- Console logging for form submissions (simulation)
- Localized error messages and validation hints

## Development Workflow

When working on this project:

1. **Component Development**: Work in `src/components/` for reusable components
2. **Page Development**: Main pages are in `src/app/[locale]/`
3. **Translations**: Update both `src/messages/es.json` and `src/messages/en.json`
4. **Quality Checks**: Run `bun run lint` after changes
5. **Testing**: Verify functionality in both locales (`/es` and `/en`)
6. **Responsive Design**: Test across breakpoints
7. **Dark Mode**: Check compatibility with dark theme
8. **SEO**: Verify structured data and metadata per locale

## URL Structure

- `/` - Redirects to `/es` (default locale)
- `/es` - Spanish version of the site
- `/en` - English version of the site
- Language toggle preserves the current route while switching locale