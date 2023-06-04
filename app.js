import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/database.js';
import HistoryRoute from './routes/HistoryRoute.js';
import ReminderRoute from './routes/ReminderRoute.js';
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

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cors({ credentials: true }));
app.use(cookieParser());

app.use('/history', HistoryRoute);
app.use('/reminder', ReminderRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
