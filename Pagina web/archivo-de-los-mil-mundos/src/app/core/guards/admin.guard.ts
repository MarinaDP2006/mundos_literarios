import { CanActivateFn } from '@angular/router';

/**
 * Guard funcional que restringe rutas al rol ADMIN.
 * Implementación completa (verifica signal de usuario + rol) en Fase 3.
 */
export const adminGuard: CanActivateFn = () => {
  return true;
};
