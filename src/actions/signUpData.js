import { auth, db } from '../firebase/index';
import axios from 'axios';

export function emailAndPasswordSuccess(EPName, EPValue) {
  return {
    type: "EMAIL_AND_PASSWORD_SUCCESS",
    data: {
      [EPName]: EPValue
    }
  }
};

export function restOfFormSuccess(formName, formValue) {
  return {
    type: "REST_OF_FORM_SUCCESS",
    data: {
      [formName]: formValue
    }
  }
};

export function emailPasswordFormAuth(EPData, formData) {
  var finalDataObj = {
    ...formData,
    ...EPData
  };
  return dispatch => {
    db.addingEntry('Buyer', finalDataObj);
    auth.doCreateUserWithEmailAndPassword(EPData.Email, EPData.Password).catch(e => console.log("Error: " + e));
  }
}
