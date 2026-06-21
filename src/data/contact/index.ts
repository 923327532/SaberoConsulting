import type { SupportedLocale, ContactData } from '../../i18n/utils/types';
import { contactEs } from './es';
import { contactEn } from './en';
import { contactPt } from './pt';
import { contactFr } from './fr';

const contactMap: Record<SupportedLocale, ContactData> = {
  es: contactEs,
  en: contactEn,
  pt: contactPt,
  fr: contactFr,
};

export function getContact(locale: SupportedLocale): ContactData {
  return contactMap[locale] || contactMap.es;
}
