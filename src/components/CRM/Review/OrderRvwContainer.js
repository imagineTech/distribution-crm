import React, { Component } from 'react';
import OrderReview from './subcomponents/OrderReview';
import { connect } from 'react-redux';

class OrderRvwContainer extends Component {

  componentDidMount() {
    const { getOrder, profileData } = this.props;
    const { Orders } = profileData
    getOrder(Orders[Orders.length - 1].id);
  }

  render() {
    const { rest } = this.props;
    return <OrderReview {...this.props} {...rest} />
  }
}

const mapStateToProps = state => {
  const { data } = state.loadingCurrentOrderData;
  return {
    orderData: data.length !== 0 ? data : data,
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderRvwContainer);
