/**
 * Entorno de DESARROLLO.
 * Sustituido en build de producción por environment.prod.ts (fileReplacements en angular.json).
 */
export const environment = {
  production: false,
  appName: 'El Archivo de los Mil Mundos',
  firebase: {
    apiKey: 'REPLACE_ME',
    authDomain: 'REPLACE_ME.firebaseapp.com',
    projectId: 'REPLACE_ME',
    storageBucket: 'REPLACE_ME.appspot.com',
    messagingSenderId: 'REPLACE_ME',
    appId: 'REPLACE_ME',
  },
  useEmulators: true,
  emulators: {
    authPort: 9099,
    firestorePort: 8080,
    storagePort: 9199,
    functionsPort: 5001,
  },
  ai: {
    // Endpoint propio (Cloud Function) que envuelve la llamada a Claude/otro modelo.
    bibliotecarioEndpoint: '/api/bibliotecario',
  },
};
