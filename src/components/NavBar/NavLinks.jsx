import { NavLink } from "react-router-dom";
import Cart from "../Cart";

const Links = ({
  cart,
  cartCheckboxId,
  dispatch,
  cartIsOpen,
  setCartIsOpen,
}) => {
  return (
    <nav className="nav__menu">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            translate="no"
            to="/motoland/"
          >
            Home
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            translate="no"
            to="/motoland/about"
          >
            About
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            translate="no"
            to="/motoland/more"
          >
            More
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            translate="no"
            to="/motoland/contact"
          >
            Contact
          </NavLink>
        </li>

        <li className="nav__item">
          <Cart
            cart={cart}
            cartCheckboxId={cartCheckboxId}
            cartIsOpen={cartIsOpen}
            setCartIsOpen={setCartIsOpen}
            dispatch={dispatch}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Links;
