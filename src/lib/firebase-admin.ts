import * as admin from 'firebase-admin';

let app: admin.app.App;
try {
  if (!admin.apps.length) {
    app = admin.initializeApp();
  } else {
    app = admin.app();
  }
} catch (error: any) {
  console.error(
    'Firebase admin initialization error. Some features like server-side authentication will not be available. Have you set the GOOGLE_APPLICATION_CREDENTIALS environment variable?',
    error.message
  );
}

// @ts-ignore
export const auth = app ? admin.auth() : undefined;
