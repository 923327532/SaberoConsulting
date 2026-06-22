// ============================================
// SABERO Consulting - Oferta ES
// ============================================
import type { OfertaData } from './types';

export const ofertaEs: OfertaData = {
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
        ctaHref: '/industrias',
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
        ctaHref: '/industrias',
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
        ctaHref: '/industrias',
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
        ctaHref: '/industrias',
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
        ctaHref: '/industrias',
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
        ctaHref: '/industrias',
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
        ctaHref: '/industrias',
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
        ctaHref: '/industrias',
      },
    ],
  },
  cta: {
    primary: { text: 'Explorar casos e impacto', href: '/contacto/' },
    secondary: { text: 'Hablar con SABERO', href: '/contacto/' },
  },
};
