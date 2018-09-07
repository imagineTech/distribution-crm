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
import * as Moltin from '../moltin/index';
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
    let fullName = `${finalDataObj.First_Name} ${finalDataObj.Last_Name}`;
    auth.doCreateUserWithEmailAndPassword(EPData.Email, EPData.Password).then(authUser => {
      dispatch(push(routes.MEMBER_PORTAL));
      Moltin.createAMoltinUser(fullName, finalDataObj.Email).then(customer => {
        db.addingUser(finalDataObj, authUser.user.uid, customer.data.id);
      });
      db.loadUserProfileData(authUser.user.uid).then(doc => {
        dispatch(profileData(doc.data()));
      });

    });
  }
}
