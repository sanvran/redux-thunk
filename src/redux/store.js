import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from '@redux-devtools/extension'
import { getProductReducer, selectedProductReducer } from './reducers/product-reducer';
import reducers from './reducers'

const middleware = [thunk];

/* const reducers = combineReducers({
   getProducts: getProductReducer,
   selectedProducts: selectedProductReducer
}); */

const store = createStore(
   reducers,
   composeWithDevTools(applyMiddleware(...middleware))
   
);

export default store;