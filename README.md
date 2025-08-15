# Verifiable Credentials (VC) Proof of Concept

A Next.js-based proof of concept for implementing Verifiable Credentials in government institutions. This project demonstrates how government agencies can issue, carry, and verify credentials securely with decentralized verification and issuer-checkable status.

## 🎯 Project Overview

This VC PoC enables government institutions to:

- **Issue** verifiable credentials with cryptographic signatures
- **Store** credentials securely in citizen wallets
- **Verify** credentials with decentralized cryptographic proof
- **Check** credential status (active/revoked) through issuer APIs

## ✨ Key Features

- **Multi-language Support**: English and Spanish internationalization
- **Responsive Design**: Modern UI with Tailwind CSS
- **Form Validation**: Contact form with Zod schema validation
- **SEO Optimized**: JSON-LD structured data for search engines
- **Accessibility**: WCAG compliant components
- **Type Safety**: Full TypeScript implementation

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod validation
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Package Manager**: Bun
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd vc-poc
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
bun dev          # Start development server
bun build        # Build for production
bun start        # Start production server
bun lint         # Run ESLint
```

## 🐳 Docker

### Using Docker Compose (Recommended)

1. Build and start the application:

```bash
docker-compose up --build
```

2. Access the application at [http://localhost:3000](http://localhost:3000)

3. Stop the application:

```bash
docker-compose down
```

### Using Docker directly

1. Build the Docker image:

```bash
docker build -t vc-poc .
```

2. Run the container:

```bash
docker run -p 3000:3000 vc-poc
```

3. Access the application at [http://localhost:3000](http://localhost:3000)

### Docker Features

- **Multi-stage build**: Optimized for production with minimal image size
- **Bun runtime**: Fast JavaScript runtime for better performance
- **Health checks**: Built-in health monitoring at `/api/health`
- **Security**: Runs as non-root user
- **Standalone output**: Optimized Next.js standalone build

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Root layout with i18n
│   │   └── page.tsx       # Home page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # App layout
├── components/
│   ├── forms/             # Form components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── i18n/                  # Internationalization config
├── lib/                   # Utility functions
└── messages/              # Translation files
```

## 🌐 Internationalization

The application supports multiple languages through Next.js internationalization:

- **English** (`/en`) - Default language
- **Spanish** (`/es`) - Secondary language

Translation files are located in `src/messages/` and follow a nested JSON structure.

## 🎨 UI Components

### Sections

- **Hero**: Main landing section with call-to-action
- **How It Works**: Step-by-step process explanation
- **Benefits**: Benefits for citizens and institutions
- **Requirements**: Technical requirements for integration
- **Standards**: W3C VC standards compliance
- **FAQ**: Frequently asked questions
- **Contact Form**: Integration request form
- **Government CTA**: Government-specific call-to-action

### Reusable Components

- **Accordion**: Expandable content sections
- **Input**: Form input with validation
- **Pill**: Status indicators
- **Step**: Process step visualization
- **Success Box**: Success message display

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Add any environment variables here
```

### Tailwind CSS

The project uses Tailwind CSS v4 with PostCSS. Configuration is in `tailwind.config.js`.

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Implement proper accessibility attributes

### Component Structure

- Place reusable components in `src/components/ui/`
- Page sections in `src/components/sections/`
- Form components in `src/components/forms/`

### Internationalization

- Add new translations to `src/messages/en.json` and `src/messages/es.json`
- Use the `getDictionary` function to access translations
- Follow the nested JSON structure for organization

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms

Build the application:

```bash
bun build
```

Start the production server:

```bash
bun start
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is private and proprietary.

---

**Note**: This is a proof of concept for government verifiable credentials integration. For production use, ensure proper security audits and compliance with government standards.
