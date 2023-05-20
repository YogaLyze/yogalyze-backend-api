import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/database.js';
import AuthRoute from './routes/AuthRoute.js';
import UserRoute from './routes/UserRoute.js';
import HistoryRoute from './routes/HistoryRoute.js';

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log('Database connected');
  await db.sync();
} catch (error) {
  console.error(error);
}

app.get('/', (req, res) => {
  res.send('Welcome to Yogalyze Capstone Project API');
})

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/history', HistoryRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://locahost:${process.env.PORT}`);
});
