import { addContact, deleteContact } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 0, name: 'Learn HTML and CSS', number: '999999' },
  { id: 1, name: 'Get good at JavaScript', number: '555555' },
  { id: 2, name: 'Master React', number: '4444444' },
  { id: 3, name: 'Discover Redux', number: '3333333' },
  { id: 4, name: 'Build amazing apps', number: '222222' },
];

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [action.payload, ...state];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

const filterInitialState = {
  query: '',
};

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
// export const filterReducer = createReducer(filterInitialState, {
//   [setStatusFilter]: (state, action) => {
//     state.status = action.payload;
//   },
// });
