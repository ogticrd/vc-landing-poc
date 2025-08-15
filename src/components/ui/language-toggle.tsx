'use client'

import { Languages } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

interface LanguageToggleProps {
  currentLocale: Locale
}

export function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'es' ? 'en' : 'es'
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-xs"
      aria-label={currentLocale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Languages className="h-4 w-4" /> {currentLocale.toUpperCase()}
    </button>
  )
}