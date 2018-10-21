/*
  File is pretty straight forward, only used
  for signing a user out. It will also redirect
  them
*/

import { auth } from '../firebase/index';
import * as routes from '../constants/routes';

export const signOutAuth = (history, reloadWindow) => {
  return dispatch => {
    auth.doSignOut().then(() => {
      reloadWindow.location.reload();
      history.push(routes.LANDING)
    });
  };
}
