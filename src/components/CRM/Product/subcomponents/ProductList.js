import React from 'react';
import { Link, Route } from 'react-router-dom';
import ProductItem from './ProductItem';

const ProductList = ({ products, match, auth }) => {
  return (
    <div>
      {products.map(product => {
        return (
          <div key={product.id}>
            <Link to={`${match.url}/${product.id}`}>{product.name}</Link><br />
            <Route exact path={`${match.path}/:productId`} component={() => <ProductItem product={product} auth={auth}/>}/>
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
