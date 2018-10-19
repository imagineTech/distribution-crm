import React from 'react';
import { render } from 'react-dom';
import { history, creatingTheStore } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { _stripeKey } from './stripe/config_stripe';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './containers/App';

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
