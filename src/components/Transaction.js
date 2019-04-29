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

/**
 * I want from wrapper to make abstraction above decision about editable field this is reason for own useState and for useState in own Transaction
 * I want to edit original data only if save button is clicked, o nthe other hand I want to have noneditable data corresponding with data model
 */
const Wrapper = ({ value: val, editable, handleEditValue }) => {
  return editable ? (
    (() => {
      const [localVal, setLocalVal] = useState(val);
      return (
        <input
          value={localVal}
          onChange={e => {
            setLocalVal(e.target.value);
            handleEditValue(e.target.value);
          }}
        />
      );
    })()
  ) : (
    <div>{val}</div>
  );
};

const Transaction = ({ model: o, removeMethod, editMethod }) => {
  const [date, setDate] = useState(o.date);
  const [label, setLabel] = useState(o.label);
  const [amount, setAmount] = useState(o.amount);

  const [editable, setEditable] = useState(o.editable);
  const handleSetEditable = () => {
    editable && editMethod({ ...o, date: date, label: label, amount: amount });
    setEditable(!editable);
  };

  return (
    <Container>
      <CellContainer>
        <Wrapper
          value={moment(o.date).format(dateFormat)}
          editable={editable}
          handleEditValue={newVal => setDate(moment(newVal, dateFormat))}
        />
      </CellContainer>
      <CellContainer>
        <Wrapper
          value={o.label}
          editable={editable}
          handleEditValue={newVal => setLabel(newVal)}
        />
      </CellContainer>
      <CellContainer>
        <AmountContainer>
          <Wrapper
            value={o.amount}
            editable={editable}
            handleEditValue={newVal => setAmount(newVal)}
          />
          <CurrencyContainer>
            <div>{o.currency}</div>
          </CurrencyContainer>
        </AmountContainer>
      </CellContainer>
      <CellContainer>
        <ActionContainer>
          <button onClick={() => removeMethod(o.id)}>Delete</button>
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
