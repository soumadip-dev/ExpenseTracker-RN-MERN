import { neon } from '@neondatabase/serverless';
import { ENV } from './env.config.js';

// Creates a SQL connection using our DB URL
const sql = neon(ENV.DATABASE_URI);

export default sql;
