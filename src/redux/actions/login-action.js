import axios from "axios";
import { apiBaseUrl } from "../../config/base-urls";
import { ActionTypes } from "../constants/action-types";

export const userLogin = (username, password) => async (dispatch) => {
   const endPoint = `${apiBaseUrl}/auth/login`
   try {
      dispatch({ type: ActionTypes.LOGIN_REQUEST });
      // const config = { headers: { 'Content-Type': 'application', 'Accept': 'application/json' } };
      console.log("recvd===>",username, password)
      const res = await axios.post(endPoint, { username, password });
      dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: res.data });
      console.log("api login action========>", res.data)
   } catch (err) {
      dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: err.response.data});
      console.log('Error==========>:', err)
   }
};