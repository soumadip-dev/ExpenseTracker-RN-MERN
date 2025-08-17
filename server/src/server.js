import app from './app.js';
import { ENV } from './config/env.config.js';
import { initDB } from './config/db.config.js';

const PORT = ENV.PORT || 8080;

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
