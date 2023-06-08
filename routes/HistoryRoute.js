import express from 'express';
import { authenticateToken } from '../middleware/AuthenticateToken.js';
import {
  addHistory,
  getHistories,
} from '../controllers/HistoryController.js';

const router = express.Router();

router.post('/add', authenticateToken, addHistory);
router.get('/user', authenticateToken, getHistories);

export default router;