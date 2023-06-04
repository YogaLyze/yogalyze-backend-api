import admin from 'firebase-admin';
import serviceAccount from './secret.json';

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default app;
