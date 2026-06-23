import type { NavigationData } from '../../i18n/utils/types';

export const navEs: NavigationData = {
  main: [
    { label: 'Nuestra oferta', href: '/oferta/' },
    { label: 'Industrias', href: '/industrias/' },
    { label: 'Casos e impacto', href: '/casos/' },
    { label: 'Insights', href: '/insights/' },
    { label: 'Nosotros', href: '/nosotros/' },
    { label: 'Careers', href: '/careers/' },
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
            { label: 'Servicios', href: '/oferta#servicios' },
            { label: 'Soluciones', href: '/oferta#soluciones' },
            { label: 'Capacidades tecnologicas', href: '/oferta#capacidades-tecnologicas' },
            { label: 'Modelos de colaboracion', href: '/oferta#modelos-colaboracion' },
            { label: 'Innovacion y modernizacion', href: '/oferta#innovacion-modernizacion' },
          ],
        },
        {
          title: 'Especialidades',
          items: [
            { label: 'Desarrollo de software a medida', href: '/oferta#desarrollo-medida' },
            { label: 'Plataformas web y marketplaces', href: '/oferta#plataformas-web' },
            { label: 'Modernizacion de sistemas', href: '/oferta#modernizacion-sistemas' },
            { label: 'Integraciones y automatizacion', href: '/oferta#integraciones-automatizacion' },
            { label: 'Cloud y DevOps', href: '/oferta#cloud-devops' },
            { label: 'QA y evolucion continua', href: '/oferta#qa-evolucion' },
            { label: 'Data, analitica y AI enablement', href: '/oferta#data-analitica' },
            { label: 'Arquitectura de producto', href: '/oferta#arquitectura-producto' },
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
            { label: 'PropTech', href: '/industrias#proptech' },
            { label: 'Fintech y pagos', href: '/industrias#fintech' },
            { label: 'Marketplaces y plataformas', href: '/industrias#marketplaces' },
            { label: 'Educacion y EdTech', href: '/industrias#edtech' },
            { label: 'Logistica y operaciones', href: '/industrias#logistica' },
            { label: 'Soluciones internas empresariales', href: '/industrias#internas' },
          ],
        },
        {
          title: 'Soluciones por industria',
          items: [
            { label: 'Plataformas inmobiliarias', href: '/industrias#inmobiliarias' },
            { label: 'Procesamiento de pagos', href: '/industrias#pagos' },
            { label: 'Portales B2B y B2C', href: '/industrias#portales' },
            { label: 'Gestion operativa y dashboards', href: '/industrias#gestion' },
            { label: 'Automatizacion de procesos', href: '/industrias#automatizacion' },
            { label: 'Experiencias digitales', href: '/industrias#experiencias' },
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
            { label: 'Casos destacados', href: '/casos/' },
            { label: 'Resultados por industria', href: '/casos/#industrias' },
            { label: 'Plataformas construidas', href: '/casos/#plataformas' },
            { label: 'Historias de producto', href: '/casos/#historias' },
            { label: 'Transformacion digital aplicada', href: '/casos/#transformacion' },
          ],
        },
        {
          title: 'Proyectos recientes',
          items: [
            { label: 'Marketplace inmobiliario', href: '/casos/' },
            { label: 'Plataforma freelancer-empresa', href: '/casos/' },
            { label: 'Solucion de pagos e integraciones', href: '/casos/' },
            { label: 'Plataforma social o de matching', href: '/casos/' },
            { label: 'Sistemas internos y automatizacion', href: '/casos/' },
            { label: 'MVPs y evolucion continua', href: '/casos/' },
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
            { label: 'Como validar un MVP', href: '/insights/' },
            { label: 'Cuando modernizar una plataforma', href: '/insights/' },
            { label: 'Integraciones de pago sin friccion', href: '/insights/' },
            { label: 'Arquitectura para productos escalables', href: '/insights/' },
            { label: 'IA aplicada a procesos empresariales', href: '/insights/' },
            { label: 'SEO y rendimiento para plataformas', href: '/insights/' },
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
            { label: 'Nuestra historia', href: '/nosotros/' },
            { label: 'Nuestra vision', href: '/nosotros/' },
            { label: 'Nuestro enfoque', href: '/nosotros/' },
            { label: 'Como trabajamos', href: '/nosotros/' },
            { label: 'Cultura y valores', href: '/nosotros/' },
          ],
        },
        {
          title: 'Diferenciadores',
          items: [
            { label: 'Peru como punto de partida', href: '/nosotros/' },
            { label: 'Enfoque regional', href: '/nosotros/' },
            { label: 'Delivery agil y colaborativo', href: '/nosotros/' },
            { label: 'Excelencia tecnica', href: '/nosotros/' },
            { label: 'Diseno orientado a negocio', href: '/nosotros/' },
            { label: 'Relaciones de largo plazo', href: '/nosotros/' },
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
          cta: { label: 'Explorar careers', href: '/careers' },
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
