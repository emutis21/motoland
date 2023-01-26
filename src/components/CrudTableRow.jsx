import React from "react";
import { RiAddCircleLine } from "react-icons/ri";

const CrudTableRow = ({
  el,
  setDataToEdit,
  deleteData,
  addToCart,
  setIsModalOpen,
}) => {
  let { id, content, name, price, description, city } = el;

  return (
    <li>
      <div>
        <h2>{name}</h2>
      </div>
      <button
        onClick={() => addToCart(id)}
        className="img">
        <img
          src={content}
          alt={name}
        />
      </button>
      <button
        onClick={() => addToCart(id)}
        className="add">
        <RiAddCircleLine />
      </button>
      <h3>{description}</h3>
      <h4>{city}</h4>
      <h2>${price}</h2>
      <div>
        <button onClick={() => setDataToEdit(el) || setIsModalOpen(true)}>
          Edit
        </button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </div>
    </li>
  );
};

export default CrudTableRow;
