import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuantityCounter extends Component {

  handleChange = e => {
    let { quantity, onQuantityChange } = this.props;
    quantity = e.target.value;
    onQuantityChange(parseInt(quantity));
  };

  handleAddition = e => {
    let { quantity, onQuantityChange } = this.props;
    quantity = ++e.target.value;
    onQuantityChange(parseInt(quantity));
  };

  handleSubtraction = e => {
    let { quantity, onQuantityChange } = this.props;
    if (quantity <= 0) {
      alert("Can't go below 0");
      quantity = ++e.target.value;
      onQuantityChange(parseInt(quantity));
    }
    quantity = --e.target.value;
    onQuantityChange(parseInt(quantity));
  };

  render() {
    const { quantity } = this.props;
    return (
      <div>
        <section>
          <button value={quantity} onClick={this.handleSubtraction}>
            -
          </button>
          <input
            type="text"
            value={quantity}
            onChange={this.handleChange}
            placeholder={quantity}
            style={{width:"2em"}}
          />
          <button value={quantity} onClick={this.handleAddition}>
            +
          </button>
        </section>
      </div>
    );
  }
}

QuantityCounter.propTypes = {
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired
}

export default QuantityCounter;
