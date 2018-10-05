import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { _stripeKey } from './stripe/config_stripe';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './containers/App';

//Had to combine my config_store file with this index file
//just because i needed the history obj to work with
//my redux action calls.
const initialState = {};
const history = createBrowserHistory();
const persistConfig = {
  key: 'root',
  storage
};
const store = createStore(
  //for my redux data to stay, had to bring in redux-persist
  //and combine it with my connect-react-router. This one line
  //is still consider the rootReducer argument.
  persistReducer(persistConfig,(connectRouter(history)(rootReducer))),
  initialState,
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    ),
  ),
);
const persistor = persistStore(store);

//I couldnt find a way to bring in 'history'
//in a way that would work seperatly without two
//instances of 'history'
//Using PersistGate to integrate the data into react
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
