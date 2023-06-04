import admin from 'firebase-admin';
const serviceAccount = process.env.SECRET;

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default app;
