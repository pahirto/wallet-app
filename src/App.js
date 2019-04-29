import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Transactions from "./components/Transactions";
import Overview from "./components/Overview";
import { Link } from "react-router-dom";

import Menu from "./components/Menu";

const mockData = () => {
  return [
    {
      id: 1,
      date: new Date("2019-04-11T10:20:30Z"),
      label: "Rohliky",
      amount: -20,
      currency: "CZK"
    },
    {
      id: 2,
      date: new Date("2019-04-12T10:20:30Z"),
      label: "Chleba",
      amount: -30,
      currency: "CZK"
    },
    {
      id: 3,
      date: new Date("2019-04-29T10:20:30Z"),
      label: "Vyplata",
      amount: 1000,
      currency: "CZK"
    }
  ];
};

const App = () => {
  const [data, setData] = useState(mockData());

  const addRecord = (o, editable = false) => {
    o.id = data[data.length - 1].id + 1;
    o.editable = editable;
    setData([...data, o]);
  };

  const removeRecord = id => setData(data.filter(o => o.id !== id));

  const editRecord = newItem => {
    setData(
      data.map(oldItem => (oldItem.id === newItem.id ? newItem : oldItem))
    );
  };

  return (
    <>
      <Menu />
      <Switch>
        <Route path="/overview" render={() => <Overview data={data} />} />
        <Route
          path="/"
          render={() => (
            <Transactions
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
