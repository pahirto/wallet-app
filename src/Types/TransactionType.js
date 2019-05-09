import PropTypes from "prop-types";

const TransactionType = PropTypes.shape({
  // date: PropTypes.instanceOf("d{4}-d{2}-d{2}Td{2}:d{2}:d{2}:d{2}:d{2}.d{3}Z"),
  date: PropTypes.string,
  label: PropTypes.string,
  amount: PropTypes.number,
  id: PropTypes.number,
  currency: PropTypes.string
});

export default TransactionType;
