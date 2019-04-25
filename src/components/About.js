import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const About = props => {
  console.log(props);
  return (
    <>
      <h1>About Page</h1>
      <p>{props.match.params.name}</p>
      <Button />
    </>
  );
};

export default About;
