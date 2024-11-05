import express from 'express';
import { PoolClient } from 'pg';

export const createRouter = (client: PoolClient) => {
  const router = express.Router();

  router.get('/', async (_req, res) => {
    const productsList = (await client.query("SELECT * from products"))
/*     const categories = repository.list;   */
    res.status(200).json(productsList.rows);   
  });

  return router;  
};
