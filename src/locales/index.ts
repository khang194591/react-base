export const languageText: Record<SupportLanguage, string> = {
  en: "English",
  vi: "Tiếng Việt",
};

export const languageOptions = Object.values([
  "en",
  "ja",
  "vi",
] as SupportLanguage[]).map((item) => ({
  value: item,
  label: languageText[item],
}));
