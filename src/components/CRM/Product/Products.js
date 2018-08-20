import React from 'react';
import { Route } from 'react-router-dom';
import ProductList from './subcomponents/ProductList';

const Products = ({ comp: Component, auth, ...rest }) => {
  return(
    <div>
      <Route
        exact
        path={`${rest.path}`}
        render={props => auth.authenticated ? <ProductList {...props} {...rest} /> : <p>Not Found</p>}
      />
      <Route
        exact
        path={`${rest.path}/:productId`}
        render={props => auth.authenticated ? <Component {...props} {...rest} {...auth} /> : <p>Not Found</p>}
      />
      </div>
    )
  }

  export default Products;
