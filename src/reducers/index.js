import { combineReducers } from 'redux';
import { emailAndPasswordData, signUpFormData } from './signUpData';
import { emailAndPasswordToState } from './loginAuth';

export default combineReducers({
  emailAndPasswordData,
  signUpFormData,
  emailAndPasswordToState
});
