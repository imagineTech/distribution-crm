import React, { Component } from 'react';
import { loadOrder } from '../../../actions/orderData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class OrderReview extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    getOrder: (ordId) => dispatch(loadOrder(ordId))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderReview);
