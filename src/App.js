import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Transactions from "./components/Transactions";
import Overview from "./components/Overview";
import { Link } from "react-router-dom";

import Menu from "./components/Menu";

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/overview" component={Overview} />
        <Route path="/" component={Transactions} exact />
        <Route render={() => <h1>This Route do not exist</h1>} />
      </Switch>
    </>
  );
};

export default App;
