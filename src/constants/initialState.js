 const loadingProductData = {
    data: [],
    imagesExist: false
};

const loadingOrderData = { 
    data: []
};

const loadingCartData = {
    data: []
}

const storeProfileData = {
    Orders: []
}

  export const initialState = {
      loadingProductData,
      loadingOrderData,
      loadingCartData,
      storeProfileData
  }