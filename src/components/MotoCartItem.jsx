const MotoCartItem = ({ el, delOneFromCart, delAllFromCart }) => {
  let { id, content, name, price, quantity } = el;
  return (
    <li>
      <div>
        <h2>{name}</h2>
        <img
          className="img"
          src={content}
          alt={name}
        />
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
