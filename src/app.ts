import express from 'express';
import products from './controllers/products';
import users from './controllers/users';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', users);

export default app;
