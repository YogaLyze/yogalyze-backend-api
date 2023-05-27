import express from 'express';
import {
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/UserController.js';
import { authenticateToken } from '../middleware/AuthenticateToken.js';

const router = express.Router();

router.get('/profile', authenticateToken, getUser);
router.put('/update', authenticateToken, updateUser);
router.delete('/delete', authenticateToken, deleteUser);

export default router;
