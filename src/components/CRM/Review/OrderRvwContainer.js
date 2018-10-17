import React, { Component } from 'react';
import asyncComponent from '../../../hoc/async';
import { loadOrder } from '../../../actions/orderData';
import { Route } from 'react-router';
import { connect } from 'react-redux';

const AsyncOrderReview = asyncComponent(() => {
  return import('./subcomponents/OrderReview');
});


class OrderRvwContainer extends Component {

  componentDidMount() {
    const { getOrder, profileData } = this.props;
    const { Orders } = profileData
    getOrder(Orders[Orders.length - 1].id);
  }

  render() {
    const { path, auth } = this.props;
    return(
      <div>
        <Route
          exact
          path={`${path}/:orderId`}
          render={rest => auth.authenticated ?  <AsyncOrderReview {...this.props} {...rest} /> : <p>Please Login</p>}
        />
      </div>
    )
  }

}

const mapStateToProps = state => {
  const { data } = state.loadingOrderData;
  return {
    orderData: data.length !== 0 ? data : data,
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrder: (ordId) => dispatch(loadOrder(ordId))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderRvwContainer);
