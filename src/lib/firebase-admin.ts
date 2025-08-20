
import 'dotenv/config';
import * as admin from 'firebase-admin';

let app: admin.app.App | undefined;

// Check if the service account credentials are provided as a JSON string
// or if the GOOGLE_APPLICATION_CREDENTIALS path is set.
const hasServiceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON && process.env.FIREBASE_SERVICE_ACCOUNT_JSON.trim() !== '';
const hasGoogleAppCreds = !!process.env.GOOGLE_APPLICATION_CREDENTIALS;

if ((hasServiceAccountJson || hasGoogleAppCreds) && !admin.apps.length) {
  try {
    const serviceAccount = hasServiceAccountJson
      ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON!)
      : undefined;

    app = admin.initializeApp({
      credential: serviceAccount ? admin.credential.cert(serviceAccount) : admin.credential.applicationDefault(),
    });
  } catch (error: any) {
    console.error('Firebase Admin SDK initialization error:', error.message);
    // Don't throw here, let the app run, but auth-dependent features will fail gracefully.
  }
} else if (admin.apps.length > 0) {
  app = admin.app();
} else {
  console.warn("Firebase Admin SDK credentials not provided or are empty. Server-side authentication features will be disabled.");
}

export const auth = app ? admin.auth() : undefined;
export const db = app ? admin.firestore() : undefined;
