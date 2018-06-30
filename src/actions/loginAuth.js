/*
  This file is for login action redux calls,
  first one calls to store data into a reducer,
  second is for firebase and logging in a user
  to then be redirected into the CRM app
*/

import { auth } from '../firebase/index';
import { push } from 'connected-react-router';
import * as routes from '../constants/routes';

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
    auth.doLoginWithEmailAndPassword(email, password).then(() => {
      dispatch(push(routes.CRM))
    })
  }
}
