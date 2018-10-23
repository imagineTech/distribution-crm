import React, { Component } from 'react';
import MemberPortal from './subcomponents/MemberPortal';
import {database} from '../../../firebase/config_firebase';
import { loadProfileData } from '../../../actions/profileData';
import { loadProducts, loadProductImage } from '../../../actions/productData';
import { connect } from 'react-redux';



class MemberPortalContainer extends Component {
  state = {url:''}
  componentDidMount() {
    const { getProductData, getProductImage, getProfileData, auth } = this.props;
    getProductData();
    getProductImage();
    getProfileData(auth.uid)
    console.log('uid',auth.authUser);
    let uid = auth.authUser.uid;
    database.ref('/profile_images/'+uid).once('value').then(snapshot => {
      
      let profile_photos = snapshot.val();
      
        let photo = !!profile_photos?Object.keys(profile_photos).map(key => profile_photos[key]):[{url:''}]
        let arr = photo[photo.length-1]
        this.setState({url:arr.url})  
      
    })
    database.ref('/profile_images/'+uid).on('child_added', snapshot => {
      let profile_photos = snapshot.val();
      let photo = !!profile_photos?Object.keys(profile_photos).map(key => profile_photos[key]):[{url:''}]
        let arr = photo[photo.length-1]
        this.setState({url:arr.url})  
    })
    
  }

  render() {
    const { rest } = this.props;
    return <MemberPortal {...this.props} {...rest} url={this.state.url} uid={this.props.auth.authUser.uid}/>
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
