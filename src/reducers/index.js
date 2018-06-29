import { combineReducers } from 'redux';
import { emailAndPasswordData, signUpFormData } from './signUpData';
import { emailAndPasswordToState } from './loginAuth';
import { authToState } from './authStateChange'

export default combineReducers({
  emailAndPasswordData,
  signUpFormData,
  emailAndPasswordToState,
  authToState
});
