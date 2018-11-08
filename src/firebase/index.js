/*
  Instead of referencing the needed fb
  objects individually, here we can access
  it all under one index.
*/

import * as db from './db';
import * as auth from './auth';
import * as storage from './storage';
import * as firebase from './config_firebase';

export {
  db,
  storage,
  auth,
  firebase
}