import 'server-only'
 
const dictionaries = {
  en: () => import('@/i18n/translations/en.json').then((module) => module.default),
  ru: () => import('@/i18n/translations/ru.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en' | 'ru') => dictionaries[locale]();