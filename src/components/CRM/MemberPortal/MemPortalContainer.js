import React, { Component } from 'react';
import MemberPortal from './subcomponents/MemberPortal'
import { Route } from 'react-router-dom';
import { loadProfileData } from '../../../actions/profileData';
import { loadProducts, loadProductImage } from '../../../actions/productData';
import { connect } from 'react-redux';


class MemberPortalContainer extends Component {

  componentDidMount() {
    const { getProductData, getProductImage, getProfileData, auth } = this.props;
    getProductData();
    getProductImage();
    getProfileData(auth.uid)
  }

  render() {
    const { auth, path } = this.props;
    return(
      <Route
        exact
        path={`${path}`}
        render={rest => <MemberPortal {...this.props}  {...auth} {...rest} />}
      />
    )
  }
}

const mapStateToProps = state => {
  const { data, included, imagesExist } = state.loadingProductData
  return {
    profileData: state.storeProfileData,
    productData: data.length !==0 ? data : data,
    imageProductData: imagesExist ? included : included
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: (userId) => dispatch(loadProfileData(userId)),
    getProductData: () => dispatch(loadProducts()),
    getProductImage: () => dispatch(loadProductImage())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberPortalContainer);
