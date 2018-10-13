import { createBrowserHistory } from 'history';
import { initialState } from '../constants/initialState';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
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
        thunk
      ),
    ),
  );
  const persistor = persistStore(store);
  return {
    store, 
    persistor
  };
}


