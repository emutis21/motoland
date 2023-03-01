import { TbChevronRight } from "react-icons/tb";
import { Link } from "react-router-dom";

const MotoCartItem = ({ el, delOneFromCart, delAllFromCart }) => {
  let { id, content, name, price, quantity } = el;
  return (
    <li className="cartList">
      <div>
        <Link to={`motos/${id}`}>
              <img
                src={content}
                alt={name}
              />
            </Link>
            <Link
              to={`motos/${id}`}
              className="button link">
              See details <TbChevronRight />
            </Link>
      </div>
      <div>
        <h2>{name}</h2>
        <p>
          ${price} x {quantity} = ${price * quantity}
        </p>
        <div className="buttons">
          <button onClick={() => delOneFromCart(id)}>Remove One</button>
          <button onClick={() => delAllFromCart(id, true)}>Delete All</button>
        </div>
      </div>
    </li>
  );
};

export default MotoCartItem;
