import PropTypes from 'prop-types';
import css from './Friend.module.css';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  const changeStatus = isOnline => (isOnline ? 'green' : 'red');

  return (
    <>
      <span
        className={css.status}
        style={{ backgroundColor: [changeStatus(isOnline)] }}
      >
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
