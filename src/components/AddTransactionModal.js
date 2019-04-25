import React, { useState } from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

const AddTransactionModal = addRecord => {
  const [showModal, hideModal] = useModal(() => {
    const [date, setDate] = useState("2018 09 05");
    const [label, setLabel] = useState("Label");
    const [amount, setAmount] = useState("0");
    const [currency, setCurrency] = useState("CZK");
    const handleSaveButtonClicked = () => {
      addRecord({
        date: date,
        label: label,
        amount: amount,
        currency: currency
      });
      hideModal();
    };

    return (
      <ReactModal isOpen>
        <h1>Přidat záznam</h1>
        <label>
          Datum:
          <input
            type="text"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </label>
        <label>
          Co:
          <input
            type="text"
            value={label}
            onChange={e => setLabel(e.target.value)}
          />
        </label>
        <label>
          Částka:
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </label>
        <button onClick={handleSaveButtonClicked}>Ulozit</button>
        <button onClick={hideModal}>Zrušit</button>
      </ReactModal>
    );
  });

  return showModal;
};

export default AddTransactionModal;
