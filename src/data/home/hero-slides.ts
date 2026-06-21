export interface HeroSlide {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export interface HeroSlidesData {
  es: HeroSlide[];
  en: HeroSlide[];
  pt: HeroSlide[];
  fr: HeroSlide[];
}

export const heroSlides: HeroSlidesData = {
  es: [
    {
      image: '/images/imagen.png',
      alt: 'SABERO Consulting - Ingenieria de productos digitales',
      eyebrow: 'Digital Product Engineering',
      title: 'Construimos plataformas digitales que escalan tu negocio',
      description:
        'Disenamos, desarrollamos y evolucionamos productos digitales para empresas con vision de crecimiento en America y Europa.',
      primaryCtaLabel: 'Conversemos',
      primaryCtaHref: '/contacto',
      secondaryCtaLabel: 'Nuestra oferta',
      secondaryCtaHref: '/nuestra-oferta',
    },
    {
      image: '/images/imagen1.png',
      alt: 'SABERO Consulting - Arquitectura de software y cloud',
      eyebrow: 'Arquitectura & Cloud',
      title: 'Modernizacion y escalabilidad sin friccion',
      description:
        'Transformamos sistemas legacy en plataformas modernas, escalables y preparadas para el futuro digital.',
      primaryCtaLabel: 'Ver servicios',
      primaryCtaHref: '/nuestra-oferta',
      secondaryCtaLabel: 'Casos de exito',
      secondaryCtaHref: '/casos-e-impacto',
    },
    {
      image: '/images/imagen2.png',
      alt: 'SABERO Consulting - Equipo de ingenieria',
      eyebrow: 'Talento & Ingenieria',
      title: 'Equipos que entienden tu negocio y tu tecnologia',
      description:
        'Combinamos experiencia tecnica con vision de negocio para entregar soluciones que realmente generan impacto.',
      primaryCtaLabel: 'Conocenos',
      primaryCtaHref: '/nosotros',
      secondaryCtaLabel: 'Trabaja con nosotros',
      secondaryCtaHref: '/careers',
    },
    {
      image: '/images/imagen3.png',
      alt: 'SABERO Consulting - Innovacion digital',
      eyebrow: 'Innovacion Aplicada',
      title: 'De la idea al producto en tiempo record',
      description:
        'Aceleramos tu camino al mercado con metodologias agiles, arquitectura modular y foco en resultados de negocio.',
      primaryCtaLabel: 'Contactanos',
      primaryCtaHref: '/contacto',
    },
    {
      image: '/images/imagen4.png',
      alt: 'SABERO Consulting - Transformacion digital',
      eyebrow: 'Transformacion Digital',
      title: 'Tu socio tecnologico para America y Europa',
      description:
        'Presencia en Peru con estandar internacional. Te acompanamos en cada etapa de tu evolucion digital.',
      primaryCtaLabel: 'Hablemos',
      primaryCtaHref: '/contacto',
      secondaryCtaLabel: 'Nuestros insights',
      secondaryCtaHref: '/insights',
    },
  ],
  en: [
    {
      image: '/images/imagen.png',
      alt: 'SABERO Consulting - Digital product engineering',
      eyebrow: 'Digital Product Engineering',
      title: 'We build digital platforms that scale your business',
      description:
        'We design, develop and evolve digital products for companies with growth ambitions in America and Europe.',
      primaryCtaLabel: "Let's talk",
      primaryCtaHref: '/contacto',
      secondaryCtaLabel: 'Our offer',
      secondaryCtaHref: '/nuestra-oferta',
    },
    {
      image: '/images/imagen1.png',
      alt: 'SABERO Consulting - Software architecture and cloud',
      eyebrow: 'Architecture & Cloud',
      title: 'Modernization and scalability without friction',
      description:
        'We transform legacy systems into modern, scalable platforms ready for the digital future.',
      primaryCtaLabel: 'View services',
      primaryCtaHref: '/nuestra-oferta',
      secondaryCtaLabel: 'Success stories',
      secondaryCtaHref: '/casos-e-impacto',
    },
    {
      image: '/images/imagen2.png',
      alt: 'SABERO Consulting - Engineering team',
      eyebrow: 'Talent & Engineering',
      title: 'Teams that understand your business and your technology',
      description:
        'We combine technical expertise with business vision to deliver solutions that truly make an impact.',
      primaryCtaLabel: 'About us',
      primaryCtaHref: '/nosotros',
      secondaryCtaLabel: 'Join us',
      secondaryCtaHref: '/careers',
    },
    {
      image: '/images/imagen3.png',
      alt: 'SABERO Consulting - Digital innovation',
      eyebrow: 'Applied Innovation',
      title: 'From idea to product in record time',
      description:
        'We accelerate your time to market with agile methodologies, modular architecture and focus on business results.',
      primaryCtaLabel: 'Contact us',
      primaryCtaHref: '/contacto',
    },
    {
      image: '/images/imagen4.png',
      alt: 'SABERO Consulting - Digital transformation',
      eyebrow: 'Digital Transformation',
      title: 'Your technology partner for America and Europe',
      description:
        'Based in Peru with international standards. We accompany you at every stage of your digital evolution.',
      primaryCtaLabel: "Let's talk",
      primaryCtaHref: '/contacto',
      secondaryCtaLabel: 'Our insights',
      secondaryCtaHref: '/insights',
    },
  ],
  pt: [
    {
      image: '/images/imagen.png',
      alt: 'SABERO Consulting - Engenharia de produtos digitais',
      eyebrow: 'Digital Product Engineering',
      title: 'Construimos plataformas digitais que escalam seu negocio',
      description:
        'Projetamos, desenvolvemos e evoluimos produtos digitais para empresas com visao de crescimento na America e Europa.',
      primaryCtaLabel: 'Vamos conversar',
      primaryCtaHref: '/contacto',
      secondaryCtaLabel: 'Nossa oferta',
      secondaryCtaHref: '/nuestra-oferta',
    },
    {
      image: '/images/imagen1.png',
      alt: 'SABERO Consulting - Arquitetura de software e cloud',
      eyebrow: 'Arquitetura & Cloud',
      title: 'Modernizacao e escalabilidade sem friccao',
      description:
        'Transformamos sistemas legados em plataformas modernas, escalaveis e prontas para o futuro digital.',
      primaryCtaLabel: 'Ver servicos',
      primaryCtaHref: '/nuestra-oferta',
      secondaryCtaLabel: 'Casos de sucesso',
      secondaryCtaHref: '/casos-e-impacto',
    },
    {
      image: '/images/imagen2.png',
      alt: 'SABERO Consulting - Equipe de engenharia',
      eyebrow: 'Talento & Engenharia',
      title: 'Equipes que entendem seu negocio e sua tecnologia',
      description:
        'Combinamos experiencia tecnica com visao de negocios para entregar solucoes que realmente geram impacto.',
      primaryCtaLabel: 'Conheca-nos',
      primaryCtaHref: '/nosotros',
      secondaryCtaLabel: 'Trabalhe conosco',
      secondaryCtaHref: '/careers',
    },
    {
      image: '/images/imagen3.png',
      alt: 'SABERO Consulting - Inovacao digital',
      eyebrow: 'Inovacao Aplicada',
      title: 'Da ideia ao produto em tempo recorde',
      description:
        'Aceleramos seu caminho ao mercado com metodologias ageis, arquitetura modular e foco em resultados de negocios.',
      primaryCtaLabel: 'Fale conosco',
      primaryCtaHref: '/contacto',
    },
    {
      image: '/images/imagen4.png',
      alt: 'SABERO Consulting - Transformacao digital',
      eyebrow: 'Transformacao Digital',
      title: 'Seu parceiro tecnologico para America e Europa',
      description:
        'Presenca no Peru com padrao internacional. Acompanhamos voce em cada etapa da sua evolucao digital.',
      primaryCtaLabel: 'Vamos conversar',
      primaryCtaHref: '/contacto',
      secondaryCtaLabel: 'Nossos insights',
      secondaryCtaHref: '/insights',
    },
  ],
  fr: [
    {
      image: '/images/imagen.png',
      alt: 'SABERO Consulting - Ingenierie de produits numeriques',
      eyebrow: 'Digital Product Engineering',
      title: 'Nous construisons des plateformes numeriques qui font passer votre entreprise a l\'echelle',
      description:
        'Nous concevons, developpons et faisons evoluer des produits numeriques pour les entreprises ayant une vision de croissance en Amerique et en Europe.',
      primaryCtaLabel: 'Parlons-en',
      primaryCtaHref: '/contacto',
      secondaryCtaLabel: 'Notre offre',
      secondaryCtaHref: '/nuestra-oferta',
    },
    {
      image: '/images/imagen1.png',
      alt: 'SABERO Consulting - Architecture logicielle et cloud',
      eyebrow: 'Architecture & Cloud',
      title: 'Modernisation et evolutivite sans friction',
      description:
        'Nous transformons les systemes heritage en plateformes modernes, evolutives et pretes pour l\'avenir numerique.',
      primaryCtaLabel: 'Voir nos services',
      primaryCtaHref: '/nuestra-oferta',
      secondaryCtaLabel: 'Cas clients',
      secondaryCtaHref: '/casos-e-impacto',
    },
    {
      image: '/images/imagen2.png',
      alt: 'SABERO Consulting - Equipe d\'ingenierie',
      eyebrow: 'Talent & Ingenierie',
      title: 'Des equipes qui comprennent votre entreprise et votre technologie',
      description:
        'Nous combinons expertise technique et vision business pour fournir des solutions qui creent un veritable impact.',
      primaryCtaLabel: 'Qui sommes-nous',
      primaryCtaHref: '/nosotros',
      secondaryCtaLabel: 'Carrieres',
      secondaryCtaHref: '/careers',
    },
    {
      image: '/images/imagen3.png',
      alt: 'SABERO Consulting - Innovation numerique',
      eyebrow: 'Innovation Appliquee',
      title: 'De l\'idee au produit en un temps record',
      description:
        'Nous accelerons votre mise sur le marche avec des methodologies agiles, une architecture modulaire et un focus sur les resultats business.',
      primaryCtaLabel: 'Contactez-nous',
      primaryCtaHref: '/contacto',
    },
    {
      image: '/images/imagen4.png',
      alt: 'SABERO Consulting - Transformation numerique',
      eyebrow: 'Transformation Numerique',
      title: 'Votre partenaire technologique pour l\'Amerique et l\'Europe',
      description:
        'Base au Perou avec un standard international. Nous vous accompagnons a chaque etape de votre evolution numerique.',
      primaryCtaLabel: 'Parlons-en',
      primaryCtaHref: '/contacto',
      secondaryCtaLabel: 'Nos insights',
      secondaryCtaHref: '/insights',
    },
  ],
};
