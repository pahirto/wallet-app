import React, { useState } from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import moment from "moment";
import { dateFormat } from "./Constants";

const AddTransactionModal = addRecord => {
  const [showModal, hideModal] = useModal(() => {
    const [date, setDate] = useState(moment().format(dateFormat));
    const [label, setLabel] = useState("Label");
    const [amount, setAmount] = useState("0");
    const [currency] = useState("CZK");
    const handleSaveButtonClicked = () => {
      addRecord({
        date: moment(date, dateFormat),
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
