import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  DATABASE_URI: process.env.DATABASE_URI,
  MONGO_URI: process.env.MONGO_URI,
};
