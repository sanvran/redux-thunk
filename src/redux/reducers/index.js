import { combineReducers } from "redux";
import {getProductReducer, selectedProductReducer } from "./product-reducer";

const reducers = combineReducers({
  allProducts: getProductReducer,
  selectProduct: selectedProductReducer,
});

export default reducers;