import React, { Component } from 'react';
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
      const { productData, addProducts, match, authUser, history } = this.props;
      const { inputValue } = this.state;
      return (
        <div>
          {productData.data.map(product => {
            if(product.id === match.params.productId) {
              return (
                <div key={product.id}>
                  <Background>
                    <Container>
                      {productData.included.main_images.map(image => {
                        return image.id === product.relationships.main_image.data.id ? (
                          <img className='productImage'key={image.id} src={image.link.href} alt={image.file_name} />
                        ) : (
                          null
                        )
                      })}   
                      <ProductInfoWrapper>
                        <div className='title'>{product.name}</div>
                        <div className='description'>{product.description}</div>
                        <div className='quantityAvailable'>{product.meta.stock.level}</div>
                        <QuantityCounter quantity={inputValue} onQuantityChange={this.handleQuantityChange}/>
                        <form onSubmit={e => {
                          e.preventDefault();
                          addProducts(authUser.uid, product.id, inputValue)
                            .then(cartItems => {
                              history.push(`${routes.CART}`);
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
