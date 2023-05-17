import express from 'express';
import { getUsers, Register, Login, Logout } from '../controllers/Users.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/RefreshToken.js';
import { addHistory, getHistoryById } from '../controllers/History.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// POST URL/history/add -> add data history ke db
router.post('/history/add', addHistory);

// GET URL/history/1 -> get history berdasarkan id di db
router.get('/history/:id', getHistoryById);





export default router;
