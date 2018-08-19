import Moltin  from './config_moltin';

export const getAllProducts = async () => {
  const products = await Moltin.Products.All();
  return products;
}

export const addProductsToCart = async (refId, productId, productQuantity) => {
  const cart = await Moltin.Cart(refId).AddProduct(productId, productQuantity);
  return cart;
}
