// ============================================
// SABERO Consulting - Industrias Index
// ============================================
import type { SupportedLocale } from '../../i18n/utils/types';
import type { IndustriesData } from './types';
import { industriesEs } from './es';
import { industriesEn } from './en';
import { industriesPt } from './pt';
import { industriesFr } from './fr';

const industriesMap: Record<SupportedLocale, IndustriesData> = {
  es: industriesEs,
  en: industriesEn,
  pt: industriesPt,
  fr: industriesFr,
};

export function getIndustriesData(locale: SupportedLocale): IndustriesData {
  return industriesMap[locale] || industriesMap.es;
}
