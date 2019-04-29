import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const CellContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const ListItem = ({ type, dateRangeComponent, income, outcome, overall }) => {
  return (
    <Container>
      <CellContainer>{type}</CellContainer>
      <CellContainer>{dateRangeComponent()}</CellContainer>
      <CellContainer>{income}</CellContainer>
      <CellContainer>{outcome}</CellContainer>
      <CellContainer>{overall}</CellContainer>
    </Container>
  );
};

export default ListItem;
