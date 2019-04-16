import React from "react";
import FilterBar from "./FilterBar";
import TransactionDataServiceMock from "../../mockingDataService/TransactionDataServiceMock";

const TransactionPage = () => {
  console.log(TransactionDataServiceMock());

  return (
    <div>
      <h1>Transakce</h1>
      <FilterBar />
    </div>
  );
};

export default TransactionPage;
