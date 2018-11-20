import React, { Component } from "react";
import PropTypes from 'prop-types';

class Shipping extends Component {
  handleChange = e => {
    let { formChange } = this.props;
    let objToSend = {
      [e.target.name]: e.target.value
    };
    formChange(objToSend);
  };

  render() {
    return (
      <div className="bs_form">
        <h4>Shipping info:</h4>
        <table>
        <tr>
          <td>Address:</td>
          <td><input name="Address" type="text" onChange={this.handleChange} /></td>
        </tr>
        
        <tr>
          <td>City:</td>
          <td><input name="City" type="text" onChange={this.handleChange} /></td>
        </tr>
        <tr>
          <td>Postcode:</td>
          <td><input name="Postcode" type="text" onChange={this.handleChange} /></td>
        </tr>
        <tr>
          <td>County:</td>
          <td><input name="County" type="text" onChange={this.handleChange} /></td>
        </tr>
        <tr>
          <td>Country:</td>
          <td><input name="Country" type="text" onChange={this.handleChange} /></td>
        </tr>
        </table>
      </div>
    );
  }
}

Shipping.propTypes = {
  formChange: PropTypes.func.isRequired
}

export default Shipping;
