import { NavLink } from "react-router-dom";

const Links = () => {
  return (
    <nav className="nav__menu">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            to="/">
            Home
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            to="/about">
            About
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            to="/more">
            More
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            to="/contact">
            Contact
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
