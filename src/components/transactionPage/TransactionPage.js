import React from "react";
import FilterBar from "./FilterBar";
import TransactionDataServiceMock from "../../mockingDataService/TransactionDataServiceMock";
import TransactionTable from "./TransactionTable";

const TransactionPage = () => {
  console.log(TransactionDataServiceMock());

  return (
    <div>
      <h1>Transakce</h1>
      <FilterBar />
      <TransactionTable />
    </div>
  );
};

export default TransactionPage;
