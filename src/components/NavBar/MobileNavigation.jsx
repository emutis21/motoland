import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { TfiMenu, TfiClose } from 'react-icons/tfi'

import NavLinks from './NavLinks'

const MobileNavigation = () => {
  const [open, setOpen] = useState(false)

  const hamburguerIcon = <TfiMenu className='nav__toggle' onClick={() => setOpen(!open)} />

  const closeIcon = <TfiClose className='nav__toggle' onClick={() => setOpen(!open)} />

  return (
    <div className='mobile'>
      {open ? closeIcon : hamburguerIcon}
      <CSSTransition in={open} timeout={150} classNames='nav-transition' unmountOnExit>
        <NavLinks />
      </CSSTransition>
    </div>
  )
}

export default MobileNavigation
