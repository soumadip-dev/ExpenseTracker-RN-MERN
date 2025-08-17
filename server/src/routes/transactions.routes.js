import { Router } from 'express';
import {
  createTransaction,
  getTransactionsByUserId,
  deleteTransaction,
} from '../controllers/transactions.controller.js';

const router = Router();

router.post('/', createTransaction);
router.get('/:userId', getTransactionsByUserId);
router.delete('/:transactionId', deleteTransaction);

export default router;
