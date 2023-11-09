import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { firebaseConfig } from '../firebase.config';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  getFirestore,
  provideFirestore,
  connectFirestoreEmulator,
  initializeFirestore,
  Firestore,
} from '@angular/fire/firestore';
import {
  getFunctions,
  provideFunctions,
  connectFunctionsEmulator,
  Functions,
} from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      // provideFirestore(() => getFirestore()),
      provideFirestore(() => {
        const firestore: Firestore = initializeFirestore(getApp(), {});
        connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
        return firestore;
      }),
      // provideFunctions(() => getFunctions()),
      provideFunctions(() => {
        const functions: Functions = getFunctions(getApp());
        connectFunctionsEmulator(functions, '127.0.0.1', 5001);
        return functions;
      }),
    ]),
  ],
};
