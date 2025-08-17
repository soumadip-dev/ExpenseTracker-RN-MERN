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
export { createTransactionService, getTransactionsByUserIdService, deleteTransactionService };
