export type EstadoCarga = 'inactivo' | 'cargando' | 'exito' | 'error';

export interface RecursoAsync<T> {
  estado: EstadoCarga;
  datos: T | null;
  error: string | null;
}

export function recursoInicial<T>(): RecursoAsync<T> {
  return { estado: 'inactivo', datos: null, error: null };
}

export type TipoToast = 'info' | 'exito' | 'advertencia' | 'error';

export interface ToastMensaje {
  id: string;
  tipo: TipoToast;
  texto: string;
  duracionMs?: number;
}
