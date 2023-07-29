import { Filters } from "./Filters";

const Header = ({ changeFilters }) => {
  return (
    <div className="headers">
      <h1>Choose the motorcycle of your dreams</h1>
      <Filters onChange={changeFilters} />
    </div>
  );
};

export default Header;
