import React from 'react';
import { render } from 'react-dom';
import { history, creatingTheStore } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'connected-react-router';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { _stripeKey } from './stripe/config_stripe';
import App from './containers/App';

const store = creatingTheStore().store;
const persistor = creatingTheStore().persistor;

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <StripeProvider apiKey={_stripeKey}>
          <Elements>
            <App storeToTest={store}/>
          </Elements>
        </StripeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);