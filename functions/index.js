const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

exports.userCreation = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    var formData = req.body;
    var docRef = db.collection('Buyer');
    return docRef.add({
      Name: formData.Name,
      Email: formData.Email,
      Password: formData.Password
    })
  })
});

exports.sendOrderConfirm = functions.firestore
  .document('distribution-crm/Buyer/{BuyerId}')
  .onUpdate((change, context) => {
    // const oldData = change.before.data();
    // const newData = change.after.data();
    // if (newData.Orders) {
    //   if (oldData.Orders.length)
    //   var order = newData.Orders[newData.Orders.length-1]
    // }
    console.log('@@@@@@@@Buyer Updated@@@@@@@@sud')
  })