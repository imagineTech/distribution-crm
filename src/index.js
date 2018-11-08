import React from 'react';
import { render } from 'react-dom';
import { history, creatingTheStore } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { _stripeKey } from './stripe/config_stripe';
import App from './containers/App';
<<<<<<< HEAD
import 'font-awesome/css/font-awesome.min.css'
=======
import '../node_modules/nprogress/nprogress.css';	
>>>>>>> 7e8ea54e4cafbb87c12e3d186da7dc78fba068a4

const store = creatingTheStore().store;
const persistor = creatingTheStore().persistor;

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <StripeProvider apiKey={_stripeKey}>
          <Elements>
            <App />
          </Elements>
        </StripeProvider>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
