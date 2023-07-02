import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { fallbackLng, initLanguage, resources } from './utils'

const lng = initLanguage

i18n.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng,
  interpolation: { escapeValue: false },
  returnNull: false,
})

export default i18n
