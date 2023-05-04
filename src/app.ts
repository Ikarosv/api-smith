import express from 'express';
import products from './controllers/products';
import users from './controllers/users';
import orders from './controllers/orders';

const app = express();

app.use(express.json());

app.use('/products', products);
app.use('/users', users);
app.use('/orders', orders);

export default app;
