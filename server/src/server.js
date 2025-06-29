import express from 'express';
import { ENV } from './config/env.config.js';
import sql from './config/db.config.js';

const app = express();
const PORT = ENV.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello from the Expense Tracker server');
});

async function initDB() {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS transactions (
      id SERIAL PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      category VARCHAR(255) NOT NULL,
      created_at DATE NOT NULL DEFAULT CURRENT_DATE
    )
    `;
    console.info('🟢 Database initialized successfully');
  } catch (error) {
    console.error('🔴 Database initialization failed', error);
  }
}

//* Function to connect the DB and start the server
const startServer = async () => {
  try {
    await initDB(); // Ensure DB is connected before starting the server
    app.listen(PORT, () => {
      console.info(`✔️ Server is up and running on port: ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
