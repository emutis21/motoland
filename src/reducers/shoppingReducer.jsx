
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const initialState = {
  cart:[]
}

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {

      let newMoto = action.payload;
      console.log(action.payload)
      let motoInCart = state.cart.find((moto) => moto.id === newMoto.id);

      return motoInCart
        ? {
            ...state,
            cart: state.cart.map((moto) =>
              moto.id === newMoto.id
                ? { ...moto, quantity: moto.quantity + 1 }
                : moto
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newMoto, quantity: 1 }],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      let motoToDelete = state.cart.find((moto) => moto.id === action.payload);

      return motoToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((moto) =>
              moto.id === action.payload
                ? { ...moto, quantity: moto.quantity - 1 }
                : moto
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((moto) => moto.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((moto) => moto.id !== action.payload),
      };
    }
    case CLEAR_CART: {
      return initialState;
    }
    default:
      return state;
  }
}
