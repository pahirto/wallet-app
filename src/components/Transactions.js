import React, { useState, useEffect } from "react";

import RadioButtonGroup from "./RadioButtonGroup";
import ReactModal from "react-modal";

import Transaction from "./Transaction";
import AddTransactionModal from "./AddTransactionModal";
import TransactionHeading from "./TransactionHeading";
import moment from "moment";

const Transactions = ({ data, addRecord, removeRecord, editRecord }) => {
  useEffect(() => {
    return () => {
      ReactModal.setAppElement("body");
    };
  });
  const [curFilter, changeFilter] = useState("Vse");

  const showModal = AddTransactionModal(addRecord);

  const defaultItem = { date: moment(), label: "Label", amount: 0 };
  const filterHandler = value => {
    if (curFilter === "Vse") return true;
    else if (curFilter === "Prijmy") return value >= 0;
    else if (curFilter === "Vydaje") return value <= 0;
    else return true;
  };

  return (
    <>
      <RadioButtonGroup
        onChange={newVal => changeFilter(newVal)}
        buttonLabels={["Vse", "Prijmy", "Vydaje"]}
      />
      <TransactionHeading />
      {data
        .filter(({ amount }) => filterHandler(amount))
        .map((o, key) => (
          <Transaction
            model={o}
            removeMethod={removeRecord}
            key={key}
            editMethod={editRecord}
          />
        ))}
      <button onClick={showModal}>Přidat záznam - modal</button>
      <button onClick={() => addRecord(defaultItem, true)}>
        Přidat záznam
      </button>
    </>
  );
};

export default Transactions;
