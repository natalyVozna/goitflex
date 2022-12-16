import { ContactList } from './Contacts.styled';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const Contacts = ({ contacts, onClickDelete }) => {
  return (
    <ContactList>
      {contacts.map(({ name, number, id, color }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          color={color}
          id={id}
          onClickDelete={() => onClickDelete(id)}
        />
      ))}
    </ContactList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
