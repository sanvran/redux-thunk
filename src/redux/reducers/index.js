import { combineReducers } from 'redux'
import { productReducer, selectedProductReducer } from '../reducers/product-reducer'

const reducers = combineReducers({
   allProducts: productReducer,
   product: selectedProductReducer, // there product: key is used to in product detail page with state.
});

export default reducers;