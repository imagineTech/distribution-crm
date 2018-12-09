import React, { Component } from 'react';
import MemberPortal from './subcomponents/MemberPortal';
import { loadProfileData } from '../../../actions/profileData';
import { imageUpload, downloadImage } from '../../../actions/imageData';
import { loadProducts, loadProductImage } from '../../../actions/productData';
import { loadRecentOrderData } from '../../../actions/orderData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MemberPortalContainer extends Component {

  componentDidMount() {
    const { 
      getProductData, 
      getProductImage, 
      getProfileData, 
      downloadProfileImage, 
      auth 
    } = this.props;
    getProductData();
    getProductImage();
    downloadProfileImage(auth.authUser.uid);
    getProfileData(auth.authUser.uid);
  }

  componentWillReceiveProps(nextProps) {
    // const { getRecentOrders } = this.props;
    // const { profileData } = nextProps;
    // const { Orders } = profileData;
    // getRecentOrders(Orders[Orders.length - 1].id);
  }

  render() {
    return <MemberPortal {...this.props} />
  }
}

const mapStateToProps = state => {
  const { data, included, imagesExist } = state.loadingProductData;
  return {
    profileData: state.storeProfileData,
    productData: data.length !== 0 ? data : data,
    imageProductData: imagesExist ? included : included,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getRecentOrders: orderId => dispatch(loadRecentOrderData(orderId)),
    getProfileData: userId => dispatch(loadProfileData(userId)),
    getProductData: () => dispatch(loadProducts()),
    getProductImage: () => dispatch(loadProductImage()),
    uploadProfileImage: (userId, imageFile, reloadWindow) => dispatch(imageUpload(userId, imageFile, reloadWindow)),
    downloadProfileImage: userId => dispatch(downloadImage(userId))
  }
};

MemberPortalContainer.propTypes = {
  getProductData: PropTypes.func.isRequired,
  getProductImage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberPortalContainer);
