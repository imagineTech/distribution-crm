/*
  Just like the firebase index, we are storing
  all of our reducer instances into one index
  for easier refernce later.
*/

import { combineReducers } from 'redux';
import { emailAndPasswordData, signUpFormData } from './signUpData';
import { emailAndPasswordToState } from './loginAuth';
import { authToState } from './authStateChange'
import { storeProfileData } from './profileData';
import { storeNewProfileData } from './profileData';

export default combineReducers({
  emailAndPasswordData,
  signUpFormData,
  emailAndPasswordToState,
  authToState,
  storeProfileData,
  storeNewProfileData
});
