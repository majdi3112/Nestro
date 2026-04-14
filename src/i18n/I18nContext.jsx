import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { messages } from "./messages.js";

const STORAGE_KEY = "nesto-locale";
const SUPPORTED = ["nl", "fr", "en"];

const I18nContext = createContext(null);

function getNested(obj, path) {
  return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === "undefined") return "nl";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    return "nl";
  });

  const setLocale = useCallback((next) => {
    if (SUPPORTED.includes(next)) setLocaleState(next);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (key) => {
      let v = getNested(messages[locale], key);
      if (v === undefined) v = getNested(messages.nl, key);
      if (typeof v === "string") return v;
      if (v === undefined) return key;
      return String(v);
    },
    [locale]
  );

  const menuSections = useMemo(() => {
    const list = messages[locale]?.menu?.sections ?? messages.nl.menu.sections;
    return list;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      menuSections,
    }),
    [locale, setLocale, t, menuSections]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export { SUPPORTED };
