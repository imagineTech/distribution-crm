import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../../constants/routes';

const ProductList = ({ productData, path }) => {
  return (
    <div>
      {productData.data.map(product => {
        return (
          <div key={product.id}>
            {/*
              Please note that match.url is going to be the same as routes.PRODUCTS
              It's just a different way of dynamically producing the current URL path
            */}
           
            <p>{product.name}</p>
            <p>Price per product: {product.meta.display_price.with_tax.formatted}</p>
            <p>Bulk: {product.meta.stock.level}</p>
            <Link to={`${path}/${product.id}`}>More Info</Link><br />
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
