import { Historia } from '@shared/models/historia.model';
import { Personaje } from '@shared/models/personaje.model';

/**
 * Deriva la lista de personajes a partir de las historias ya cargadas.
 * No inventa datos: agrupa lo que ya existe en el JSON (personajes_principales,
 * personajes_secundarios, pareja_principal) asociándolo a su historia de origen.
 */
export function derivarPersonajes(historias: Historia[]): Personaje[] {
  const personajes: Personaje[] = [];

  for (const historia of historias) {
    for (const nombre of historia.personajes_principales) {
      personajes.push({
        nombre,
        tipoRelacion: 'principal',
        historiaId: historia.id,
        historiaTitulo: historia.título,
        fandom: historia.fandom,
        universo: historia.universo,
      });
    }
    for (const nombre of historia.personajes_secundarios) {
      personajes.push({
        nombre,
        tipoRelacion: 'secundario',
        historiaId: historia.id,
        historiaTitulo: historia.título,
        fandom: historia.fandom,
        universo: historia.universo,
      });
    }
  }

  return personajes;
}

/** Elimina duplicados de personaje por nombre, conservando la primera aparición. */
export function personajesUnicos(personajes: Personaje[]): Personaje[] {
  const vistos = new Set<string>();
  return personajes.filter((p) => {
    if (vistos.has(p.nombre)) return false;
    vistos.add(p.nombre);
    return true;
  });
}
