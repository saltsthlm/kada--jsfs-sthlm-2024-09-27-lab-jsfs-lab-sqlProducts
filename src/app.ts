import express, { Express } from 'express';
import { createRouter } from './products/router';
import { createDatabase } from './products/db';
import { createProductService } from './products/service';

const app: Express = express();
const port = 3001;

(async () => {
  try {
    const client = await createDatabase();

    app.use(express.json())
    const service = createProductService(client);
    
    app.use('/api/products', createRouter(service));
    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
})();
