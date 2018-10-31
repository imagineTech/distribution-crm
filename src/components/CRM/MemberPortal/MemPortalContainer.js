import React, { Component } from 'react';
import MemberPortal from './subcomponents/MemberPortal';
import { loadProfileData } from '../../../actions/profileData';
import { loadProducts, loadProductImage } from '../../../actions/productData';
import { loadRecentOrderData } from '../../../actions/orderData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MemberPortalContainer extends Component {

  componentDidMount() {
    const { getProductData, getProductImage, getProfileData, auth } = this.props;
    getProductData();
    getProductImage();
    getProfileData(auth.uid);
   
  }

  componentWillReceiveProps(nextProps) {
    const { getRecentOrders } = this.props;
    const { profileData } = nextProps;
    const { Orders } = profileData;
    // getRecentOrders(Orders[Orders.length - 1].id);
  } 

  render() {
    const { rest } = this.props;
    return <MemberPortal {...this.props} {...rest} />
  }
}

const mapStateToProps = state => {
  const { data, included, imagesExist } = state.loadingProductData;
  const orderData = state.loadStoredOrderData.data;
  return {
    profileData: state.storeProfileData,
    productData: data.length !==0 ? data : data,
    imageProductData: imagesExist ? included : included,
    recentOrders: orderData.length !== 0 ? orderData : orderData

  }
};

const mapDispatchToProps = dispatch => {
  return {
    getRecentOrders: orderId => dispatch(loadRecentOrderData(orderId)),
    getProfileData: userId => dispatch(loadProfileData(userId)),
    getProductData: () => dispatch(loadProducts()),
    getProductImage: () => dispatch(loadProductImage())
  }
};

MemberPortalContainer.propTypes = {
  getProductData: PropTypes.func.isRequired,
  getProductImage: PropTypes.func.isRequired,
  profileData: PropTypes.shape({
    Company: PropTypes.string.isRequired,
    Country: PropTypes.string.isRequired,
    Department: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    First_Name: PropTypes.string.isRequired,
    Last_Name: PropTypes.string.isRequired,
    Moltin_User_Id: PropTypes.string.isRequired,
    Orders: PropTypes.array.isRequired,
    Password: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  auth: PropTypes.object.isRequired,
  rest: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberPortalContainer);
