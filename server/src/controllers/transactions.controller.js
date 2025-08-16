import sql from '../config/db.config.js';
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

//* Controller to get all transactions created by userId
const getTransactionsByUserId = async (req, res) => {
  try {
    // Get the userId from req parameters
    const { userId } = req.params;

    // Check if userId is present
    if (!userId) {
      return res.status(400).json({ message: 'userId is missing', success: false });
    }

    // fetch all transactions
    const transactions = await sql`
      SELECT *
      FROM transactions
      WHERE user_id = ${userId}
      ORDER BY created_at DESC;
    `;

    // Send response(success)
    res.status(200).json({
      message: 'Transactions fetched successfully',
      data: transactions,
      success: true,
    });
  } catch (error) {
    console.error('Error getting transactions', error);

    // Send response(error)
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};
export { createTransaction, getTransactionsByUserId };
