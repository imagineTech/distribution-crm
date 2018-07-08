/*
  This file is for login action redux calls,
  first one calls to store data into a reducer,
  second is for firebase and logging in a user
  to then be redirected into the CRM app
*/

import { auth, db } from '../firebase/index';
import { push } from 'connected-react-router';
import * as routes from '../constants/routes';
import { profileData } from './profileData';

export function dataToLoginWith(name, value) {
  return {
    type: "DATA_TO_LOGIN_WITH",
    data: {
      [name]: value
    }
  }
}

export function loginWithEmailAndPassword(email, password) {
  return dispatch => {
    auth.doLoginWithEmailAndPassword(email, password).then(authUser => {
      dispatch(push(routes.MEMBER_PORTAL))
      //this is how we use uid later, couldn't find
      //another way to reference db doc based on authUser
      //info 
      db.getUserData(authUser.user.uid).then(doc => {
        dispatch(profileData(doc.data()));
      })
    })
  }
}
