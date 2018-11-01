import React, { Component } from 'react';
import OrderReview from './subcomponents/OrderReview';
import { loadProfileData } from '../../../actions/profileData';
import { loadCurrentOrder } from '../../../actions/orderData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class OrderRvwContainer extends Component {

  componentDidMount() {
    const { getProfileData, auth } = this.props;
    getProfileData(auth.authUser.uid);
  }

  componentWillReceiveProps(nextProps) {
    const { profileData, loadingCrrntOrder } = nextProps;
    const { Orders } = profileData;
    if (
      (nextProps.profileData.Orders[nextProps.profileData.Orders.length - 1].id) !== 
      (this.props.profileData.Orders[this.props.profileData.Orders.length - 1].id)
    ) {
      loadingCrrntOrder(Orders[Orders.length - 1].id)
    }
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
  return {
    getProfileData: userId => dispatch(loadProfileData(userId)),
    loadingCrrntOrder: ordId => dispatch(loadCurrentOrder(ordId)),
  }
}

OrderRvwContainer.propTypes = {
  rest: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderRvwContainer);