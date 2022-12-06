import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  data: [],
};
// const contactsInitialState = {
//   data: [
//     { id: '0', name: 'Learn HTML and CSS', number: '999999' },
//     { id: '1', name: 'Get good at JavaScript', number: '555555' },
//     { id: '2', name: 'Master React', number: '4444444' },
//     { id: '3', name: 'Discover Redux', number: '3333333' },
//     { id: '4', name: 'Build amazing apps', number: '222222' },
//   ],
// };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.data.unshift(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContactAction: {
      reducer(state, action) {
        // const index = state.contacts.findIndex(
        //   task => task.id === action.payload
        // );
        // state.contacts.splice(index, 1);
        state.data = state.data.filter(
          contact => contact.id !== action.payload
        );
      },
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsPersistedReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContactAction, deleteContactAction } = contactSlice.actions;
