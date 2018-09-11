import React, { Component } from "react";

class CreditCard extends Component {
  handleChange = e => {
    let { formChange } = this.props;
    let objToSend = {
      [e.target.name]: e.target.value
    };
    formChange(objToSend);
  };

  render() {
    return (
      <div>
        <label>
          <h4>Credit Card info:</h4>
          Credit Card #:
          <input name="CreditCardNum" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Ex. Month
          <input name="ExMonth" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Ex. Year
          <input name="ExYear" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Verification Code:
          <input name="VerificationCode" type="text" onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default CreditCard;
