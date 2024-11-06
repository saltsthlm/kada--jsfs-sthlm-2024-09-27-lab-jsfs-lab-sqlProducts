import { PoolClient } from "pg";

export const createProductService = (db: PoolClient, id: string) => {

    return {
        async getAll() {
            const products = await db.query("SELECT * from products");
            return products.rows;
        },
        async getById(id: string) {
            const query = "SELECT * FROM products WHERE id = $1"
            const product = await db.query(query, [id])
            return product.rows[0]
        }

    }
}

export type ProductService = ReturnType<typeof createProductService>;