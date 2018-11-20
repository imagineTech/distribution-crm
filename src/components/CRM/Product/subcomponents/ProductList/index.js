import React from 'react';
import './ProductList.css';
import { SecondButton } from '../../../../CSS/Button';
import { Link } from 'react-router-dom';

const ProductList = ({ productData, imageProductData, path, }) => {

  let styles = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }

  return (
    <div style={styles}>
      {productData.map(product => {
        return (
          <div className="productCardContainer" key={product.id}>
            <p className="productName">{product.name}</p>
            {imageProductData.main_images.map(image => {
              return image.id === product.relationships.main_image.data.id ? (
                <img className="productListImage" key={image.id} src={image.link.href} alt={image.file_name} height="400px" />
              ) : (null)
            })}
            <p className="productPrice">Price per product: {product.meta.display_price.with_tax.formatted}</p>
            <p className="productStock">Bulk: {product.meta.stock.level}</p>
            <button className="productPageButton"><Link className="productPageLink" to={`${path}/${product.id}`}>More Info</Link></button><br />
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
