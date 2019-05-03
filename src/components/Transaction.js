import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { dateFormat } from "./Constants";

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

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CancelButtonContainer = styled.div`
  display: ${props => (props.visible ? "inline" : "none")};
`;

const Transaction = ({
  record,
  removeRecordMethod,
  editRecordMethod,
  creating = false
}) => {
  const [date, setDate] = useState(moment(record.date).format(dateFormat));
  const [label, setLabel] = useState(record.label);
  const [amount, setAmount] = useState(record.amount);

  const [editable, setEditable] = useState(creating);
  const handleSetEditable = () => {
    editable &&
      editRecordMethod({
        ...record,
        date: moment(date, dateFormat),
        label: label,
        amount: amount
      });
    setEditable(!editable);
  };

  return (
    <Container>
      <CellContainer>
        {editable ? (
          <input value={date} onChange={e => setDate(e.target.value)} />
        ) : (
          <div>{date}</div>
        )}
      </CellContainer>
      <CellContainer>
        {editable ? (
          <input value={label} onChange={e => setLabel(e.target.value)} />
        ) : (
          <div>{label}</div>
        )}
      </CellContainer>
      <CellContainer>
        <AmountContainer>
          {editable ? (
            <input value={amount} onChange={e => setAmount(e.target.value)} />
          ) : (
            <div>{amount}</div>
          )}
          <CurrencyContainer>
            <div>{record.currency}</div>
          </CurrencyContainer>
        </AmountContainer>
      </CellContainer>
      <CellContainer>
        <ActionContainer>
          <button onClick={() => removeRecordMethod(record.id)}>Delete</button>
          <button onClick={handleSetEditable}>
            {editable ? "Save" : "Edit"}
          </button>

          <CancelButtonContainer visible={editable}>
            <button onClick={() => setEditable(false)}>Cancel</button>
          </CancelButtonContainer>
        </ActionContainer>
      </CellContainer>
    </Container>
  );
};
export default Transaction;
