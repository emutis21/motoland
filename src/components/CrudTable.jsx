import { TbChevronRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/shoppingActions";

import CrudForm from "./CrudForm";
import CrudTableRow from "./CrudTableRow";
import Cart from "./Cart";

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

  const noDataMessage = <h2>No data!</h2>;

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
              <Link to="motos" className="button link">
                View all Motos <TbChevronRight />
              </Link>
            </li>
          ) : null}
        </div>
      </ul>
      <section className="section">
        <Cart cart={cart} dispatch={dispatch} />
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
