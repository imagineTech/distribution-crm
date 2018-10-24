import React, { Component } from 'react';
import MemberPortal from './subcomponents/MemberPortal';
import { loadProfileData } from '../../../actions/profileData';
import { loadProducts, loadProductImage } from '../../../actions/productData';
import { loadRecentOrderData } from '../../../actions/orderData';
import { connect } from 'react-redux';

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
    recentOrders: (orderData.length !== 0 && orderData.length === 5) ? orderData : orderData

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

export default connect(mapStateToProps, mapDispatchToProps)(MemberPortalContainer);
