import { postNewProduct } from '../models/products';
import Product from '../types/products';
import errorGenerator from '../utils/errorFunction';

export async function postNewProductService(product: Product): Promise<Product | never> {
  const { name, amount } = product;
  const id = await postNewProduct(product);

  if (!id) errorGenerator(500, 'Erro ao cadastrar produto');

  return {
    id,
    name,
    amount,
  };
}

export async function getAllProducts() {
  console.log('a');
}
