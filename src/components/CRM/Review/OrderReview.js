import React, { Component } from 'react';
import { loadOrder } from '../../../actions/orderData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class OrderReview extends Component {

  componentDidMount() {
    const { getOrder, profileData } = this.props;
    const { Orders } = profileData
    getOrder((Orders[Orders.length - 1]).id);
  }

  render() {
    const { orderData } = this.props;
    return (
      <div>
        <h2>Thank you for your purchase! Order#: {orderData.id}</h2>
        {console.log(orderData)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orderData: state.loadingOrderData,
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrder: (ordId) => dispatch(loadOrder(ordId))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderReview);
