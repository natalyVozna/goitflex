import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Section } from '../Section/Section';
import { FormContact } from '../FormContact/FormContact';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';
import { Title, SubTitle } from './App.styled';
import { Notification } from '../Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { getContcts, getFilter } from '../../redux/selectors';
import {
  addContactAction,
  deleteContactAction,
} from '../../redux/contactsSlice';
import { setFilter } from '../../redux/filterSlice';

export const App = () => {
  const contacts = useSelector(getContcts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddContact = data => {
    const isName = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (!isName) {
      dispatch(addContactAction(data));
    } else {
      Notify.warning('You already have this contact');
    }
  };

  const getFilterContacts = () => {
    const normalizedContact = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedContact);
    });
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const removeContact = contactId => {
    dispatch(deleteContactAction(contactId));

    Notify.failure('Contact deleted');
  };

  return (
    <Section>
      <Title>Phonebook</Title>
      <FormContact onSubmitHandle={onAddContact} />
      {contacts.length > 0 && (
        <>
          <SubTitle>Contacts</SubTitle>
          <Filter value={filter} onChange={changeFilter} />
        </>
      )}

      {getFilterContacts().length > 0 ? (
        <Contacts
          contacts={getFilterContacts()}
          onClickDelete={removeContact}
        />
      ) : (
        <Notification
          message={
            contacts.length > 0
              ? 'There is no match'
              : 'Your phonebook is empty'
          }
        />
      )}
    </Section>
  );
};
