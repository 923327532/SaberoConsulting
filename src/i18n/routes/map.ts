import type { SupportedLocale } from '../utils/types';
import { DEFAULT_LOCALE, LOCALES } from '../utils/types';

/**
 * Returns the correct href for a given path and locale.
 * For the default locale (es), the path has no prefix.
 * For other locales, the path is prefixed with the locale code.
 * Siempre con trailing slash para compatibilidad con trailingSlash: 'always'.
 */
export function localizedHref(path: string, locale: SupportedLocale): string {
  // Remove any existing locale prefix
  const segments = path.split('/').filter(Boolean);
  if (LOCALES.includes(segments[0] as SupportedLocale)) {
    segments.shift();
  }

  const cleanPath = segments.join('/');

  if (locale === DEFAULT_LOCALE) {
    return cleanPath ? `/${cleanPath}/` : '/';
  }

  return cleanPath ? `/${locale}/${cleanPath}/` : `/${locale}/`;
}

/**
 * Converts a navigation data structure to use correct hrefs for a given locale.
 * Siempre con trailing slash para compatibilidad con trailingSlash: 'always'.
 * Preserva anchor fragments (#) para que los enlaces internos funcionen.
 */
export function localizeNavHref(href: string, locale: SupportedLocale): string {
  // Preservar anchor fragment si existe
  const anchorIndex = href.indexOf('#');
  const anchor = anchorIndex !== -1 ? href.slice(anchorIndex) : '';
  const pathWithoutAnchor = anchorIndex !== -1 ? href.slice(0, anchorIndex) : href;

  const segments = pathWithoutAnchor.split('/').filter(Boolean);
  if (LOCALES.includes(segments[0] as SupportedLocale)) {
    segments.shift();
  }
  const cleanPath = segments.join('/');

  let result: string;
  if (locale === DEFAULT_LOCALE) {
    result = cleanPath ? `/${cleanPath}/` : '/';
  } else {
    result = cleanPath ? `/${locale}/${cleanPath}/` : `/${locale}/`;
  }

  // Si hay anchor, lo agregamos después del trailing slash
  // Ejemplo: /oferta/ + #servicios = /oferta/#servicios
  if (anchor) {
    result = result + anchor;
  }

  return result;
}
