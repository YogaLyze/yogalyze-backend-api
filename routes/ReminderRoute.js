import express from 'express';
import { authenticateToken } from '../middleware/AuthenticateToken.js';
import {
  addReminder,
  getReminders,
  updateReminder,
} from '../controllers/ReminderController.js';

const router = express.Router();

// POST URL/reminder/add -> add data reminder ke db
router.post('/add', authenticateToken, addReminder);

// GET URL/reminder/user -> get reminder berdasarkan auth user di db
router.get('/user', authenticateToken, getReminders);

//PUT URL/reminder/update -> update reminder data berdasarkan user_id di db
router.put('/update', authenticateToken, updateReminder);

export default router;
