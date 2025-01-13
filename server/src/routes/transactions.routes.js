import { Router } from 'express';
import {
  createTransaction,
  getTransactionsByUserId,
} from '../controllers/transactions.controller.js';

const router = Router();

router.post('/', createTransaction);
router.get('/:userId', getTransactionsByUserId);

export default router;
