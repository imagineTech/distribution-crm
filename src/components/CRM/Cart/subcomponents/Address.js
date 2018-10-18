import React, { Component } from 'react';
import Billing from './Billing';
import Shipping from './Shipping';

class Address extends Component {

    state = {
        formValues: {
          shippingForm: {},
          billingForm: {}
        },
        billingIsDifferent: false
      }

    handleShippingChange = formShippingObject => {
        let { formDataToSend } = this.props;
        let { formValues, billingIsDifferent } = this.state;
        let { billingForm, shippingForm } = formValues;
        this.setState({
          formValues: {  ...formValues, shippingForm: { ...shippingForm, ...formShippingObject } }
        });
        formDataToSend({shippingForm, billingForm, billingIsDifferent});
      }
    
      handleBillingChange = formBillingObject => {
        let { formDataToSend } = this.props
        let { formValues, billingIsDifferent } = this.state;
        let { billingForm, shippingForm } = formValues;
        this.setState({
          formValues: { ...formValues, billingForm: { ...billingForm, ...formBillingObject } }
        })
        formDataToSend({shippingForm, billingForm, billingIsDifferent});
      }

      hanldeBooleanChange = () => {
        let { formDataToSend } = this.props;
        let { formValues, billingIsDifferent } = this.state;
        let { billingForm, shippingForm } = formValues;
        this.setState({ 
          billingIsDifferent: !billingIsDifferent
        })
        formDataToSend({shippingForm, billingForm, billingIsDifferent});
      }

    render() {
        const { billingIsDifferent } = this.state;
        const billing = billingIsDifferent ? (
        <Billing 
            formChange={this.handleBillingChange} 
            {...this.state} 
        />) : null;
        return (
            <div>
                <Shipping formChange={this.handleShippingChange}/>
                <label>
                    Check if billing is different from shipping:
                <input 
                    type="checkbox" 
                    defaultChecked={billingIsDifferent} 
                    onChange={this.hanldeBooleanChange}
                />
                </label>
                {billing}
            </div>
        );
    }
}

export default Address;