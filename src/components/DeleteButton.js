import React from "react";

const DeleteButton = ({ rowId, onClick }) => {
  return <button onClick={() => onClick(rowId)}>Delete</button>;
};

export default DeleteButton;
