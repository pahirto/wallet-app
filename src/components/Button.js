import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Button = props => {
  console.log(props);
  return <button onClick={props.history.goBack}>Back</button>;
};

export default withRouter(Button);
