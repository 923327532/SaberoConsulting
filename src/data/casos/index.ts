// ============================================
// SABERO Consulting - Casos Index
// ============================================
import type { SupportedLocale } from '../../i18n/utils/types';
import type { CasosData } from './types';
import { casosEs } from './es';
import { casosEn } from './en';
import { casosPt } from './pt';
import { casosFr } from './fr';

const casosMap: Record<SupportedLocale, CasosData> = {
  es: casosEs,
  en: casosEn,
  pt: casosPt,
  fr: casosFr,
};

export function getCasosData(locale: SupportedLocale): CasosData {
  return casosMap[locale] || casosMap.es;
}
