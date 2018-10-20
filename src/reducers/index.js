/*
  Just like the firebase index, we are storing
  all of our reducer instances into one index
  for easier refernce later.
*/

import { combineReducers } from 'redux';
import { emailAndPasswordData, signUpFormData } from './signUpData';
import { emailAndPasswordToState } from './loginAuth';
import { storeProfileData, storeNewProfileData ,passwordResetSuccess } from './profileData';
import { loadingProductData } from './productData';
import { loadingCartData } from './cartData';
import { loadingCurrentOrderData } from './orderData';

export default combineReducers({
  emailAndPasswordData,
  signUpFormData,
  emailAndPasswordToState,
  storeProfileData,
  storeNewProfileData,
  passwordResetSuccess,
  loadingProductData,
  loadingCartData,
  loadingCurrentOrderData
});
