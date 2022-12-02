import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
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
