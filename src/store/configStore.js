import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const history = createBrowserHistory();

export default function configureStore(initialState) {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      ),
    ),
  );
}
