/*
  This is our config file for firebase
  we have our key and we're importing
  the needed packages. Always be sure to
  include 'firebase/app' or you'll get a weird warning
  in your console.

  We're exporting firebase instances of firestore
  and authentication through db and auth
*/

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyBwuv7ekMRhJNDA6B7N4jSRJkXA2zdk7MI",
  authDomain: "distribution-crm.firebaseapp.com",
  databaseURL: "https://distribution-crm.firebaseio.com",
  projectId: "distribution-crm",
  storageBucket: "distribution-crm.appspot.com",
  messagingSenderId: "617104965614"
};

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();

const settings = {
  timestampsInSnapshots: true
}

db.settings(settings);

export {
  auth,
  db
}
