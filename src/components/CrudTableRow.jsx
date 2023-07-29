import { RiAddCircleLine } from "react-icons/ri";

const CrudTableRow = ({
  el,
  setDataToEdit,
  deleteData,
  addToCart,
  setIsModalOpen,
}) => {
  let { id, content, name, price, description, city } = el;

  const handleEdit = () => {
    setDataToEdit(el);
    setIsModalOpen(true);
  };

  return (
    <li>
      <>
        <h2>{name}</h2>
      </>

      <div
        className="add-to-cart"
        // htmlFor={cartIsOpen ? null : cartCheckboxId}
        onClick={() => addToCart(el)}
      >
        <RiAddCircleLine />
        <img src={content} alt={name} />
      </div>

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
