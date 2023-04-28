import { getAllProducts, postNewProduct } from '../models/products';
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

export async function getAllProductsService(): Promise<Product[] | never> {
  const allProducts = await getAllProducts();

  if (!allProducts) errorGenerator(500, 'Erro ao buscar produtos');
  if (allProducts.length === 0) errorGenerator(404, 'Nenhum produto encontrado');

  return allProducts;
}
