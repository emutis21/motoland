import "../styles/Cart.scss";

import MotoCartItem from "./MotoCartItem";

import { RiCloseLine, RiLuggageCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { clearCart, delFromCart } from "../actions/shoppingActions";

const Cart = ({
  cart,
  dispatch,
  cartCheckboxId,
  cartIsOpen,
  setCartIsOpen,
}) => {
  const { length: cartLength } = cart;

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const clearCartButton = (
    <button onClick={() => dispatch(clearCart())}>Clear cart</button>
  );

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
        checked={cartIsOpen}
        onChange={(e) => setCartIsOpen(e.target.checked)}
      />
      <aside className="cart">
        <label
          className="cart-button-close"
          htmlFor={cartCheckboxId}>
          <RiCloseLine />
        </label>
        {cartLength > 0 ? (
          <div>
            <h2>
              Your total is: <br />
              <span> ${cartTotal}</span>
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
