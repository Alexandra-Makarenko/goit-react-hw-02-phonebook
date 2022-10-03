import PropTypes from 'prop-types';
import { ListItem } from '../ListItem/ListItem';

export const ContactList  = ({ contacts,onDeleteContact}) => {

        return (
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}
                    > {<ListItem
            contact={contact}
            
             />} <button
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Удалить
        </button></li>
                ))}
            </ul>
        );
    
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      }).isRequired).isRequired,
    onDeleteContact:  PropTypes.func.isRequired
}

