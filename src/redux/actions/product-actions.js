import { ActionTypes } from "../constants/action-types"
import axios from 'axios'
import { apiBaseUrl } from "../../config/base-urls"

// get all products action
const endPoint = `${apiBaseUrl}/products`
export const getProducts = () => async (dispatch) => { // we call the api with middleware async(dispatch) it call internal
   try {
      const { data } = await axios.get(endPoint); // obj.data | { data} = obj here
      dispatch({ type: ActionTypes.GET_PRODUCT_SUCCESS, payload: data });
      console.log("API response======>:", data);
   } catch (err) {
      dispatch({ type: ActionTypes.GET_PRODUCT_FAIL, payload: err.message })
      // console.log('Error==========>:', err.message)
   }
};

// get selected product action
export const getProductById = (id) => async (dispatch) => {
   try {
      const endPoint = `${apiBaseUrl}/products/${id}`
      const { data } = await axios.get(endPoint); // obj.data | { data} = obj here
      dispatch({ type: ActionTypes.GET_SELECTED_PRODUCT, payload: data });
      console.log("API selected prod======>:", data);
   } catch (err) {
      dispatch({ type: ActionTypes.GET_SELECTED_PRODUCT_FAIL, payload: err.message })
      console.log('Error==========>:', err.message)
   }
};

// remove seleted product
export const removeSelectedProduct = () => { 
   return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT
   }
};
