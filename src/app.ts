/* eslint-disable no-console */
import express, { Express } from 'express';
import { createRouter } from './products';
import { createDatabase } from './products/repository';

const app: Express = express();
const port = 3001;

(async () => {
  const client = await createDatabase();
  const products = await client.query("SELECT * from products");

  console.log(products.rows);

})();



app.use('/api/products', createRouter());

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// GET /api/products - list all products, including category name for each product
// GET /api/products/:id - get one, including category name
// POST /api/products - add a new product, with all fields except id. Also, require a categoryId value as parameter. You can assume that the clients knows an existing categoryId
// PUT /api/products/:id - updates the product information with the given id
// DEL /api/products/:id - delete the product with the given id
// GET /api/products/?category=CATEGORY_NAME - get all products for the CATEGORY_NAME product category
