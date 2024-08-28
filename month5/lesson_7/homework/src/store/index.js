import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './TodoSlice'
import contactsReducer from './ContactsSlice'

export const store = configureStore({
    reducer: {
        todoReducer,
        contactsReducer
    },
})