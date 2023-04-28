import { ResultSetHeader } from 'mysql2';
import Product from '../types/products';
import connection from './connection';

const MAIN_DATABASE = process.env.MAIN_DATABASE || 'Trybesmith';

export async function getAllProducts() {
  const [products] = await connection.execute(
    `SELECT * FROM ${MAIN_DATABASE}.products`,
  );

  return products;
}

export async function postNewProduct({ name, amount }: Product): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO ${MAIN_DATABASE}.products (name, amount) VALUES (?, ?)`,
    [name, amount],
  );

  return insertId;
}