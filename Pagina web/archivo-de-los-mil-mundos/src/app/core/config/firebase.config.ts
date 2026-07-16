import { environment } from '@env/environment';
import { FirebaseOptions } from 'firebase/app';

export const firebaseConfig: FirebaseOptions = environment.firebase;

export const useEmulators = environment.useEmulators;

export const emulatorPorts = environment.emulators;
