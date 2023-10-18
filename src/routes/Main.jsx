import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { helpHttp } from '../helpers/helpHttp'

import { createAction, deleteAction, updateAction } from '../actions/crudActions'

import CrudTable from '../components/CrudTable'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Message from '../components/Message'

import '../styles/Main.scss'
import useApiCall from '../hooks/useApiCall'

const Main = () => {
  const cart = useSelector((state) => state.shopping.cart)
  const db = useSelector((state) => state.crud.db)

  const dispatch = useDispatch()

  const [dataToEdit, setDataToEdit] = useState(null)

  const [isModalOpen, setIsModalOpen] = useState(false)

  let api = helpHttp()

  const { loading, error } = useApiCall()

  const createData = (data) => {
    data.id = Date.now()

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    }

    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch(createAction(res))
      } else {
        setError(res)
      }
    })
  }

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    }

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch(updateAction(res))
      } else {
        setError(res)
      }
    })
  }

  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Are you sure to delete the motorcycle with the id '${id}'?`)

    if (isDelete) {
      dispatch(deleteAction(id))
    } else {
      return
    }
  }

  const [filters, setFilters] = useState({ brand: 'all', minPrice: 0 })

  const filterMotos = (db) => {
    return db.filter((moto) => {
      return moto.price >= filters.minPrice && (filters.brand === 'all' || moto.brand === filters.brand)
    })
  }

  const filteredMotos = filterMotos(db)

  const handleReload = () => {
    window.location.reload()
  }

  console.log(db)

  return (
    <main className='container'>
      <Header changeFilters={setFilters} />

      {(loading || error) && (
        <div className='main'>
          {loading && <Loader />}
          {error && (
            <>
              <Message msg={`${error.status}: ${error.statusText}`} />
              <button onClick={handleReload}>Reload</button>
            </>
          )}
        </div>
      )}

      {db && (
        <CrudTable
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          dispatch={dispatch}
          setIsModalOpen={setIsModalOpen}
          createData={createData}
          updateData={updateData}
          cart={cart}
          // state={state}
          data={filteredMotos}
          dataToEdit={dataToEdit}
          isModalOpen={isModalOpen}
        />
      )}
    </main>
  )
}

export default Main
