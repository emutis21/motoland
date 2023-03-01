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
      <div>
        <h2>{name}</h2>
      </div>
      <button
        onClick={() => addToCart(el)}
        className="img">
        <img
          src={content}
          alt={name}
        />
      </button>
      <button
        onClick={() => addToCart(el)}
        className="add">
        <RiAddCircleLine />
      </button>
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
