import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();


const app = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.SECRET)),
});

export default app;
