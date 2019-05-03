import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003/transactions",
  timeout: 1000,
  headers: { "X-Customer-Header": "foobar" }
});

const transformData = data =>
  data.map(record => ({
    ...record,
    date: new Date(record.date),
    editable: false
  }));

const getTransactions = () =>
  api.get("/").then(response => transformData(response.data));
const deleteTransaction = id =>
  api.delete(`/${id}`).then(() => getTransactions());
const updateTransaction = object =>
  api.patch(`/${object.id}`, object).then(() => getTransactions());
const addTransaction = object =>
  api.post("/", object).then(() => getTransactions());

export {
  getTransactions,
  deleteTransaction,
  updateTransaction,
  addTransaction
};
