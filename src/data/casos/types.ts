// ============================================
// SABERO Consulting - Casos Types
// ============================================

export interface CasoDestacado {
  id: string;
  nombre: string;
  industria: string;
  reto: string;
  solucion: string;
  impacto: string;
  tipoImpacto: string;
  imagen: string;
  tags: string[];
  slug: string;
}

export interface BloqueImpacto {
  id: string;
  titulo: string;
  descripcion: string;
  items: string[];
  icono: string;
}

export interface CasosData {
  titulo: string;
  subtitulo: string;
  microcopy: string;
  navItems: { id: string; label: string }[];
  destacados: CasoDestacado[];
  bloquesImpacto: BloqueImpacto[];
  cta: {
    frase: string;
    ctaPrincipal: string;
    ctaPrincipalHref: string;
    ctaSecundario: string;
    ctaSecundarioHref: string;
  };
}
