import { ActionTypes } from "../constants/action-types";

let userInitial = {
   user: {}
};
export const loginReducer = (state = userInitial, action) => {
   switch (action.type) {
      case ActionTypes.LOGIN_REQUEST:
         return {
            loading: true,
            isAuth: false,
         }
      case ActionTypes.LOGIN_SUCCESS:
         return {
            ...state,
            loading: false,
            isAuth: true,
            user: action.payload,
         }
      case ActionTypes.LOGIN_FAILURE:
         return {
            ...state,
            loading: false,
            isAuth: false,
            user: null,
            err: action.payload
         }
      case ActionTypes.LOGOUT_SUCCESS:
         {
            return {
               loading: false,
               isAuth: false,
               user: null,
            }
         }
      default:
         return state ;
   }
};