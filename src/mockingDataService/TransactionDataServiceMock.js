import faker from "faker";

const getTransactionData = () => ({
  date: faker.date.between("2018-01-01", "2019-01-05"),
  label: faker.hacker.noun,
  amount: faker.amount
});

export default () => Array.from({ length: 20 });
