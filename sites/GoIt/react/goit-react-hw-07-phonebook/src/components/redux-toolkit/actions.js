import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContactAction = createAction(
  'contacts/addContactAction',
  text => {
    return {
      payload: {
        text,
        id: nanoid(),
      },
    };
  }
);

export const deleteContactAction = createAction('contacts/deleteContactAction');

// export const toggleCompleted = createAction('tasks/toggleCompleted');

export const filterContactsAction = createAction(
  'filters/filterContactsAction'
);
