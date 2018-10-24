/*
  This file is for login action redux calls,
  first one calls to store data into a reducer,
  second is for firebase and logging in a user
  to then be redirected into the CRM app
*/

import { auth } from '../firebase/index';
import * as routes from '../constants/routes';

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

export const loginWithEmailAndPassword = (email, password, history, reloadWindow) => {

  if (email === undefined || password === undefined) {
    let errToSend = {
      code: "auth/argument-error",
      message: (password === undefined ? 
        "siging in with Email And Password failed: Second argument \"password\" must be a valid string."
        :
        "siging in with Email And Password failed: First argument \"email\" must be a valid string."
        )
    }
    return dispatch => dispatch(errorHandling(errToSend.code, errToSend.message))
  } else {
    return dispatch => {
      auth.doLoginWithEmailAndPassword(email, password).then(authUser => {
        history.push(routes.MEMBER_PORTAL);
        reloadWindow.location.reload();
      }).catch(err => {
        if(err) {
          dispatch(errorHandling(err.code, err.message))
        }
      })
    }
  }
}
