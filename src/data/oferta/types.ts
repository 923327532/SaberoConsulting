// ============================================
// SABERO Consulting - Oferta Types
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

export interface OfertaData {
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
