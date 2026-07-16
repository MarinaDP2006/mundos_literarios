/**
 * importStories.ts
 *
 * Semilla de Firestore: lee src/assets/json/biblioteca.json (fuente única
 * de verdad) y crea/actualiza un documento por historia en la colección
 * `historias`, más un documento por saga en `sagas`. No transforma ni
 * enriquece los datos: los vuelca tal cual, delegando el mapeo de tipos a
 * `core/helpers/historia-mapper.helper.ts` en el lado del cliente.
 *
 * Implementación ejecutable en la Fase de Firebase.
 */
export {};
