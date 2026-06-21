import type { NavigationData } from '../../i18n/utils/types';

export const navEs: NavigationData = {
  main: [
    { label: 'Nuestra oferta', href: '/#oferta' },
    { label: 'Industrias', href: '/#industrias' },
    { label: 'Casos e impacto', href: '/#casos' },
    { label: 'Insights', href: '/insights' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Careers', href: '/careers' },
  ],
  megaMenus: {
    oferta: {
      id: 'oferta',
      columns: [
        {
          title: 'Nuestra oferta',
          text: 'SABERO disena, desarrolla y evoluciona plataformas digitales para empresas que necesitan escalar procesos, productos y operaciones en America y Europa.',
          items: [],
        },
        {
          title: 'Capacidades',
          items: [
            { label: 'Servicios', href: '/#servicios' },
            { label: 'Soluciones', href: '/#soluciones' },
            { label: 'Capacidades tecnologicas', href: '/#capacidades' },
            { label: 'Modelos de colaboracion', href: '/#modelos' },
            { label: 'Innovacion y modernizacion', href: '/#innovacion' },
          ],
        },
        {
          title: 'Especialidades',
          items: [
            { label: 'Desarrollo de software a medida', href: '/#desarrollo' },
            { label: 'Plataformas web y marketplaces', href: '/#plataformas' },
            { label: 'Modernizacion de sistemas', href: '/#modernizacion' },
            { label: 'Integraciones y automatizacion', href: '/#integraciones' },
            { label: 'Cloud y DevOps', href: '/#cloud' },
            { label: 'QA y evolucion continua', href: '/#qa' },
            { label: 'Data, analitica y AI enablement', href: '/#data' },
            { label: 'Arquitectura de producto', href: '/#arquitectura' },
          ],
        },
      ],
    },
    industrias: {
      id: 'industrias',
      columns: [
        {
          title: 'Industrias',
          text: 'Cada industria tiene procesos, metricas y retos distintos. SABERO adapta producto, arquitectura y experiencia segun ese contexto.',
          items: [],
        },
        {
          title: 'Sectores',
          items: [
            { label: 'PropTech', href: '/#proptech' },
            { label: 'Fintech y pagos', href: '/#fintech' },
            { label: 'Marketplaces y plataformas', href: '/#marketplaces' },
            { label: 'Educacion y EdTech', href: '/#edtech' },
            { label: 'Logistica y operaciones', href: '/#logistica' },
            { label: 'Soluciones internas empresariales', href: '/#internas' },
          ],
        },
        {
          title: 'Soluciones por industria',
          items: [
            { label: 'Plataformas inmobiliarias', href: '/#inmobiliarias' },
            { label: 'Procesamiento de pagos', href: '/#pagos' },
            { label: 'Portales B2B y B2C', href: '/#portales' },
            { label: 'Gestion operativa y dashboards', href: '/#gestion' },
            { label: 'Automatizacion de procesos', href: '/#automatizacion' },
            { label: 'Experiencias digitales', href: '/#experiencias' },
          ],
        },
      ],
    },
    casos: {
      id: 'casos',
      columns: [
        {
          title: 'Casos e impacto',
          text: 'Transformamos retos de negocio en productos, plataformas y operaciones digitales medibles.',
          items: [],
        },
        {
          title: 'Explorar',
          items: [
            { label: 'Casos destacados', href: '/casos' },
            { label: 'Resultados por industria', href: '/casos#industrias' },
            { label: 'Plataformas construidas', href: '/casos#plataformas' },
            { label: 'Historias de producto', href: '/casos#historias' },
            { label: 'Transformacion digital aplicada', href: '/casos#transformacion' },
          ],
        },
        {
          title: 'Proyectos recientes',
          items: [
            { label: 'Marketplace inmobiliario', href: '/casos/marketplace-inmobiliario' },
            { label: 'Plataforma freelancer-empresa', href: '/casos/plataforma-freelancer' },
            { label: 'Solucion de pagos e integraciones', href: '/casos/solucion-pagos' },
            { label: 'Plataforma social o de matching', href: '/casos/plataforma-matching' },
            { label: 'Sistemas internos y automatizacion', href: '/casos/sistemas-internos' },
            { label: 'MVPs y evolucion continua', href: '/casos/mvps' },
          ],
        },
      ],
    },
    insights: {
      id: 'insights',
      columns: [
        {
          title: 'Insights',
          text: 'Contenidos para lideres de negocio y equipos que buscan entender producto digital, automatizacion, escalabilidad y evolucion tecnologica.',
          items: [],
        },
        {
          title: 'Contenido',
          items: [
            { label: 'Articulos', href: '/insights' },
            { label: 'Guias', href: '/insights#guias' },
            { label: 'Tendencias', href: '/insights#tendencias' },
            { label: 'Casos comentados', href: '/insights#casos' },
            { label: 'Recursos descargables', href: '/insights#recursos' },
          ],
        },
        {
          title: 'Destacados',
          items: [
            { label: 'Como validar un MVP', href: '/insights/como-validar-mvp' },
            { label: 'Cuando modernizar una plataforma', href: '/insights/modernizar-plataforma' },
            { label: 'Integraciones de pago sin friccion', href: '/insights/integraciones-pago' },
            { label: 'Arquitectura para productos escalables', href: '/insights/arquitectura-escalable' },
            { label: 'IA aplicada a procesos empresariales', href: '/insights/ia-procesos' },
            { label: 'SEO y rendimiento para plataformas', href: '/insights/seo-rendimiento' },
          ],
        },
      ],
    },
    nosotros: {
      id: 'nosotros',
      columns: [
        {
          title: 'Nosotros',
          text: 'SABERO Consulting es una software factory nacida en Peru, con enfoque en construir productos y plataformas digitales para organizaciones con vision de crecimiento en America y Europa.',
          items: [],
        },
        {
          title: 'Conocenos',
          items: [
            { label: 'Nuestra historia', href: '/#historia' },
            { label: 'Nuestra vision', href: '/#vision' },
            { label: 'Nuestro enfoque', href: '/#enfoque' },
            { label: 'Como trabajamos', href: '/#trabajamos' },
            { label: 'Cultura y valores', href: '/#valores' },
          ],
        },
        {
          title: 'Diferenciadores',
          items: [
            { label: 'Peru como punto de partida', href: '/#peru' },
            { label: 'Enfoque regional', href: '/#regional' },
            { label: 'Delivery agil y colaborativo', href: '/#delivery' },
            { label: 'Excelencia tecnica', href: '/#excelencia' },
            { label: 'Diseno orientado a negocio', href: '/#diseno' },
            { label: 'Relaciones de largo plazo', href: '/#relaciones' },
          ],
        },
      ],
    },
    careers: {
      id: 'careers',
      columns: [
        {
          title: 'Careers',
          text: 'Sumate a un equipo que construye productos digitales con foco en ingenieria, negocio y evolucion continua.',
          items: [],
        },
        {
          title: 'Explora',
          items: [
            { label: 'Vida en SABERO', href: '/careers#vida' },
            { label: 'Areas de trabajo', href: '/careers#areas' },
            { label: 'Proceso de seleccion', href: '/careers#proceso' },
            { label: 'Oportunidades abiertas', href: '/careers#oportunidades' },
            { label: 'Talento futuro', href: '/careers#talento' },
          ],
        },
        {
          title: 'Equipos',
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
