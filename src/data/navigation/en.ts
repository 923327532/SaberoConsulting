import type { NavigationData } from '../../i18n/utils/types';

export const navEn: NavigationData = {
  main: [
    { label: 'Our offering', href: '/en/oferta' },
    { label: 'Industries', href: '/en/industrias' },
    { label: 'Cases & impact', href: '/casos' },
    { label: 'Insights', href: '/insights' },
    { label: 'About us', href: '/nosotros' },
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
            { label: 'Services', href: '/en/oferta#servicios' },
            { label: 'Solutions', href: '/en/oferta#soluciones' },
            { label: 'Tech capabilities', href: '/en/oferta#capacidades-tecnologicas' },
            { label: 'Collaboration models', href: '/en/oferta#modelos-colaboracion' },
            { label: 'Innovation & modernization', href: '/en/oferta#innovacion-modernizacion' },
          ],
        },
        {
          title: 'Specialties',
          items: [
            { label: 'Custom software development', href: '/en/oferta#desarrollo-medida' },
            { label: 'Web platforms & marketplaces', href: '/en/oferta#plataformas-web' },
            { label: 'System modernization', href: '/en/oferta#modernizacion-sistemas' },
            { label: 'Integrations & automation', href: '/en/oferta#integraciones-automatizacion' },
            { label: 'Cloud & DevOps', href: '/en/oferta#cloud-devops' },
            { label: 'QA & continuous evolution', href: '/en/oferta#qa-evolucion' },
            { label: 'Data, analytics & AI enablement', href: '/en/oferta#data-analitica' },
            { label: 'Product architecture', href: '/en/oferta#arquitectura-producto' },
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
            { label: 'PropTech', href: '/en/industrias#proptech' },
            { label: 'Fintech & payments', href: '/en/industrias#fintech' },
            { label: 'Marketplaces & platforms', href: '/en/industrias#marketplaces' },
            { label: 'Education & EdTech', href: '/en/industrias#edtech' },
            { label: 'Logistics & operations', href: '/en/industrias#logistics' },
            { label: 'Enterprise internal solutions', href: '/en/industrias#enterprise' },
          ],
        },
        {
          title: 'Industry solutions',
          items: [
            { label: 'Real estate platforms', href: '/en/industrias#realestate' },
            { label: 'Payment processing', href: '/en/industrias#payments' },
            { label: 'B2B & B2C portals', href: '/en/industrias#portals' },
            { label: 'Operations & dashboards', href: '/en/industrias#operations' },
            { label: 'Process automation', href: '/en/industrias#automation' },
            { label: 'Digital experiences', href: '/en/industrias#experiences' },
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
            { label: 'Featured cases', href: '/casos' },
            { label: 'Results by industry', href: '/casos#industrias' },
            { label: 'Platforms built', href: '/casos#plataformas' },
            { label: 'Product stories', href: '/casos#historias' },
            { label: 'Applied digital transformation', href: '/casos#transformacion' },
          ],
        },
        {
          title: 'Recent projects',
          items: [
            { label: 'Real estate marketplace', href: '/casos/marketplace-inmobiliario' },
            { label: 'Freelancer-company platform', href: '/casos/plataforma-freelancer' },
            { label: 'Payment solution & integrations', href: '/casos/solucion-pagos' },
            { label: 'Social & matching platform', href: '/casos/plataforma-matching' },
            { label: 'Internal systems & automation', href: '/casos/sistemas-internos' },
            { label: 'MVPs & continuous evolution', href: '/casos/mvps' },
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
            { label: 'Our story', href: '/nosotros#historia' },
            { label: 'Our vision', href: '/nosotros#vision' },
            { label: 'Our approach', href: '/nosotros#enfoque' },
            { label: 'How we work', href: '/nosotros#trabajamos' },
            { label: 'Culture & values', href: '/nosotros#valores' },
          ],
        },
        {
          title: 'Differentiators',
          items: [
            { label: 'Peru as starting point', href: '/nosotros#peru' },
            { label: 'Regional focus', href: '/nosotros#regional' },
            { label: 'Agile & collaborative delivery', href: '/nosotros#delivery' },
            { label: 'Technical excellence', href: '/nosotros#excelencia' },
            { label: 'Business-driven design', href: '/nosotros#diseno' },
            { label: 'Long-term relationships', href: '/nosotros#relaciones' },
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
          cta: { label: 'Explore careers', href: '/careers' },
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
