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
      const { productData, imageProductData, addProducts, match, profileData, history } = this.props;
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
                        <div className='quantityAvailable'>{product.meta.stock.level}</div>
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
  productData: PropTypes.arrayOf(PropTypes.shape({
    commodity_type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    manage_stock: PropTypes.bool.isRequired,
    meta: PropTypes.shape({
      display_price: PropTypes.shape({
        with_tax: PropTypes.shape({
          ammount: PropTypes.number.isRequired,
          currency: PropTypes.string.isRequired,
          formatted: PropTypes.string.isRequired
        }).isRequired,
        without_tax: PropTypes.shape({
          ammount: PropTypes.number.isRequired,
          currency: PropTypes.string.isRequired,
          formatted: PropTypes.string.isRequired
        }).isRequired
      }).isRequired,
      stock: PropTypes.shape({
        level: PropTypes.number.isRequired,
        availability: PropTypes.string.isRequired
      }).isRequired,
      timestamps: PropTypes.shape({
        created_at: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    relationships: PropTypes.object.isRequired,
    sku: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  imageProductData: PropTypes.objectOf(PropTypes.array.isRequired).isRequired,
  addProducts: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  profileData: PropTypes.shape({
    Company: PropTypes.string.isRequired,
    Country: PropTypes.string.isRequired,
    Department: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    First_Name: PropTypes.string.isRequired,
    Last_Name: PropTypes.string.isRequired,
    Moltin_User_Id: PropTypes.string.isRequired,
    Orders: PropTypes.array.isRequired,
    Password: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.object.isRequired
}

export default ProductItem;
