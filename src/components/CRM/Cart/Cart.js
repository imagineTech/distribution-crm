import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Billing from './subcomponents/Billing';
import * as Moltin from '../../../moltin/index';
import { loadCart } from '../../../actions/cartData';
import { connect } from 'react-redux';

class Cart extends Component {

  state = {
    formValues: []
  }

  componentDidMount() {
    const { auth, getCartData } = this.props;
    getCartData(auth.uid);
  }

  handleChange = formObject => {
    let { formValues } = this.state;
    this.setState({
      formValues: { ...formValues, ...formObject }
    });
  }

  handleClick = e => {
    const { auth, profileData } = this.props;
    const { formValues } = this.state;
    //hard coded billing
    const billing = {
      first_name: profileData.First_Name,
      last_name: profileData.Last_Name,
      line_1: formValues.Address,
      city: formValues.City,
      postcode: formValues.Postcode,
      county: formValues.County,
      country: formValues.Country
    }
    // billing becomes shipping, if shipping is undefined
    Moltin.checkoutCart(auth.uid, profileData.Moltin_User_Id, billing).then(order => {
      // Moltin.Orders.Payment(order.id, payment);
      console.log(order);
    })
  }

  render() {
    const { cartItems } = this.props;
    return(
      <div>
        {cartItems.map(item => {
          return(
            <div key={item.id}>
              <span>{item.quantity}</span>
              <span>{item.name}</span>
              <span>{item.meta.display_price.with_tax.unit.formatted}</span>
            </div>
          )
        })}
        <Billing formChange={this.handleChange}/>
        <button onClick={this.handleClick}>Checkout</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.loadingCartData.data,
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCartData: (crtId) => dispatch(loadCart(crtId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(Cart));
