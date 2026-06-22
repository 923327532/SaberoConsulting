// ============================================
// SABERO Consulting - Oferta FR
// ============================================
import type { OfertaData } from './types';

export const ofertaFr: OfertaData = {
  intro: {
    title: 'Notre',
    titleAccent: 'offre',
    description:
      'SABERO conçoit, développe et fait évoluer des plateformes numériques pour les entreprises qui ont besoin de scaler leurs processus, produits et opérations en Amérique et en Europe.',
    microcopy:
      'Nous intégrons stratégie, produit, ingénierie et opération pour construire des solutions numériques à impact réel.',
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
          'Quand une entreprise a besoin d\'un partenaire qui ne se contente pas de coder, mais comprend aussi le business, le produit et l\'opération.',
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
          'Chaque solution répond à un défi métier concret : optimiser les opérations, activer de nouveaux canaux ou transformer l\'expérience des utilisateurs internes et externes.',
        resolves:
          'Quand le client ne sait pas s\'il a besoin "d\'un site web" ou "d\'un système", et que vous lui montrez des solutions business.',
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
          'Data et IA enablement',
        ],
        description:
          'Notre base technique est conçue pour résoudre des problèmes réels : scaler sans friction, maintenir la qualité à chaque livraison et évoluer sans dette technique accumulée.',
        resolves:
          'Quand le client a besoin de confiance technique et veut savoir si SABERO a une réelle capacité d\'exécution.',
      },
      {
        id: 'modeles-collaboration',
        title: 'Modèles de collaboration',
        summary:
          'Nous nous adaptons au moment du business avec des schémas de discovery, exécution par phases, équipes dédiées ou collaboration avec les équipes internes.',
        items: [
          'Discovery initial',
          'Équipe dédiée ou partielle',
          'Exécution par phases',
          'Collaboration avec équipes internes',
          'Support continu',
        ],
        description:
          'Nous travaillons comme extension de l\'équipe client ou comme partenaire d\'exécution intégral, selon la maturité numérique et les besoins de chaque organisation.',
        resolves:
          'Réduit le doute typique du client sur "comment ils vont travailler avec moi".',
      },
      {
        id: 'innovation-modernisation',
        title: 'Innovation et modernisation',
        summary:
          'Nous aidons à moderniser les systèmes, automatiser les opérations et activer de nouvelles capacités technologiques sans interrompre l\'activité.',
        items: [
          'Modernisation technologique',
          'Automatisation',
          'Évolution des processus',
          'Amélioration des performances',
          'Adoption progressive de l\'IA',
        ],
        description:
          'Nous connectons les entreprises à l\'évolution technologique sans interrompre leur activité actuelle, en activant de nouvelles capacités de façon progressive et contrôlée.',
        resolves:
          'Quand l\'entreprise a déjà quelque chose qui fonctionne, mais doit le faire évoluer.',
      },
    ],
  },
  especialidades: {
    title: 'Spécialités',
    subtitle: 'Sur quoi nous travaillons',
    items: [
      {
        id: 'developpement-sur-mesure',
        title: 'Développement de logiciel sur mesure',
        description:
          'Nous développons des logiciels adaptés aux processus, objectifs et règles métier spécifiques, avec un accent sur la maintenabilité et l\'évolutivité.',
        resolves:
          'Élimine la dépendance aux solutions génériques qui ne s\'adaptent pas à votre activité. Obtenez un produit conçu pour votre entreprise, évolutif et maintenable.',
        scope: [
          'Développement sur mesure',
          'Systèmes internes',
          'Portails',
          'Outils opérationnels',
          'Produits numériques',
        ],
        cta: 'Voir les capacités de développement',
        ctaHref: '/fr/industrias',
      },
      {
        id: 'plateformes-web',
        title: 'Plateformes web et marketplaces',
        description:
          'Nous concevons et développons des plateformes web et marketplaces capables de connecter utilisateurs, processus et opérations dans une seule expérience numérique.',
        resolves:
          'Centralise l\'interaction avec les clients, fournisseurs ou partenaires sur une plateforme conçue pour scaler sans perdre en qualité d\'expérience.',
        scope: [
          'Marketplaces',
          'Plateformes B2B/B2C',
          'Panneaux d\'administration',
          'Portails utilisateur',
          'Expériences web évolutives',
        ],
        cta: 'Voir les plateformes',
        ctaHref: '/fr/industrias',
      },
      {
        id: 'modernisation-systemes',
        title: 'Modernisation de systèmes',
        description:
          'Nous modernisons les applications et systèmes existants pour améliorer les performances, la stabilité, la vitesse de livraison et la capacité d\'évolution.',
        resolves:
          'Réduit la dette technique et le risque opérationnel des systèmes legacy. Accélérez la livraison de nouvelles fonctionnalités sans interrompre l\'activité actuelle.',
        scope: [
          'Refactorisation',
          'Migration',
          'Découplage',
          'Mise à jour de stack',
          'Amélioration de la maintenabilité',
        ],
        cta: 'Voir la modernisation',
        ctaHref: '/fr/industrias',
      },
      {
        id: 'integrations-automatisation',
        title: 'Intégrations et automatisation',
        description:
          'Nous intégrons plateformes, services et processus pour éliminer les tâches manuelles, réduire les erreurs et accélérer les opérations.',
        resolves:
          'Élimine les silos d\'information et automatise les flux critiques. Votre équipe opère avec des données en temps réel et des processus synchronisés.',
        scope: [
          'APIs',
          'Webhooks',
          'Paiements',
          'CRM/ERP',
          'Automatisation de flux',
          'Synchronisation de données',
        ],
        cta: 'Voir les intégrations',
        ctaHref: '/fr/industrias',
      },
      {
        id: 'cloud-devops',
        title: 'Cloud et DevOps',
        description:
          'Nous préparons et opérons des plateformes sur une infrastructure moderne axée sur la stabilité, l\'observabilité, la sécurité et l\'évolutivité.',
        resolves:
          'Élimine les goulots d\'étranglement dans les déploiements et l\'exploitation. Votre équipe livre avec rapidité, confiance et contrôle sur chaque environnement.',
        scope: [
          'Déploiement',
          'Infrastructure',
          'CI/CD',
          'Monitoring',
          'Observabilité',
          'Fiabilité',
        ],
        cta: 'Voir cloud et DevOps',
        ctaHref: '/fr/industrias',
      },
      {
        id: 'qa-evolution',
        title: 'QA et évolution continue',
        description:
          'Nous assurons la qualité à chaque livraison et accompagnons l\'évolution du produit avec des améliorations continues basées sur l\'utilisation, les retours et les besoins métier.',
        resolves:
          'Réduit les risques à chaque release. Maintenez une qualité constante pendant que le produit évolue et s\'adapte aux nouveaux besoins.',
        scope: [
          'Tests fonctionnels',
          'Validation continue',
          'Maintenance',
          'Améliorations itératives',
          'Contrôle technique',
        ],
        cta: 'Voir QA',
        ctaHref: '/fr/industrias',
      },
      {
        id: 'data-analytique',
        title: 'Données, analytique et IA',
        description:
          'Nous activons les capacités de données, d\'analytique et d\'automatisation pour améliorer la visibilité opérationnelle, la prise de décision et les futurs cas d\'intelligence appliquée.',
        resolves:
          'Transforme des données dispersées en informations actionnables. Préparez l\'organisation à adopter l\'IA et l\'automatisation basée sur des données réelles.',
        scope: [
          'Tableaux de bord',
          'Traçabilité',
          'Reporting',
          'Métriques opérationnelles',
          'Préparation des données',
          'Automatisation assistée',
        ],
        cta: 'Voir données et analytique',
        ctaHref: '/fr/industrias',
      },
      {
        id: 'architecture-produit',
        title: 'Architecture produit',
        description:
          'Nous définissons des architectures de produit qui permettent de croître avec clarté technique, rapidité de livraison et durabilité à long terme.',
        resolves:
          'Empêche la croissance de créer du chaos technique. Votre produit évolue sur une base solide qui permet de scaler sans refaire ce qui a été construit.',
        scope: [
          'Conception d\'architecture',
          'Modularité',
          'Évolutivité',
          'Dette technique',
          'Roadmap technique',
          'Durabilité du produit',
        ],
        cta: 'Voir architecture',
        ctaHref: '/fr/industrias',
      },
    ],
  },
  cta: {
    primary: { text: 'Explorer les cas et impact', href: '/fr/contacto/' },
    secondary: { text: 'Parler à SABERO', href: '/fr/contacto/' },
  },
};
