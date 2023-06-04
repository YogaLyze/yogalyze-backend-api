import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();


const serviceAccount = JSON.parse(process.env.SECRET_JSON);

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default app;
