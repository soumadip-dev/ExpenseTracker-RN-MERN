// import sql from '../config/db.config.js';
import Transaction from '../model/transactions.model.js';

//* Service to create a transaction
const createTransactionService = async ({ user_id, title, amount, category }) => {
  // Insert transaction into DB
  const transaction = await Transaction.create({
    user_id,
    title,
    amount,
    category,
  });

  return transaction; // returns the created document
};

//* Service to get all transactions created by userId
const getTransactionsByUserIdService = async userId => {
  // Get all transactions
  const transactions = await Transaction.find({ user_id: userId }).sort({ createdAt: -1 });

  // Return transactions
  return transactions;
};

//* Service to delete a transaction by transactionId
const deleteTransactionService = async transactionId => {
  // Delete transaction from DB
  const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);

  // Return deleted transaction
  return deletedTransaction;
};

//* Services to to get summary by userId
const getSummaryByUserIdService = async userId => {
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
              '$amount',
              0, // ELSE add 0
            ],
          },
        },
      },
    },
  ]);

  // Return summary
  return summary;
};

export {
  createTransactionService,
  getTransactionsByUserIdService,
  deleteTransactionService,
  getSummaryByUserIdService,
};
