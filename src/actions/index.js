import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,ADD_TO_CART,REMOVE_FROM_CART } from "./actionTypes";
import axios from "axios";

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
})

export const addToCart = (product) => {
    return (dispatch, getState) => {
      const cartItems = getState().cart.cartItems;
  
      const alreadyInCart = cartItems.find(item => item.id === product.id);
  
      if (!alreadyInCart) {
        dispatch({
          type: ADD_TO_CART,
          payload: product
        });
      }
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: REMOVE_FROM_CART,
      payload: productId
    };
  };



export const fetchData = () => async (dispatch) => {
    dispatch(fetchDataRequest)
    try{
        const reponse = await axios.get("https://dummyjson.com/products")
        dispatch(fetchDataSuccess(reponse.data.products))
    }
    catch(error){
        dispatch(fetchDataFailure(error.message))
    }
}