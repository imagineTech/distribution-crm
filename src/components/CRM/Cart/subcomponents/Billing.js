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
        <label>
          Field 4
          <input name="Field 4" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Field 5
          <input name="Field 5" type="text" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Field 6
          <input name="Field 6" type="text" onChange={this.handleChange} />
        </label>
        <br />
      </div>
    );
  }
}

export default Billing;
