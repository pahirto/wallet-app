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

const AmountContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const CurrencyContainer = styled.div`
  margin-left: 0.3rem;
  font-size: 10px;
`;

const ListHeading = ({ values }) => {
  return (
    <Container>
      {values.map((val, key) => (
        <CellContainer key={key}>{val}</CellContainer>
      ))}
    </Container>
  );
};

export default ListHeading;