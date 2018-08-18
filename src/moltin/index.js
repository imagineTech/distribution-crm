import Moltin  from './config_moltin';

export const getAllProducts = async () => {
  const products = await Moltin.Products.All();
  return products;
}
