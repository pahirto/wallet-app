import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import TransactionList from "./components/TransactionList";
import Overview from "./components/Overview";
import axios from "axios";

import Menu from "./components/Menu";
import {
  getTransactions,
  deleteTransaction,
  updateTransaction,
  addTransaction
} from "./lib/getTransactions";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTransactions().then(data => setData(data));
  }, []);

  const addRecord = record => {
    record.id = data[data.length - 1].id + 1;
    record.currency = "CZK";
    addTransaction(record).then(setData);
  };

  const removeRecord = id => {
    deleteTransaction(id).then(setData);
  };

  const editRecord = newItem => {
    updateTransaction(newItem).then(setData);
  };

  return (
    <>
      <Menu />
      <Switch>
        <Route path="/overview" render={() => <Overview data={data} />} />
        <Route
          path="/"
          render={() => (
            <TransactionList
              data={data}
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
