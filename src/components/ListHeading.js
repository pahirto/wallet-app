import React from "react";
import styled from "styled-components";
import { Cell } from "styled-css-grid";

const CellContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: bold;
`;

const ListHeading = ({ values }) => {
  return (
    <>
      {values.map((val, key) => (
        <Cell key={key}>
          <CellContainer>{val}</CellContainer>
        </Cell>
      ))}
    </>
  );
};

export default ListHeading;
