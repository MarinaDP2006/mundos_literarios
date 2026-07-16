import { Observable } from 'rxjs';
import { Usuario } from '@shared/models/usuario.model';

export interface IUsuarioRepository {
  obtenerPorUid(uid: string): Observable<Usuario | undefined>;
  crear(usuario: Usuario): Observable<void>;
  actualizar(uid: string, cambios: Partial<Usuario>): Observable<void>;
  alternarFavorito(uid: string, historiaId: number): Observable<void>;
  actualizarProgreso(
    uid: string,
    historiaId: number,
    capituloActual: number,
    posicionScroll?: number
  ): Observable<void>;
}
