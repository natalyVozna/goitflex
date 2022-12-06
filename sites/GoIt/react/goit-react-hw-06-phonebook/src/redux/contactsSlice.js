import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  data: [],
};

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
