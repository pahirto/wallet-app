import React, { Component, useState } from "react";

const FilterBar = () => {
  const [selected, handleChange] = useState("option1");
  const buttons = ["Vše", "Příjmy", "Výdaje"];

  return (
    <div>
      <p>Zobrazit:</p>
      <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="filter-bar-button"
              value="option1"
              checked={selected === "option1"}
              className="form-check-input"
            />
            Option 1
          </label>
        </div>

        <div className="form-check">
          <label>
            <input
              type="radio"
              name="filter-bar-button"
              value="option2"
              checked={selected === "option1"}
              className="form-check-input"
            />
            Option 2
          </label>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
