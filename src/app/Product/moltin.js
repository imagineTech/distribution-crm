import Moltin from '../constants/config/config_moltin';

export const getAllProducts = async () => {
  const products = await Moltin.Products.All();
  return products;
}

export const addProductsToCart = async (refId, productId, productQuantity) => {
  const cart = await Moltin.Cart(refId).AddProduct(productId, productQuantity);
  return cart;
}

export const updateItemQuantity = async (refId, itemId, newQuantity) => {
  const update = await Moltin.Cart(refId).UpdateItemQuantity(itemId, newQuantity);
  return update;
}
