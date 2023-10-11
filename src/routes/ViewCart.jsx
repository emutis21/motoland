import { useState } from 'react'
import { useId } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../components/Cart'

const ViewCart = () => {
  const cart = useSelector((state) => state.shopping.cart)
  const cartCheckboxId = useId()
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const dispatch = useDispatch()

  console.log(cart)
  return (
    <div className="container">
      <h1>Cart</h1>
      <Cart
        cart={cart}
        cartCheckboxId={cartCheckboxId}
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
        dispatch={dispatch}
      />
    </div>
  )
}

export default ViewCart

// const ViewCart = () => {

//   return (
//     <div className="container">
//       <h1>Cart</h1>

//     </div>
//   );
// };

// export default ViewCart;
