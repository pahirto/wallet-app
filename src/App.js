import React, { useState, useEffect } from "react";
import styled from "styled-components";

import RadioButtonGroup from "./components/RadioButtonGroup";
import Table from "./components/Table";
import DeleteButton from "./components/DeleteButton";
import ReactModal from "react-modal";

import Transaction from "./components/Transaction";
import AddTransactionModal from "./components/AddTransactionModal";
import TransactionHeading from "./components/TransactionHeading";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TransactionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const mockData = () => {
  return [
    {
      id: 1,
      date: "2018-09-04",
      label: "Rohliky",
      amount: -20,
      currency: "CZK"
    },
    {
      id: 2,
      date: "2018-10-04",
      label: "Chleba",
      amount: -30,
      currency: "CZK"
    },
    {
      id: 3,
      date: "2018-09-25",
      label: "Vyplata",
      amount: 1000,
      currency: "CZK"
    }
  ];
};

const App = () => {
  useEffect(() => {
    return () => {
      ReactModal.setAppElement("body");
    };
  });
  const [curFilter, changeFilter] = useState("Vse");
  const [data, setData] = useState(mockData());

  const addRecord = (o, editable = false) => {
    o.id = data[data.length - 1].id + 1;
    o.editable = editable;
    setData([...data, o]);
  };

  const defaultItem = { date: "0000 00 00", label: "Label", amount: 0 };

  const showModal = AddTransactionModal(addRecord);

  const removeRecord = id => setData(data.filter(o => o.id !== id));

  const editRecord = newItem => {
    // setData([...data.filter(o => o.id !== obj.id), obj]);
    setData(
      data.map(oldItem => (oldItem.id === newItem.id ? newItem : oldItem))
    );
  };

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

export default App;
