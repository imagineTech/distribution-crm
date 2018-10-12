 const loadingProductData = {
    data: [
        {
        id: 0,
        name: "Default Product",
        meta: {
            display_price: {
                with_tax: {
                    formatted: "$00.00"
            }},
            stock: {
                level: 0
            }
        },
        relationships: {
            main_image: {
                data: {
                    id: 0
                }
            }
        },
        included:
            {
                main_images: [
                    {
                        id: 0, 
                        file_name: "noFile",
                        link:{
                            href: ""
                        }
                    }
                ]
            } 
        }
    ],
    imagesExist: false
};

const loadingOrderData = { 
    data: []
};

const loadingCartData = {
    data: []
}

const storeProfileData = {
    Orders: [{ id: 0}]
}

  export const initialState = {
      loadingProductData,
      loadingOrderData,
      loadingCartData,
      storeProfileData
  }