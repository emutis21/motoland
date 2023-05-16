import "../../styles/Navbar.scss";

import MobileNavigation from "./MobileNavigation";
import NavLinks from "./NavLinks";

import { RiMotorbikeFill } from "react-icons/ri";

function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <a translate="no" href="/motoland" className="nav__logo">
          <RiMotorbikeFill /> Motoland
        </a>
        <div className="navigation">
          <NavLinks />
        </div>
        <MobileNavigation />
      </nav>
    </header>
  );
}
export default Navbar;
