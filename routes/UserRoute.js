import express from 'express';
import {
  deleteUser,
  getUsers,
  updateUser,
} from '../controllers/UserController.js';
import { authenticateToken } from '../middleware/AuthenticateToken.js';

const router = express.Router();

router.get('/', authenticateToken, getUsers);
router.put('/', authenticateToken, updateUser);
router.delete('/', authenticateToken, deleteUser);

export default router;
