import express from 'express';
import UsersRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

// app.get 

app.use(UsersRoutes); // coloque essa linha antes do middleware de erro!

export default app;
