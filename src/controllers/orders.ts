import { Request, Response, Router } from 'express';
import { getAllOrdersService } from '../services/orders';

const orders = Router();

export const getAllOrdersController = async (_req: Request, res: Response) => {
  try {
    const allOrders = await getAllOrdersService();
    res.status(200).json(allOrders);
  } catch (error: any) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

orders.get('/', getAllOrdersController);

export default orders;