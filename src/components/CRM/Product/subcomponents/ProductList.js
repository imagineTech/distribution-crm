import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, match }) => {
  return (
    <div>
      {products.map(product => {
        return (
          <div key={product.id}>
            {/*
              Please note that match.url is going to be the same as routes.PRODUCTS
              It's just a different way of dynamically producing the current URL path
            */}
            <Link to={`${match.url}/${product.id}`}>{product.name}</Link><br />
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
