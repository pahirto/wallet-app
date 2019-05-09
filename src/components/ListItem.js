import React from "react";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";

const CellContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const ListItem = ({ type, dateRangeComponent, income, outcome, overall }) => {
  return (
    <>
      <Cell>
        <CellContainer>{type}</CellContainer>
      </Cell>
      <Cell>
        <CellContainer>{dateRangeComponent()}</CellContainer>
      </Cell>
      <Cell>
        <CellContainer>{income}</CellContainer>
      </Cell>
      <Cell>
        <CellContainer>{outcome}</CellContainer>
      </Cell>
      <Cell>
        <CellContainer>{overall}</CellContainer>
      </Cell>
    </>
  );
};

export default ListItem;
