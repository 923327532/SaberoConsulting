import type { NavigationData } from '../../i18n/utils/types';

export const navEn: NavigationData = {
  main: [
    { label: 'Our offering', href: '/#offering' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Cases & impact', href: '/#cases' },
    { label: 'Insights', href: '/insights' },
    { label: 'About us', href: '/#about' },
    { label: 'Careers', href: '/careers' },
  ],
  megaMenus: {
    offering: {
      id: 'offering',
      columns: [
        {
          title: 'Our offering',
          text: 'SABERO designs, develops and evolves digital platforms for companies that need to scale processes, products and operations across America and Europe.',
          items: [],
        },
        {
          title: 'Capabilities',
          items: [
            { label: 'Services', href: '/#services' },
            { label: 'Solutions', href: '/#solutions' },
            { label: 'Tech capabilities', href: '/#capabilities' },
            { label: 'Collaboration models', href: '/#models' },
            { label: 'Innovation & modernization', href: '/#innovation' },
          ],
        },
        {
          title: 'Specialties',
          items: [
            { label: 'Custom software development', href: '/#development' },
            { label: 'Web platforms & marketplaces', href: '/#platforms' },
            { label: 'System modernization', href: '/#modernization' },
            { label: 'Integrations & automation', href: '/#integrations' },
            { label: 'Cloud & DevOps', href: '/#cloud' },
            { label: 'QA & continuous evolution', href: '/#qa' },
            { label: 'Data, analytics & AI enablement', href: '/#data' },
            { label: 'Product architecture', href: '/#architecture' },
          ],
        },
      ],
    },
    industries: {
      id: 'industries',
      columns: [
        {
          title: 'Industries',
          text: 'Each industry has distinct processes, metrics and challenges. SABERO adapts product, architecture and experience to that context.',
          items: [],
        },
        {
          title: 'Sectors',
          items: [
            { label: 'PropTech', href: '/#proptech' },
            { label: 'Fintech & payments', href: '/#fintech' },
            { label: 'Marketplaces & platforms', href: '/#marketplaces' },
            { label: 'Education & EdTech', href: '/#edtech' },
            { label: 'Logistics & operations', href: '/#logistics' },
            { label: 'Enterprise internal solutions', href: '/#enterprise' },
          ],
        },
        {
          title: 'Industry solutions',
          items: [
            { label: 'Real estate platforms', href: '/#realestate' },
            { label: 'Payment processing', href: '/#payments' },
            { label: 'B2B & B2C portals', href: '/#portals' },
            { label: 'Operations & dashboards', href: '/#operations' },
            { label: 'Process automation', href: '/#automation' },
            { label: 'Digital experiences', href: '/#experiences' },
          ],
        },
      ],
    },
    cases: {
      id: 'cases',
      columns: [
        {
          title: 'Cases & impact',
          text: 'We transform business challenges into measurable digital products, platforms and operations.',
          items: [],
        },
        {
          title: 'Explore',
          items: [
            { label: 'Featured cases', href: '/cases' },
            { label: 'Results by industry', href: '/cases#industries' },
            { label: 'Platforms built', href: '/cases#platforms' },
            { label: 'Product stories', href: '/cases#stories' },
            { label: 'Applied digital transformation', href: '/cases#transformation' },
          ],
        },
        {
          title: 'Recent projects',
          items: [
            { label: 'Real estate marketplace', href: '/cases/real-estate-marketplace' },
            { label: 'Freelancer-company platform', href: '/cases/freelancer-platform' },
            { label: 'Payment solution & integrations', href: '/cases/payment-solution' },
            { label: 'Social & matching platform', href: '/cases/matching-platform' },
            { label: 'Internal systems & automation', href: '/cases/internal-systems' },
            { label: 'MVPs & continuous evolution', href: '/cases/mvps' },
          ],
        },
      ],
    },
    insights: {
      id: 'insights',
      columns: [
        {
          title: 'Insights',
          text: 'Content for business leaders and teams looking to understand digital product, automation, scalability and technological evolution.',
          items: [],
        },
        {
          title: 'Content',
          items: [
            { label: 'Articles', href: '/insights' },
            { label: 'Guides', href: '/insights#guides' },
            { label: 'Trends', href: '/insights#trends' },
            { label: 'Case commentaries', href: '/insights#cases' },
            { label: 'Downloadable resources', href: '/insights#resources' },
          ],
        },
        {
          title: 'Featured',
          items: [
            { label: 'How to validate an MVP', href: '/insights/how-to-validate-mvp' },
            { label: 'When to modernize a platform', href: '/insights/modernize-platform' },
            { label: 'Frictionless payment integrations', href: '/insights/payment-integrations' },
            { label: 'Architecture for scalable products', href: '/insights/scalable-architecture' },
            { label: 'AI applied to business processes', href: '/insights/ai-business' },
            { label: 'SEO & performance for platforms', href: '/insights/seo-performance' },
          ],
        },
      ],
    },
    about: {
      id: 'about',
      columns: [
        {
          title: 'About us',
          text: 'SABERO Consulting is a software factory born in Peru, focused on building digital products and platforms for organizations with growth ambitions in America and Europe.',
          items: [],
        },
        {
          title: 'Discover',
          items: [
            { label: 'Our story', href: '/#story' },
            { label: 'Our vision', href: '/#vision' },
            { label: 'Our approach', href: '/#approach' },
            { label: 'How we work', href: '/#work' },
            { label: 'Culture & values', href: '/#values' },
          ],
        },
        {
          title: 'Differentiators',
          items: [
            { label: 'Peru as starting point', href: '/#peru' },
            { label: 'Regional focus', href: '/#regional' },
            { label: 'Agile & collaborative delivery', href: '/#delivery' },
            { label: 'Technical excellence', href: '/#excellence' },
            { label: 'Business-driven design', href: '/#design' },
            { label: 'Long-term relationships', href: '/#relationships' },
          ],
        },
      ],
    },
    careers: {
      id: 'careers',
      columns: [
        {
          title: 'Careers',
          text: 'Join a team that builds digital products with a focus on engineering, business and continuous evolution.',
          items: [],
        },
        {
          title: 'Explore',
          items: [
            { label: 'Life at SABERO', href: '/careers#life' },
            { label: 'Work areas', href: '/careers#areas' },
            { label: 'Selection process', href: '/careers#process' },
            { label: 'Open positions', href: '/careers#positions' },
            { label: 'Future talent', href: '/careers#talent' },
          ],
        },
        {
          title: 'Teams',
          items: [
            { label: 'Engineering', href: '/careers#engineering' },
            { label: 'Product', href: '/careers#product' },
            { label: 'UX/UI', href: '/careers#ux' },
            { label: 'QA', href: '/careers#qa' },
            { label: 'DevOps', href: '/careers#devops' },
            { label: 'Business & Growth', href: '/careers#business' },
          ],
        },
      ],
    },
  },
};
