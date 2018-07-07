/*
  This file had to be split up into two
  action calls, one for just email and password
  and the other for the rest of the fields
  this is because firebase auth only require email
  and password but we also need to store this new
  user into a db. That is why we store the rest of the info
  and push it all together into firebase's firestore

  We use another instance of redirecting of submitting
  the form
*/

import { auth, db } from '../firebase/index';
import { push } from 'connected-react-router';
import * as routes from '../constants/routes';
import { profileData } from './profileData';

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
    //Here im taking the data object to post and
    //im then sending it back to pull the data down
    //again and store into the profile action call
    db.addingEntry(finalDataObj).then(docRef => {
      db.getUserData(docRef.id).then(doc => {
        dispatch(profileData(doc));
      })
    });
    auth.doCreateUserWithEmailAndPassword(EPData.Email, EPData.Password).then(authUser => {
      //instead of history obj with .push()
      //we use a push() function through the use
      //of redux-thunk (dispatch)
      dispatch(push(routes.MEMBER_PORTAL))
    });
  }
}
