/*
  Just like the firebase index, we are storing
  all of our reducer instances into one index
  for easier refernce later.
*/

import { combineReducers } from 'redux';
import { emailAndPasswordData, signUpFormData } from './signUpData';
import { emailAndPasswordToState, handleErrorForLogin } from './loginAuth';
import { storeProfileData, storeNewProfileData ,passwordResetSuccess } from './profileData';
import { loadingProductData, decrementProductStock } from './productData';
import { loadingCartData } from './cartData';
import { loadingCurrentOrderData, loadStoredOrderData } from './orderData';

export default combineReducers({
  emailAndPasswordData,
  signUpFormData,
  emailAndPasswordToState,
  handleErrorForLogin,
  storeProfileData,
  storeNewProfileData,
  passwordResetSuccess,
  loadingProductData,
  decrementProductStock,
  loadingCartData,
  loadingCurrentOrderData,
  loadStoredOrderData,
});
