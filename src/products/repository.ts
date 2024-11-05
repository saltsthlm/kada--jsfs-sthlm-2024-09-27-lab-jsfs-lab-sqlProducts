import db from './db';
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





// import package 'pg' here and get the connection from the connection pool
// see pg docs
// https://node-postgres.com/features/connecting
// https://node-postgres.com/features/pooling


/**
 * The pool has to be created only once (new Pool()) but can be connected and released as
 * many times as you want
 */

/**
 * We're using a hardcoded instructors list below, this should come from the database
 * using SQL instead
 */

const list = () => db.categories();

export default {
  list,
};
