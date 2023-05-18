import express from 'express';
import { getUsers } from '../controllers/Users.js';
import { register, login, logout } from '../controllers/Auth.js';
import { authenticateToken } from '../middleware/AuthenticateToken.js';
import { addHistory, getHistoryByUserId } from '../controllers/History.js';
import { refreshToken } from '../controllers/RefreshToken.js';

const router = express.Router();

router.get('/users', authenticateToken, getUsers);

// auth
router.post('/register', register);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', logout);

// POST URL/history/add -> add data history ke db
router.post('/history/add', authenticateToken, addHistory);

// GET URL/history/1 -> get history berdasarkan user_id di db
router.get('/history/:id', authenticateToken, getHistoryByUserId);

export default router;
