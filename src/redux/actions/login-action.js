import axios from "axios";
import { apiBaseUrl } from "../../config/base-urls";
import { ActionTypes } from "../constants/action-types";

export const userLogin = (username, password) => async (dispatch) => {
   const endPoint = `${apiBaseUrl}/auth/login`
   try {
      dispatch({ type: ActionTypes.LOGIN_REQUEST });
      // const config = { headers: { 'Content-Type': 'application', 'Accept': 'application/json' } };
      const res = await axios.post(endPoint, { username, password });
      dispatch({
         type: ActionTypes.LOGIN_SUCCESS,
         payload: res.data
      });
      // console.log("api login action========>", res.data)
   } catch (err) {
      dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: err.response.data});
      // console.log('Error==========>:', err)
   }
};

export const actionLogOut = () => async (dispatch) => { 
   dispatch({ type: ActionTypes.LOGOUT_SUCCESS, payload: null })
   // console.log("response logout")
};
