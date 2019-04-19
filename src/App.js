import React, { useState } from "react";
import styled from "styled-components";

import Transaction from "./components/Transaction";

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

const App = () => {
  const [transactionList, setTransactionList] = useState(initList);

  const handleClick = () => {
    const newId = transactionList[transactionList.length - 1].id + 1;
    const newObject = {
      name: "name01",
      value: 123,
      type: "income",
      id: newId,
      created: "2018 09 06"
    };

    setTransactionList([...transactionList, newObject]);
  };

  const removeTransaction = id =>
    setTransactionList(transactionList.filter(o => o.id !== id));

  return (
    <Container>
      <TransactionContainer>
        {transactionList.map(
          ({ name, value, type, id, created, currency }, key) => (
            <Transaction
              name={name}
              key={key}
              value={value}
              type={type}
              id={id}
              created={created}
              currency={currency}
              deleteTransaction={removeTransaction}
            />
          )
        )}
        <button onClick={handleClick}>Add transaction</button>
      </TransactionContainer>
    </Container>
  );
};

export default App;
