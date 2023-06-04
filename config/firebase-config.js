import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();


console.log(process.env.SECRET)

const serviceAccount = JSON.parse(process.env.SECRET);

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default app;
