import React from 'react';

const ProductItem = ({products}) => {
    return (
      <div>
        <h1>Product</h1>
        {products.map(product => {
          return (
            <div key={product.id}>
              <p>{product.name}</p>
              <p>{product.description}</p>
            </div>
          );
        })}
        {console.log(products)}
      </div>
    )
};

export default ProductItem;
