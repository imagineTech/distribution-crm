import React, { Component } from 'react';
import Billing from './Billing';
import Shipping from './Shipping';
import PropTypes from 'prop-types';

class Address extends Component {

    state = {
        formValues: {
          shippingForm: {},
          billingForm: {}
        }
      }

    handleShippingChange = formShippingObject => {
        let { formDataToSend } = this.props;
        let { formValues  } = this.state;
        let { billingForm, shippingForm } = formValues;
        this.setState({
          formValues: {  ...formValues, shippingForm: { ...shippingForm, ...formShippingObject } }
        });
        formDataToSend({shippingForm, billingForm });
      }
    
      handleBillingChange = formBillingObject => {
        let { formDataToSend } = this.props
        let { formValues } = this.state;
        let { billingForm, shippingForm } = formValues;
        this.setState({
          formValues: { ...formValues, billingForm: { ...billingForm, ...formBillingObject } }
        })
        formDataToSend({shippingForm, billingForm});
      }

      

    render() {
        const { billingIsDifferent } = this.props;
        const { booleanChange } = this.props;
        const billing = billingIsDifferent ? (
        <Billing 
            formChange={this.handleBillingChange} 
            {...this.state} 
        />) : null;
        return (
            <div className="cart-form">
                <Shipping formChange={this.handleShippingChange}/>
                <label>
                    Check if billing is different from shipping:
                <input 
                    type="checkbox" 
                    defaultChecked={billingIsDifferent} 
                    onChange={booleanChange}
                />
                </label>
                {billing}
            </div>
        );
    }
}

Address.propTypes = {
  formDataToSend: PropTypes.func.isRequired
}

export default Address;