import sql from '../config/db.config.js';

//* Service to create a transaction
const createTransactionService = async ({ user_id, title, amount, category }) => {
  // Insert transaction into DB
  const transaction = await sql`
    INSERT INTO transactions (user_id, title, amount, category)
    VALUES (${user_id}, ${title}, ${amount}, ${category})
    RETURNING *`; // added RETURNING * to get inserted row

  return transaction[0];
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
