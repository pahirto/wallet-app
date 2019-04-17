import React, { useState } from "react";
import FilterBar from "./FilterBar";
import TransactionDataServiceMock from "../../mockingDataService/TransactionDataServiceMock";
import TransactionTable from "./TransactionTable";

const allData = TransactionDataServiceMock();

const TransactionPage = () => {
  const [data, changeData] = useState(allData); //ASK - co kdyz mam composite structure

  return (
    <div>
      <h1>Transakce</h1>
      <TransactionTable data={data} />
    </div>
  );
};

export default TransactionPage;
