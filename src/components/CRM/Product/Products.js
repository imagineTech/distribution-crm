import React from 'react';
import ProductList from './subcomponents/ProductList';

const Products = ({ products, match }) => {
  return(
    <ProductList products={products} match={match} />
  )
}

export default Products;
