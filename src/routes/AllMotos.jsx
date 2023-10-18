import { useSelector } from 'react-redux'

import MotosList from '../components/MotosList'

const AllMotos = () => {
  const db = useSelector((state) => state.crud.db)

  return (
    <div className='container'>
      <h1>All motos</h1>
      <MotosList db={db} />
    </div>
  )
}

export default AllMotos
