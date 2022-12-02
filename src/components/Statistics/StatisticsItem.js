import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css';

export const StatisticsItem = ({ item: { label, percentage } }) => {
  return (
    <>
      <span className={css.label}> {label} </span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
