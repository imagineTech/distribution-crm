import React, { Component } from 'react';
import OrderReview from './subcomponents/OrderReview';
import { loadProfileData } from '../../../actions/profileData';
import { loadCurrentOrder } from '../../../actions/orderData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class OrderRvwContainer extends Component {

  state = { 
    actualOrder: []
  }

  componentDidMount() {
    const { getProfileData, auth } = this.props;
    getProfileData(auth.authUser.uid);
  }

  componentWillReceiveProps(nextProps) {
    const { loadingCrrntOrder } = this.props;
    if (nextProps.orderData.info.id === this.props.orderData.info.id) {
      loadingCrrntOrder(nextProps.match.params.orderId)
    } else {
      this.setState({ 
        actualOrder: [...nextProps.orderData]
      })
    }
  }

  render() {
    const { rest } = this.props;
    return (
      <div>
        {
        this.state.actualOrder.length === 0 ? 
          <OrderReview order={{...this.props.orderData}} {...this.props} {...rest} /> 
          : 
          <OrderReview order={{...this.state.actualOrder}} {...this.props} {...rest} />
        }
      </div>
    )
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
