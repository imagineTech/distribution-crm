import React, { Component } from "react";
import PropTypes from "prop-types";

const style = {
  display: "flex"
};

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
      <div className="bs_form">
        <h4>Billing info:</h4>
        <table>
          <tr>
            <td>
              <label>Address:</label>
            </td>
            <td>
              <input
                name="Address"
                type="text"
                onChange={this.handleChange}
                className="input_box"
              />
            </td>

            <td>City:</td>
            <td>
              <input
                name="City"
                type="text"
                onChange={this.handleChange}
                className="input_box"
              />
            </td>
          </tr>
          <tr>
            <td>Postcode:</td>
            <td>
              <input
                name="Postcode"
                type="text"
                onChange={this.handleChange}
                className="input_box"
              />
            </td>

            <td>County:</td>
            <td>
              <input
                name="County"
                type="text"
                onChange={this.handleChange}
                className="input_box"
              />
            </td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>
              <input
                name="Country"
                type="text"
                onChange={this.handleChange}
                className="input_box"
              />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

Billing.propTypes = {
  formChange: PropTypes.func.isRequired
};

export default Billing;
