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
  const transactions = await sql`
    SELECT *
    FROM transactions
    WHERE user_id = ${userId}
    ORDER BY created_at DESC;
  `;
  return transactions;
};

export { createTransactionService, getTransactionsByUserIdService };
