import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background-color: #555555; /* Black */
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 5px;
  &:hover {
    background-color: #111;
  }
`;

const Button = ({ onClick, value }) => {
  return <Container onClick={onClick}>{value}</Container>;
};

export default Button;
