 const loadingProductData = {
    data: [
    {
        commodity_type: "physical",
        description: "A second product",
        id: "11adb0a9-40e6-4f54-8052-05b5edad8970",
        manage_stock: true,
        meta:
        {
            display_price:
            {
                with_tax:
                {amount: 2500,
                currency: "USD",
                formatted: "$25.00"},
                without_tax:
                {amount: 2500,
                currency: "USD",
                formatted: "$25.00"}
            },
            stock:
            {availability: "in-stock",
            level: 99999},
            timestamps:
            { created_at: "2018-10-09T00:00:55+00:00",
            updated_at: "2018-10-09T18:27:46+00:00"},
            name: "Test Product 2"
        },
        price: [
        {
        amount: 2500,
        currency: "USD",
        includes_tax: true
        }
        ],
        relationships:
        {main_image:
            {data:
            {id: "e77e681a-07a8-4082-b876-0f4db36b7780",
            type: "main_image"}}},
        sku: "002",
        slug: "testProductTwo",
        status: "live",
        type: "product"
    }
    ]
};

  export const initialState = {
      loadingProductData
  }