import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delFromCart } from "../actions/shoppingActions";

const Cart = (data,
  setDataToEdit,
  deleteData) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDeleteFromCart = (id) => {
    dispatch(delFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(delFromCart(null, true));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => handleDeleteFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
      {cart.length > 0 && (
        <button onClick={handleClearCart}>Clear cart</button>
      )}
    </div>
  );
};

export default Cart;
