import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,ADD_TO_CART,REMOVE_FROM_CART } from "../actions/actionTypes";

import { combineReducers } from "redux";

const initialState = {
    loading: true,
    data: [],
    cartItems : [],
    error: ""
}

const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload)
        };
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer
})

export default rootReducer;