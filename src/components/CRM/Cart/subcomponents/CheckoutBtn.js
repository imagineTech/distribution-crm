import React, { Component } from 'react';
import * as routes from '../../../../constants/routes';
import PropTypes from 'prop-types';

class CheckoutButton extends Component{ 

    handleClick = e => {
        const { profileData, stripe, history, addingOrdDataToStore, loadingCrrntOrder, checkOut, deleteCrt, addressValues, billingIsDifferent } = this.props;
        const { shippingForm, billingForm  } = addressValues;
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
            loadingCrrntOrder(order.data.id);
            addingOrdDataToStore(profileData.id, order.data.id);
            deleteCrt(profileData.id);
            history.push(`${routes.ORDER_REVIEW}/${order.data.id}`);
            })
        });
    }

    render() {
        return <button onClick={this.handleClick}>Checkout</button>

    }
}

CheckoutButton.propTypes = {
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
    stripe: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    addingOrdDataToStore: PropTypes.func.isRequired,
    loadingCrrntOrder: PropTypes.func.isRequired,
    checkOut: PropTypes.func.isRequired,
    deleteCrt: PropTypes.func.isRequired,
    addressValues: PropTypes.object.isRequired
}

export default CheckoutButton;