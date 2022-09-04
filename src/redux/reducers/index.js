import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import {getProductReducer, selectedProductReducer } from "./product-reducer";

const reducers = combineReducers({
  allProducts: getProductReducer,
  product: selectedProductReducer,
  user: loginReducer
});

export default reducers;