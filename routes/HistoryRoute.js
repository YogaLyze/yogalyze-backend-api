import express from 'express';
import { authenticateToken } from '../middleware/AuthenticateToken.js';
import {
  addHistory,
  getHistories,
} from '../controllers/HistoryController.js';

const router = express.Router();

// POST URL/history/add -> add data history ke db
router.post('/add', authenticateToken, addHistory);

// GET URL/history/user -> get history berdasarkan auth user di db
router.get('/user', authenticateToken, getHistories);

export default router;