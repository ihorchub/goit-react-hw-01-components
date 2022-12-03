import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th className={css.theadChild}>Type</th>
          <th className={css.theadChild}>Amount</th>
          <th className={css.theadChild}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={css.tbody}>
            <TransactionItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTipes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
