import { NavLink } from 'react-router-dom'
import Cart from '../Cart'

const navigationLinks = [
  { to: '/motoland/', text: 'Home' },
  { to: '/motoland/about', text: 'About' },
  { to: '/motoland/more', text: 'More' },
  { to: '/motoland/contact', text: 'Contact' },
]

const Links = ({ cart, cartCheckboxId, dispatch, cartIsOpen, setCartIsOpen }) => {
  return (
    <nav className="nav__menu">
      <ul className="nav__list">
        {navigationLinks.map((link, index) => (
          <li className="nav__item" key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '') || 'nav__link'}
              translate="no"
              to={link.to}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
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
  )
}

export default Links
