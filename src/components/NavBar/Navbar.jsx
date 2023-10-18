import '../../style/Navbar.scss'

import MobileNavigation from './MobileNavigation'
import NavLinks from './NavLinks'

import { RiMotorbikeFill } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux'
import { useId, useState } from 'react'
import Cart from '../Cart'

function Navbar() {
  const useSelectorCart = (state) => state.shopping.cart

  const cart = useSelector(useSelectorCart)
  const cartCheckboxId = useId()
  const dispatch = useDispatch()

  const [cartIsOpen, setCartIsOpen] = useState(false)
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='nav__logo'>
          <a translate='no' href='/' className='nav__logo__content'>
            <RiMotorbikeFill /> Motoland
          </a>
        </div>
        <div className='navigation'>
          <NavLinks />
        </div>
        <div className='nav__cart'>
          {/* <div className='bg-none' /> */}
          <Cart
            cart={cart}
            cartCheckboxId={cartCheckboxId}
            cartIsOpen={cartIsOpen}
            setCartIsOpen={setCartIsOpen}
            dispatch={dispatch}
          />
        </div>
        <MobileNavigation />
      </nav>
    </header>
  )
}
export default Navbar
