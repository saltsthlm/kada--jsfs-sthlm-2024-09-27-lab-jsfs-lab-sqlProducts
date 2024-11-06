import express from 'express';
import { ProductService } from './service';

export const createRouter = (service: ProductService) => {
  const router = express.Router();

  router.get('/', async (_req, res) => {
    const products = await service.getAll();
    res.status(200).json(products);   
  });
/*   router.get("/:id", async (req, res) => {
    const id = req.params.id
    const query = "SELECT * FROM products WHERE id = $1";
    const product = (await client.query(query,[id]))
    res.status(200).json(product.rows[0])
  }); */
/*   router.post("/", async (req, res) => {
    console.log(req.body)
    const { name, description, price, category_id } = req.body
    const query = "INSERT INTO Products(name, description, price, category_id) values($1, $2, $3, $4)"
    const product = (await client.query(query, [name, description, price, category_id]))
    console.log(product)
    res.status(201).json(product.rows[0])
  }); */

  return router;  
};




// GET /api/products - list all products, including category name for each product
// GET /api/products/:id - get one, including category name
// POST /api/products - add a new product, with all fields except id. Also, require a categoryId value as parameter. You can assume that the clients knows an existing categoryId
// PUT /api/products/:id - updates the product information with the given id
// DEL /api/products/:id - delete the product with the given id
// GET /api/products/?category=CATEGORY_NAME - get all products for the CATEGORY_NAME product category