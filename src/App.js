import React, { useState } from "react";
import styled from "styled-components";

import RadioButtonGroup from "./components/RadioButtonGroup";
import Table from "./components/Table";
import DeleteButton from "./components/DeleteButton";

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
  const [curFilter, changeFilter] = useState("Vse");
  const [data, setData] = useState(mockData());

  const removeRecord = id => setData(data.filter(o => o.id !== id));

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
    </>
  );
};

export default App;
