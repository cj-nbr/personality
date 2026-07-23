export type LanguageCode = "en" | "hi" | "es" | "fr" | "de" | "zh" | "ja" | "ar" | "pt" | "ru";

export type TranslationDict = Record<string, string>;

export interface LocaleBundle {
  [K in LanguageCode]?: TranslationDict;
}

let currentLang: LanguageCode = "en";
let dictCache: Record<LanguageCode, TranslationDict> = {} as Record<LanguageCode, TranslationDict>;
let listeners: Set<() => void> = new Set();

export function setLang(lang: LanguageCode): void {
  currentLang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "auto");
  listeners.forEach(fn => fn());
}

export function getLang(): LanguageCode {
  return currentLang;
}

export function getDict(lang?: LanguageCode): TranslationDict {
  const l = lang || currentLang;
  return dictCache[l] || dictCache.en || {};
}

export function loadLocales(locales: LocaleBundle): void {
  (Object.keys(locales) as LanguageCode[]).forEach(code => {
    const dict = locales[code];
    if (dict) dictCache[code] = dict;
  });
  const initial = detectLanguage();
  currentLang = initial;
  const dict = getDict(initial);
  applyToDocument(dict, initial);
}

export function detectLanguage(): LanguageCode {
  try {
    const stored = localStorage.getItem("lang");
    if (stored && isValidLang(stored)) return stored as LanguageCode;
  } catch {}
  try {
    const browser = navigator.languages?.[0] || navigator.language || "en";
    const code = browser.slice(0, 2).toLowerCase() as LanguageCode;
    if (isValidLang(code)) return code;
  } catch {}
  return "en";
}

export function onChange(fn: () => void): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

export function t(key: string, vars?: Record<string, string | number>): string {
  const dict = getDict();
  let text = dict[key] || key;
  if (vars) {
    text = text.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : _));
  }
  return text;
}

function isValidLang(lang: string | null | undefined): boolean {
  return !!lang && ["en", "hi", "es", "fr", "de", "zh", "ja", "ar", "pt", "ru"].includes(lang);
}

function applyToDocument(dict: TranslationDict, lang: LanguageCode) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const text = dict[key];
    if (text) {
      let final = text;
      const varsAttr = el.getAttribute('data-i18n-vars');
      if (varsAttr) {
        try {
          const vars = JSON.parse(varsAttr);
          final = final.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : _));
        } catch {}
      }
      el.textContent = final;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) return;
    const text = dict[key];
    if (text) el.setAttribute('placeholder', text);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (!key) return;
    const text = dict[key];
    if (text) el.setAttribute('title', text);
  });
}
