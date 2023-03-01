import { TbChevronRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const MotosList = ({ db }) => {
  return (
    <ul className="motoList">
      {db.map((moto) => (
        <li
          key={moto.id}
          className="li">
          <div>
            <h2>{moto.name}</h2>
          </div>

          <Link to={`/motos/${moto.name}`}>
            <img
              src={moto.content}
              alt={moto.name}
            />
          </Link>
          <Link
            to={`/motos/${moto.name}`}
            className="button link">
            See details <TbChevronRight />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MotosList;
