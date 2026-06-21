// ============================================
// SABERO Consulting - Nosotros Types
// ============================================

export interface BloqueIdentidad {
  id: string;
  titulo: string;
  contenido: string;
}

export interface BloqueEnfoque {
  id: string;
  titulo: string;
  contenido: string;
}

export interface BloqueCultura {
  id: string;
  titulo: string;
  contenido: string;
  items?: string[];
}

export interface NosotrosData {
  intro: {
    titulo: string;
    texto: string;
    microcopy: string;
  };
  identidad: BloqueIdentidad[];
  enfoque: BloqueEnfoque[];
  cultura: BloqueCultura[];
  cta: {
    frase: string;
    ctaPrincipal: string;
    ctaPrincipalHref: string;
    ctaSecundario: string;
    ctaSecundarioHref: string;
  };
}
