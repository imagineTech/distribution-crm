import React from 'react';

const ProductItem = ({ product, match }) => {
    return (
      <div>
        <h1>{match.params.productId}</h1>
      </div>
    )
};

export default ProductItem;
