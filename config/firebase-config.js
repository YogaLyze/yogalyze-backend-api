import admin from 'firebase-admin';
import serviceAccount from process.env.SECRET assert { type: 'json' };

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default app;
