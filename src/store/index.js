import { createBrowserHistory } from 'history';
import { initialState } from '../constants/initialState';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export const history = createBrowserHistory();
export const creatingTheStore = () => {
  const initial = {
    loadingProductData: initialState.loadingProductData,
    loadingOrderData: initialState.loadingOrderData
  }
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2, 
    blacklist: [
      'storeNewProfileData', 
      'signUpFormData', 
      'emailAndPasswordData',
    ]
  };
  const store = createStore(
    //for my redux data to stay, had to bring in redux-persist
    //and combine it with my connect-react-router. This one line
    //is still consider the rootReducer argument.
    persistReducer(persistConfig,(connectRouter(history)(rootReducer))),
    initial,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      ),
    ),
  );
  const persistor = persistStore(store);
  return {
    store, 
    persistor
  };
}


