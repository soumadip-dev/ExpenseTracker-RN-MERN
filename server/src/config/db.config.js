import mongoose from 'mongoose';
import { ENV } from './env.config.js';

//* Function to initialize the DB
export const initDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info('🟢 Database initialized successfully');
  } catch (error) {
    console.error('🔴 Database initialization failed', error);
  }
};
