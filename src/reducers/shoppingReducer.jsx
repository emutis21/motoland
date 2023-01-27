import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const initialState = {
  motos: [
    {
      id: 1,
      content:
        "https://raw.githubusercontent.com/pac13/motos-img/master/ninja-300.png",
      name: "Ninja 300",
      price: 1000,
    },
    {
      id: 2,
      content:
        "https://raw.githubusercontent.com/pac13/motos-img/master/z400.png",
      name: "z400",
      price: 2000,
    },
    {
      id: 3,
      content:
        "https://raw.githubusercontent.com/pac13/motos-img/master/ninja-400.png",
      name: "Ninja 400",
      price: 3000,
    },
    {
      id: 4,
      content:
        "https://raw.githubusercontent.com/pac13/motos-img/master/ninja-zx6r.png",
      name: "Ninja Zx6r",
      price: 4000,
    },
    {
      id: 5,
      content:
      "https://raw.githubusercontent.com/pac13/motos-img/master/z900.png",
      name: "z900",
      price: 5000,
    },
    {
      id: 6,
      content:
      "https://raw.githubusercontent.com/pac13/motos-img/master/zx10r.png",
      name: "Ninja Zx10r",
      price: 6000,
    },
    {
      id: 7,
      content:
      "https://raw.githubusercontent.com/pac13/motos-img/master/zh2.png",
      name: "Zh2",
      price: 7000,
    },
  ],
  cart: [],
};
export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newMoto = state.motos.find((moto) => moto.id === action.payload);

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
