import express from 'express';
import { authenticateToken } from '../middleware/AuthenticateToken.js';
import {
  updateProfile,
  getProfile,
} from '../controllers/UserController.js';

const router = express.Router();

router.put('/profile', authenticateToken, updateProfile);
router.get('/profile', authenticateToken, getProfile)

export default router;
