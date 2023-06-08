import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './config/database.js';
import HistoryRoute from './routes/HistoryRoute.js';
import UserRoute from './routes/UserRoute.js';
dotenv.config();
const app = express();

try {
  await db.authenticate();
} catch (error) {
  console.error(error);
}

app.get('/', (req, res) => {
  res.send('Welcome to Yogalyze Capstone Project API');
})

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cors({ credentials: true }));

app.use('/history', HistoryRoute);
app.use('/user', UserRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
