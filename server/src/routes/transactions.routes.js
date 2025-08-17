import { Router } from 'express';
import {
  createTransaction,
  getTransactionsByUserId,
  deleteTransaction,
  getSummaryByUserId,
} from '../controllers/transactions.controller.js';

const router = Router();

router.post('/', createTransaction);
router.get('/:userId', getTransactionsByUserId);
router.delete('/:transactionId', deleteTransaction);
router.get('/summary/:userId', getSummaryByUserId);

export default router;
