import React, { useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  return (
    <>
      <h1>Header</h1>
      <Switch>
        <Route path="/about/:name" component={About} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} exact />
        <Route render={() => <h1>This Route do not exist</h1>} />
      </Switch>
      <h1>Footer</h1>
    </>
  );
};

export default App;
