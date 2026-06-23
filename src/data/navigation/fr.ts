import type { NavigationData } from '../../i18n/utils/types';

export const navFr: NavigationData = {
  main: [
    { label: 'Notre offre', href: '/fr/oferta/' },
    { label: 'Industries', href: '/fr/industrias/' },
    { label: 'Cas et impact', href: '/fr/casos/' },
    { label: 'Insights', href: '/fr/insights/' },
    { label: 'À propos', href: '/fr/nosotros/' },
    { label: 'Careers', href: '/fr/careers/' },
  ],
  megaMenus: {
    offre: {
      id: 'offre',
      columns: [
        {
          title: 'Notre offre',
          text: 'SABERO conçoit, développe et fait évoluer des plateformes numériques pour les entreprises qui ont besoin de passer à l\'échelle leurs processus, produits et opérations en Amérique et en Europe.',
          items: [],
        },
        {
          title: 'Capacités',
          items: [
            { label: 'Services', href: '/fr/oferta/#servicios' },
            { label: 'Solutions', href: '/fr/oferta/#soluciones' },
            { label: 'Capacités technologiques', href: '/fr/oferta/#capacidades-tecnologicas' },
            { label: 'Modèles de collaboration', href: '/fr/oferta/#modelos-colaboracion' },
            { label: 'Innovation et modernisation', href: '/fr/oferta/#innovacion-modernizacion' },
          ],
        },
        {
          title: 'Spécialités',
          items: [
            { label: 'Développement logiciel sur mesure', href: '/fr/oferta/#desarrollo-medida' },
            { label: 'Plateformes web et marketplaces', href: '/fr/oferta/#plataformas-web' },
            { label: 'Modernisation de systèmes', href: '/fr/oferta/#modernizacion-sistemas' },
            { label: 'Intégrations et automatisation', href: '/fr/oferta/#integraciones-automatizacion' },
            { label: 'Cloud et DevOps', href: '/fr/oferta/#cloud-devops' },
            { label: 'AQ et évolution continue', href: '/fr/oferta/#qa-evolucion' },
            { label: 'Données, analytique et IA', href: '/fr/oferta/#data-analitica' },
            { label: 'Architecture de produit', href: '/fr/oferta/#arquitectura-producto' },
          ],
        },
      ],
    },
    industries: {
      id: 'industries',
      columns: [
        {
          title: 'Industries',
          text: 'Chaque industrie a des processus, des métriques et des défis distincts. SABERO adapte le produit, l\'architecture et l\'expérience à ce contexte.',
          items: [],
        },
        {
          title: 'Secteurs',
          items: [
            { label: 'PropTech', href: '/fr/industrias/#proptech' },
            { label: 'Fintech et paiements', href: '/fr/industrias/#fintech' },
            { label: 'Marketplaces et plateformes', href: '/fr/industrias/#marketplaces' },
            { label: 'Éducation et EdTech', href: '/fr/industrias/#edtech' },
            { label: 'Logistique et opérations', href: '/fr/industrias/#logistica' },
            { label: 'Solutions internes entreprises', href: '/fr/industrias/#internas' },
          ],
        },
        {
          title: 'Solutions par industrie',
          items: [
            { label: 'Plateformes immobilières', href: '/fr/industrias/#inmobiliarias' },
            { label: 'Traitement des paiements', href: '/fr/industrias/#pagos' },
            { label: 'Portails B2B et B2C', href: '/fr/industrias/#portales' },
            { label: 'Gestion opérationnelle et tableaux de bord', href: '/fr/industrias/#gestion' },
            { label: 'Automatisation des processus', href: '/fr/industrias/#automatizacion' },
            { label: 'Expériences numériques', href: '/fr/industrias/#experiencias' },
          ],
        },
      ],
    },
    cas: {
      id: 'cas',
      columns: [
        {
          title: 'Cas et impact',
          text: 'Nous transformons les défis commerciaux en produits, plateformes et opérations numériques mesurables.',
          items: [],
        },
        {
          title: 'Explorer',
          items: [
            { label: 'Cas en vedette', href: '/fr/casos/' },
            { label: 'Résultats par industrie', href: '/fr/casos/#industrias' },
            { label: 'Plateformes construites', href: '/fr/casos/#plataformas' },
            { label: 'Histoires de produit', href: '/fr/casos/#historias' },
            { label: 'Transformation numérique appliquée', href: '/fr/casos/#transformacion' },
          ],
        },
        {
          title: 'Projets récents',
          items: [
            { label: 'Marketplace immobilier', href: '/fr/casos/' },
            { label: 'Plateforme freelance-entreprise', href: '/fr/casos/' },
            { label: 'Solution de paiements', href: '/fr/casos/' },
            { label: 'Plateforme sociale ou de matching', href: '/fr/casos/' },
            { label: 'Systèmes internes et automatisation', href: '/fr/casos/' },
            { label: 'MVP et évolution continue', href: '/fr/casos/' },
          ],
        },
      ],
    },
    insights: {
      id: 'insights',
      columns: [
        {
          title: 'Insights',
          text: 'Contenus pour les dirigeants d\'entreprise et les équipes qui cherchent à comprendre le produit numérique, l\'automatisation, l\'évolutivité et l\'évolution technologique.',
          items: [],
        },
        {
          title: 'Contenu',
          items: [
            { label: 'Articles', href: '/fr/insights/' },
            { label: 'Guides', href: '/fr/insights/#guides' },
            { label: 'Tendances', href: '/fr/insights/#tendances' },
            { label: 'Cas commentés', href: '/fr/insights/#cas' },
            { label: 'Ressources téléchargeables', href: '/fr/insights/#ressources' },
          ],
        },
        {
          title: 'En vedette',
          items: [
            { label: 'Comment valider un MVP', href: '/fr/insights/' },
            { label: 'Quand moderniser une plateforme', href: '/fr/insights/' },
            { label: 'Intégrations de paiement sans friction', href: '/fr/insights/' },
            { label: 'Architecture pour produits évolutifs', href: '/fr/insights/' },
            { label: 'IA appliquée aux processus d\'entreprise', href: '/fr/insights/' },
            { label: 'SEO et performance pour plateformes', href: '/fr/insights/' },
          ],
        },
      ],
    },
    nous: {
      id: 'nous',
      columns: [
        {
          title: 'À propos',
          text: 'SABERO Consulting est une fabrique de logiciels née au Pérou, axée sur la construction de produits et plateformes numériques pour les organisations ayant une vision de croissance en Amérique et en Europe.',
          items: [],
        },
        {
          title: 'Découvrir',
          items: [
            { label: 'Notre histoire', href: '/fr/nosotros/' },
            { label: 'Notre vision', href: '/fr/nosotros/' },
            { label: 'Notre approche', href: '/fr/nosotros/' },
            { label: 'Comment nous travaillons', href: '/fr/nosotros/' },
            { label: 'Culture et valeurs', href: '/fr/nosotros/' },
          ],
        },
        {
          title: 'Différenciateurs',
          items: [
            { label: 'Pérou comme point de départ', href: '/fr/nosotros/' },
            { label: 'Approche régionale', href: '/fr/nosotros/' },
            { label: 'Livraison agile et collaborative', href: '/fr/nosotros/' },
            { label: 'Excellence technique', href: '/fr/nosotros/' },
            { label: 'Conception orientée métier', href: '/fr/nosotros/' },
            { label: 'Relations à long terme', href: '/fr/nosotros/' },
          ],
        },
      ],
    },
    careers: {
      id: 'careers',
      columns: [
        {
          title: 'Careers',
          text: 'Rejoignez une équipe qui construit des produits numériques axés sur l\'ingénierie, le business et l\'évolution continue.',
          cta: { label: 'Explorer careers', href: '/fr/careers/' },
          items: [],
        },
        {
          title: 'Explorer',
          items: [
            { label: 'Vie chez SABERO', href: '/fr/careers/#vie' },
            { label: 'Domaines de travail', href: '/fr/careers/#domaines' },
            { label: 'Processus de sélection', href: '/fr/careers/#processus' },
            { label: 'Postes ouverts', href: '/fr/careers/#postes' },
            { label: 'Talents futurs', href: '/fr/careers/#talents' },
          ],
        },
        {
          title: 'Équipes',
          items: [
            { label: 'Engineering', href: '/fr/careers/#engineering' },
            { label: 'Product', href: '/fr/careers/#product' },
            { label: 'UX/UI', href: '/fr/careers/#ux' },
            { label: 'QA', href: '/fr/careers/#qa' },
            { label: 'DevOps', href: '/fr/careers/#devops' },
            { label: 'Business & Growth', href: '/fr/careers/#business' },
          ],
        },
      ],
    },
  },
};
