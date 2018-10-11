 const loadingProductData = {
    data: [
    {
        id: "11adb0a9-40e6-4f54-8052-05b5edad8970",
        meta:
        {
            display_price:
            {
                with_tax:
                {amount: 0,
                currency: "USD",
                formatted: "$00.00"},
                without_tax:
                {amount: 0,
                currency: "USD",
                formatted: "$00.00"}
            },
            stock:
            {availability: "in-stock",
            level: 99999},
            name: "Default Product"
        },
        price: [
        {
        amount: 0,
        currency: "USD",
        includes_tax: true
        }
        ],
        relationships:
        {
            main_image_exists: false
        },
        type: "product"
    }
    ]
};

const loadingOrderData = { 
    data: [
        {
        billing_address: {
            city: "",
            company_name: "",
            country: "",
            county: "",
            first_name: "",
            last_name: "",
            line_1: "",
            line_2: "",
            postcode: ""
        },
        customer: {
            email: "",
            name: ""
        },        
        id: "",
        links: {},
        meta: {
            display_price: {
                with_tax: {
                    amount: 0,
                    currency: "",
                    formatted: "$00.00"
                },
                without_tax: {
                    amount: 0,
                    currency: "USD",
                    formatted: "$00.00"
                }
            }
        },
        payment: "",
        relationships: {
            customer: {
                data:{
                    id: "",
                    type: ""
                }
            },
            items: {
                data: [
                    { id: "", type: "" } 
                ]
            }
        },
        shipping: "",
        shipping_address: { 
            city: "",
            company_name: "",
            country: "",
            county: "",
            first_name: "",
            instructions: "",
            last_name: "",
            line_1: "",
            line_2: "",
            phone_number: "",
            postcode: ""
        },
        status: "incomplete",
        type: "order"
        }
    ]
};

  export const initialState = {
      loadingProductData,
      loadingOrderData
  }