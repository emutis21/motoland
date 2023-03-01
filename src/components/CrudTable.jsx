import { TbChevronRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { addToCart, clearCart, delFromCart } from "../actions/shoppingActions";

import CrudForm from "./CrudForm";
import CrudTableRow from "./CrudTableRow";
import MotoCartItem from "./MotoCartItem";

const CrudTable = ({
  data,
  setDataToEdit,
  deleteData,
  dispatch,
  cart,
  setIsModalOpen,
  createData,
  updateData,
  dataToEdit,
  isModalOpen,
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
                  deleteData={deleteData}
                  addToCart={() => dispatch(addToCart(el))}
                  setIsModalOpen={setIsModalOpen}
                />
              ))
            : noDataMessage}
          {dataLength > 0 ? (
            <li className="li">
              <Link
                to="motos"
                className="button link">
                View all Motos <TbChevronRight />
              </Link>
            </li>
          ) : null}
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
                  to="cart">
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

        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </section>
    </div>
  );
};

export default CrudTable;
