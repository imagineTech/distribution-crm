import React, { Component } from 'react';
import * as routes from '../../../../constants/routes';

class CheckoutButton extends Component{ 

    handleClick = e => {
        const { profileData, stripe, history, match, addingOrdData, checkOut, deleteCrt, addressValues } = this.props;
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
            checkOut(profileData.id, profileData.Moltin_User_Id, shipping, billing)
            .then(order => {
            // const payment = {
            //   gateway: 'stripe',
            //   method: 'purchase',
            //   payment: `${payload.token.id}`
            // }
            // Moltin.payForOrder(order.data.id, payment);
            addingOrdData(profileData.id, order.data.id);
            deleteCrt(profileData.id);
            history.push(`${routes.ORDER_REVIEW}/${order.data.id}`);
            })
        });
    }

    render() {
        return <button onClick={this.handleClick}>Checkout</button>

    }
}

export default CheckoutButton;