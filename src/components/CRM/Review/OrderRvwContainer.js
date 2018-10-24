import React, { Component } from 'react';
import OrderReview from './subcomponents/OrderReview';
import { connect } from 'react-redux';

class OrderRvwContainer extends Component {

<<<<<<< HEAD
  componentDidMount() {
    const { getOrder, profileData } = this.props;
    const { Orders } = profileData
    getOrder(Orders[Orders.length - 1].id);
  }

=======
>>>>>>> 3059cd3472833ee80bb2e15bd0e5aabad0574bb5
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