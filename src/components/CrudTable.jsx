import React from "react";
import { Link } from "react-router-dom";
import { addToCart, clearCart, delFromCart } from "../actions/shoppingActions";
import CrudTableRow from "./CrudTableRow";
import MotoCartItem from "./MotoCartItem";

const CrudTable = ({
  data,
  setDataToEdit,
  deleteData,
  dispatch,
  cart,
  setIsModalOpen,
}) => {
  const { length: dataLength } = data;
  const { length: cartLength } = cart;

  const noDataMessage = <h2>No data!</h2>;

  const clearCartButton = (
    <button onClick={() => dispatch(clearCart())}>Clear cart</button>
  );
  return (
    <div>
      <ul>
        <div className="motos">
          {dataLength > 0
            ? data.map((el) => (
                <CrudTableRow
                  key={el.id}
                  el={el}
                  setDataToEdit={setDataToEdit}
                  setIsModalOpen={setIsModalOpen}
                  deleteData={deleteData}
                  addToCart={() => dispatch(addToCart(el.id))}
                />
              ))
            : noDataMessage}
        </div>
      </ul>
      <div className="cart">
        <div>{cartLength === 0 ? null : clearCartButton}</div>
        <ul className="motos">
          {cartLength > 0 ? (
            cart.map((el, index) => (
              <MotoCartItem
                key={index}
                el={el}
                delOneFromCart={() => dispatch(delFromCart(el.id))}
                delAllFromCart={() => dispatch(delFromCart(el.id, true))}
              />
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </ul>
        <div>
          {cartLength === 0 ? null : (
              <Link to={"/cart"} cart={cart} className="link button">View Cart</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrudTable;
