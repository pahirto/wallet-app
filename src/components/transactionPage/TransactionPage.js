import React, { useState } from "react";
import FilterBar from "./FilterBar";
import TransactionDataServiceMock from "../../mockingDataService/TransactionDataServiceMock";
import TransactionTable from "./TransactionTable";

const TransactionPage = () => {
  const [state, changeData] = useState({
    allData: TransactionDataServiceMock(),
    data: TransactionDataServiceMock(),
    curFilter: "Vse"
  }); //ASK - co kdyz mam composite structure

  return (
    <div>
      <h1>Transakce</h1>
      <FilterBar
        onChange={value => {
          console.log("FilterBar changed newVal: " + value);
          state.curFilter = value; //ASK - tohle vypada jako prasarna
          if (value === "Vse") {
            state.data = state.allData;
          } else if (value === "Prijmy") {
            state.data = state.allData.filter(({ amount }) => amount >= 0);
          } else if (value === "Vydaje") {
            state.data = state.allData.filter(({ amount }) => amount <= 0);
          }
          changeData(state);
          console.log({ state });
        }}
      />
      <TransactionTable data={state.data} />
    </div>
  );
};

export default TransactionPage;
