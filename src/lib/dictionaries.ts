import 'server-only'
import type { Locale } from './i18n'

const dictionaries = {
  en: () => import('../messages/en.json').then((module) => module.default),
  es: () => import('../messages/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()