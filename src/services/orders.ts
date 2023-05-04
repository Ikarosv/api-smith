import { getAllOrders } from '../models/orders';
import errorGenerator from '../utils/errorFunction';

export const getAllOrdersService = async () => {
  const orders = await getAllOrders();

  if (!orders) errorGenerator(404, 'Orders not found');

  return orders;
};

export default { getAllOrdersService };