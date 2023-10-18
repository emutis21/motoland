import { RiAddCircleLine } from 'react-icons/ri'

const CrudTableRow = ({ el, setDataToEdit, deleteData, addToCart, setIsModalOpen }) => {
  let { id, img, model, price, description, city } = el

  const handleEdit = () => {
    setDataToEdit(el)
    setIsModalOpen(true)
  }

  return (
    <li>
      <>
        <h2>{model}</h2>
      </>

      <div
        className='add-to-cart'
        // htmlFor={cartIsOpen ? null : cartCheckboxId}
        onClick={() => addToCart(el)}
      >
        <RiAddCircleLine />
        <img src={img} alt={model} />
      </div>

      <h3>{description}</h3>
      <h4>{city}</h4>
      <h2>${price}</h2>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </div>
    </li>
  )
}

export default CrudTableRow
