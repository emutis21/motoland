import React, { useId } from "react";
import { Link } from "react-router-dom";
import { clearCart, delFromCart } from "../actions/shoppingActions";
import MotoCartItem from "./MotoCartItem";
import "../styles/Cart.scss";
import { RiLuggageCartFill } from "react-icons/ri";

const Cart = ({ cart, dispatch }) => {
  const { length: cartLength } = cart;

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  

  const clearCartButton = (
    <button onClick={() => dispatch(clearCart())}>Clear cart</button>
  );
  const cartCheckboxId = useId();
  return (
    <div>
      <label
        className="cart-button"
        htmlFor={cartCheckboxId}>
        <RiLuggageCartFill />
      </label>
      <input
        type="checkbox"
        id={cartCheckboxId}
        hidden
      />
      <aside className="cart">
        {cartLength > 0 ? (
          <div>
            <h2>
              Your total is: <br /><span> ${cartTotal}</span>
            </h2>
          </div>
        ) : null}
        <ul>
          {cartLength > 0 ? (
            cart.map((el, index) => (
              <div key={index}>
                <MotoCartItem
                  el={el}
                  delOneFromCart={() => dispatch(delFromCart(el.id))}
                  delAllFromCart={() => dispatch(delFromCart(el.id, true))}
                />
              </div>
            ))
            
          ) : (
            <h1>Your cart is empty</h1>
          )}
        </ul>
        <div>
          {cartLength === 0 ? null : (
            <div>
              {clearCartButton}
              <Link
                className="button"
                to="cart">
                View Cart
              </Link>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default Cart;
