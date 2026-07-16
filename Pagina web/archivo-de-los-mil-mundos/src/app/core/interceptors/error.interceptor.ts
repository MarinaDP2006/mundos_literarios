import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

/**
 * Interceptor funcional de errores HTTP para llamadas salientes (p.ej. al
 * endpoint del Bibliotecario). La integración con el servicio de Toasts
 * se completa en la Fase de Componentes (ToastService).
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      console.error('[HTTP Error]', req.url, error);
      return throwError(() => error);
    })
  );
};
