/*
import { neon } from '@neondatabase/serverless';
import { ENV } from './env.config.js';

// Creates a SQL connection using our DB URL
const sql = neon(ENV.DATABASE_URI);

export default sql;

*/

import mongoose from 'mongoose';
import { ENV } from './env.config.js';

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
