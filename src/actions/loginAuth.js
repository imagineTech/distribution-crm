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
