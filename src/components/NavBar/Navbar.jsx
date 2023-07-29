import "../../styles/Navbar.scss";

import MobileNavigation from "./MobileNavigation";
import NavLinks from "./NavLinks";

import { RiMotorbikeFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useId, useState } from "react";

function Navbar() {
  const state = useSelector((state) => state);
  const cart = state.shopping.cart;
  const cartCheckboxId = useId();
  const dispatch = useDispatch();

  const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <header className="header">
      <nav className="nav">
        <a translate="no" href="/motoland" className="nav__logo">
          <RiMotorbikeFill /> Motoland
        </a>
        <div className="navigation">
          <NavLinks
            cart={cart}
            cartCheckboxId={cartCheckboxId}
            dispatch={dispatch}
            cartIsOpen={cartIsOpen}
            setCartIsOpen={setCartIsOpen}
          />
        </div>
        <MobileNavigation />
      </nav>
    </header>
  );
}
export default Navbar;
