import { InjectionToken } from '@angular/core';
import { IHistoriaRepository } from '@shared/interfaces/historia-repository.interface';
import { IUsuarioRepository } from '@shared/interfaces/usuario-repository.interface';
import {
  IComentarioRepository,
  IValoracionRepository,
  INotificacionRepository,
} from '@shared/interfaces/interaccion-repository.interface';
import { IBibliotecarioService } from '@shared/interfaces/bibliotecario.interface';

/**
 * Tokens de inyección para los puertos de dominio.
 *
 * Este es el punto donde Clean Architecture se materializa en Angular:
 * las features inyectan `HISTORIA_REPOSITORY` (la abstracción), y en
 * `app.config.ts` se registra qué implementación concreta (Firestore, mock,
 * etc.) satisface ese token. Esto permite sustituir Firestore por otra
 * fuente de datos sin tocar ni una línea de las features.
 */
export const HISTORIA_REPOSITORY = new InjectionToken<IHistoriaRepository>('HISTORIA_REPOSITORY');

export const USUARIO_REPOSITORY = new InjectionToken<IUsuarioRepository>('USUARIO_REPOSITORY');

export const COMENTARIO_REPOSITORY = new InjectionToken<IComentarioRepository>(
  'COMENTARIO_REPOSITORY'
);

export const VALORACION_REPOSITORY = new InjectionToken<IValoracionRepository>(
  'VALORACION_REPOSITORY'
);

export const NOTIFICACION_REPOSITORY = new InjectionToken<INotificacionRepository>(
  'NOTIFICACION_REPOSITORY'
);

export const BIBLIOTECARIO_SERVICE = new InjectionToken<IBibliotecarioService>(
  'BIBLIOTECARIO_SERVICE'
);
