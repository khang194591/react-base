import { initLanguage } from '@/shared/locales/utils'
import { create } from 'zustand'

type State = {
  language: SupportLanguage
}

type Action = {
  toggleLanguage: (val: SupportLanguage) => void
}

export const useCommonStore = create<State & Action>((set) => ({
  language: initLanguage,
  toggleLanguage: (val: SupportLanguage) => set(() => ({ language: val })),
}))
