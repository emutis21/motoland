import '../styles/Cart.scss'

import MotoCartItem from './MotoCartItem'

import { RiCloseLine, RiLuggageCartFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { clearCart, delFromCart } from '../actions/shoppingActions'
import { useEffect, useRef, forwardRef } from 'react'

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
    <Link className="button" to="motoland/cart" onClick={() => setCartIsOpen(false)}>
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

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        {cartIsOpen ? (
          <RiCloseLine className="cart-button-close" />
        ) : (
          <RiLuggageCartFill className="cart-button-close" />
        )}
        {cartIsOpen || cartTotalItems === 0 || (
          <div className="counter">{cartTotalItems > 9 ? '9+' : cartTotalItems}</div>
        )}
      </label>

      <input
        type="checkbox"
        id={cartCheckboxId}
        hidden
        checked={cartIsOpen}
        onChange={(e) => setCartIsOpen(e.target.checked)}
      />

      <aside ref={cartRef} className="cart">
        {cartLength > 0 && (
          <div>
            <h2>
              Your total is: <br />
              <span> ${cartTotalPrice}</span>
            </h2>
          </div>
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
      </aside>
    </>
  )
})

export default Cart
