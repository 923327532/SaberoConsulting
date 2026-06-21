import type { SupportedLocale, PageMeta } from './types';
import { DEFAULT_LOCALE, LOCALES } from './types';

export function getLocaleFromPath(path: string): SupportedLocale {
  const segments = path.split('/').filter(Boolean);
  const first = segments[0] as SupportedLocale;
  if (LOCALES.includes(first)) return first;
  return DEFAULT_LOCALE;
}

export function getLocalizedPath(path: string, targetLocale: SupportedLocale, currentLocale: SupportedLocale): string {
  const segments = path.split('/').filter(Boolean);
  if (LOCALES.includes(segments[0] as SupportedLocale)) {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }
  return '/' + segments.join('/');
}

export function getCanonical(pathname: string, locale: SupportedLocale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (LOCALES.includes(segments[0] as SupportedLocale)) {
    segments.shift();
  }
  const cleanPath = segments.join('/');
  return cleanPath ? `/${cleanPath}` : '/';
}

export function getHreflangPaths(pathname: string): Record<string, string> {
  const segments = pathname.split('/').filter(Boolean);
  if (LOCALES.includes(segments[0] as SupportedLocale)) {
    segments.shift();
  }
  const basePath = segments.length > 0 ? '/' + segments.join('/') : '';
  const paths: Record<string, string> = {};
  for (const locale of LOCALES) {
    paths[locale] = locale === DEFAULT_LOCALE ? basePath || '/' : `/${locale}${basePath}`;
  }
  return paths;
}

export function getPageMeta(meta: PageMeta, locale: SupportedLocale): PageMeta {
  return meta;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
