import { RiAddCircleLine } from "react-icons/ri";

const CrudTableRow = ({
  el,
  setDataToEdit,
  deleteData,
  addToCart,
  setIsModalOpen,
  cartCheckboxId,
  cartIsOpen,
}) => {
  let { id, content, name, price, description, city } = el;

  const handleEdit = () => {
    setDataToEdit(el);
    setIsModalOpen(true);
  };

  return (
    <li>
      <div>
        <h2>{name}</h2>
      </div>
      <label
        onClick={() => addToCart(el)}
        htmlFor={cartIsOpen ? null : cartCheckboxId}
        className="img label">
        <img
          src={content}
          alt={name}
        />
      </label>

      <label
        className="label"
        htmlFor={cartIsOpen ? null : cartCheckboxId}
        onClick={() => addToCart(el)}>
        <RiAddCircleLine />
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
