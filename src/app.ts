import express, { Express } from 'express';
import { createRouter } from './products';
import { createDatabase } from './products/repository';

const app: Express = express();
const port = 3001;

(async () => {
  try {

    const client = await createDatabase();
    app.use('/api/products', createRouter(client));
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
})();


// GET /api/products - list all products, including category name for each product
// GET /api/products/:id - get one, including category name
// POST /api/products - add a new product, with all fields except id. Also, require a categoryId value as parameter. You can assume that the clients knows an existing categoryId
// PUT /api/products/:id - updates the product information with the given id
// DEL /api/products/:id - delete the product with the given id
// GET /api/products/?category=CATEGORY_NAME - get all products for the CATEGORY_NAME product category
