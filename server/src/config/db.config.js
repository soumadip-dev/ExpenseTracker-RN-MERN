import { neon } from '@neondatabase/serverless';
import { ENV } from './env.config';

const sql = neon(ENV.DATABASE_URL);

export default sql;
