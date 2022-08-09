import { ActionTypes } from "../constants/action-types";

const initialState = {
   products: []
}
export const getProductReducer = (state = initialState, action) => {  // after dispacth value will receied in reducer in action | state: current value.
   switch (action.type) {
      case ActionTypes.GET_PRODUCT_SUCCESS:
         return { products: action.payload}
      case ActionTypes.GET_PRODUCT_FAIL:
         return { err: action.payload}
      default:
         return state;
   }
};

