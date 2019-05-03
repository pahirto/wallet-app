import React, { useState, useEffect } from "react";

import RadioButtonGroup from "./RadioButtonGroup";
import ReactModal from "react-modal";
import styled from "styled-components";

import Transaction from "./Transaction";
import AddTransactionModal from "./AddTransactionModal";
import ListHeading from "./ListHeading";
import moment from "moment";
import Button from "./Button";

const ButtonContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const TransactionList = ({ data, addRecord, removeRecord, editRecord }) => {
  const [curFilter, changeFilter] = useState("Vse");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const defaultItem = { date: moment(), label: "Label", amount: 0 };
  const filterHandler = amount => {
    let res;
    if (curFilter === "Vse") {
      res = true;
    } else if (curFilter === "Prijmy") {
      res = amount >= 0;
    } else if (curFilter === "Vydaje") {
      res = amount <= 0;
    }
    console.log(
      "curFilter:" + curFilter + " amount: " + amount + " take it: " + res
    );
    return res;
  };

  return (
    <>
      <AddTransactionModal
        addRecord={addRecord}
        isOpen={modalIsOpen}
        hide={() => setModalIsOpen(false)}
      />
      <RadioButtonGroup
        onChange={newVal => changeFilter(newVal)}
        buttonLabels={["Vse", "Prijmy", "Vydaje"]}
      />
      <ListHeading values={["Datum", "Jmeno", "Castka", "Akce"]} />
      {data
        .filter(({ amount }) => filterHandler(amount))
        .map((record, key) => (
          <Transaction
            record={record}
            removeRecordMethod={removeRecord}
            key={key}
            editRecordMethod={editRecord}
          />
        ))}
      <ButtonContainer>
        <Button onClick={() => setModalIsOpen(true)}>
          Přidat záznam - modal
        </Button>
        <Button onClick={() => addRecord(defaultItem)}>Přidat záznam</Button>
      </ButtonContainer>
    </>
  );
};

export default TransactionList;
