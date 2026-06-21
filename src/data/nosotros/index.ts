// ============================================
// SABERO Consulting - Nosotros Index
// ============================================
import type { SupportedLocale } from '../../i18n/utils/types';
import type { NosotrosData } from './types';
import { nosotrosEs } from './es';
import { nosotrosEn } from './en';
import { nosotrosPt } from './pt';
import { nosotrosFr } from './fr';

const nosotrosMap: Record<SupportedLocale, NosotrosData> = {
  es: nosotrosEs,
  en: nosotrosEn,
  pt: nosotrosPt,
  fr: nosotrosFr,
};

export function getNosotrosData(locale: SupportedLocale): NosotrosData {
  return nosotrosMap[locale] || nosotrosMap.es;
}
