import Order from '../types/orders';
import connection from './connection';

export const getAllOrders = async () => {
  const [orders] = (await connection.execute(`
SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
FROM Trybesmith.orders as o
JOIN Trybesmith.products as p ON o.id = p.order_id
GROUP BY o.id, o.user_id`) as unknown) as Order[];
  return orders;
};

export default { getAllOrders };
