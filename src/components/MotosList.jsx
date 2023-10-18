import { TbChevronRight } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const MotosList = ({ db }) => {
  return (
    <ul className='motoList'>
      {db.map((moto) => (
        <li key={moto.id} className='li'>
          <div>
            <h2>{moto.model}</h2>
          </div>

          <Link to={`${moto.id}`}>
            <img src={moto.img} alt={moto.model} />
          </Link>
          <Link to={`${moto.id}`} className='button link'>
            See details <TbChevronRight />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MotosList
