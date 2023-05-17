import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/database.js';
import router from './routes/index.js';

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log('Database connected');
} catch (error) {
  console.error(error);
}

app.get('/', (req, res) => {
  res.send('Welcome to Yogalyze API');
})

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://locahost:${process.env.PORT}`);
});
