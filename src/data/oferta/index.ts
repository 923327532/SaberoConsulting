// ============================================
// SABERO Consulting - Oferta Index
// ============================================
import type { SupportedLocale } from '../../i18n/utils/types';
import type { OfertaData } from './types';
import { ofertaEs } from './es';
import { ofertaEn } from './en';
import { ofertaPt } from './pt';
import { ofertaFr } from './fr';

const ofertaMap: Record<SupportedLocale, OfertaData> = {
  es: ofertaEs,
  en: ofertaEn,
  pt: ofertaPt,
  fr: ofertaFr,
};

export function getOfertaData(locale: SupportedLocale): OfertaData {
  return ofertaMap[locale] || ofertaMap.es;
}
