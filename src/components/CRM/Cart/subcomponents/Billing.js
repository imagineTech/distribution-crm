import React, { Component } from "react";

class Billing extends Component {
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
        <h4>Billing info:</h4>
        <label>
          Address:
          <input name="Address" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          City:
          <input name="City" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Postcode:
          <input name="Postcode" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          County:
          <input name="County" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Country:
          <input name="Country" type="text" onChange={this.handleChange} />
        </label>
        <br />
      </div>
    );
  }
}

export default Billing;
