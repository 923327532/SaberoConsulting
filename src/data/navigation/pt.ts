import type { NavigationData } from '../../i18n/utils/types';

export const navPt: NavigationData = {
  main: [
    { label: 'Nossa oferta', href: '/pt/oferta/' },
    { label: 'Indústrias', href: '/pt/industrias/' },
    { label: 'Casos e impacto', href: '/pt/casos/' },
    { label: 'Insights', href: '/pt/insights/' },
    { label: 'Sobre nós', href: '/pt/nosotros/' },
    { label: 'Careers', href: '/pt/careers/' },
  ],
  megaMenus: {
    oferta: {
      id: 'oferta',
      columns: [
        {
          title: 'Nossa oferta',
          text: 'A SABERO projeta, desenvolve e evolui plataformas digitais para empresas que precisam escalar processos, produtos e operações na América e na Europa.',
          items: [],
        },
        {
          title: 'Capacidades',
          items: [
            { label: 'Serviços', href: '/pt/oferta/#servicos' },
            { label: 'Soluções', href: '/pt/oferta/#solucoes' },
            { label: 'Capacidades tecnológicas', href: '/pt/oferta/#capacidades-tecnologicas' },
            { label: 'Modelos de colaboração', href: '/pt/oferta/#modelos-colaboracion' },
            { label: 'Inovação e modernização', href: '/pt/oferta/#innovacion-modernizacion' },
          ],
        },
        {
          title: 'Especialidades',
          items: [
            { label: 'Desenvolvimento de software sob medida', href: '/pt/oferta/#desenvolvimento' },
            { label: 'Plataformas web e marketplaces', href: '/pt/oferta/#plataformas-web' },
            { label: 'Modernização de sistemas', href: '/pt/oferta/#modernizacion-sistemas' },
            { label: 'Integrações e automação', href: '/pt/oferta/#integraciones-automatizacion' },
            { label: 'Cloud e DevOps', href: '/pt/oferta/#cloud-devops' },
            { label: 'QA e evolução contínua', href: '/pt/oferta/#qa-evolucion' },
            { label: 'Dados, analítica e AI enablement', href: '/pt/oferta/#data-analitica' },
            { label: 'Arquitetura de produto', href: '/pt/oferta/#arquitectura-producto' },
          ],
        },
      ],
    },
    industrias: {
      id: 'industrias',
      columns: [
        {
          title: 'Indústrias',
          text: 'Cada indústria tem processos, métricas e desafios distintos. A SABERO adapta produto, arquitetura e experiência a esse contexto.',
          items: [],
        },
        {
          title: 'Setores',
          items: [
            { label: 'PropTech', href: '/pt/industrias/#proptech' },
            { label: 'Fintech e pagamentos', href: '/pt/industrias/#fintech' },
            { label: 'Marketplaces e plataformas', href: '/pt/industrias/#marketplaces' },
            { label: 'Educação e EdTech', href: '/pt/industrias/#edtech' },
            { label: 'Logística e operações', href: '/pt/industrias/#logistica' },
            { label: 'Soluções internas empresariais', href: '/pt/industrias/#internas' },
          ],
        },
        {
          title: 'Soluções por indústria',
          items: [
            { label: 'Plataformas imobiliárias', href: '/pt/industrias/#inmobiliarias' },
            { label: 'Processamento de pagamentos', href: '/pt/industrias/#pagos' },
            { label: 'Portais B2B e B2C', href: '/pt/industrias/#portales' },
            { label: 'Gestão operacional e dashboards', href: '/pt/industrias/#gestion' },
            { label: 'Automação de processos', href: '/pt/industrias/#automatizacion' },
            { label: 'Experiências digitais', href: '/pt/industrias/#experiencias' },
          ],
        },
      ],
    },
    casos: {
      id: 'casos',
      columns: [
        {
          title: 'Casos e impacto',
          text: 'Transformamos desafios de negócios em produtos, plataformas e operações digitais mensuráveis.',
          items: [],
        },
        {
          title: 'Explorar',
          items: [
            { label: 'Casos em destaque', href: '/pt/casos/' },
            { label: 'Resultados por indústria', href: '/pt/casos/#industrias' },
            { label: 'Plataformas construídas', href: '/pt/casos/#plataformas' },
            { label: 'Histórias de produto', href: '/pt/casos/#historias' },
            { label: 'Transformação digital aplicada', href: '/pt/casos/#transformacao' },
          ],
        },
        {
          title: 'Projetos recentes',
          items: [
            { label: 'Marketplace imobiliário', href: '/pt/casos/' },
            { label: 'Plataforma freelancer-empresa', href: '/pt/casos/' },
            { label: 'Solução de pagamentos', href: '/pt/casos/' },
            { label: 'Plataforma social ou de matching', href: '/pt/casos/' },
            { label: 'Sistemas internos e automação', href: '/pt/casos/' },
            { label: 'MVPs e evolução contínua', href: '/pt/casos/' },
          ],
        },
      ],
    },
    insights: {
      id: 'insights',
      columns: [
        {
          title: 'Insights',
          text: 'Conteúdos para líderes de negócios e equipes que buscam entender produto digital, automação, escalabilidade e evolução tecnológica.',
          items: [],
        },
        {
          title: 'Conteúdo',
          items: [
            { label: 'Artigos', href: '/pt/insights/' },
            { label: 'Guias', href: '/pt/insights/#guias' },
            { label: 'Tendências', href: '/pt/insights/#tendencias' },
            { label: 'Casos comentados', href: '/pt/insights/#casos' },
            { label: 'Recursos para download', href: '/pt/insights/#recursos' },
          ],
        },
        {
          title: 'Destaques',
          items: [
            { label: 'Como validar um MVP', href: '/pt/insights/' },
            { label: 'Quando modernizar uma plataforma', href: '/pt/insights/' },
            { label: 'Integrações de pagamento sem fricção', href: '/pt/insights/' },
            { label: 'Arquitetura para produtos escaláveis', href: '/pt/insights/' },
            { label: 'IA aplicada a processos empresariais', href: '/pt/insights/' },
            { label: 'SEO e desempenho para plataformas', href: '/pt/insights/' },
          ],
        },
      ],
    },
    nos: {
      id: 'nos',
      columns: [
        {
          title: 'Sobre nós',
          text: 'A SABERO Consulting é uma fábrica de software nascida no Peru, focada em construir produtos e plataformas digitais para organizações com visão de crescimento na América e na Europa.',
          items: [],
        },
        {
          title: 'Conheça',
          items: [
            { label: 'Nossa história', href: '/pt/nosotros/' },
            { label: 'Nossa visão', href: '/pt/nosotros/' },
            { label: 'Nosso enfoque', href: '/pt/nosotros/' },
            { label: 'Como trabalhamos', href: '/pt/nosotros/' },
            { label: 'Cultura e valores', href: '/pt/nosotros/' },
          ],
        },
        {
          title: 'Diferenciais',
          items: [
            { label: 'Peru como ponto de partida', href: '/pt/nosotros/' },
            { label: 'Enfoque regional', href: '/pt/nosotros/' },
            { label: 'Delivery ágil e colaborativo', href: '/pt/nosotros/' },
            { label: 'Excelência técnica', href: '/pt/nosotros/' },
            { label: 'Design orientado a negócios', href: '/pt/nosotros/' },
            { label: 'Relações de longo prazo', href: '/pt/nosotros/' },
          ],
        },
      ],
    },
    careers: {
      id: 'careers',
      columns: [
        {
          title: 'Careers',
          text: 'Junte-se a uma equipe que constrói produtos digitais com foco em engenharia, negócios e evolução contínua.',
          cta: { label: 'Explorar careers', href: '/pt/careers/' },
          items: [],
        },
        {
          title: 'Explore',
          items: [
            { label: 'Vida na SABERO', href: '/pt/careers/#vida' },
            { label: 'Áreas de trabalho', href: '/pt/careers/#areas' },
            { label: 'Processo seletivo', href: '/pt/careers/#processo' },
            { label: 'Vagas abertas', href: '/pt/careers/#vagas' },
            { label: 'Talento futuro', href: '/pt/careers/#talento' },
          ],
        },
        {
          title: 'Equipes',
          items: [
            { label: 'Engineering', href: '/pt/careers/#engineering' },
            { label: 'Product', href: '/pt/careers/#product' },
            { label: 'UX/UI', href: '/pt/careers/#ux' },
            { label: 'QA', href: '/pt/careers/#qa' },
            { label: 'DevOps', href: '/pt/careers/#devops' },
            { label: 'Business & Growth', href: '/pt/careers/#business' },
          ],
        },
      ],
    },
  },
};
