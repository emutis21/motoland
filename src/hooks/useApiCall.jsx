import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { helpHttp } from '../helpers/helpHttp'
import { readAllAction, noAction } from '../actions/crudActions'

const useApiCall = () => {
  const url = import.meta.env.VITE_API_MOTOLAND_MOTOS
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
      setError({ status: 'Timeout', statusText: 'Request took too long' })
    }, 5000)

    helpHttp()
      .get(url)
      .then((res) => {
        clearTimeout(timeout)
        if (!res.err) {
          dispatch(readAllAction(res))
          setError(null)
        } else {
          dispatch(noAction())
          setError(res)
        }
        setLoading(false)
      })
      .catch((error) => {
        clearTimeout(timeout)
        setLoading(false)
        setError({ status: 'Error', statusText: error.message })
      })
  }, [dispatch, url])

  return { loading, error }
}

export default useApiCall
