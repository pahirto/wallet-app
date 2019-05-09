import React, { useState, useEffect } from "react";

import RadioButtonGroup from "./RadioButtonGroup";
import ReactModal from "react-modal";
import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";

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

const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const listHeadingValues = ["Datum", "Jmeno", "Castka", "Akce"];

const filterAccordingToAmount = (curFilterValue, amount) => {
  let res;
  if (curFilterValue === "Vse") {
    res = true;
  } else if (curFilterValue === "Prijmy") {
    res = amount >= 0;
  } else if (curFilterValue === "Vydaje") {
    res = amount <= 0;
  }
  return res;
};

const TransactionList = ({ data, addRecord, removeRecord, editRecord }) => {
  const [curFilter, changeFilter] = useState("Vse");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const defaultItem = { date: moment(), label: "Label", amount: 0 };

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

      <Container>
        <Grid columns={listHeadingValues.length} gap="2px">
          <ListHeading values={listHeadingValues} />
          {data
            .filter(({ amount }) => filterAccordingToAmount(curFilter, amount))
            .map((record, key) => (
              <Transaction
                key={key}
                record={record}
                removeRecordMethod={removeRecord}
                editRecordMethod={editRecord}
              />
            ))}
        </Grid>
      </Container>
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
