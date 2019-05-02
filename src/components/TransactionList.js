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
  // useEffect(() => {
  //   return () => {
  //     ReactModal.setAppElement("body");
  //   };
  // });
  const [curFilter, changeFilter] = useState("Vse");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const defaultItem = { date: moment(), label: "Label", amount: 0 };
  const filterHandler = value => {
    if (curFilter === "Vse") return true;
    else if (curFilter === "Prijmy") return value >= 0;
    else if (curFilter === "Vydaje") return value <= 0;
    // return true;
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
        .map((o, key) => (
          <Transaction
            model={o}
            removeMethod={removeRecord}
            key={key}
            editMethod={editRecord}
          />
        ))}
      <ButtonContainer>
        <Button onClick={() => setModalIsOpen(true)}>
          Přidat záznam - modal
        </Button>
        <Button onClick={() => addRecord(defaultItem, true)}>
          Přidat záznam
        </Button>
      </ButtonContainer>
    </>
  );
};

export default TransactionList;
