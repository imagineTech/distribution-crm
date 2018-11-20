import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Address from "./Address";
import CartList from "./List";
import CheckoutButton from "./CheckoutBtn";
import DeleteButton from "./Delete";

class Cart extends Component {
  state = {
    addressValues: {},
    billingIsDifferent: false
  };

  hanldeBooleanChange = () => {
    let { billingIsDifferent } = this.state;
    this.setState({
      billingIsDifferent: !billingIsDifferent
    });
  };

  render() {
    return (
      <div>
      <div className="cart-main">
        <CartList {...this.props} />
        <CardElement />
        <Address
          {...this.state}
          formDataToSend={values =>
            this.setState({
              addressValues: { ...values }
            })
          }
          booleanChange={this.hanldeBooleanChange}
        />
      </div>
      <div className="cart-button">
        <CheckoutButton {...this.props} {...this.state} />
        <DeleteButton {...this.props} />
      </div>
      </div>
    );
  }
}

export default injectStripe(Cart);
