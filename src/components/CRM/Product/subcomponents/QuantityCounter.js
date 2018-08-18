import React, { Component } from 'react';

class QuantityCounter extends Component {
  state = {
    counter: 0,
    total: 0
  };

  handleChange = e => {
    this.setState({
      counter: e.target.value
    });
  };

  handleAddition = e => {
    this.setState({
      counter: ++e.target.value
    });
  };

  handleSubtraction = e => {
    if (this.state.counter <= 0) {
      alert("Can't go below 0");
      this.setState({ counter: ++e.target.value });
    }
    this.setState({ counter: --e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ total: this.state.counter });
  };

  render() {
    const { counter, total } = this.state;
    return (
      <div>
        <section>
          <button value={counter} onClick={this.handleAddition}>
            +
          </button>
          <input
            style={{ width: "5%" }}
            type="text"
            value={counter}
            onChange={this.handleChange}
          />
          <button value={counter} onClick={this.handleSubtraction}>
            -
          </button>
        </section>
        <form onSubmit={this.handleSubmit}>
          <button>Checkout</button>
        </form>
        <Total total={total} />
      </div>
    );
  }
}

const Total = ({ total }) => <h1>Total: {total}</h1>;

export default QuantityCounter;
