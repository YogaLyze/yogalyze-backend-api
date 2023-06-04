import admin from 'firebase-admin';
import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

// Create an instance of the Secret Manager service client
const secretClient = new SecretManagerServiceClient();

// Fetch the secret value from Secret Manager
const [version] = await secretClient.accessSecretVersion({
  name: 'projects/587913373658/secrets/FIREBASE_SECRET/versions/1',
});
const serviceAccount = JSON.parse(version.payload.data.toString());

// Initialize the Firebase Admin SDK
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default app;
