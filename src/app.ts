import express from 'express';
import UsersRoutes from './routes/users.routes';
import ProductRoutes from './routes/products.routes';
import OrdersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

// middleware de erro

app.use(OrdersRoutes);
app.use(ProductRoutes);
app.use(UsersRoutes);

export default app;
