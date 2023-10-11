import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART, REMOVE_ONE_FROM_CART } from '../types'

export const cartInitialState = JSON.parse(localStorage.getItem('moto') || '[]')

export const initialState = {
  cart: cartInitialState,
}

export const updateLocalStorage = (state) => {
  localStorage.setItem('moto', JSON.stringify(state.cart))
}

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newMoto = action.payload
      let motoInCart = state.cart.find((moto) => moto.id === newMoto.id)
      let updatedState = motoInCart
        ? {
            ...state,
            cart: state.cart.map((moto) => (moto.id === newMoto.id ? { ...moto, quantity: moto.quantity + 1 } : moto)),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newMoto, quantity: 1 }],
          }
      updateLocalStorage(updatedState)
      return updatedState
    }
    case REMOVE_ONE_FROM_CART: {
      let motoToDelete = state.cart.find((moto) => moto.id === action.payload)
      let updatedState =
        motoToDelete.quantity > 1
          ? {
              ...state,
              cart: state.cart.map((moto) =>
                moto.id === action.payload ? { ...moto, quantity: moto.quantity - 1 } : moto,
              ),
            }
          : {
              ...state,
              cart: state.cart.filter((moto) => moto.id !== action.payload),
            }
      updateLocalStorage(updatedState)
      return updatedState
    }
    case REMOVE_ALL_FROM_CART: {
      let updatedState = {
        ...state,
        cart: state.cart.filter((moto) => moto.id !== action.payload),
      }
      updateLocalStorage(updatedState)
      return updatedState
    }
    case CLEAR_CART: {
      const updatedState = {
        ...state,
        cart: [],
      }
      updateLocalStorage(updatedState)
      return updatedState
    }
    default:
      return state
  }
}
