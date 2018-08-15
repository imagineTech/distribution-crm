import React from 'react';
import { Link, Route } from 'react-router-dom';

const ProductList = ({ products, match }) => {
  return (
    <div>
      {products.map(product => {
        return (
          <div key={product.id}>
            <Link to={`${match.url}/${product.id}`}>{product.name}</Link><br />
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
