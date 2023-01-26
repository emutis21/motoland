import MobileNavigation from "./MobileNavigation";
import "../../Styles/Navbar.scss";
import Navigation from "./Navegation";
import { RiMotorbikeFill } from "react-icons/ri";

function Navbar() {
  return (
    <header className="header">
      <nav className="nav container">
        <a
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
