import type { SupportedLocale, NavigationData } from '../../i18n/utils/types';
import { navEs } from './es';
import { navEn } from './en';
import { navPt } from './pt';
import { navFr } from './fr';

const navigationMap: Record<SupportedLocale, NavigationData> = {
  es: navEs,
  en: navEn,
  pt: navPt,
  fr: navFr,
};

export function getNavigation(locale: SupportedLocale): NavigationData {
  return navigationMap[locale] || navigationMap.es;
}
