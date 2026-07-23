import translationsEn from "./locales/en.ts";

export type LanguageCode = "en" | "hi" | "es" | "fr" | "de" | "zh" | "ja" | "ar" | "pt" | "ru";

export interface TranslationDict {
  [key: string]: string;
}

export type LocaleBundle = {
  [K in LanguageCode]?: TranslationDict;
};

let dictCache: Record<LanguageCode, TranslationDict> = {} as Record<LanguageCode, TranslationDict>;
let currentLang: LanguageCode = "en";

export function loadLocales(locales: LocaleBundle): void {
  for (const [code, dict] of Object.entries(locales)) {
    if (dict && ["en", "hi", "es", "fr", "de", "zh", "ja", "ar", "pt", "ru"].includes(code)) {
      dictCache[code as LanguageCode] = dict;
    }
  }
}

export function getLang(): LanguageCode {
  return currentLang;
}

export function setLang(lang: LanguageCode): void {
  currentLang = lang;
}

export function getDict(lang?: LanguageCode): TranslationDict {
  const l = lang || currentLang;
  return dictCache[l] || dictCache.en || (translationsEn as TranslationDict);
}

export function t(path: string, lang?: LanguageCode, vars?: Record<string, string | number>): string {
  const dict = getDict(lang);
  const raw = dict[path];
  if (!raw) return path;
  if (vars) {
    return raw.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : _));
  }
  return raw;
}

export function getBrowserLanguage(): LanguageCode {
  try {
    const browserLang = (navigator.languages && navigator.languages[0]) ? navigator.languages[0] : (typeof navigator !== "undefined" && (navigator as unknown as { language?: string }).language) ? (navigator as unknown as { language?: string }).language || "en" : "en";
    const code = browserLang.slice(0, 2).toLowerCase() as LanguageCode;
    return (["en", "hi", "es", "fr", "de", "zh", "ja", "ar", "pt", "ru"] as LanguageCode[]).includes(code) ? code : "en";
  } catch {
    return "en";
  }
}

export function getStoredLanguage(): LanguageCode | null {
  try {
    const stored = localStorage.getItem("lang");
    if (stored && (["en", "hi", "es", "fr", "de", "zh", "ja", "ar", "pt", "ru"] as LanguageCode[]).includes(stored as LanguageCode)) {
      return stored as LanguageCode;
    }
  } catch {}
  return null;
}

export function saveLanguage(lang: LanguageCode): void {
  try {
    localStorage.setItem("lang", lang);
  } catch {}
}

export function detectLanguage(): LanguageCode {
  return getStoredLanguage() || getBrowserLanguage();
}
