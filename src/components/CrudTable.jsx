import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions/shoppingActions'
import { useId } from 'react'

import CrudForm from './CrudForm'
import CrudTableRow from './CrudTableRow'

import '../styles/CrudTable.scss'

const CrudTable = ({
  data,
  setDataToEdit,
  deleteData,
  dispatch,
  setIsModalOpen,
  createData,
  updateData,
  dataToEdit,
  isModalOpen,
}) => {
  const { length: dataLength } = data

  const cartCheckboxId = useId()

  return (
    <>
      <ul>
        <div className='motos'>
          {data.slice(0, 5).map((el) => (
            <CrudTableRow
              addToCart={() => dispatch(addToCart(el))}
              cartCheckboxId={cartCheckboxId}
              key={el.id}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
          {dataLength && (
            <li className='all-motos'>
              <Link to='motos' className='button link'>
                View all Motos <TbChevronRight />
              </Link>
            </li>
          )}
        </div>
      </ul>

      <section className='section'>
        <CrudForm
          motos={data}
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </section>
    </>
  )
}

export default CrudTable
