import { localStg } from "@/utils/storage";
import { create } from "zustand";

type State = {
  language: SupportLanguage;
  toggleLanguage: (val: SupportLanguage) => void;
};

const initLanguage: SupportLanguage = localStg.get("language");

export const useCommonStore = create<State>((set) => ({
  language: initLanguage,
  toggleLanguage: (val: SupportLanguage) => set(() => ({ language: val })),
}));
