export type InsightType = 'article' | 'guide' | 'trend' | 'case' | 'resource';

export interface InsightItem {
  id: string;
  type: InsightType;
  category: string;
  title: string;
  summary: string;
  readTime?: string;
  image?: string;
  cta: string;
  href?: string;
}

export interface InsightTrend {
  id: string;
  title: string;
  summary: string;
  impact: string;
}

export interface InsightCase {
  id: string;
  title: string;
  problem: string;
  approach: string;
  lesson: string;
  recommendation: string;
}

export interface InsightResource {
  id: string;
  title: string;
  summary: string;
  format: string;
  cta: string;
  href?: string;
}

export interface InsightsData {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  categories: { id: InsightType; label: string }[];
  featured: InsightItem[];
  articles: InsightItem[];
  trends: InsightTrend[];
  cases: InsightCase[];
  resources: InsightResource[];
  cta: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}
