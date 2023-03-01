import { useState } from "react";
import "../styles/Filters.scss";

export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeBrand = (event) => {
    onChange((prevState) => ({
      ...prevState,
      brand: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="12000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>
      <br />
      <div className="select">
        <label htmlFor="brand">Brand</label>
        <select
          id="brand"
          className="brands"
          onChange={handleChangeBrand}>
          <option value="all">
            All
          </option>
          <option
            translate="no"
            value="BMW">
            BMW
          </option>
          <option
            translate="no"
            value="TVS">
            TVS
          </option>
          <option
            translate="no"
            value="KTM">
            KTM
          </option>
          <option
            translate="no"
            value="Kawasaki">
            Kawasaki
          </option>
          <option
            translate="no"
            value="Suzuki">
            Suzuki
          </option>
          <option
            translate="no"
            value="Yamaha">
            Yamaha
          </option>
        </select>
      </div>
    </section>
  );
}
