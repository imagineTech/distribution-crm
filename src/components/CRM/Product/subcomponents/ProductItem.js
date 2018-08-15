import React from 'react';

const ProductItem = ({ products, match }) => {
    return (
      <div>
        {/*
            I had to do a conditional statement first, this helped connect the
            ProductList to the ProductItem while sending over the correct data
        */}
        {products.map(product => {
          if(product.id === match.params.productId) {
            return (
              <div key={product.id}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                {console.log(product)}
              </div>
            )
          }
        })}
      </div>
    )
};

export default ProductItem;
