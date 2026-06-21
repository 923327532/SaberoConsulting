// ============================================
// SABERO Consulting - Industrias Types
// ============================================

export interface IndustrySector {
  id: string;
  title: string;
  context: string;
  image?: string;
  challenges: string[];
  solutions: string[];
  capabilities: string[];
  cta: string;
  ctaHref: string;
}

export interface IndustriesData {
  title: string;
  subtitle: string;
  sectors: IndustrySector[];
}
