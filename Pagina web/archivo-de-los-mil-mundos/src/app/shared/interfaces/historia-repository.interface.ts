import { Observable } from 'rxjs';
import { Historia } from '@shared/models/historia.model';

/**
 * Puerto de dominio para el acceso a Historias.
 *
 * Clean Architecture: las capas superiores (features) dependen de esta
 * abstracción, nunca de Firestore directamente. La implementación concreta
 * (adaptador) vive en `core/services/historia-firestore.service.ts` y se
 * inyecta mediante el token `HISTORIA_REPOSITORY` (ver core/providers).
 */
export interface IHistoriaRepository {
  obtenerTodas(): Observable<Historia[]>;
  obtenerPorId(id: number): Observable<Historia | undefined>;
  obtenerPorFandom(fandom: string): Observable<Historia[]>;
  obtenerPorUniverso(universo: string): Observable<Historia[]>;
  buscar(termino: string): Observable<Historia[]>;
}
