import admin from 'firebase-admin';
const serviceAccount = JSON.parse(JSON.stringify(process.env.SECRET));

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default app;
