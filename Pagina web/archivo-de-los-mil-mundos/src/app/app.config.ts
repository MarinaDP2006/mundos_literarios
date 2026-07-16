import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
} from '@angular/fire/firestore';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';

import { routes } from './app.routes';
import { errorInterceptor } from '@core/interceptors/error.interceptor';
import { firebaseConfig, useEmulators, emulatorPorts } from '@core/config/firebase.config';

// Tokens de dominio (puertos)
import {
  HISTORIA_REPOSITORY,
  USUARIO_REPOSITORY,
  COMENTARIO_REPOSITORY,
  VALORACION_REPOSITORY,
  NOTIFICACION_REPOSITORY,
  BIBLIOTECARIO_SERVICE,
} from '@core/providers/repository.tokens';

// Adaptadores concretos (implementaciones Firestore) — generados en Fase 3.
import { HistoriaFirestoreService } from '@core/services/historia-firestore.service';
import { UsuarioFirestoreService } from '@core/services/usuario-firestore.service';
import { ComentarioFirestoreService } from '@core/services/comentario-firestore.service';
import { ValoracionFirestoreService } from '@core/services/valoracion-firestore.service';
import { NotificacionFirestoreService } from '@core/services/notificacion-firestore.service';
import { BibliotecarioApiService } from '@core/services/bibliotecario-api.service';

/**
 * Configuración raíz de la aplicación standalone (sin NgModules).
 *
 * Aquí es donde Clean Architecture cobra vida en Angular: cada token de
 * dominio (`HISTORIA_REPOSITORY`, etc.) se enlaza con su implementación
 * concreta mediante `useClass`. Las features nunca importan estos
 * servicios de Firestore directamente, solo inyectan el token.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideAnimations(),

    // Firebase App
    provideFirebaseApp(() => initializeApp(firebaseConfig)),

    // Auth
    provideAuth(() => {
      const auth = getAuth();
      if (useEmulators && isDevMode()) {
        connectAuthEmulator(auth, `http://localhost:${emulatorPorts.authPort}`);
      }
      return auth;
    }),

    // Firestore
    provideFirestore(() => {
      const firestore = getFirestore();
      if (useEmulators && isDevMode()) {
        connectFirestoreEmulator(firestore, 'localhost', emulatorPorts.firestorePort);
      }
      return firestore;
    }),

    // Storage
    provideStorage(() => {
      const storage = getStorage();
      if (useEmulators && isDevMode()) {
        connectStorageEmulator(storage, 'localhost', emulatorPorts.storagePort);
      }
      return storage;
    }),

    // Puertos de dominio -> adaptadores concretos (Clean Architecture)
    { provide: HISTORIA_REPOSITORY, useClass: HistoriaFirestoreService },
    { provide: USUARIO_REPOSITORY, useClass: UsuarioFirestoreService },
    { provide: COMENTARIO_REPOSITORY, useClass: ComentarioFirestoreService },
    { provide: VALORACION_REPOSITORY, useClass: ValoracionFirestoreService },
    { provide: NOTIFICACION_REPOSITORY, useClass: NotificacionFirestoreService },
    { provide: BIBLIOTECARIO_SERVICE, useClass: BibliotecarioApiService },
  ],
};
