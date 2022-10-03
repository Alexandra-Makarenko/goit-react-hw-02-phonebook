import { ListItem } from './ListItem';

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
