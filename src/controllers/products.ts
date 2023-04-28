import { Router } from 'express';
import { postNewProductService } from '../services/products';

const products = Router();

products.post('/', async (req, res) => {
  const { name, amount } = req.body;
  try {
    return res.status(201).json(await postNewProductService({ name, amount }));
  } catch (error: any) {
    if (error.status) return res.status(error.status).json({ message: error.message });
    return res.status(500).json({ message: error.message });
  }
});

export default products;
