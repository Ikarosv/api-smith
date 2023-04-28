import { Router } from 'express';
import { getAllProductsService, postNewProductService } from '../services/products';

const products = Router();

products.post('/', async (req, res) => {
  const { name, amount } = req.body;
  try {
    return res.status(201).json(await postNewProductService({ name, amount }));
  } catch (error: any) {
    return res.status(error.status || 500).json({ message: error.message });
  }
});

products.get('/', async (_req, res) => {
  try {
    return res.status(200).json(await getAllProductsService());
  } catch (error: any) {
    return res.status(error.status || 500).json({ message: error.message });
  }
});

export default products;
