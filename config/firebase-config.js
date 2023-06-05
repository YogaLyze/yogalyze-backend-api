import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();
// const serviceAccount = {
//   type: process.env.TYPE,
//   project_id: process.env.PROJECT_ID,
//   private_key_id: process.env.PRIVATE_KEY_ID,
//   private_key: process.env.PRIVATE_KEY,
//   client_email:process.env.EMAIL,
//   client_id:process.env.CLIENT_ID,
//   auth_uri:process.env.AUTH_URI,
//   token_uri:process.env.TOKEN_URI,
//   auth_provider_x509_cert_url: process.env.AUTH_PROV,
//   client_x509_cert_url:process.env.CLIENT_CERT,
//   universe_domain:process.env.DOMAIN

// };
serviceAccount = JSON.parse(process.env.SECRET);

console.log(JSON.stringify(serviceAccount));

const app = admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(JSON.stringify(serviceAccount))),
});

export default app;
