import { useState } from "react";
import "./filters.css";
export default function Filters() {
  const [price, setPrice] = useState(0);
  const [filters, setFilters] = useState({});

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleChanges = (e) => {
    handlePriceChange(e);
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    console.log(filters);
  };
  return (
    <div className="filtersContainer">
      <div className="filters">
        <label>Min. price</label>
        <input
          name="price"
          type="range"
          value={price}
          onChange={handleChanges}
          min={0}
          max={10000}
        />
        <label>${price}</label>
      </div>

      <div className="filters">
        <label> Category</label>
        <select name="category" id="category" onChange={handleChanges}>
          <option>All</option>
          <option>electronics</option>
          <option>women's clothing</option>
          <option>men's clothing</option>
        </select>
      </div>
    </div>
  );
}
