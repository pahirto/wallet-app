import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #555555;
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

export default Button;
