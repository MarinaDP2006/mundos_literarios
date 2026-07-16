export type RolUsuario = 'lector' | 'admin';

export interface Usuario {
  uid: string;
  email: string;
  nombreMostrado: string;
  avatarUrl: string | null;
  rol: RolUsuario;
  biografia?: string;
  fechaRegistro: string; // ISO date
  favoritos: number[]; // ids de Historia
  progresoLectura: ProgresoLectura[];
}

export interface ProgresoLectura {
  historiaId: number;
  capituloActual: number;
  posicionScroll?: number;
  actualizadoEn: string; // ISO date
}

export interface PreferenciasLector {
  tamañoFuente: number;
  interlineado: number;
  temaLectura: 'oscuro' | 'sepia' | 'claro';
}
