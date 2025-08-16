import app from './app.js';
import { ENV } from './config/env.config.js';
import sql from './config/db.config.js';

const PORT = ENV.PORT || 8080;

//* Function to initialize the DB
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

//* Function to connect DB and start server
const startServer = async () => {
  try {
    await initDB(); // Ensure DB is ready before server starts
    app.listen(PORT, () => {
      console.info(`✔️ Server is up and running on port: ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

startServer();
