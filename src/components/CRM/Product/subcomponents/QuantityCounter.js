import React, { Component } from 'react';

class QuantityCounter extends Component {

  handleChange = e => {
    let { quantity, onQuantityChange } = this.props;
    quantity = e.target.value;
    onQuantityChange(quantity);
  };

  handleAddition = e => {
    let { quantity, onQuantityChange } = this.props;
    quantity = ++e.target.value;
    onQuantityChange(quantity);
  };

  handleSubtraction = e => {
    let { quantity, onQuantityChange } = this.props;
    if (quantity <= 0) {
      alert("Can't go below 0");
      quantity = ++e.target.value;
      onQuantityChange(quantity);
    }
    quantity = --e.target.value;
    onQuantityChange(quantity);
  };

  render() {
    const { quantity } = this.props;
    return (
      <div>
        <section>
          <button value={quantity} onClick={this.handleAddition}>
            +
          </button>
          <input
            style={{ width: "5%" }}
            type="text"
            value={quantity}
            onChange={this.handleChange}
          />
          <button value={quantity} onClick={this.handleSubtraction}>
            -
          </button>
        </section>
      </div>
    );
  }
}

export default QuantityCounter;
