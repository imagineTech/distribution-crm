import React, { Component } from 'react';
import * as Moltin from '../../../../moltin/index';
import * as routes from '../../../../constants/routes';
import QuantityCounter from './QuantityCounter';

class ProductItem extends Component {

    state = {
      inputValue: 0
    }

    handleQuantityChange = (inputValue) => {
      this.setState({ inputValue });
    }

    render() {
      const { productData, match, authUser, history } = this.props;
      const { inputValue } = this.state;
      return (
        <div>
          {/*
              I had to do a conditional statement first, this helped connect the
              ProductList to the ProductItem while sending over the correct data
          */}
          {productData.map(product => {
            if(product.id === match.params.productId) {
              return (
                <div key={product.id}>
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <QuantityCounter quantity={inputValue} onQuantityChange={this.handleQuantityChange}/>
                  <form onSubmit={e => {
                    e.preventDefault();
                    Moltin.addProductsToCart(authUser.uid, product.id, inputValue)
                      .then(cartItems => {
                        console.log(cartItems);
                        history.push(`${routes.CART}`)
                      });
                      Moltin.getACart(authUser.uid)
                        .then(cart => console.log(cart))
                    }}>
                    <button>Checkout</button>
                  </form>
                </div>
              )
            }
          })}
        </div>
      )
    }
};

export default ProductItem;
