import { CategoriaHistoria, ClasificacionEdad, EstadoHistoria } from '@shared/models/historia.model';

export interface FiltrosHistoria {
  termino?: string;
  fandom?: string;
  universo?: string;
  categoria?: CategoriaHistoria;
  clasificacionEdad?: ClasificacionEdad;
  estado?: EstadoHistoria;
  genero?: string;
  etiqueta?: string;
  ordenarPor?: OrdenHistoria;
}

export type OrdenHistoria = 'recientes' | 'alfabetico' | 'capitulos' | 'relevancia';

export interface ResultadoPaginado<T> {
  items: T[];
  totalItems: number;
  paginaActual: number;
  totalPaginas: number;
}
