import React from "react";
import { Switch, Route } from "react-router-dom";
import TransactionList from "./components/TransactionList";
import Overview from "./components/Overview";

import Menu from "./components/Menu";
import {
  deleteTransaction,
  updateTransaction,
  addTransaction
} from "./lib/getTransactions";
import useTransactions from "./components/useTransactions";

const App = () => {
  const [transactions, setTransactions] = useTransactions();

  const addRecord = record => {
    record.id = transactions[transactions.length - 1].id + 1;
    record.currency = "CZK";
    addTransaction(record).then(setTransactions);
  };

  const removeRecord = id => {
    deleteTransaction(id).then(setTransactions);
  };

  const editRecord = newItem => {
    updateTransaction(newItem).then(setTransactions);
  };

  return (
    <>
      <Menu />
      <Switch>
        <Route
          path="/overview"
          render={() => <Overview data={transactions} />}
        />
        <Route
          path="/"
          render={() => (
            <TransactionList
              data={transactions}
              addRecord={addRecord}
              removeRecord={removeRecord}
              editRecord={editRecord}
            />
          )}
          exact
        />
        <Route render={() => <h1>This Route do not exist</h1>} />
      </Switch>
    </>
  );
};

export default App;
