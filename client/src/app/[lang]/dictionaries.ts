import 'server-only'

const dictionaries = {
  en: async () => await import('../../dictionaries/en.json').then((module) => module.default),
  es: async () => await import('../../dictionaries/es.json').then((module) => module.default)
}

export const getDictionary = async (locale: 'en' | 'es') => await dictionaries[locale]()
