import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import App from './containers/App_signUp';


//Had to combine my config_store file with this index file
//just because i needed the history obj to work with
//my redux action calls.
const initialState = {};
const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    ),
  ),
);

//I couldnt find a way to bring in 'history'
//in a way that would work seperatly without two
//instances of 'history'
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
