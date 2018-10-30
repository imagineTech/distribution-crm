import React, { Component } from 'react';
import OrderReview from './subcomponents/OrderReview';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class OrderRvwContainer extends Component {

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

OrderRvwContainer.propTypes = {
  rest: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderRvwContainer);
