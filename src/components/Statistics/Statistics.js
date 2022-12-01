import PropTypes from 'prop-types';

import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      <>{title && <h2 className="title">{title}</h2>}</>

      <ul className="stat-list">
        {stats.map(item => (
          <li key={item.id} className="item">
            <StatisticsItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
