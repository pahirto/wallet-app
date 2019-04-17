import React from "react";

const FilterComboBox = ({ filter, onChange, values, defaultValue }) => {
  return (
    <select
      onChange={event => onChange(event.target.value)}
      value={filter ? filter.value : defaultValue}
    >
      {values.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  );
};

export default FilterComboBox;
