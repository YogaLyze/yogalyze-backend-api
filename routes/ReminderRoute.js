import express from 'express';
import { authenticateToken } from '../middleware/AuthenticateToken.js';
import { addReminder, 
    getReminderByUserId, 
    updateReminderByuserId } 
    from '../controllers/ReminderController.js';

const router = express.Router();

// POST URL/reminder/add -> add data reminder ke db
router.post('/add', authenticateToken, addReminder);

// GET URL/reminder/1 -> get reminder berdasarkan user_id di db
router.get('/:id', authenticateToken, getReminderByUserId);

//PUT URL/reminder/update/1 -> update reminder data berdasarkan user_id di db
router.put('/:id', authenticateToken, updateReminderByuserId);

export default router;