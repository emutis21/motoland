// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { clearCart, delFromCart } from "../actions/shoppingActions";
// import MotoCartItem from "../components/MotoCartItem";
// import Navbar from "../components/NavBar/Navbar";

// const Cart = (data,
//   setDataToEdit,
//   deleteData) => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const handleDeleteFromCart = (id) => {
//     dispatch(delFromCart(id));
//   };

//   const clearCartButton = (
//     <button onClick={() => dispatch(clearCart())}>Clear cart</button>
//   );
//   const { length: cartLength } = cart;

//   return (
//     <div className="cart">
//         <div>{cartLength === 0 ? null : clearCartButton}</div>
//         <ul className="motos">
//           {cartLength > 0 ? (
//             cart.map((el, index) => (
//               <MotoCartItem
//                 key={index}
//                 el={el}
//                 delOneFromCart={() => dispatch(delFromCart(el.id))}
//                 delAllFromCart={() => dispatch(delFromCart(el.id, true))}
//               />
//             ))
//           ) : (
//             <p>Your cart is empty</p>
//           )}
//         </ul>
//         <div>
//           {cartLength === 0 ? null : (
//             <Link
//               to={"/cart"}
//               cart={cart}
//               className="link button">
//               View Cart
//             </Link>
//           )}
//         </div>
//       </div>
//   );
// };

// export default Cart;
import React from 'react'
import Navbar from '../components/NavBar/Navbar'

const Cart = () => {
  return (
    <div className='container'>
        <Navbar/>
        <h1>Cart</h1>
    </div>
  )
}

export default Cart