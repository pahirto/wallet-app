import React, { Fragment, useState } from "react";

import HelloWorld from "./components/HelloWorld";
import Transaction from "./components/Transaction";
import TransactionPage from "./components/transactionPage/TransactionPage";

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
    <>
      <TransactionPage />
    </>
  );
};

export default App;
