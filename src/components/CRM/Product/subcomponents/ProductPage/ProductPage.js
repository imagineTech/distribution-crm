import React, { Component } from 'react';
// Styled Components
import Background from './partials/Background'
import Container from './partials/Container'
import ProductInfoWrapper from './partials/ProductInfoWrapper'
// CSS
import './partials/ProductPage.css'

class productPage extends Component {
constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };

  }

	handleChange = e => {
	    this.setState({
	    	quantity: {
	    		...this.state.quantity,
					[e.target.name]: e.target.value
				},
			});
	    console.log(this.state.quantity);
	  }

	handleSubmit = e =>  {
	    alert('Added to your cart');
	    e.preventDefault();
	  }

	render() {

		return (
			<div>
				<Background>
					<Container>
						<img className='productImage' alt="" />
						<ProductInfoWrapper>
							<div className='title'>product.title</div>
							<div className='description'>product.description</div>
							<div className='quantityAvailable'>product.quantity</div>
								<form onSubmit={(e)=>this.handleSubmit(e)}>
					    	<label>
					    		Choose Quantity:
					      	<input className="chooseQuantity" name="quantity" type="integer" value={this.state.quantity} onChange={this.handleChange} />
					      </label>
					      <br />
					      <button className="addToCart" type="submit" onClick={(e)=>this.handleSubmit(e)}>Add To Cart</button>
					    </form>
				    </ProductInfoWrapper>
					</Container>
				</Background>
			</div>
		);
	}
}

	export default productPage;