import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';

export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.tbodyItem}>{type}</td>
      <td className={css.tbodyItem}>{amount}</td>
      <td className={css.tbodyItem}>{currency}</td>
    </>
  );
};

TransactionItem.propTipes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
