import Moltin  from './config_moltin';

export const createAMoltinUser = (name, email) => {
  const moltinUser = {
    name,
    email
  }
  return Moltin.Customers.Create(moltinUser);
}

export const updateMoltinUser = (id, first_name, last_name, email) => {
  const moltinUser = {
    name: `${first_name} ${last_name}`,
    email
  };
  return Moltin.Customers.Update(id, moltinUser);
}

export const deleteMoltinUser = id => {
  return Moltin.Customers.Delete(id);
}

export const getAllProducts = () => {
  return Moltin.Products.All();
}

export const getProductImage = () => {
  return Moltin.Products.With('main_image').All();
}

export const addProductsToCart = (refId, productId, productQuantity) => {
  return Moltin.Cart(refId).AddProduct(productId, productQuantity);
}

export const decreaseProductStock = (productId, quantity) => {
  return Moltin.Inventories.DecrementStock(productId, quantity);
}

export const getACart = (refId) => {
  return Moltin.Cart(refId).Items();
}

export const updateItemQuantity = (refId, itemId, newQuantity) => {
  return Moltin.Cart(refId).UpdateItemQuantity(itemId, newQuantity);
}

export const removeCartItem = (refId, itemId, qty) => {
  return Moltin.Cart(refId).RemoveItem(itemId, qty);
}

export const removeCart = (refId) => {
  return Moltin.Cart(refId).Delete();
}

export const checkoutCart = (refId, customerId, billing, shipping) => {
  return Moltin.Cart(refId).Checkout(customerId, billing, shipping);
}

export const payForOrder = (orderId, stripeToken) => {
  return Moltin.Orders.Payment(orderId, stripeToken);
}

export const getAnOrder = orderId => {
  return Moltin.Orders.Get(orderId);
}

export const getOrderItems = orderId => {
  return Moltin.Orders.Items(orderId);
}
