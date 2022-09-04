import { combineReducers } from "redux";
import {getProductReducer, selectedProductReducer } from "./product-reducer";

const reducers = combineReducers({
  allProducts: getProductReducer,
  product: selectedProductReducer,
});

export default reducers;