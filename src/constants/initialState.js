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
            city: "West Valley City",
            company_name: "",
            country: "United States",
            county: "Ut",
            first_name: "Nick",
            last_name: "Last",
            line_1: "3127 South Sugar Bowl Lane",
            line_2: "",
            postcode: "84128"
        },
        customer: {
            email: "andy@email.com",
            name: "Andy Last"
        },        
        id: "b874eb51-75e2-41b1-a488-86c2c2760515",
        links: {},
        meta: {
            display_price: {
                with_tax: {
                    amount: 80000,
                    currency: "USD",
                    formatted: "$800.00"
                },
                without_tax: {
                    amount: 80000,
                    currency: "USD",
                    formatted: "$800.00"
                }
            }
        },
        timestamps:{
            created_at: "2018-10-09T19:56:10Z",
            updated_at: "2018-10-09T19:56:10Z"
        },
        payment: "unpaid",
        relationships: {
            customer: {
                data:{
                    id: "d2bb7c3b-86d4-44d5-93d7-febdb1a814ef",
                    type: "customer"
                }
            },
            items: {
                data: [
                    { id: "030f34e8-481e-4078-b704-55f29d26c041", type: "item" } 
                ]
            }
        },
        shipping: "unfulfilled",
        shipping_address: { 
            city: "West Valley City",
            company_name: "",
            country: "United States",
            county: "Ut",
            first_name: "Nick",
            instructions: "",
            last_name: "Last",
            line_1: "3127 South Sugar Bowl Lane",
            line_2: "",
            phone_number: "",
            postcode: "84128"
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