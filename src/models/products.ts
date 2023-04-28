import { ResultSetHeader } from 'mysql2';
import Product from '../types/products';
import connection from './connection';

export async function getAllProducts() {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );

  return products;
}

export async function postNewProduct({ name, amount }: Product): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return insertId;
}