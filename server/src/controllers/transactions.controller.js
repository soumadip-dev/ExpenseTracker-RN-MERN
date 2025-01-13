import { createTransactionService } from '../services/transaction.service.js';

//* Controller to create a transaction
const createTransaction = async (req, res) => {
  try {
    const { user_id, title, amount, category } = req.body;

    // Check if required fields are present
    if (!user_id || !title || !amount || !category) {
      return res.status(400).json({ message: 'Missing required fields', success: false });
    }

    // Call service
    const transaction = await createTransactionService({ user_id, title, amount, category });

    // Send response(success)
    res.status(201).json({
      message: 'Transaction created successfully',
      data: transaction,
      success: true,
    });
  } catch (error) {
    console.error(error);
    // Send response(error)
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

export { createTransaction };
