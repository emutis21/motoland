import MobileNavigation from "./MobileNavigation";
import "../../styles/Navbar.scss";
import Navigation from "./Navegation";
import { RiMotorbikeFill } from "react-icons/ri";

function Navbar() {
  return (
    <header className="header">
      <nav className="nav">
        <a
        translate="no"
          href="/"
          className="nav__logo">
          <RiMotorbikeFill /> Motoland
        </a>
        <Navigation />
        <MobileNavigation />
      </nav>
    </header>
  );
}
export default Navbar;
