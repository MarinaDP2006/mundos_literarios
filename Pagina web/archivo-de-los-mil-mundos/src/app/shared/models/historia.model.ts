/**
 * Modelo de dominio "Historia".
 *
 * Fiel al esquema real de `biblioteca.json`. No se inventan campos adicionales
 * de UI (rating, reviews, accentColor, etc.) en el dominio: esos son
 * responsabilidad de la capa de presentación (ver `shared/models/historia-vista.model.ts`
 * en la Fase de Componentes, que deriva valores de presentación a partir de este modelo).
 */

export type ClasificacionEdad = 'Apto' | '+16' | '+18';

export type EstadoHistoria = 'Completa' | 'En progreso' | 'Pausada';

export type CategoriaHistoria = 'Original' | 'Fanfic';

export interface Historia {
  id: number;
  título: string;
  /**
   * Descripción textual de la portada (en el JSON de origen es una descripción,
   * no una URL). El campo `portadaUrl` en Firestore/Storage se añade en la
   * capa de infraestructura al importar el contenido real.
   */
  portada: string;
  sinopsis: string;
  fandom: string;
  universo: string;
  categoría: CategoriaHistoria;
  clasificación_edad: ClasificacionEdad;
  estado: EstadoHistoria;
  personajes_principales: string[];
  pareja_principal: string;
  personajes_secundarios: string[];
  capítulos: number;
  índice: string[];
  etiquetas: string[];
  hashtags: string[];
  géneros: string[];
  ambientación: string;
  cronología: string;
  localizaciones: string[];
  curiosidades: string;
  notas_de_autora: string;
  frases_destacadas: string[];
  relaciones: string;
}

export interface Saga {
  nombre: string;
  historias: string[];
}

export interface BibliotecaData {
  biblioteca: Historia[];
  sagas: Saga[];
  universos: string[];
}
