import type { InsightsData } from './types';
import { es } from './es';
import { en } from './en';
import { pt } from './pt';
import { fr } from './fr';

export const insightsData: Record<string, InsightsData> = {
  es,
  en,
  pt,
  fr,
};

export type { InsightsData, InsightItem, InsightTrend, InsightCase, InsightResource, InsightType } from './types';
