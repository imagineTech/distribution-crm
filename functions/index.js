const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.sendOrderConfirmation = functions.firestore
  .document('Buyer/{BuyerId}').onUpdate((change, context) => {
    console.log('@@@@@@@ Firestore Updated @@@@@@@@')
    let preUpdate = change.before.data();
    let postUpdate = change.after.data();
    preUpdate.Orders && (preUpdate.Orders.length!==postUpdate.Orders.length) || (!preUpdate.Orders && postUpdate.Orders)?
      console.log(postUpdate.Orders[postUpdate.Orders.length-1]):
      null
  })