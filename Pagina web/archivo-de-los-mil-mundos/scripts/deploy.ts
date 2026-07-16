import { exec } from 'child_process';

async function deployApp() {
  console.log('Compilando aplicación Angular...');
  exec('ng build --configuration production', (err) => {
    if (err) return;
    console.log('Subiendo a Firebase Hosting...');
    exec('firebase deploy --only hosting,storage,firestore');
  });
}