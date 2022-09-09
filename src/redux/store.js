import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from '@redux-devtools/extension'
import { getProductReducer, selectedProductReducer } from './reducers/product-reducer';
import reducers from './reducers'
/* ReduxPersit store */
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { loginReducer } from './reducers/login-reducer';
const persitConfig = {
   key: 'persit_root',
   version: 1,
   storage,
   whitelist: ['user']
}

const middleware = [thunk];

/* const reducers = combineReducers({
   getProducts: getProductReducer,
   selectedProducts: selectedProductReducer
}); */

/* redux persit */
const persitedReducer = persistReducer(persitConfig, reducers);

const store = createStore(
   // reducers, 
   persitedReducer, // user persited reducer instead of reducers
   composeWithDevTools(applyMiddleware(...middleware))
);
/* redux persistor*/
export const persistor = persistStore(store);
export default store;