import { Observable } from 'rxjs';

export interface MensajeChat {
  rol: 'usuario' | 'bibliotecario';
  texto: string;
  timestamp: string;
}

export interface RecomendacionIA {
  historiaId: number;
  razon: string;
}

/**
 * Puerto de dominio para el asistente de IA "El Bibliotecario".
 * La implementación concreta llama a una Cloud Function que a su vez
 * invoca la API de Claude (ver firebase/functions).
 */
export interface IBibliotecarioService {
  enviarMensaje(historial: MensajeChat[], mensaje: string): Observable<MensajeChat>;
  recomendar(preferencias: string): Observable<RecomendacionIA[]>;
}
