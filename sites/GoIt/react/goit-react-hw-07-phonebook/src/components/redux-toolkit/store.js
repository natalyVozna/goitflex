import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer, rootReducer } from './reducer';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
