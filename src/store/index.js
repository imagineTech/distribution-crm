import { createBrowserHistory } from 'history';
import { initialState } from '../constants/initialState';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/index';

export const history = createBrowserHistory();
export const creatingTheStore = () => {
  const initial = {
    loadingProductData: initialState.loadingProductData,
    loadingOrderData: initialState.loadingOrderData,
    loadingCartData: initialState.loadingCartData,
    storeProfileData: initialState.storeProfileData
  }
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: [
      'storeNewProfileData', 
      'signUpFormData', 
      'emailAndPasswordData',
      'loadingCartData',
      'loadingOrderData',
      'loadingProductData'
    ]
  };
  const store = createStore(
    //for my redux data to stay, had to bring in redux-persist
    //and combine it with my connect-react-router. This one line
    //is still consider the rootReducer argument.
    persistReducer(persistConfig,rootReducer),
    initial,
    compose(
      applyMiddleware(
        thunk,
        logger
      ),
    ),
  );
  const persistor = persistStore(store);
  persistor.purge();
  return {
    store, 
    persistor
  };
}


