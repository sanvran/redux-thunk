import { ActionTypes } from "../constants/action-types"
import axios from 'axios'
import { apiBaseUrl } from "../../config/base-urls"

const endPoint = `${apiBaseUrl}/products`
export const getProducts = () => async (dispatch) => { // we call the api with middleware async(dispatch) it call internal
   try {
      const { data } = await axios.get(endPoint); // obj.data | { data} = obj here
      dispatch({ type: ActionTypes.GET_PRODUCT_SUCCESS, payload: data });
      console.log("API response======>:", data);
   } catch (err) {
      dispatch({ type: ActionTypes.GET_PRODUCT_FAIL, payload: err.message })
      console.log('Error==========>:', err.message)
   }
};