export const ListItem = ({ contact: { name,number } }) => {
  return (
    <div>
          <p style={{ marginBottom: 0 }}>{name} {number}</p>
    </div>
  );
};