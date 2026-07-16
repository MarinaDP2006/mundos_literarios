/**
 * Modelo de dominio "Personaje".
 *
 * El JSON de origen no tiene una colección independiente de personajes: aparecen
 * como strings dentro de cada Historia (`personajes_principales`,
 * `personajes_secundarios`, `pareja_principal`). Este modelo normaliza esa
 * información para la feature `explore`/`author` (vista "Personajes"),
 * construida en la capa de infraestructura (ver PersonajesService, Fase Firebase)
 * a partir de las historias ya cargadas. No se inventan datos: solo se agrupan.
 */
export interface Personaje {
  nombre: string;
  tipoRelacion: 'principal' | 'secundario' | 'pareja';
  historiaId: number;
  historiaTitulo: string;
  fandom: string;
  universo: string;
}
