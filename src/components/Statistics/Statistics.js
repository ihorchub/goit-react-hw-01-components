import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatisticsItem } from './StatisticsItem';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      <>{title && <h2 className={css.title}>{title}</h2>}</>

      <ul className={css.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{ backgroundColor: [getRandomHexColor()] }}
          >
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
