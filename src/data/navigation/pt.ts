import type { NavigationData } from '../../i18n/utils/types';

export const navPt: NavigationData = {
  main: [
    { label: 'Nossa oferta', href: '/pt/oferta' },
    { label: 'Industrias', href: '/pt/industrias' },
    { label: 'Casos e impacto', href: '/casos' },
    { label: 'Insights', href: '/insights' },
    { label: 'Nos', href: '/nosotros' },
    { label: 'Careers', href: '/careers' },
  ],
  megaMenus: {
    oferta: {
      id: 'oferta',
      columns: [
        {
          title: 'Nossa oferta',
          text: 'A SABERO projeta, desenvolve e evolui plataformas digitais para empresas que precisam escalar processos, produtos e operacoes na America e na Europa.',
          items: [],
        },
        {
          title: 'Capacidades',
          items: [
            { label: 'Servicos', href: '/#servicos' },
            { label: 'Solucoes', href: '/#solucoes' },
            { label: 'Capacidades tecnologicas', href: '/#capacidades' },
            { label: 'Modelos de colaboracao', href: '/#modelos' },
            { label: 'Inovacao e modernizacao', href: '/#inovacao' },
          ],
        },
        {
          title: 'Especialidades',
          items: [
            { label: 'Desenvolvimento de software sob medida', href: '/#desenvolvimento' },
            { label: 'Plataformas web e marketplaces', href: '/#plataformas' },
            { label: 'Modernizacao de sistemas', href: '/#modernizacao' },
            { label: 'Integracoes e automacao', href: '/#integracoes' },
            { label: 'Cloud e DevOps', href: '/#cloud' },
            { label: 'QA e evolucao continua', href: '/#qa' },
            { label: 'Dados, analitica e AI enablement', href: '/#dados' },
            { label: 'Arquitetura de produto', href: '/#arquitetura' },
          ],
        },
      ],
    },
    industrias: {
      id: 'industrias',
      columns: [
        {
          title: 'Industrias',
          text: 'Cada industria tem processos, metricas e desafios distintos. A SABERO adapta produto, arquitetura e experiencia a esse contexto.',
          items: [],
        },
        {
          title: 'Setores',
          items: [
            { label: 'PropTech', href: '/#proptech' },
            { label: 'Fintech e pagamentos', href: '/#fintech' },
            { label: 'Marketplaces e plataformas', href: '/#marketplaces' },
            { label: 'Educacao e EdTech', href: '/#edtech' },
            { label: 'Logistica e operacoes', href: '/#logistica' },
            { label: 'Solucoes internas empresariais', href: '/#internas' },
          ],
        },
        {
          title: 'Solucoes por industria',
          items: [
            { label: 'Plataformas imobiliarias', href: '/#imobiliarias' },
            { label: 'Processamento de pagamentos', href: '/#pagamentos' },
            { label: 'Portais B2B e B2C', href: '/#portais' },
            { label: 'Gestao operacional e dashboards', href: '/#gestao' },
            { label: 'Automacao de processos', href: '/#automacao' },
            { label: 'Experiencias digitais', href: '/#experiencias' },
          ],
        },
      ],
    },
    casos: {
      id: 'casos',
      columns: [
        {
          title: 'Casos e impacto',
          text: 'Transformamos desafios de negocios em produtos, plataformas e operacoes digitais mensuraveis.',
          items: [],
        },
        {
          title: 'Explorar',
          items: [
            { label: 'Casos em destaque', href: '/casos' },
            { label: 'Resultados por industria', href: '/casos#industrias' },
            { label: 'Plataformas construidas', href: '/casos#plataformas' },
            { label: 'Historias de produto', href: '/casos#historias' },
            { label: 'Transformacao digital aplicada', href: '/casos#transformacao' },
          ],
        },
        {
          title: 'Projetos recentes',
          items: [
            { label: 'Marketplace imobiliario', href: '/casos/marketplace-imobiliario' },
            { label: 'Plataforma freelancer-empresa', href: '/casos/plataforma-freelancer' },
            { label: 'Solucao de pagamentos', href: '/casos/solucao-pagamentos' },
            { label: 'Plataforma social ou de matching', href: '/casos/plataforma-matching' },
            { label: 'Sistemas internos e automacao', href: '/casos/sistemas-internos' },
            { label: 'MVPs e evolucao continua', href: '/casos/mvps' },
          ],
        },
      ],
    },
    insights: {
      id: 'insights',
      columns: [
        {
          title: 'Insights',
          text: 'Conteudos para lideres de negocios e equipes que buscam entender produto digital, automacao, escalabilidade e evolucao tecnologica.',
          items: [],
        },
        {
          title: 'Conteudo',
          items: [
            { label: 'Artigos', href: '/insights' },
            { label: 'Guias', href: '/insights#guias' },
            { label: 'Tendencias', href: '/insights#tendencias' },
            { label: 'Casos comentados', href: '/insights#casos' },
            { label: 'Recursos para download', href: '/insights#recursos' },
          ],
        },
        {
          title: 'Destaques',
          items: [
            { label: 'Como validar um MVP', href: '/insights/como-validar-mvp' },
            { label: 'Quando modernizar uma plataforma', href: '/insights/modernizar-plataforma' },
            { label: 'Integracoes de pagamento sem friccao', href: '/insights/integracoes-pagamento' },
            { label: 'Arquitetura para produtos escalaveis', href: '/insights/arquitetura-escalavel' },
            { label: 'IA aplicada a processos empresariais', href: '/insights/ia-processos' },
            { label: 'SEO e desempenho para plataformas', href: '/insights/seo-desempenho' },
          ],
        },
      ],
    },
    nos: {
      id: 'nos',
      columns: [
        {
          title: 'Nos',
          text: 'A SABERO Consulting e uma fabrica de software nascida no Peru, focada em construir produtos e plataformas digitais para organizacoes com visao de crescimento na America e na Europa.',
          items: [],
        },
        {
          title: 'Conheca',
          items: [
            { label: 'Nossa historia', href: '/nosotros#historia' },
            { label: 'Nossa visao', href: '/nosotros#vision' },
            { label: 'Nosso enfoque', href: '/nosotros#enfoque' },
            { label: 'Como trabalhamos', href: '/nosotros#trabajamos' },
            { label: 'Cultura e valores', href: '/nosotros#valores' },
          ],
        },
        {
          title: 'Diferenciais',
          items: [
            { label: 'Peru como ponto de partida', href: '/nosotros#peru' },
            { label: 'Enfoque regional', href: '/nosotros#regional' },
            { label: 'Delivery agil e colaborativo', href: '/nosotros#delivery' },
            { label: 'Excelencia tecnica', href: '/nosotros#excelencia' },
            { label: 'Design orientado a negocios', href: '/nosotros#diseno' },
            { label: 'Relacoes de longo prazo', href: '/nosotros#relaciones' },
          ],
        },
      ],
    },
    careers: {
      id: 'careers',
      columns: [
        {
          title: 'Careers',
          text: 'Junte-se a uma equipe que constroi produtos digitais com foco em engenharia, negocios e evolucao continua.',
          cta: { label: 'Explorar careers', href: '/careers' },
          items: [],
        },
        {
          title: 'Explore',
          items: [
            { label: 'Vida na SABERO', href: '/careers#vida' },
            { label: 'Areas de trabalho', href: '/careers#areas' },
            { label: 'Processo seletivo', href: '/careers#processo' },
            { label: 'Vagas abertas', href: '/careers#vagas' },
            { label: 'Talento futuro', href: '/careers#talento' },
          ],
        },
        {
          title: 'Equipes',
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
