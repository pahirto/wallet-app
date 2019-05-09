import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { dateFormat } from "./Constants";
import { Cell } from "styled-css-grid";
import PropTypes from "prop-types";

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

  const updateLocalRecord = () => {
    setDate(moment(record.date).format(dateFormat));
    setLabel(record.label);
    setAmount(record.amount);
  };

  const handleSetEditable = () => {
    editable &&
      editRecordMethod({
        ...record,
        date: moment(date, dateFormat),
        label: label,
        amount: amount
      });
    !editable && updateLocalRecord();
    setEditable(!editable);
  };

  return (
    <>
      <Cell>
        <CellContainer>
          {editable ? (
            <input value={date} onChange={e => setDate(e.target.value)} />
          ) : (
            <div>{moment(record.date).format(dateFormat)}</div>
          )}
        </CellContainer>
      </Cell>
      <Cell>
        <CellContainer>
          {editable ? (
            <input value={label} onChange={e => setLabel(e.target.value)} />
          ) : (
            <div>{record.label}</div>
          )}
        </CellContainer>
      </Cell>
      <Cell>
        <CellContainer>
          <AmountContainer>
            {editable ? (
              <input value={amount} onChange={e => setAmount(e.target.value)} />
            ) : (
              <>
                <div>{record.amount}</div>
                <CurrencyContainer>
                  <div>{record.currency}</div>
                </CurrencyContainer>
              </>
            )}
          </AmountContainer>
        </CellContainer>
      </Cell>
      <Cell>
        <CellContainer>
          <ActionContainer>
            <button onClick={() => removeRecordMethod(record.id)}>
              Delete
            </button>
            <button onClick={handleSetEditable}>
              {editable ? "Save" : "Edit"}
            </button>

            <CancelButtonContainer visible={editable}>
              <button onClick={() => setEditable(false)}>Cancel</button>
            </CancelButtonContainer>
          </ActionContainer>
        </CellContainer>
      </Cell>
    </>
  );
};

Transaction.propTypes = {
  record: PropTypes.shape({
    // date: PropTypes.instanceOf("d{4}-d{2}-d{2}Td{2}:d{2}:d{2}:d{2}:d{2}.d{3}Z"),
    date: PropTypes.string,
    label: PropTypes.string,
    amount: PropTypes.number,
    id: PropTypes.number,
    currency: PropTypes.string
  })
};

export default Transaction;
