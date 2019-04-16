import faker from "faker";
import * as moment from "moment";

const getTransactionData = () => ({
  date: moment(faker.date.between("2018-01-01", "2019-01-05")).format(
    "YYYY-MM-DD HH:mm"
  ),
  label: faker.lorem.word(),
  amount: faker.random.number({
    min: -5000,
    max: 5000
  })
});

export default () => Array.from({ length: 20 }, getTransactionData);
