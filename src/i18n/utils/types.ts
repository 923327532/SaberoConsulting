export type SupportedLocale = 'es' | 'en' | 'pt' | 'fr';

export const DEFAULT_LOCALE: SupportedLocale = 'es';

export const LOCALES: SupportedLocale[] = ['es', 'en', 'pt', 'fr'];

export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  es: 'Espanol',
  en: 'English',
  pt: 'Portugues',
  fr: 'Francais',
};

export const LOCALE_SHORT: Record<SupportedLocale, string> = {
  es: 'ES',
  en: 'EN',
  pt: 'PT',
  fr: 'FR',
};

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface MegaMenuColumn {
  title?: string;
  text?: string;
  items: NavItem[];
}

export interface MegaMenuSection {
  id: string;
  columns: MegaMenuColumn[];
}

export interface NavigationData {
  main: NavItem[];
  megaMenus: Record<string, MegaMenuSection>;
}

export interface ContactData {
  title: string;
  subtitle: string;
  email: string;
  whatsapp: string;
  responseTime: string;
  categoriesTitle: string;
  categories: { value: string; label: string }[];
  form: {
    name: string;
    lastName: string;
    email: string;
    company: string;
    country: string;
    position: string;
    companySize: string;
    industry: string;
    whatsapp: string;
    message: string;
    privacy: string;
    newsletter: string;
    submit: string;
  };
  companySizes: { value: string; label: string }[];
  industries: { value: string; label: string }[];
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  facebook?: string;
  github?: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  description: string;
  url: string;
  logo: string;
  location: string;
  social: SocialLinks;
  contact: {
    email: string;
    whatsapp: string;
  };
}

export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
}
