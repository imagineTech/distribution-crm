import Moltin from './config_moltin';

export const getACart = async (refId) => {
  const cart = await Moltin.Cart(refId).Get();
  return cart;
}
