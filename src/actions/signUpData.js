import { auth } from '.././config_firebase';
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
    auth.createUserWithEmailAndPassword(EPData.Email, EPData.Password).catch(e => console.log("Error: " + e));
    axios.post(`https://us-central1-distribution-crm.cloudfunctions.net/userCreation`, finalDataObj, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
      })
  }
}
