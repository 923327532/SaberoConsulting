// ============================================
// SABERO Consulting - Oferta EN
// ============================================
import type { OfertaData } from './types';

export const ofertaEn: OfertaData = {
  intro: {
    title: 'Our',
    titleAccent: 'offer',
    description:
      'SABERO designs, develops and evolves digital platforms for companies that need to scale processes, products and operations in America and Europe.',
    microcopy:
      'We integrate strategy, product, engineering and operations to build digital solutions with real impact.',
  },
  capacidades: {
    title: 'Capabilities',
    subtitle: 'How we create value',
    items: [
      {
        id: 'servicios',
        title: 'Services',
        summary:
          'We accompany companies from needs definition to construction, integration and continuous evolution of digital products and platforms.',
        items: [
          'Discovery and definition',
          'Functional design',
          'Development',
          'Integration',
          'Evolution support',
        ],
        description:
          'We cover every stage of the digital lifecycle with multidisciplinary teams combining business vision, experience design and technical execution.',
        resolves:
          'When a company needs a partner that not only codes, but also understands business, product and operations.',
      },
      {
        id: 'soluciones',
        title: 'Solutions',
        summary:
          'We build digital solutions focused on processes, user experience, operational efficiency and sustainable growth.',
        items: [
          'Internal platforms',
          'Marketplaces',
          'Customer portals',
          'Operating systems',
          'Automation tools',
        ],
        description:
          'Each solution responds to a specific business challenge: optimize operations, enable new channels or transform the experience of internal and external users.',
        resolves:
          'When the client does not know if they need "a website" or "a system", and you show them business solutions.',
      },
      {
        id: 'capacidades-tecnologicas',
        title: 'Technological capabilities',
        summary:
          'We combine product architecture, modern engineering, integrations, cloud and analytics to build reliable and scalable platforms.',
        items: [
          'Architecture',
          'Frontend and backend',
          'Integrations',
          'Cloud',
          'Observability',
          'Data and AI enablement',
        ],
        description:
          'Our technical foundation is designed to solve real problems: scale without friction, maintain quality in every delivery and evolve without accumulated technical debt.',
        resolves:
          'When the client needs technical confidence and wants to know if SABERO has real execution capability.',
      },
      {
        id: 'modelos-colaboracion',
        title: 'Collaboration models',
        summary:
          'We adapt to the business moment with discovery schemes, phased execution, dedicated teams or collaboration with internal teams.',
        items: [
          'Initial discovery',
          'Dedicated or partial team',
          'Phased execution',
          'Collaboration with internal teams',
          'Continuous support',
        ],
        description:
          'We work as an extension of the client team or as an integral execution partner, depending on the digital maturity and needs of each organization.',
        resolves:
          'Reduces the typical client doubt about "how are they going to work with me".',
      },
      {
        id: 'innovacion-modernizacion',
        title: 'Innovation and modernization',
        summary:
          'We help modernize systems, automate operations and enable new technological capabilities without interrupting business operations.',
        items: [
          'Technological modernization',
          'Automation',
          'Process evolution',
          'Performance improvement',
          'Gradual AI adoption',
        ],
        description:
          'We connect companies with technological evolution without interrupting their current operation, enabling new capabilities progressively and in a controlled manner.',
        resolves:
          'When the company already has something working, but needs to evolve it.',
      },
    ],
  },
  especialidades: {
    title: 'Specialties',
    subtitle: 'What we work on',
    items: [
      {
        id: 'desarrollo-medida',
        title: 'Custom software development',
        description:
          'We develop software adapted to specific processes, objectives and business rules, focusing on maintainability and scalability.',
        resolves:
          'Eliminates dependence on generic solutions that do not adapt to your operation. You get a product designed for your business, scalable and maintainable.',
        scope: [
          'Custom development',
          'Internal systems',
          'Portals',
          'Operational tools',
          'Digital products',
        ],
        cta: 'See development capabilities',
        ctaHref: '/en/industrias',
      },
      {
        id: 'plataformas-web',
        title: 'Web platforms and marketplaces',
        description:
          'We design and develop web platforms and marketplaces capable of connecting users, processes and operations in a single digital experience.',
        resolves:
          'Centralizes interaction with clients, suppliers or partners on a platform designed to scale without losing quality of experience.',
        scope: [
          'Marketplaces',
          'B2B/B2C platforms',
          'Admin panels',
          'User portals',
          'Scalable web experiences',
        ],
        cta: 'See platforms',
        ctaHref: '/en/industrias',
      },
      {
        id: 'modernizacion-sistemas',
        title: 'Systems modernization',
        description:
          'We modernize existing applications and systems to improve performance, stability, delivery speed and evolution capacity.',
        resolves:
          'Reduces technical debt and operational risk of legacy systems. Accelerate delivery of new functionalities without interrupting current operations.',
        scope: [
          'Refactor',
          'Migration',
          'Decoupling',
          'Stack upgrade',
          'Maintainability improvement',
        ],
        cta: 'See modernization',
        ctaHref: '/en/industrias',
      },
      {
        id: 'integraciones-automatizacion',
        title: 'Integrations and automation',
        description:
          'We integrate platforms, services and processes to eliminate manual tasks, reduce errors and accelerate operations.',
        resolves:
          'Eliminates information silos and automates critical flows. Your team operates with real-time data and synchronized processes.',
        scope: [
          'APIs',
          'Webhooks',
          'Payments',
          'CRM/ERP',
          'Flow automation',
          'Data synchronization',
        ],
        cta: 'See integrations',
        ctaHref: '/en/industrias',
      },
      {
        id: 'cloud-devops',
        title: 'Cloud and DevOps',
        description:
          'We prepare and operate platforms on modern infrastructure focusing on stability, observability, security and scalability.',
        resolves:
          'Eliminates bottlenecks in deployments and operations. Your team delivers with speed, confidence and control over each environment.',
        scope: [
          'Deployment',
          'Infrastructure',
          'CI/CD',
          'Monitoring',
          'Observability',
          'Reliability',
        ],
        cta: 'See cloud and DevOps',
        ctaHref: '/en/industrias',
      },
      {
        id: 'qa-evolucion',
        title: 'QA and continuous evolution',
        description:
          'We ensure quality in every delivery and accompany product evolution with continuous improvements based on usage, feedback and business needs.',
        resolves:
          'Reduces risks in each release. Maintain constant quality while the product grows and adapts to new business needs.',
        scope: [
          'Functional testing',
          'Continuous validation',
          'Maintenance',
          'Iterative improvements',
          'Technical control',
        ],
        cta: 'See QA',
        ctaHref: '/en/industrias',
      },
      {
        id: 'data-analitica',
        title: 'Data, analytics and AI enablement',
        description:
          'We enable data, analytics and automation capabilities to improve operational visibility, decision making and future applied intelligence cases.',
        resolves:
          'Transforms scattered data into actionable information. Prepare the organization to adopt AI and automation based on real data.',
        scope: [
          'Dashboards',
          'Traceability',
          'Reporting',
          'Operational metrics',
          'Data preparation',
          'Assisted automation',
        ],
        cta: 'See data and analytics',
        ctaHref: '/en/industrias',
      },
      {
        id: 'arquitectura-producto',
        title: 'Product architecture',
        description:
          'We define product architectures that allow growth with technical clarity, delivery speed and long-term sustainability.',
        resolves:
          'Prevents growth from generating technical chaos. Your product evolves on a solid foundation that allows scaling without redoing what was built.',
        scope: [
          'Architecture design',
          'Modularity',
          'Scalability',
          'Technical debt',
          'Technical roadmap',
          'Product sustainability',
        ],
        cta: 'See architecture',
        ctaHref: '/en/industrias',
      },
    ],
  },
  cta: {
    primary: { text: 'Explore cases and impact', href: '/en/contacto/' },
    secondary: { text: 'Talk to SABERO', href: '/en/contacto/' },
  },
};
