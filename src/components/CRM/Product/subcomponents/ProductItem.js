import React, { Component } from 'react';
import QuantityCounter from './QuantityCounter';
// Styled Components
import Background from './ProductPage/partials/Background';
import Container from './ProductPage/partials/Container';
import ProductInfoWrapper from './ProductPage/partials/ProductInfoWrapper';
// CSS
import './ProductPage/partials/ProductPage.css';
import PropTypes from 'prop-types';

class ProductItem extends Component {

    state = {
      inputValue: 0
    }

    handleQuantityChange = (inputValue) => {
      this.setState({ inputValue });
    }

    render() {
      const { productData, imageProductData, inventoryData, addProducts, match, profileData, history } = this.props;
      const { inputValue } = this.state;
      return (
        <div>
          {productData.map(product => {
            if(product.id === match.params.productId) {
              return (
                <div key={product.id}>
                  <Background>
                    <Container>
                      {imageProductData.main_images.map(image => {
                        return image.id === product.relationships.main_image.data.id ? (
                          <img className='productImage'key={image.id} src={image.link.href} alt={image.file_name} />
                        ) : (
                          null
                        )
                      })}
                      <ProductInfoWrapper>
                        <div className='title'>{product.name}</div>
                        <div className='description'>{product.description}</div>
                        {Object.keys(inventoryData).map(item => {
                          if(product.id === inventoryData[item].id) {
                            return <div className='quantityAvailable'>{inventoryData[item].available}</div>
                          }
                        })}
                        <QuantityCounter quantity={inputValue} onQuantityChange={this.handleQuantityChange}/>
                        <form onSubmit={e => {
                          e.preventDefault();
                          addProducts(profileData.id, product.id, inputValue, history);
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

ProductItem.propTypes = {
  productData: PropTypes.array.isRequired,
  imageProductData: PropTypes.objectOf(PropTypes.array.isRequired).isRequired,
  addProducts: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  profileData: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default ProductItem;
