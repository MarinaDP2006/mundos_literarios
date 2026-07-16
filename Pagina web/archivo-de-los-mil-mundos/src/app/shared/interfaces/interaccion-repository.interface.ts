import { Observable } from 'rxjs';
import { Comentario, Valoracion, Notificacion } from '@shared/models/interaccion.model';

export interface IComentarioRepository {
  obtenerPorHistoria(historiaId: number, capitulo?: number): Observable<Comentario[]>;
  crear(comentario: Omit<Comentario, 'id' | 'creadoEn'>): Observable<string>;
  eliminar(id: string): Observable<void>;
}

export interface IValoracionRepository {
  obtenerPorHistoria(historiaId: number): Observable<Valoracion[]>;
  valorar(valoracion: Omit<Valoracion, 'id' | 'creadoEn'>): Observable<void>;
}

export interface INotificacionRepository {
  obtenerPorUsuario(uid: string): Observable<Notificacion[]>;
  marcarLeida(id: string): Observable<void>;
}
