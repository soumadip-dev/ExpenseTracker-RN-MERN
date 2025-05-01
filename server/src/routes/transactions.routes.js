import { Router } from 'express';
import { createTransaction } from '../controllers/transactions.controller.js';

const router = Router();

router.post('/', createTransaction);

export default router;
