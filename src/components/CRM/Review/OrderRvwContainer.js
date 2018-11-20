import React, { Component } from "react";
import OrderReview from "./subcomponents/OrderReview";
import { loadProfileData } from "../../../actions/profileData";
import { loadCurrentOrder } from "../../../actions/orderData";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class OrderRvwContainer extends Component {
  componentDidMount() {
    const { getProfileData, auth } = this.props;
    getProfileData(auth.authUser.uid);
  }

  componentWillReceiveProps(nextProps) {
    const { loadingCrrntOrder } = this.props;
    if (this.props.match.params.orderId !== nextProps.orderData.info.id) {
      loadingCrrntOrder(this.props.match.params.orderId);
    }
  }

  render() {
    const { rest } = this.props;
    return <OrderReview {...this.props} {...rest} />;
  }
}

const mapStateToProps = state => {
  const { data } = state.loadingCurrentOrderData;
  return {
    orderData: data.length !== 0 ? data : data,
    profileData: state.storeProfileData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: userId => dispatch(loadProfileData(userId)),
    loadingCrrntOrder: ordId => dispatch(loadCurrentOrder(ordId))
  };
};

OrderRvwContainer.propTypes = {
  rest: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderRvwContainer);
