import '../style/Cart.scss'

import { motion } from 'framer-motion'

import MotoCartItem from './MotoCartItem'

import { forwardRef, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { clearCart, delFromCart } from '../actions/shoppingActions'
import { CartIcon } from './Icons/CartIcon'
import { CloseIcon } from './Icons/CloseIcon'

const Cart = forwardRef(({ cart, dispatch, cartCheckboxId, cartIsOpen, setCartIsOpen }, ref) => {
  const cartLength = cart.length
  const cartTotalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0)

  const clearCartButton = (
    <button
      onClick={() => {
        dispatch(clearCart()), setCartIsOpen(false)
      }}
    >
      Clear cart
    </button>
  )

  const viewCartButton = (
    <Link className='button' to='cart' onClick={() => setCartIsOpen(false)}>
      View Cart
    </Link>
  )

  const cartRef = useRef(null)

  useEffect(() => {
    const clickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartIsOpen(false)
      }
    }

    document.addEventListener('mousedown', clickOutside)

    return () => {
      document.removeEventListener('mousedown', clickOutside)
    }
  }, [setCartIsOpen])

  cartIsOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        {cartIsOpen ? <CloseIcon /> : <CartIcon />}
        {cartIsOpen || cartTotalItems === 0 || (
          <div className='counter'>{cartTotalItems > 9 ? '9+' : cartTotalItems}</div>
        )}
      </label>

      <input
        type='checkbox'
        id={cartCheckboxId}
        hidden
        checked={cartIsOpen}
        onChange={(e) => setCartIsOpen(e.target.checked)}
      />

      {cartIsOpen && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: 'linear' }}
          ref={cartRef}
          className='cart'
        >
          {cartLength > 0 && (
            <header>
              <h2>
                Your total is:
                <span> ${cartTotalPrice}</span>
              </h2>
            </header>
          )}
          <ul>
            {cartLength > 0 ? (
              cart.map((el, index) => (
                <MotoCartItem
                  key={index}
                  el={el}
                  delOneFromCart={() => dispatch(delFromCart(el.id))}
                  delAllFromCart={() => dispatch(delFromCart(el.id, true))}
                />
              ))
            ) : (
              <h2>Your cart is empty</h2>
            )}
          </ul>
          {cartLength > 0 && (
            <div>
              {viewCartButton}
              {clearCartButton}
            </div>
          )}
        </motion.aside>
      )}
    </>
  )
})

export default Cart
