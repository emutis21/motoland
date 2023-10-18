import { NavLink } from 'react-router-dom'

const navigationLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/more', label: 'More' },
  { to: '/contact', label: 'Contact' },
]

const Links = () => {
  return (
    <nav className='nav__menu'>
      <ul className='nav__list'>
        {navigationLinks.map((link, index) => (
          <li className='nav__item' key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '') || 'nav__link'}
              translate='no'
              to={link.to}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Links
