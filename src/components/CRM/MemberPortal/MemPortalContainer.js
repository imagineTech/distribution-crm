import React, { Component } from 'react';
import MemberPortal from './subcomponents/MemberPortal';
import { loadProfileData } from '../../../actions/profileData';
import { loadProducts, loadProductImage } from '../../../actions/productData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class MemberPortalContainer extends Component {

  componentDidMount() {
    const { getProductData, getProductImage, getProfileData, auth } = this.props;
    getProductData();
    getProductImage();
    getProfileData(auth.uid)
  }

  render() {
    const { rest } = this.props;
    return <MemberPortal {...this.props} {...rest} />
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
