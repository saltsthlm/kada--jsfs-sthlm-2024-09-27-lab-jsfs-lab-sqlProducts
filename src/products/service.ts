import { PoolClient } from "pg";

export const createProductService = (db: PoolClient) => {

    return {
        async getAll() {
            const products = await db.query("SELECT * from products");
            return products.rows;
        }
    }
}

export type ProductService = ReturnType<typeof createProductService>;