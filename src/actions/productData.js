import * as Moltin from "../moltin/index";

export const loadProductData = prodData => {
  return {
    type: "LOAD_PRODUCTS",
    payload: prodData
  };
};

export const loadProductImageData = imageProductData => {
  return {
    type: "LOAD_PRODUCT_IMAGE",
    payload: imageProductData,
    imgesExist: false
  };
};

export const decrementSuccess = inventory => {
  return {
    type: "INVENTORY_DECREMENT_SUCCESS",
    new_amount: {
      message: "decrement of product inventory was successfull :)",
      productId: inventory.product_id,
      quantity: inventory.quantity,
      type: inventory.action
    }
  };
};

export const loadProducts = () => {
  return dispatch => {
    Moltin.getAllProducts().then(products => {
      dispatch(loadProductData(products));
    });
  };
};

export const loadProductImage = productId => {
  return dispatch => {
    Moltin.getProductImage(productId).then(productImageData => {
      dispatch(loadProductImageData(productImageData));
    });
  };
};

export const decrementStock = cart => {
  return dispatch => {
    cart.map(item => {
      return Moltin.decreaseProductStock(item.product_id, item.quantity).then(
        inventory => {
          if (inventory) {
            dispatch(decrementSuccess(inventory.data));
          }
        }
      );
    });
  };
};
