export interface Comentario {
  id: string;
  historiaId: number;
  capitulo?: number;
  usuarioUid: string;
  usuarioNombre: string;
  usuarioAvatarUrl: string | null;
  texto: string;
  creadoEn: string; // ISO date
  editadoEn?: string;
}

export interface Valoracion {
  id: string;
  historiaId: number;
  usuarioUid: string;
  puntuacion: 1 | 2 | 3 | 4 | 5;
  creadoEn: string;
}

export interface Notificacion {
  id: string;
  usuarioUid: string;
  tipo: 'nuevo_capitulo' | 'respuesta_comentario' | 'sistema' | 'recomendacion';
  mensaje: string;
  leida: boolean;
  enlace?: string;
  creadoEn: string;
}
