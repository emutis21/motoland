import React from "react";
import { Link } from "react-router-dom";
import { addToCart, clearCart, delFromCart } from "../actions/shoppingActions";
import CrudForm from "../components/CrudForm";
import CrudTable from "../components/CrudTable";
import CrudTableRow from "../components/CrudTableRow";
import MotoCartItem from "../components/MotoCartItem";

const Cart = (
  data,
  setDataToEdit,
  deleteData,
  dispatch,
  cart,
  setIsModalOpen,
  createData,
  updateData,
  dataToEdit,
  isModalOpen
) => {
  const { length: dataLength } = data;
  const { length: cartLength } = cart;
  const clearCartButton = (
    <button onClick={() => dispatch(clearCart())}>Clear cart</button>
  );
  const noDataMessage = <h2>No data!</h2>;

  return (
    <div className="container">
      <ul>
        <div className="motos">
          {dataLength > 0
            ? data.map((el) => (
                <CrudTableRow
                  key={el.id}
                  el={el}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                  addToCart={() => dispatch(addToCart(el))}
                  setIsModalOpen={setIsModalOpen}
                />
              ))
            : noDataMessage}
        </div>
      </ul>
      <section>
        <div className="cart">
          <div>
            <div>{cartLength === 0 ? null : clearCartButton}</div>
            <div>
              {cartLength === 0 ? null : (
                <Link
                  className="link button"
                  to={"cart"}
                  cart={cart}>
                  View Cart
                </Link>
              )}
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
