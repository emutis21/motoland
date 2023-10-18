import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Moto = () => {
  const { id } = useParams()
  const db = useSelector((state) => state.crud.db)
  useEffect(() => {
    document.title = `Eu ${id}`
  }, [id])

  return (
    <main>
      {db
        .filter((moto) => moto.id === parseInt(id))
        .map((moto) => (
          <article key={moto.id} className='container motoOne'>
            <h1>
              {moto.brand} <br />
              {moto.model}
            </h1>
            <img src={moto.img} alt={moto.model} />
            <p>{moto.city}</p>
            <p>{moto.description}</p>
            <p>{moto.price}</p>
          </article>
        ))}
    </main>
  )
}

export default Moto
