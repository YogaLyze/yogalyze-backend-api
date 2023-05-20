import express from 'express';
import { authenticateToken } from '../middleware/AuthenticateToken.js';
import {
  addHistory,
  getHistoryByUserId,
} from '../controllers/HistoryController.js';

const router = express.Router();

// POST URL/history/add -> add data history ke db
router.post('/add', authenticateToken, addHistory);

// GET URL/history/1 -> get history berdasarkan user_id di db
router.get('/:id', authenticateToken, getHistoryByUserId);

export default router;