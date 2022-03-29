import express from 'express';
import UsersRoutes from './routes/users.routes';
import ProductRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app.use(ProductRoutes);
app.use(UsersRoutes); // coloque essa linha antes do middleware de erro!

export default app;
