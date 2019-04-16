import React, { useState } from "react";

const FilterBar = () => {
  const buttonValues = ["Vse", "Prijmy", "Vydaje"];
  const [selected, setCurSelection] = useState(buttonValues[0]);

  const handleOptionChange = ({ target: { value } }) => {
    // setCurSelection(o.target.value); //other option
    setCurSelection(value);
  };

  return (
    <div>
      <p>Zobrazit:</p>
      <form>
        {buttonValues.map((value, key) => (
          <div key={key}>
            <label>
              <input
                type="radio"
                value={value}
                checked={selected === value}
                onChange={handleOptionChange}
              />
              {value}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default FilterBar;
