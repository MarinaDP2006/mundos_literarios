import { DocumentData } from 'firebase/firestore';
import { Historia } from '@shared/models/historia.model';

/**
 * Convierte un documento crudo de Firestore (o el JSON original) en una
 * entidad `Historia` tipada. Centraliza el mapeo para que, si el esquema de
 * Firestore difiere ligeramente del JSON original (p.ej. IDs autogenerados
 * como string), solo haya que tocar este fichero.
 */
export function mapDocToHistoria(id: string, data: DocumentData): Historia {
  return {
    id: Number(data['id'] ?? id),
    título: data['título'],
    portada: data['portada'],
    sinopsis: data['sinopsis'],
    fandom: data['fandom'],
    universo: data['universo'],
    categoría: data['categoría'],
    clasificación_edad: data['clasificación_edad'],
    estado: data['estado'],
    personajes_principales: data['personajes_principales'] ?? [],
    pareja_principal: data['pareja_principal'],
    personajes_secundarios: data['personajes_secundarios'] ?? [],
    capítulos: data['capítulos'],
    índice: data['índice'] ?? [],
    etiquetas: data['etiquetas'] ?? [],
    hashtags: data['hashtags'] ?? [],
    géneros: data['géneros'] ?? [],
    ambientación: data['ambientación'],
    cronología: data['cronología'],
    localizaciones: data['localizaciones'] ?? [],
    curiosidades: data['curiosidades'],
    notas_de_autora: data['notas_de_autora'],
    frases_destacadas: data['frases_destacadas'] ?? [],
    relaciones: data['relaciones'],
  };
}
