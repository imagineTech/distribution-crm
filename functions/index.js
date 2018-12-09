const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

// This function looks at the individual buyer on the firebase db and determines if a new order was added

exports.sendOrderConfirmation = functions.firestore
  .document('Buyer/{BuyerId}').onUpdate((change, context) => {
    console.log('@@@@@@@ Firestore Updated @@@@@@@@')
    let preUpdate = change.before.data();
    let postUpdate = change.after.data();

    let transporter = nodemailer.createTransport({
      name: 'mail.CRM.com',
      host: 'mail.CRM.com',
      port: 587,
      secure: false,
      debug: true,
      auth: {
        user: 'globalTradeDeals@CRM.com', // generated ethereal user
        pass: 'ImagineTechGTD18' // generated ethereal password
      },
      tls:{
        rejectUnauthorized: false
      }
    });

    var mailOptions = {
      from: 'globalTradeDeals@CRM.com',
      to: GMAIL_ADDRESS,
      subject: `Global Trade Deals: ${postUpdate.Orders[postUpdate.Orders.length - 1]} Order Confirmation`,
      text: 'Your order was recieved and is being processed'
    };

    preUpdate.Orders && (preUpdate.Orders.length!==postUpdate.Orders.length) || (!preUpdate.Orders && postUpdate.Orders)?
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(info)
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }):
      null
  })