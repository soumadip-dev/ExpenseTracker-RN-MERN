import sql from '../config/db.config.js';

const createTransactionService = async ({ user_id, title, amount, category }) => {
  // Insert transaction into DB
  const transaction = await sql`
    INSERT INTO transactions (user_id, title, amount, category)
    VALUES (${user_id}, ${title}, ${amount}, ${category})
    RETURNING *`; // added RETURNING * to get inserted row

  return transaction[0];
};

export { createTransactionService };
