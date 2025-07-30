import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
    });
  } catch (error) {
    console.error('Firebase admin initialization error', error);
    // Throwing the error here will prevent the app from continuing
    // with a non-initialized Firebase admin instance.
    throw new Error('Failed to initialize Firebase Admin SDK.');
  }
}


export const auth = admin.auth();
