const NavLinks = () => {
  return (
    <div className="nav__menu">
      <ul className="nav__list">
        <li className="nav__item">
          <a
            href="/"
            className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a
            href="/"
            className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a
            href="/"
            className="nav__link">
            More
          </a>
        </li>
        <li className="nav__item">
          <a
            href="/"
            className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a
            href="/PageCart"
            className="nav__link">
            Cart
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
