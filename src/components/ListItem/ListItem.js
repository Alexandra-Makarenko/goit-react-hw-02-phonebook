import PropTypes from 'prop-types';
export const ListItem = ({ contact: { name, number } }) => {
  return (
    <div>
          <p style={{ marginBottom: 0 }}>{name} {number}</p>
    </div>
  );
};

ListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
      }).isRequired
}
