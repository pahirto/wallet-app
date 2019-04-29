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
  font-weight: bold;
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
