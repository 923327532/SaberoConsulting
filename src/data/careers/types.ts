export interface CareersHero {
  title: string;
  subtitle: string;
  cta: string;
  ctaSecondary: string;
  image: string;
}

export interface WhySaberoTab {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface WhySabero {
  title: string;
  subtitle: string;
  tabs: WhySaberoTab[];
}

export interface LifeItem {
  title: string;
  description: string;
}

export interface LifeAtSabero {
  title: string;
  subtitle: string;
  items: LifeItem[];
}

export interface TeamInfo {
  id: string;
  title: string;
  description: string;
  focus: string;
  cta: string;
}

export interface TeamsSection {
  title: string;
  subtitle: string;
  list: TeamInfo[];
}

export interface GrowthItem {
  title: string;
  description: string;
}

export interface GrowthSection {
  title: string;
  subtitle: string;
  items: GrowthItem[];
}

export interface InclusionItem {
  title: string;
  description: string;
}

export interface InclusionSection {
  title: string;
  subtitle: string;
  items: InclusionItem[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProcessSection {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface OpportunitiesSection {
  title: string;
  subtitle: string;
  message: string;
  cta: string;
}

export interface FutureTalentItem {
  title: string;
  description: string;
}

export interface FutureTalentSection {
  title: string;
  subtitle: string;
  items: FutureTalentItem[];
  cta: string;
}

export interface CareersData {
  hero: CareersHero;
  whySabero: WhySabero;
  lifeAtSabero: LifeAtSabero;
  teams: TeamsSection;
  growth: GrowthSection;
  inclusion: InclusionSection;
  process: ProcessSection;
  opportunities: OpportunitiesSection;
  futureTalent: FutureTalentSection;
}
