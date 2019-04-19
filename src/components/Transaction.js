import React, { useState } from "react";
import { animationFrameScheduler } from "rxjs";
import styled from "styled-components";

const Container = styled.div`
  background-color: orange;
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const CurrencyContainer = styled.div`
  margin-left: 0.3rem;
  font-size: 10px;
`;

const DetailContainer = styled.div`
  height: ${({ showDetail }) => (showDetail ? "3rem" : "0")};
  overflow: hidden;
`;

const Transaction = ({
  name,
  value,
  type,
  id,
  created,
  currency,
  deleteTransaction
}) => {
  const [showDetail, setShowDetail] = useState(animationFrameScheduler);

  return (
    <Container onClick={() => setShowDetail(!showDetail)}>
      <ValueContainer>
        <div>{value}</div>
        <CurrencyContainer>
          <div>{currency}</div>
        </CurrencyContainer>
      </ValueContainer>
      <DetailContainer showDetail={showDetail}>
        <div>
          <div>{created}</div>
          <div>{type}</div>
        </div>
      </DetailContainer>
      <button onClick={() => deleteTransaction(id)}>Delete</button>
    </Container>
  );
};
export default Transaction;
