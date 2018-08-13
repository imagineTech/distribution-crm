import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, match }) => {
  return (
    <div>
      {products.map(product => {
        {/*return <Link to={`${match.url}/${product.id}`}>{product.name}</Link>*/}
      })}
    </div>
  )
}

export default ProductList
