import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import Address from "./Address";
import CartList from "./List";
import CheckoutButton from "./CheckoutBtn";
import DeleteButton from "./Delete";

class Cart extends Component {
  state = {
    addressValues: {},
    billingIsDifferent: false,
    form:false
  };

  hanldeBooleanChange = () => {
    let { billingIsDifferent } = this.state;
    this.setState({
      billingIsDifferent: !billingIsDifferent
    });
  };

  renderForm = () => {
    this.setState((state)=>({form:!state.form}))
  }

  render() {
    let {form} = this.state;
    return (
      <div>
      <div className="cart-main">
        <CartList {...this.props} />
        <CardElement />
      </div>
      <div className="address">
          {form?<div><h1 onClick={this.renderForm} align="center">- Add address</h1><Address
          {...this.state}
          formDataToSend={values =>
            this.setState({
              addressValues: { ...values }
            })
          }
          booleanChange={this.hanldeBooleanChange}
        /></div>:<h1 onClick={this.renderForm}>+ Add address</h1>}
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
