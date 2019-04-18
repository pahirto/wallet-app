import React, { useState } from "react";
import { animationFrameScheduler } from "rxjs";

const Transaction = ({ name, value, type, id, created, currency }) => {
  const [showDetail, setShowDetail] = useState(animationFrameScheduler);

  return (
    <div
      onClick={() => setShowDetail(!showDetail)}
      style={{ marginTop: "20px" }}
    >
      <div>{id}</div>
      <div>{value}</div>
      <div>{currency}</div>
      <div>{name}</div>
      {showDetail && (
        <div>
          <div>{created}</div>
          <div>{type}</div>
        </div>
      )}
    </div>
  );
};
export default Transaction;
