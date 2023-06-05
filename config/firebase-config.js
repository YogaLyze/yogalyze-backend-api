import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

console.log("PORT: ", process.env.PORT)
console.log("SECRET: ", process.env.SECRET);




const app = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.SECRET)),
});

export default app;
