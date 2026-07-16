export const environment = {
  production: true,
  appName: 'El Archivo de los Mil Mundos',
  firebase: {
    apiKey: 'REPLACE_ME',
    authDomain: 'REPLACE_ME.firebaseapp.com',
    projectId: 'REPLACE_ME',
    storageBucket: 'REPLACE_ME.appspot.com',
    messagingSenderId: 'REPLACE_ME',
    appId: 'REPLACE_ME',
  },
  useEmulators: false,
  emulators: {
    authPort: 9099,
    firestorePort: 8080,
    storagePort: 9199,
    functionsPort: 5001,
  },
  ai: {
    bibliotecarioEndpoint: '/api/bibliotecario',
  },
};
