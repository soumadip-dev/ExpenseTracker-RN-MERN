import sql from '../config/db.config.js';

const createTransaction = async (req, res) => {
  try {
    // Get required fields fromm request body
    const { user_id, title, amount, category } = req.body;

    // Check if required fields are present
    if (!user_id || !title || !amount || !category) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Insert transaction into DB
    const transcation = await sql`
      INSERT INTO transactions (user_id, title, amount, category)
      VALUES (${user_id}, ${title}, ${amount}, ${category})`;

    // Log transaction
    console.log(transcation);

    // Send success response
    res
      .status(201)
      .json({ message: 'Transaction created successfully', data: transcation[0], success: true });
  } catch (error) {
    // Log error
    console.error(error);

    // Send error response
    res.status(500).json({ message: 'Internal server error', success: false });
  }
};

export { createTransaction };
