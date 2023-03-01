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
            translate="no"
            to="/">
            Home
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            translate="no"
            to="/about">
            About
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            translate="no"
            to="/more">
            More
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            className={({ isActive }) =>
              (isActive ? "active" : "") || "nav__link"
            }
            translate="no"
            to="/contact">
            Contact
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default Links;
