import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Address from './subcomponents/Address';
import QuantityCounter from './subcomponents/QuantityCounter';
import * as Moltin from '../../../moltin/index';
import * as routes from '../../../constants/routes';
import { loadCart, updateCartItemQty, removingCartItem, deleteCart } from '../../../actions/cartData';
import { addOrderData } from '../../../actions/orderData';
import { connect } from 'react-redux';

class Cart extends Component {

  state = {
    addressValues: {}
  }

  componentDidMount() {
    const { auth, getCartData } = this.props;
    getCartData(auth.uid);
    console.log(this.state.addressValues)
  }

  handleClick = e => {
    const { auth, profileData, stripe, history, match, addingOrdData, deleteCrt } = this.props;
    const { addressValues } = this.state;
    const { shippingForm, billingForm, billingIsDifferent } = addressValues;
    const shipping = {
      first_name: profileData.First_Name,
      last_name: profileData.Last_Name,
      line_1: shippingForm.Address,
      city: shippingForm.City,
      postcode: shippingForm.Postcode,
      county: shippingForm.County,
      country: shippingForm.Country
    };
    const billing = billingIsDifferent ? {
      first_name: profileData.First_Name,
      last_name: profileData.Last_Name,
      line_1: billingForm.Address,
      city: billingForm.City,
      postcode: billingForm.Postcode,
      county: billingForm.County,
      country: billingForm.Country
    } : shipping;
    stripe.createToken().then(payload => {
      Moltin.checkoutCart(auth.uid, profileData.Moltin_User_Id, shipping, billing)
        .then(order => {
        // const payment = {
        //   gateway: 'stripe',
        //   method: 'purchase',
        //   payment: `${payload.token.id}`
        // }
        // Moltin.payForOrder(order.data.id, payment);
        addingOrdData(auth.uid, order.data.id);
        deleteCrt(auth.uid);
        history.push(`${routes.ORDER_REVIEW}/${order.data.id}`);
      })
    });
  }

  render() {
    const { cartItems } = this.props;
    return(
      <div>
        {cartItems.map(item => {
          return(
            <div key={item.id}>
              <QuantityCounter
                quantity={item.quantity}
                onQuantityChange={(qty) => {
                  const { auth, updateQty } = this.props;
                  updateQty(auth.uid, item.id, qty);

                }}/>
              <span>{item.name}</span>
              <span>{item.meta.display_price.with_tax.unit.formatted}</span>
              <button onClick={e => {
                  const { auth, removeItm } = this.props;
                  removeItm(auth.uid, item.id, item.quantity);
                }}>Remove item
              </button>
            </div>
          )
        })}
        <CardElement />
        <Address formDataToSend={values => (
          this.setState({
            addressValues: {...values}
          })
        )}/>
        <button onClick={this.handleClick}>Checkout</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { data } = state.loadingCartData
  return {
    cartItems: data.length !== 0 ? data : data,
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCartData: (crtId) => dispatch(loadCart(crtId)),
    updateQty: (cartId, itemId, newQty) => dispatch(updateCartItemQty(cartId, itemId, newQty)),
    removeItm: (cartId, itemId, qty) => dispatch(removingCartItem(cartId, itemId, qty)),
    deleteCrt: (cartId) => dispatch(deleteCart(cartId)),
    addingOrdData: (authId, ordId) => dispatch(addOrderData(authId, ordId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(Cart));
