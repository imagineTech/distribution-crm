import React from 'react';
import ProductList from './subcomponents/ProductList';

const Products = ({ products, match, auth }) => {
  return(
    <ProductList products={products} match={match} auth={auth} />
  )
}

export default Products;
