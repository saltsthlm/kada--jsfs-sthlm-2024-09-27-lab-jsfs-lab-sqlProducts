import pg from 'pg'
import { config } from '../config';

const { Pool } = pg;
 

export const createDatabase = async () => {
  const pool = new Pool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,  
    ssl: { rejectUnauthorized: false },  
  });
  return await pool.connect();  
};