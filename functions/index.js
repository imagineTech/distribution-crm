const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

exports.testingFunc = functions.https.onRequest((req, res) => {
  res.status(200).send('Hi everybody');
});

exports.userCreation = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    var formData = req.body;
    var docRef = db.collection('Buyer');
    return docRef.add({
      Name: formData.Name,
      Email: formData.Email,
      Password: formData.Password,
      Age: formData.Age
    })
  })
});
