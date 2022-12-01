import PropTypes from 'prop-types';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </>
  );
};

Friend.propTypes = {
  friend: PropTypes.arrayOf({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
