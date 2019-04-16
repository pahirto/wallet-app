import React, { useState } from "react";

const Transaction = ({ value, currency }) => {
  const [_value, setCount] = useState(value);

  return (
    <div style={{ marginTop: "20px" }}>
      <div>{_value}</div>
      <div>{currency}</div>
      <button onClick={() => setCount(_value + 1)}>+</button>
    </div>
  );
};

export default Transaction;
