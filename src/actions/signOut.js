/*
  File is pretty straight forward, only used
  for signing a user out. It will also redirect
  them
*/

import { auth } from '../firebase/index';
import { push } from 'connected-react-router';
import * as routes from '../constants/routes';

export function signOutAuth() {
  return dispatch => {
    auth.doSignOut().then(() => {
      dispatch(push(routes.LANDING))
    });
  };
}
