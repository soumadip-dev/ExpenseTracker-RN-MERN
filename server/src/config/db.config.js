// import { neon } from '@neondatabase/serverless';
// import dotenv from 'dotenv';
// dotenv.config();

// const sql = neon(process.env.DATABASE_URL);

// export default sql;

import { neon } from '@neondatabase/serverless';
import { ENV } from './env.config';

const sql = neon(ENV.DATABASE_URL);

export default sql;
