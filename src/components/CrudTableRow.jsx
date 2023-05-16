import { RiAddCircleLine } from "react-icons/ri";

const CrudTableRow = ({
  el,
  setDataToEdit,
  deleteData,
  addToCart,
  cartCheckboxId,
  cartIsOpen,
}) => {
  let { id, content, name, price, description, city } = el;

  const handleEdit = () => {
    setDataToEdit(el);
  };

  return (
    <li>
      <div>
        <h2>{name}</h2>
      </div>

      <label
        className="add-to-cart"
        htmlFor={cartIsOpen ? null : cartCheckboxId}
        onClick={() => addToCart(el)}
      >
        <RiAddCircleLine />
        <img src={content} alt={name} />
      </label>

      <h3>{description}</h3>
      <h4>{city}</h4>
      <h2>${price}</h2>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </div>
    </li>
  );
};

export default CrudTableRow;
