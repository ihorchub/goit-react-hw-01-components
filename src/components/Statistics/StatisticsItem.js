import PropTypes from 'prop-types';

export const StatisticsItem = ({ item: { label, percentage } }) => {
  return (
    <>
      <span className="label"> {label} </span>
      <span className="percentage">{percentage}%</span>
    </>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
