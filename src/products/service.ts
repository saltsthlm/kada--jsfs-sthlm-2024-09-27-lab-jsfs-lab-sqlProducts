import { PoolClient } from "pg";

export const createProductService = (db: PoolClient) => {

    return {
        async getAll() {
            const products = await db.query("SELECT * from products");
            return products.rows;
        },
        async getById(id: string) {
            const query = "SELECT * FROM products WHERE id = $1"
            const product = await db.query(query, [id])
            return product.rows[0]
        },
        async createProduct(product: Product) {
            const { name, description, price, category_id } = product;
            const query = "INSERT INTO products (name, description, price, category_id) values($1, $2, $3, $4)"
            await db.query(query, [name, description, price, category_id])
        }   

    }
}

export type ProductService = ReturnType<typeof createProductService>;