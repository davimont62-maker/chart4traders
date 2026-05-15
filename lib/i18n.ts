export const locales = ["en", "it", "es", "pt"] as const;
export type Locale = (typeof locales)[number];

export const liveLocales: Locale[] = ["en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}
