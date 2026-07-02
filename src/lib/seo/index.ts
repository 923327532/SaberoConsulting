import type { SupportedLocale } from '../../i18n/utils/types';
import { LOCALES, DEFAULT_LOCALE } from '../../i18n/utils/types';
import { siteSettings } from '../../data/settings/site';

export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  locale: SupportedLocale;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateSEO(meta: SEOMeta) {
  const { title, description, canonical, locale, path, ogImage, noIndex } = meta;
  const fullTitle = `${title} | ${siteSettings.name}`;
  const url = `${siteSettings.url}${canonical}`;

  const hreflangLinks = LOCALES.map((l) => {
    const href = l === DEFAULT_LOCALE ? siteSettings.url + path : `${siteSettings.url}/${l}${path}`;
    return { rel: 'alternate', hreflang: l, href };
  });

  return {
    title: fullTitle,
    description,
    canonical: url,
    hreflang: hreflangLinks,
    ogImage: ogImage || `${siteSettings.url}/images/og-default.jpg`,
    noIndex,
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteSettings.name,
    alternateName: 'Sabero',
    url: siteSettings.url,
    logo: `${siteSettings.url}/images/saberologo.png`,
    description: siteSettings.description,
    sameAs: [
      siteSettings.social.linkedin,
      siteSettings.social.instagram,
      siteSettings.social.youtube,
      siteSettings.social.facebook,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteSettings.contact.email,
      contactType: 'sales',
      availableLanguage: ['Spanish', 'English', 'Portuguese', 'French'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PE',
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteSettings.name,
    url: siteSettings.url,
    description: siteSettings.description,
    inLanguage: ['es', 'en', 'pt', 'fr'],
  };
}

export function generateProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteSettings.name,
    url: siteSettings.url,
    description: siteSettings.description,
    areaServed: ['America', 'Europe'],
    availableLanguage: ['Spanish', 'English', 'Portuguese', 'French'],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
