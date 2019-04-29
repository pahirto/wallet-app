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

const Transactions = ({ data, addRecord, removeRecord, editRecord }) => {
  useEffect(() => {
    return () => {
      ReactModal.setAppElement("body");
    };
  });
  const [curFilter, changeFilter] = useState("Vse");

  const showModal = AddTransactionModal(addRecord);

  const defaultItem = { date: moment(), label: "Label", amount: 0 };
  const filterHandler = value => {
    if (curFilter === "Vse") return true;
    else if (curFilter === "Prijmy") return value >= 0;
    else if (curFilter === "Vydaje") return value <= 0;
    else return true;
  };

  return (
    <>
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
        <Button onClick={showModal} value="Přidat záznam - modal" />
        <Button
          onClick={() => addRecord(defaultItem, true)}
          value="Přidat záznam"
        />
      </ButtonContainer>
    </>
  );
};

export default Transactions;
