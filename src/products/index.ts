import express from 'express';
import repository from './repository';

export const createRouter = () => {
  const router = express.Router();

  router.get('/', (_req, res) => {
    const categories = repository.list;  
    res.status(200).json(categories);   
  });

  return router;  
};
