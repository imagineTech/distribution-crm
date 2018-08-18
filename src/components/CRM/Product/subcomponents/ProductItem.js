import React from 'react';
import QuantityCounter from './QuantityCounter';

const ProductItem = props => {
    return (
      <div>
        {/*
            I had to do a conditional statement first, this helped connect the
            ProductList to the ProductItem while sending over the correct data
        */}
        {props.products.map(product => {
          if(product.id === props.match.params.productId) {
            return (
              <div key={product.id}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                {console.log(props)}
                <QuantityCounter />
                <form onSubmit={this.handleSubmit}>
                  <button>Checkout</button>
                </form>
              </div>
            )
          }
        })}
      </div>
    )
};

export default ProductItem;
