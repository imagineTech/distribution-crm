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
          Field 1
          <input name="Field 1" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Field 2
          <input name="Field 2" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Field 3
          <input name="Field 3" type="text" onChange={this.handleChange} />
        </label>
        <br />
      </div>
    );
  }
}

export default CreditCard;
