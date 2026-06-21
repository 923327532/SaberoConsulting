import type { SupportedLocale } from '../../i18n/utils/types';
import type { CareersData } from './types';
import { careersEs } from './es';
import { careersEn } from './en';
import { careersPt } from './pt';
import { careersFr } from './fr';

const careersMap: Record<SupportedLocale, CareersData> = {
  es: careersEs,
  en: careersEn,
  pt: careersPt,
  fr: careersFr,
};

export function getCareersData(locale: SupportedLocale): CareersData {
  return careersMap[locale] || careersMap.es;
}
