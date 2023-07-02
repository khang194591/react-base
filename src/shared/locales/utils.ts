import { localStg } from '../utils/storage'

export const fallbackLng: SupportLanguage = 'en'

export const initLanguage: SupportLanguage = localStg.get('language') || fallbackLng

export const languageText: Record<SupportLanguage, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
}

export const languageOptions = Object.values(['en', 'vi'] as SupportLanguage[]).map((item) => ({
  value: item,
  label: languageText[item],
}))

export const getViLocalesFromModules = () => {
  const results: Record<string, object> = {}
  const files = import.meta.glob('/**/json/vi/*.json', {
    eager: true,
    import: 'default',
  })
  for (const key in files) {
    const module = key.split('/').at(-1)?.split('.')[0]
    if (module) {
      results[module] = files[key] as object
    }
  }
  return results
}

export const getEnLocalesFromModules = () => {
  const results: Record<string, object> = {}
  const files = import.meta.glob('/**/json/en/*.json', {
    eager: true,
    import: 'default',
  })
  for (const key in files) {
    const module = key.split('/').at(-1)?.split('.')[0]
    if (module) {
      results[module] = files[key] as object
    }
  }
  return results
}

export const resources = {
  en: { translation: getEnLocalesFromModules() },
  vi: { translation: getViLocalesFromModules() },
}

console.log(resources)
