import React from "react";

const DeleteButton = ({ rowId, onClick }) => {
  return <button onClick={() => onClick(rowId)}>Smazat</button>;
};

export default DeleteButton;
