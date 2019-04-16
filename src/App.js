import React, { Fragment, useState } from "react";

import HelloWorld from "./components/HelloWorld";
import Transaction from "./components/Transaction";

const initList = [
  { value: 123, currency: "CZK" },
  { value: 456, currency: "CZK" },
  { value: 789, currency: "CZK" }
];

const App = () => {
  const [transactionList, setTransactionList] = useState(initList);

  const handleClick = () => {
    const newObject = { value: 555, currency: "EUR" };

    setTransactionList([...transactionList, newObject]);
  };

  return (
    <Fragment>
      {transactionList.map(({ value, currency }, key) => (
        <Transaction key={key} value={value} currency={currency} />
      ))}
      <button onClick={handleClick}>Add transaction</button>
    </Fragment>
  );
};

export default App;
