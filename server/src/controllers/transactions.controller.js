import mongoose from 'mongoose';
import Transaction from '../model/transactions.model.js';
import {
  createTransactionService,
  getTransactionsByUserIdService,
  deleteTransactionService,
} from '../services/transaction.service.js';

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
    console.error('Error creating transaction', error.message);
    // Send response(error)
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

//* Controller to get all transactions created by userId
const getTransactionsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate input
    if (!userId) {
      return res.status(400).json({ message: 'userId is missing', success: false });
    }

    // Call service
    const transactions = await getTransactionsByUserIdService(userId);

    // Send response (success)
    res.status(200).json({
      message: 'Transactions fetched successfully',
      data: transactions,
      success: true,
    });
  } catch (error) {
    console.error('Error getting transactions', error.message);
    // Send response (error)
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

//* Controller to delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    // Get transactionId
    const { transactionId } = req.params;

    // Check if transactionId is present and valid
    if (!transactionId || !mongoose.Types.ObjectId.isValid(transactionId)) {
      return res.status(400).json({ message: 'Invalid transactionId', success: false });
    }

    // Call service
    const deletedTransaction = await deleteTransactionService(transactionId);

    // Check if transaction is deleted
    if (!deletedTransaction) {
      return res.status(404).json({ message: 'Transaction not found', success: false });
    }

    // Send response (success)
    res.status(200).json({
      message: 'Transaction deleted successfully',
      data: result,
      success: true,
    });
  } catch (error) {
    console.error('Error deleting transaction', error.message);
    // Send response (error)
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

//* Controller to get summary
const getSummaryByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if userId is present
    if (!userId) {
      return res.status(400).json({ message: 'userId is missing', success: false });
    }

    // Aggregate transactions to get summary
    const summary = await Transaction.aggregate([
      // Filter by user
      { $match: { user_id: userId } },

      // Group all matching docs together and calculate fields
      {
        $group: {
          _id: null, // Group all documents together into one result

          // total balance = just sum of all amounts
          totalBalance: { $sum: '$amount' },

          // total income = sum only positive numbers
          totalIncome: {
            $sum: {
              $cond: [
                { $gt: ['$amount', 0] }, // IF amount > 0
                '$amount', // THEN add the amount
                0, // ELSE add 0
              ],
            },
          },

          // total expenses = sum only negative numbers
          totalExpenses: {
            $sum: {
              $cond: [
                { $lt: ['$amount', 0] }, // IF amount < 0
                { $abs: '$amount' }, // THEN add the absolute value
                0, // ELSE add 0
              ],
            },
          },
        },
      },
    ]);

    // Send response (success)
    res.status(200).json({
      message: 'Summary fetched successfully',
      data: {
        totalBalance: summary[0]?.totalBalance || 0,
        totalIncome: summary[0]?.totalIncome || 0,
        totalExpenses: summary[0]?.totalExpenses || 0,
      },
      success: true,
    });
  } catch (error) {
    console.error('Error getting summary', error.message);
    // Send response (error)
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

export { createTransaction, getTransactionsByUserId, deleteTransaction, getSummaryByUserId };
