import Moltin  from './config_moltin';

export const createAMoltinUser = async (name, email) => {
  const moltinUser = {
    name,
    email
  }
  const customer = await Moltin.Customers.Create(moltinUser);
  return customer;
}

export const getAllProducts = async () => {
  const products = await Moltin.Products.All();
  return products;
}

export const addProductsToCart = async (refId, productId, productQuantity) => {
  const cart = await Moltin.Cart(refId).AddProduct(productId, productQuantity);
  return cart;
}

export const getACart = async (refId) => {
  const cart = await Moltin.Cart(refId).Items();
  return cart;
}

export const updateItemQuantity = async (refId, itemId, newQuantity) => {
  const update = await Moltin.Cart(refId).UpdateItemQuantity(itemId, newQuantity);
  return update;
}

export const removeCartItem = async (refId, itemId, qty) => {
  const removed = Moltin.Cart(refId).RemoveItem(itemId, qty);
  return removed;
}

export const removeCart = async (refId) => {
  const deleted = Moltin.Cart(refId).Delete();
  return deleted;
}

export const checkoutCart = async (refId, customerId, billing, shipping) => {
  const checkout = await Moltin.Cart(refId).Checkout(customerId, billing, shipping);
  return checkout;
}

export const payForOrder = async (orderId, stripeToken) => {
  const payment = await Moltin.Orders.Payment(orderId, stripeToken);
  return payment;
}

export const getAnOrder = (orderId) => {
  return Moltin.Orders.Get(orderId);
}
