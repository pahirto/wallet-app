import { useState, useEffect } from "react";
import { getTransactions } from "../lib/getTransactions";

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(transactions => setTransactions(transactions));
  }, []);

  return [transactions, setTransactions];
};

export default useTransactions;
