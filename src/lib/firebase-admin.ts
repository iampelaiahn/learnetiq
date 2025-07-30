import * as admin from 'firebase-admin';

let app: admin.app.App | undefined;
try {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    if (!admin.apps.length) {
      app = admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
    } else {
      app = admin.app();
    }
  } else {
    console.warn("GOOGLE_APPLICATION_CREDENTIALS not set. Firebase Admin SDK will not be initialized. Server-side auth will be disabled.");
  }
} catch (error: any) {
  console.error(
    'Firebase admin initialization error:',
    error.message
  );
}

export const auth = app ? admin.auth() : undefined;
