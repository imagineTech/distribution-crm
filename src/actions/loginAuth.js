/*
  This file is for login action redux calls,
  first one calls to store data into a reducer,
  second is for firebase and logging in a user
  to then be redirected into the CRM app
*/

import { auth, db } from '../firebase/index';
import * as routes from '../constants/routes';
import { profileData } from './profileData';

export const dataToLoginWith = (name, value) => {
  return {
    type: "DATA_TO_LOGIN_WITH",
    data: {
      [name]: value
    }
  }
}

export const errorHandling = (code, message) => {
  return {
    type: "HANDLE_LOGIN_ERROR",
    code,
    message
  }
}

export const loginWithEmailAndPassword = (email, password, history) => {
  return dispatch => {
    auth.doLoginWithEmailAndPassword(email, password).then(authUser => {
      history.push(routes.MEMBER_PORTAL)
      //this is how we use uid later, couldn't find
      //another way to reference db doc based on authUser
      //info
      db.loadUserProfileData(authUser.user.uid).then(doc => {
        // I'm taking the doc data and storing it thro a redux
        // action to state
        dispatch(profileData(doc.data()));
      })
    }).catch(err => {
      dispatch(errorHandling(err.code, err.message))
    })
  }
}
