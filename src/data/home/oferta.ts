// ============================================
// SABERO Consulting - Nuestra Oferta Data
// Portafolio integrado de capacidades y especialidades
// ============================================

export interface Capacidad {
  id: string;
  title: string;
  summary: string;
  items: string[];
  description: string;
  resolves: string;
}

export interface Especialidad {
  id: string;
  title: string;
  description: string;
  resolves: string;
  scope: string[];
  cta?: string;
  ctaHref?: string;
}

export interface OfertaContent {
  intro: {
    title: string;
    titleAccent: string;
    description: string;
    microcopy: string;
  };
  capacidades: {
    title: string;
    subtitle: string;
    items: Capacidad[];
  };
  especialidades: {
    title: string;
    subtitle: string;
    items: Especialidad[];
  };
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
}

export const ofertaContent: Record<string, OfertaContent> = {
  es: {
    intro: {
      title: 'Nuestra',
      titleAccent: 'oferta',
      description:
        'SABERO diseña, desarrolla y evoluciona plataformas digitales para empresas que necesitan escalar procesos, productos y operaciones en América y Europa.',
      microcopy:
        'Integramos estrategia, producto, ingeniería y operación para construir soluciones digitales con impacto real.',
    },
    capacidades: {
      title: 'Capacidades',
      subtitle: 'Cómo generamos valor',
      items: [
        {
          id: 'servicios',
          title: 'Servicios',
          summary:
            'Acompañamos a empresas desde la definición de necesidades hasta la construcción, integración y evolución continua de productos y plataformas digitales.',
          items: [
            'Discovery y definición',
            'Diseño funcional',
            'Desarrollo',
            'Integración',
            'Soporte evolutivo',
          ],
          description:
            'Cubrimos cada etapa del ciclo de vida digital con equipos multidisciplinarios que combinan visión de negocio, diseño de experiencia y ejecución técnica.',
          resolves:
            'Cuando una empresa necesita un partner que no solo programe, sino que también entienda negocio, producto y operación.',
        },
        {
          id: 'soluciones',
          title: 'Soluciones',
          summary:
            'Construimos soluciones digitales orientadas a procesos, experiencia de usuario, eficiencia operativa y crecimiento sostenible.',
          items: [
            'Plataformas internas',
            'Marketplaces',
            'Portales de clientes',
            'Sistemas operativos',
            'Herramientas de automatización',
          ],
          description:
            'Cada solución responde a un desafío concreto de negocio: optimizar operaciones, habilitar nuevos canales o transformar la experiencia de usuarios internos y externos.',
          resolves:
            'Cuando el cliente no sabe si necesita "una web" o "un sistema", y tú le muestras soluciones de negocio.',
        },
        {
          id: 'capacidades-tecnologicas',
          title: 'Capacidades tecnológicas',
          summary:
            'Combinamos arquitectura de producto, ingeniería moderna, integraciones, cloud y analítica para construir plataformas confiables y escalables.',
          items: [
            'Arquitectura',
            'Frontend y backend',
            'Integraciones',
            'Cloud',
            'Observabilidad',
            'Data y AI enablement',
          ],
          description:
            'Nuestra base técnica está diseñada para resolver problemas reales: escalar sin fricción, mantener calidad en cada entrega y evolucionar sin deuda técnica acumulada.',
          resolves:
            'Cuando el cliente necesita confianza técnica y quiere saber si SABERO tiene capacidad real de ejecución.',
        },
        {
          id: 'modelos-colaboracion',
          title: 'Modelos de colaboración',
          summary:
            'Nos adaptamos al momento del negocio con esquemas de discovery, ejecución por fases, equipos dedicados o colaboración con equipos internos.',
          items: [
            'Discovery inicial',
            'Equipo dedicado o parcial',
            'Ejecución por fases',
            'Colaboración con equipos internos',
            'Soporte continuo',
          ],
          description:
            'Trabajamos como extensión del equipo del cliente o como partner de ejecución integral, según la madurez digital y las necesidades de cada organización.',
          resolves:
            'Reduce la duda típica del cliente sobre "cómo van a trabajar conmigo".',
        },
        {
          id: 'innovacion-modernizacion',
          title: 'Innovación y modernización',
          summary:
            'Ayudamos a modernizar sistemas, automatizar operaciones y habilitar nuevas capacidades tecnológicas sin interrumpir la operación del negocio.',
          items: [
            'Modernización tecnológica',
            'Automatización',
            'Evolución de procesos',
            'Mejora de performance',
            'Adopción gradual de IA',
          ],
          description:
            'Conectamos a las empresas con la evolución tecnológica sin interrumpir su operación actual, habilitando capacidades nuevas de forma progresiva y controlada.',
          resolves:
            'Cuando la empresa ya tiene algo funcionando, pero necesita evolucionarlo.',
        },
      ],
    },
    especialidades: {
      title: 'Especialidades',
      subtitle: 'En qué trabajamos',
      items: [
        {
          id: 'desarrollo-medida',
          title: 'Desarrollo de software a medida',
          description:
            'Desarrollamos software adaptado a procesos, objetivos y reglas de negocio específicas, con foco en mantenibilidad y escalabilidad.',
          resolves:
            'Elimina la dependencia de soluciones genéricas que no se adaptan a tu operación. Obtienes un producto diseñado para tu negocio, escalable y mantenible.',
          scope: [
            'Desarrollo a medida',
            'Sistemas internos',
            'Portales',
            'Herramientas operativas',
            'Productos digitales',
          ],
          cta: 'Ver capacidades de desarrollo',
          ctaHref: '#desarrollo-medida',
        },
        {
          id: 'plataformas-web',
          title: 'Plataformas web y marketplaces',
          description:
            'Diseñamos y desarrollamos plataformas web y marketplaces capaces de conectar usuarios, procesos y operaciones en una sola experiencia digital.',
          resolves:
            'Centraliza la interacción con clientes, proveedores o partners en una plataforma diseñada para escalar sin perder calidad de experiencia.',
          scope: [
            'Marketplaces',
            'Plataformas B2B/B2C',
            'Paneles administrativos',
            'Portales de usuario',
            'Experiencias web escalables',
          ],
          cta: 'Ver plataformas',
          ctaHref: '#plataformas-web',
        },
        {
          id: 'modernizacion-sistemas',
          title: 'Modernización de sistemas',
          description:
            'Modernizamos aplicaciones y sistemas existentes para mejorar rendimiento, estabilidad, velocidad de entrega y capacidad de evolución.',
          resolves:
            'Reduce la deuda técnica y el riesgo operativo de sistemas legacy. Aceleras la entrega de nuevas funcionalidades sin interrumpir la operación actual.',
          scope: [
            'Refactor',
            'Migración',
            'Desacople',
            'Actualización de stack',
            'Mejora de mantenibilidad',
          ],
          cta: 'Ver modernización',
          ctaHref: '#modernizacion-sistemas',
        },
        {
          id: 'integraciones-automatizacion',
          title: 'Integraciones y automatización',
          description:
            'Integramos plataformas, servicios y procesos para eliminar tareas manuales, reducir errores y acelerar la operación.',
          resolves:
            'Elimina silos de información y automatiza flujos críticos. Tu equipo opera con datos en tiempo real y procesos sincronizados.',
          scope: [
            'APIs',
            'Webhooks',
            'Pagos',
            'CRM/ERP',
            'Automatización de flujos',
            'Sincronización de datos',
          ],
          cta: 'Ver integraciones',
          ctaHref: '#integraciones-automatizacion',
        },
        {
          id: 'cloud-devops',
          title: 'Cloud y DevOps',
          description:
            'Preparamos y operamos plataformas sobre infraestructura moderna con foco en estabilidad, observabilidad, seguridad y escalabilidad.',
          resolves:
            'Elimina cuellos de botella en despliegues y operación. Tu equipo entrega con velocidad, confianza y control sobre cada entorno.',
          scope: [
            'Despliegue',
            'Infraestructura',
            'CI/CD',
            'Monitoreo',
            'Observabilidad',
            'Confiabilidad',
          ],
          cta: 'Ver cloud y DevOps',
          ctaHref: '#cloud-devops',
        },
        {
          id: 'qa-evolucion',
          title: 'QA y evolución continua',
          description:
            'Aseguramos calidad en cada entrega y acompañamos la evolución del producto con mejoras continuas según uso, feedback y necesidades del negocio.',
          resolves:
            'Reduce riesgos en cada release. Mantienes calidad constante mientras el producto crece y se adapta a nuevas necesidades del negocio.',
          scope: [
            'Testing funcional',
            'Validación continua',
            'Mantenimiento',
            'Mejoras iterativas',
            'Control técnico',
          ],
          cta: 'Ver QA',
          ctaHref: '#qa-evolucion',
        },
        {
          id: 'data-analitica',
          title: 'Data, analítica y AI enablement',
          description:
            'Habilitamos capacidades de datos, analítica y automatización para mejorar visibilidad operativa, toma de decisiones y futuros casos de inteligencia aplicada.',
          resolves:
            'Transforma datos dispersos en información accionable. Preparas a la organización para adoptar IA y automatización basada en datos reales.',
          scope: [
            'Dashboards',
            'Trazabilidad',
            'Reporting',
            'Métricas operativas',
            'Preparación de datos',
            'Automatización asistida',
          ],
          cta: 'Ver data y analítica',
          ctaHref: '#data-analitica',
        },
        {
          id: 'arquitectura-producto',
          title: 'Arquitectura de producto',
          description:
            'Definimos arquitecturas de producto que permiten crecer con claridad técnica, velocidad de entrega y sostenibilidad a largo plazo.',
          resolves:
            'Evita que el crecimiento genere caos técnico. Tu producto evoluciona con una base sólida que permite escalar sin rehacer lo construido.',
          scope: [
            'Diseño de arquitectura',
            'Modularidad',
            'Escalabilidad',
            'Deuda técnica',
            'Roadmap técnico',
            'Sostenibilidad del producto',
          ],
          cta: 'Ver arquitectura',
          ctaHref: '#arquitectura-producto',
        },
      ],
    },
    cta: {
      primary: { text: 'Explorar casos e impacto', href: '/casos' },
      secondary: { text: 'Hablar con SABERO', href: '/contacto' },
    },
  },
  en: {
    intro: {
      title: 'Our',
      titleAccent: 'offering',
      description:
        'SABERO designs, develops and evolves digital platforms for companies that need to scale processes, products and operations across the Americas and Europe.',
      microcopy:
        'We integrate strategy, product, engineering and operations to build digital solutions with real impact.',
    },
    capacidades: {
      title: 'Capabilities',
      subtitle: 'How we create value',
      items: [
        {
          id: 'services',
          title: 'Services',
          summary:
            'We partner with companies from needs definition through building, integrating and continuously evolving digital products and platforms.',
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
            'When a company needs a partner that understands business, product and operations, not just coding.',
        },
        {
          id: 'solutions',
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
            'Each solution addresses a concrete business challenge: optimizing operations, enabling new channels or transforming user experiences.',
          resolves:
            'When the client is unsure if they need "a website" or "a system", and you show them business solutions.',
        },
        {
          id: 'tech-capabilities',
          title: 'Technology capabilities',
          summary:
            'We combine product architecture, modern engineering, integrations, cloud and analytics to build reliable, scalable platforms.',
          items: [
            'Architecture',
            'Frontend and backend',
            'Integrations',
            'Cloud',
            'Observability',
            'Data and AI enablement',
          ],
          description:
            'Our technical foundation solves real problems: scaling without friction, maintaining quality in every delivery and evolving without accumulated technical debt.',
          resolves:
            'When the client needs technical confidence and wants to know if SABERO has real execution capability.',
        },
        {
          id: 'collaboration',
          title: 'Collaboration models',
          summary:
            'We adapt to each business stage with discovery schemes, phased execution, dedicated teams or collaboration with internal teams.',
          items: [
            'Initial discovery',
            'Dedicated or partial team',
            'Phased execution',
            'Collaboration with internal teams',
            'Ongoing support',
          ],
          description:
            'We work as an extension of the client team or as an end-to-end execution partner, depending on digital maturity and organizational needs.',
          resolves:
            'Reduces the typical client doubt about "how will you work with me".',
        },
        {
          id: 'innovation',
          title: 'Innovation and modernization',
          summary:
            'We help modernize systems, automate operations and enable new technology capabilities without disrupting business operations.',
          items: [
            'Technology modernization',
            'Automation',
            'Process evolution',
            'Performance improvement',
            'Gradual AI adoption',
          ],
          description:
            'We connect companies with technological evolution without interrupting current operations, enabling new capabilities progressively and in a controlled manner.',
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
          id: 'custom-dev',
          title: 'Custom software development',
          description:
            'We develop software adapted to specific processes, objectives and business rules, with focus on maintainability and scalability.',
          resolves:
            'Eliminates dependency on generic solutions that do not fit your operation. You get a product designed for your business, scalable and maintainable.',
          scope: [
            'Custom development',
            'Internal systems',
            'Portals',
            'Operational tools',
            'Digital products',
          ],
          cta: 'See development capabilities',
          ctaHref: '#custom-dev',
        },
        {
          id: 'web-platforms',
          title: 'Web platforms and marketplaces',
          description:
            'We design and develop web platforms and marketplaces capable of connecting users, processes and operations in a single digital experience.',
          resolves:
            'Centralizes customer, supplier or partner interaction on a platform designed to scale without losing experience quality.',
          scope: [
            'Marketplaces',
            'B2B/B2C platforms',
            'Admin panels',
            'User portals',
            'Scalable web experiences',
          ],
          cta: 'See platforms',
          ctaHref: '#web-platforms',
        },
        {
          id: 'modernization',
          title: 'System modernization',
          description:
            'We modernize existing applications and systems to improve performance, stability, delivery speed and evolution capacity.',
          resolves:
            'Reduces technical debt and operational risk of legacy systems. Accelerate new feature delivery without disrupting current operations.',
          scope: [
            'Refactoring',
            'Migration',
            'Decoupling',
            'Stack upgrade',
            'Maintainability improvement',
          ],
          cta: 'See modernization',
          ctaHref: '#modernization',
        },
        {
          id: 'integrations',
          title: 'Integrations and automation',
          description:
            'We integrate platforms, services and processes to eliminate manual tasks, reduce errors and accelerate operations.',
          resolves:
            'Eliminates information silos and automates critical workflows. Your team operates with real-time data and synchronized processes.',
          scope: [
            'APIs',
            'Webhooks',
            'Payments',
            'CRM/ERP',
            'Workflow automation',
            'Data synchronization',
          ],
          cta: 'See integrations',
          ctaHref: '#integrations',
        },
        {
          id: 'cloud-devops',
          title: 'Cloud and DevOps',
          description:
            'We prepare and operate platforms on modern infrastructure with focus on stability, observability, security and scalability.',
          resolves:
            'Eliminates deployment and operations bottlenecks. Your team delivers with speed, confidence and control over every environment.',
          scope: [
            'Deployment',
            'Infrastructure',
            'CI/CD',
            'Monitoring',
            'Observability',
            'Reliability',
          ],
          cta: 'See cloud and DevOps',
          ctaHref: '#cloud-devops',
        },
        {
          id: 'qa-evolution',
          title: 'QA and continuous evolution',
          description:
            'We ensure quality in every delivery and accompany product evolution with continuous improvements based on usage, feedback and business needs.',
          resolves:
            'Reduces risk in every release. Maintain consistent quality as the product grows and adapts to new business needs.',
          scope: [
            'Functional testing',
            'Continuous validation',
            'Maintenance',
            'Iterative improvements',
            'Technical control',
          ],
          cta: 'See QA',
          ctaHref: '#qa-evolution',
        },
        {
          id: 'data-analytics',
          title: 'Data, analytics and AI enablement',
          description:
            'We enable data, analytics and automation capabilities to improve operational visibility, decision-making and future applied intelligence use cases.',
          resolves:
            'Transforms scattered data into actionable information. Prepare the organization to adopt AI and data-driven automation.',
          scope: [
            'Dashboards',
            'Traceability',
            'Reporting',
            'Operational metrics',
            'Data preparation',
            'Assisted automation',
          ],
          cta: 'See data and analytics',
          ctaHref: '#data-analytics',
        },
        {
          id: 'product-architecture',
          title: 'Product architecture',
          description:
            'We define product architectures that enable growth with technical clarity, delivery speed and long-term sustainability.',
          resolves:
            'Prevents growth from creating technical chaos. Your product evolves on a solid foundation that allows scaling without rebuilding.',
          scope: [
            'Architecture design',
            'Modularity',
            'Scalability',
            'Technical debt',
            'Technical roadmap',
            'Product sustainability',
          ],
          cta: 'See architecture',
          ctaHref: '#product-architecture',
        },
      ],
    },
    cta: {
      primary: { text: 'Explore cases and impact', href: '/en/casos' },
      secondary: { text: 'Talk to SABERO', href: '/en/contacto' },
    },
  },
  pt: {
    intro: {
      title: 'Nossa',
      titleAccent: 'oferta',
      description:
        'A SABERO projeta, desenvolve e evolui plataformas digitais para empresas que precisam escalar processos, produtos e operações nas Américas e Europa.',
      microcopy:
        'Integramos estratégia, produto, engenharia e operação para construir soluções digitais com impacto real.',
    },
    capacidades: {
      title: 'Capacidades',
      subtitle: 'Como geramos valor',
      items: [
        {
          id: 'servicos',
          title: 'Serviços',
          summary:
            'Acompanhamos empresas desde a definição de necessidades até a construção, integração e evolução contínua de produtos e plataformas digitais.',
          items: [
            'Discovery e definição',
            'Design funcional',
            'Desenvolvimento',
            'Integração',
            'Suporte evolutivo',
          ],
          description:
            'Cobrimos cada etapa do ciclo de vida digital com equipes multidisciplinares que combinam visão de negócio, design de experiência e execução técnica.',
          resolves:
            'Quando uma empresa precisa de um parceiro que entenda negócio, produto e operação, não apenas programação.',
        },
        {
          id: 'solucoes',
          title: 'Soluções',
          summary:
            'Construímos soluções digitais orientadas a processos, experiência do usuário, eficiência operacional e crescimento sustentável.',
          items: [
            'Plataformas internas',
            'Marketplaces',
            'Portais de clientes',
            'Sistemas operacionais',
            'Ferramentas de automação',
          ],
          description:
            'Cada solução responde a um desafio concreto de negócio: otimizar operações, habilitar novos canais ou transformar a experiência de usuários.',
          resolves:
            'Quando o cliente não sabe se precisa de "um site" ou "um sistema", e você mostra soluções de negócio.',
        },
        {
          id: 'capacidades-tecnologicas',
          title: 'Capacidades tecnológicas',
          summary:
            'Combinamos arquitetura de produto, engenharia moderna, integrações, cloud e analítica para construir plataformas confiáveis e escaláveis.',
          items: [
            'Arquitetura',
            'Frontend e backend',
            'Integrações',
            'Cloud',
            'Observabilidade',
            'Data e AI enablement',
          ],
          description:
            'Nossa base técnica resolve problemas reais: escalar sem fricção, manter qualidade em cada entrega e evoluir sem dívida técnica acumulada.',
          resolves:
            'Quando o cliente precisa de confiança técnica e quer saber se a SABERO tem capacidade real de execução.',
        },
        {
          id: 'modelos-colaboracao',
          title: 'Modelos de colaboração',
          summary:
            'Nos adaptamos ao momento do negócio com esquemas de discovery, execução por fases, equipes dedicadas ou colaboração com equipes internas.',
          items: [
            'Discovery inicial',
            'Equipe dedicada ou parcial',
            'Execução por fases',
            'Colaboração com equipes internas',
            'Suporte contínuo',
          ],
          description:
            'Trabalhamos como extensão da equipe do cliente ou como parceiro de execução integral, conforme a maturidade digital de cada organização.',
          resolves:
            'Reduz a dúvida típica do cliente sobre "como vocês vão trabalhar comigo".',
        },
        {
          id: 'inovacao-modernizacao',
          title: 'Inovação e modernização',
          summary:
            'Ajudamos a modernizar sistemas, automatizar operações e habilitar novas capacidades tecnológicas sem interromper a operação do negócio.',
          items: [
            'Modernização tecnológica',
            'Automação',
            'Evolução de processos',
            'Melhoria de performance',
            'Adoção gradual de IA',
          ],
          description:
            'Conectamos empresas com a evolução tecnológica sem interromper a operação atual, habilitando novas capacidades de forma progressiva e controlada.',
          resolves:
            'Quando a empresa já tem algo funcionando, mas precisa evoluí-lo.',
        },
      ],
    },
    especialidades: {
      title: 'Especialidades',
      subtitle: 'No que trabalhamos',
      items: [
        {
          id: 'desenvolvimento-medida',
          title: 'Desenvolvimento de software sob medida',
          description:
            'Desenvolvemos software adaptado a processos, objetivos e regras de negócio específicas, com foco em mantenibilidade e escalabilidade.',
          resolves:
            'Elimina a dependência de soluções genéricas. Você obtém um produto projetado para seu negócio, escalável e sustentável.',
          scope: [
            'Desenvolvimento sob medida',
            'Sistemas internos',
            'Portais',
            'Ferramentas operacionais',
            'Produtos digitais',
          ],
          cta: 'Ver capacidades de desenvolvimento',
          ctaHref: '#desenvolvimento-medida',
        },
        {
          id: 'plataformas-web',
          title: 'Plataformas web e marketplaces',
          description:
            'Projetamos e desenvolvemos plataformas web e marketplaces capazes de conectar usuários, processos e operações em uma única experiência digital.',
          resolves:
            'Centraliza a interação com clientes, fornecedores ou parceiros em uma plataforma projetada para escalar.',
          scope: [
            'Marketplaces',
            'Plataformas B2B/B2C',
            'Painéis administrativos',
            'Portais de usuário',
            'Experiências web escaláveis',
          ],
          cta: 'Ver plataformas',
          ctaHref: '#plataformas-web',
        },
        {
          id: 'modernizacao-sistemas',
          title: 'Modernização de sistemas',
          description:
            'Modernizamos aplicações e sistemas existentes para melhorar desempenho, estabilidade, velocidade de entrega e capacidade de evolução.',
          resolves:
            'Reduz a dívida técnica e o risco operacional de sistemas legados. Acelere a entrega de novas funcionalidades.',
          scope: [
            'Refatoração',
            'Migração',
            'Desacoplamento',
            'Atualização de stack',
            'Melhoria de mantenibilidade',
          ],
          cta: 'Ver modernização',
          ctaHref: '#modernizacao-sistemas',
        },
        {
          id: 'integracoes-automacao',
          title: 'Integrações e automação',
          description:
            'Integramos plataformas, serviços e processos para eliminar tarefas manuais, reduzir erros e acelerar a operação.',
          resolves:
            'Elimina silos de informação e automatiza fluxos críticos. Sua equipe opera com dados em tempo real.',
          scope: [
            'APIs',
            'Webhooks',
            'Pagamentos',
            'CRM/ERP',
            'Automação de fluxos',
            'Sincronização de dados',
          ],
          cta: 'Ver integrações',
          ctaHref: '#integracoes-automacao',
        },
        {
          id: 'cloud-devops',
          title: 'Cloud e DevOps',
          description:
            'Preparamos e operamos plataformas em infraestrutura moderna com foco em estabilidade, observabilidade, segurança e escalabilidade.',
          resolves:
            'Elimina gargalos em implantações e operação. Sua equipe entrega com velocidade e controle.',
          scope: [
            'Implantação',
            'Infraestrutura',
            'CI/CD',
            'Monitoramento',
            'Observabilidade',
            'Confiabilidade',
          ],
          cta: 'Ver cloud e DevOps',
          ctaHref: '#cloud-devops',
        },
        {
          id: 'qa-evolucao',
          title: 'QA e evolução contínua',
          description:
            'Garantimos qualidade em cada entrega e acompanhamos a evolução do produto com melhorias contínuas baseadas em uso, feedback e necessidades do negócio.',
          resolves:
            'Reduz riscos em cada release. Mantenha qualidade constante enquanto o produto cresce.',
          scope: [
            'Testes funcionais',
            'Validação contínua',
            'Manutenção',
            'Melhorias iterativas',
            'Controle técnico',
          ],
          cta: 'Ver QA',
          ctaHref: '#qa-evolucao',
        },
        {
          id: 'data-analitica',
          title: 'Dados, analítica e AI enablement',
          description:
            'Habilitamos capacidades de dados, analítica e automação para melhorar visibilidade operacional, tomada de decisões e futuros casos de inteligência aplicada.',
          resolves:
            'Transforma dados dispersos em informação acionável. Prepare a organização para adotar IA.',
          scope: [
            'Dashboards',
            'Rastreabilidade',
            'Reporting',
            'Métricas operacionais',
            'Preparação de dados',
            'Automação assistida',
          ],
          cta: 'Ver dados e analítica',
          ctaHref: '#data-analitica',
        },
        {
          id: 'arquitetura-produto',
          title: 'Arquitetura de produto',
          description:
            'Definimos arquiteturas de produto que permitem crescer com clareza técnica, velocidade de entrega e sustentabilidade a longo prazo.',
          resolves:
            'Evita que o crescimento gere caos técnico. Seu produto evolui com uma base sólida.',
          scope: [
            'Design de arquitetura',
            'Modularidade',
            'Escalabilidade',
            'Dívida técnica',
            'Roadmap técnico',
            'Sustentabilidade do produto',
          ],
          cta: 'Ver arquitetura',
          ctaHref: '#arquitetura-produto',
        },
      ],
    },
    cta: {
      primary: { text: 'Explorar casos e impacto', href: '/pt/casos' },
      secondary: { text: 'Falar com SABERO', href: '/pt/contacto' },
    },
  },
  fr: {
    intro: {
      title: 'Notre',
      titleAccent: 'offre',
      description:
        'SABERO conçoit, développe et fait évoluer des plateformes numériques pour les entreprises qui doivent passer à l\'échelle leurs processus, produits et opérations en Amérique et en Europe.',
      microcopy:
        'Nous intégrons stratégie, produit, ingénierie et opérations pour construire des solutions numériques à impact réel.',
    },
    capacidades: {
      title: 'Capacités',
      subtitle: 'Comment nous créons de la valeur',
      items: [
        {
          id: 'services',
          title: 'Services',
          summary:
            'Nous accompagnons les entreprises de la définition des besoins à la construction, l\'intégration et l\'évolution continue de produits et plateformes numériques.',
          items: [
            'Discovery et définition',
            'Design fonctionnel',
            'Développement',
            'Intégration',
            'Support évolutif',
          ],
          description:
            'Nous couvrons chaque étape du cycle de vie numérique avec des équipes multidisciplinaires alliant vision business, design d\'expérience et exécution technique.',
          resolves:
            'Quand une entreprise a besoin d\'un partenaire qui comprend le business, le produit et l\'exploitation, pas seulement le code.',
        },
        {
          id: 'solutions',
          title: 'Solutions',
          summary:
            'Nous construisons des solutions numériques orientées processus, expérience utilisateur, efficacité opérationnelle et croissance durable.',
          items: [
            'Plateformes internes',
            'Marketplaces',
            'Portails clients',
            'Systèmes opérationnels',
            'Outils d\'automatisation',
          ],
          description:
            'Chaque solution répond à un défi concret : optimiser les opérations, activer de nouveaux canaux ou transformer l\'expérience utilisateur.',
          resolves:
            'Quand le client ne sait pas s\'il a besoin "d\'un site web" ou "d\'un système", et vous lui montrez des solutions business.',
        },
        {
          id: 'capacites-technologiques',
          title: 'Capacités technologiques',
          summary:
            'Nous combinons architecture produit, ingénierie moderne, intégrations, cloud et analytique pour construire des plateformes fiables et évolutives.',
          items: [
            'Architecture',
            'Frontend et backend',
            'Intégrations',
            'Cloud',
            'Observabilité',
            'Data et AI enablement',
          ],
          description:
            'Notre base technique résout des problèmes réels : passer à l\'échelle sans friction, maintenir la qualité à chaque livraison et évoluer sans dette technique.',
          resolves:
            'Quand le client a besoin de confiance technique et veut savoir si SABERO a une réelle capacité d\'exécution.',
        },
        {
          id: 'modeles-collaboration',
          title: 'Modèles de collaboration',
          summary:
            'Nous nous adaptons au stade de l\'entreprise avec des schémas de discovery, exécution par phases, équipes dédiées ou collaboration avec les équipes internes.',
          items: [
            'Discovery initial',
            'Équipe dédiée ou partielle',
            'Exécution par phases',
            'Collaboration avec les équipes internes',
            'Support continu',
          ],
          description:
            'Nous travaillons comme une extension de l\'équipe client ou comme partenaire d\'exécution de bout en bout.',
          resolves:
            'Réduit le doute typique du client sur "comment allez-vous travailler avec moi".',
        },
        {
          id: 'innovation-modernisation',
          title: 'Innovation et modernisation',
          summary:
            'Nous aidons à moderniser les systèmes, automatiser les opérations et activer de nouvelles capacités technologiques sans interrompre l\'exploitation.',
          items: [
            'Modernisation technologique',
            'Automatisation',
            'Évolution des processus',
            'Amélioration des performances',
            'Adoption progressive de l\'IA',
          ],
          description:
            'Nous connectons les entreprises à l\'évolution technologique sans interrompre leurs opérations actuelles.',
          resolves:
            'Quand l\'entreprise a déjà quelque chose qui fonctionne, mais doit le faire évoluer.',
        },
      ],
    },
    especialidades: {
      title: 'Spécialités',
      subtitle: 'Nos domaines d\'expertise',
      items: [
        {
          id: 'developpement-sur-mesure',
          title: 'Développement de logiciels sur mesure',
          description:
            'Nous développons des logiciels adaptés aux processus, objectifs et règles métier spécifiques, avec un accent sur la maintenabilité et l\'évolutivité.',
          resolves:
            'Élimine la dépendance aux solutions génériques. Obtenez un produit conçu pour votre entreprise, évolutif et maintenable.',
          scope: [
            'Développement sur mesure',
            'Systèmes internes',
            'Portails',
            'Outils opérationnels',
            'Produits numériques',
          ],
          cta: 'Voir les capacités de développement',
          ctaHref: '#developpement-sur-mesure',
        },
        {
          id: 'plateformes-web',
          title: 'Plateformes web et marketplaces',
          description:
            'Nous concevons et développons des plateformes web et marketplaces capables de connecter utilisateurs, processus et opérations dans une seule expérience numérique.',
          resolves:
            'Centralisez les interactions clients, fournisseurs ou partenaires sur une plateforme conçue pour évoluer.',
          scope: [
            'Marketplaces',
            'Plateformes B2B/B2C',
            'Panneaux d\'administration',
            'Portails utilisateur',
            'Expériences web évolutives',
          ],
          cta: 'Voir les plateformes',
          ctaHref: '#plateformes-web',
        },
        {
          id: 'modernisation-systemes',
          title: 'Modernisation de systèmes',
          description:
            'Nous modernisons les applications et systèmes existants pour améliorer les performances, la stabilité, la vitesse de livraison et la capacité d\'évolution.',
          resolves:
            'Réduit la dette technique et le risque opérationnel des systèmes legacy. Accélérez la livraison de nouvelles fonctionnalités.',
          scope: [
            'Refactorisation',
            'Migration',
            'Découplage',
            'Mise à niveau de la stack',
            'Amélioration de la maintenabilité',
          ],
          cta: 'Voir la modernisation',
          ctaHref: '#modernisation-systemes',
        },
        {
          id: 'integrations-automatisation',
          title: 'Intégrations et automatisation',
          description:
            'Nous intégrons plateformes, services et processus pour éliminer les tâches manuelles, réduire les erreurs et accélérer l\'exploitation.',
          resolves:
            'Élimine les silos d\'information et automatise les flux critiques. Votre équipe travaille avec des données en temps réel.',
          scope: [
            'APIs',
            'Webhooks',
            'Paiements',
            'CRM/ERP',
            'Automatisation des flux',
            'Synchronisation des données',
          ],
          cta: 'Voir les intégrations',
          ctaHref: '#integrations-automatisation',
        },
        {
          id: 'cloud-devops',
          title: 'Cloud et DevOps',
          description:
            'Nous préparons et opérons des plateformes sur infrastructure moderne avec un accent sur la stabilité, l\'observabilité, la sécurité et l\'évolutivité.',
          resolves:
            'Élimine les goulots d\'étranglement de déploiement et d\'exploitation. Votre équipe livre avec rapidité, confiance et contrôle.',
          scope: [
            'Déploiement',
            'Infrastructure',
            'CI/CD',
            'Monitoring',
            'Observabilité',
            'Fiabilité',
          ],
          cta: 'Voir cloud et DevOps',
          ctaHref: '#cloud-devops',
        },
        {
          id: 'qa-evolution',
          title: 'QA et évolution continue',
          description:
            'Nous assurons la qualité à chaque livraison et accompagnons l\'évolution du produit avec des améliorations continues basées sur l\'utilisation, les retours et les besoins métier.',
          resolves:
            'Réduit les risques à chaque release. Maintenez une qualité constante pendant que le produit évolue.',
          scope: [
            'Tests fonctionnels',
            'Validation continue',
            'Maintenance',
            'Améliorations itératives',
            'Contrôle technique',
          ],
          cta: 'Voir QA',
          ctaHref: '#qa-evolution',
        },
        {
          id: 'data-analytique',
          title: 'Données, analytique et IA',
          description:
            'Nous activons les capacités de données, d\'analytique et d\'automatisation pour améliorer la visibilité opérationnelle, la prise de décision et les futurs cas d\'intelligence appliquée.',
          resolves:
            'Transforme des données dispersées en informations actionnables. Préparez l\'organisation à adopter l\'IA.',
          scope: [
            'Tableaux de bord',
            'Traçabilité',
            'Reporting',
            'Métriques opérationnelles',
            'Préparation des données',
            'Automatisation assistée',
          ],
          cta: 'Voir données et analytique',
          ctaHref: '#data-analytique',
        },
        {
          id: 'architecture-produit',
          title: 'Architecture produit',
          description:
            'Nous définissons des architectures de produit qui permettent de croître avec clarté technique, rapidité de livraison et durabilité à long terme.',
          resolves:
            'Empêche la croissance de créer du chaos technique. Votre produit évolue sur une base solide.',
          scope: [
            'Conception d\'architecture',
            'Modularité',
            'Évolutivité',
            'Dette technique',
            'Roadmap technique',
            'Durabilité du produit',
          ],
          cta: 'Voir architecture',
          ctaHref: '#architecture-produit',
        },
      ],
    },
    cta: {
      primary: { text: 'Explorer les cas et impact', href: '/fr/casos' },
      secondary: { text: 'Parler à SABERO', href: '/fr/contacto' },
    },
  },
};
