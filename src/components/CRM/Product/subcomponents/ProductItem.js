import React, { Component } from 'react';
import * as Moltin from '../../../../moltin/index';
import * as routes from '../../../../constants/routes';
import QuantityCounter from './QuantityCounter';
// Styled Components
import Background from './ProductPage/partials/Background';
import Container from './ProductPage/partials/Container';
import ProductInfoWrapper from './ProductPage/partials/ProductInfoWrapper';
// CSS
import './ProductPage/partials/ProductPage.css';

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
         {console.log(history)}
          {productData.map(product => {
            if(product.id === match.params.productId) {
              return (
                <div key={product.id}>
                  <Background>
                    <Container>
                      <img className='productImage'></img>
                      <ProductInfoWrapper>
                        <div className='title'>{product.name}</div>
                        <div className='description'>{product.description}</div>
                        <div className='quantityAvailable'>{product.meta.stock.level}</div>
                        <QuantityCounter quantity={inputValue} onQuantityChange={this.handleQuantityChange}/>
                        <form onSubmit={e => {
                          e.preventDefault();
                          Moltin.addProductsToCart(authUser.uid, product.id, inputValue)
                            .then(cartItems => {
                              history.push(`${routes.CART}`)
                            });
                          }}>
                          <button className="addToCart">Add to Cart</button>
                        </form>
                      </ProductInfoWrapper>
                    </Container>
                  </Background>
                </div>
              )
            }
          })}
        </div>
      )
    }
};

export default ProductItem;
