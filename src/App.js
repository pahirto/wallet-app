import React, { useState, useEffect } from "react";
import styled from "styled-components";

import RadioButtonGroup from "./components/RadioButtonGroup";
import Table from "./components/Table";
import DeleteButton from "./components/DeleteButton";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

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
      amount: -20
    },
    {
      id: 2,
      date: "2018-10-04",
      label: "Chleba",
      amount: -30
    },
    {
      id: 3,
      date: "2018-09-25",
      label: "Vyplata",
      amount: 1000
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
  const [inputData, setInputData] = useState("dfgdf");

  const addRecord = o => {
    o.id = data[data.length - 1].id + 1;
    setData([...data, o]);
  };

  const [showModal, hideModal] = useModal(() => {
    const [date, setDate] = useState("2018 09 05");
    const [label, setLabel] = useState("Label");
    const [amount, setAmount] = useState("0");
    const handleSaveButtonClicked = () => {
      addRecord({ date: date, label: label, amount: amount });
      hideModal();
    };

    return (
      <ReactModal isOpen>
        <h1>Přidat záznam</h1>
        <label>
          Datum:
          <input
            type="text"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>
        <label>
          Co:
          <input
            type="text"
            value={label}
            onChange={e => setLabel(e.target.value)}
          />
        </label>
        <label>
          Částka:
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </label>
        <button onClick={handleSaveButtonClicked}>Ulozit</button>
        <button onClick={hideModal}>Zrušit</button>
      </ReactModal>
    );
  }, [addRecord]);

  const removeRecord = id => setData(data.filter(o => o.id !== id));

  const filterHandler = value => {
    if (curFilter === "Vse") return true;
    else if (curFilter === "Prijmy") return value >= 0;
    else if (curFilter === "Vydaje") return value <= 0;
    else return true;
  };

  const handleChange = event => setInputData(event.target.value);

  return (
    <>
      <RadioButtonGroup
        onChange={newVal => changeFilter(newVal)}
        buttonLabels={["Vse", "Prijmy", "Vydaje"]}
      />
      <Table
        data={data}
        columns={[
          {
            Header: "Datum",
            accessor: "date"
          },
          {
            Header: "Nazev",
            accessor: "label"
          },
          {
            Header: "Castka",
            accessor: "amount",
            filterable: true,
            filterMethod: filterHandler
          },
          {
            Header: "Akce",
            accessor: "id",
            Cell: val => <DeleteButton rowId={val} onClick={removeRecord} />
          }
        ]}
      />
      <button onClick={showModal}>Přidat záznam</button>
    </>
  );
};

export default App;
