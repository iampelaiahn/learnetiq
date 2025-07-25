import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  projectId: 'learnetiq-ncqpq',
  appId: '1:61995232955:web:69a432f8a141cb3dd4439e',
  storageBucket: 'learnetiq-ncqpq.firebasestorage.app',
  apiKey: 'AIzaSyDWzKLK195Vo2PiYh6Nd63hLY94TmmMt0E',
  authDomain: 'learnetiq-ncqpq.firebaseapp.com',
  messagingSenderId: '61995232955',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
