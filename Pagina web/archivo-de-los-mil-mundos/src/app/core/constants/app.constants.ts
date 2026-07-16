export const APP_CONSTANTS = {
  NOMBRE_APP: 'El Archivo de los Mil Mundos',
  TAGLINE: 'Cada historia abre una puerta. Tú decides cuál cruzar.',
  PAGINACION: {
    ITEMS_POR_PAGINA_CATALOGO: 24,
    ITEMS_POR_PAGINA_COMENTARIOS: 20,
  },
  LECTOR: {
    TAMAÑO_FUENTE_MIN: 14,
    TAMAÑO_FUENTE_MAX: 28,
    TAMAÑO_FUENTE_DEFECTO: 18,
    INTERLINEADO_MIN: 1.4,
    INTERLINEADO_MAX: 2.5,
    INTERLINEADO_DEFECTO: 1.9,
  },
  DEBOUNCE_BUSQUEDA_MS: 300,
} as const;
