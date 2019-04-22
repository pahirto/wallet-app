import React, { useState } from "react";
import styled from "styled-components";

import Transaction from "./components/Transaction";
import RadioButtonGroup from "./components/RadioButtonGroup";
import Table from "./components/Table";

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

const initList = [
  {
    name: "name01",
    value: 123,
    currency: "CZK",
    type: "income",
    id: 1,
    created: "2018 09 06"
  },
  {
    name: "name02",
    value: 456,
    currency: "CZK",
    type: "income",
    id: 2,
    created: "2018 09 06"
  },
  {
    name: "name03",
    value: 789,
    currency: "CZK",
    type: "outcome",
    id: 3,
    created: "2018 09 06"
  }
];

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
  const [transactionList, setTransactionList] = useState(initList);
  const [curFilter, changeFilter] = useState("Vse");
  const [data, setData] = useState(mockData());

  const handleClick = () => {
    const newId = transactionList[transactionList.length - 1].id + 1;
    const newObject = {
      name: "name01",
      value: -123,
      type: "income",
      id: newId,
      created: "2018 09 06"
    };

    setTransactionList([...transactionList, newObject]);
  };

  const changeFilterHandler = newVal => changeFilter(newVal);

  const removeTransaction = id =>
    setTransactionList(transactionList.filter(o => o.id !== id));

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
          }
        ]}
      />
    </>
    // <Container>
    //   <RadioButtonGroup onChange={changeFilterHandler} />
    //   <TransactionContainer>
    //     {transactionList
    //       .filter(v => filterHandler(v))
    //       .map(({ name, value, type, id, created, currency }, key) => (
    //         <Transaction
    //           name={name}
    //           key={key}
    //           value={value}
    //           type={type}
    //           id={id}
    //           created={created}
    //           currency={currency}
    //           deleteTransaction={removeTransaction}
    //         />
    //       ))}
    //     <button onClick={handleClick}>Add transaction</button>
    //   </TransactionContainer>
    // </Container>
  );
};

export default App;
