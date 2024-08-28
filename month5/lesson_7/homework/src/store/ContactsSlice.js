import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push({id: state.contacts.length ? state.contacts[state.contacts.length - 1].id + 1 : 0,
                                date: new Date().toISOString(),
                                name: action.payload.name,
                                email: action.payload.email})
            // console.log(state.contacts[state.contacts.length - 1])
            console.log();
        },
        editContact: (state, action) => {
            const contact = state.contacts.find(contact => contact.id === action.payload.id);
            if (contact) {
                contact.name = action.payload.name;
                contact.email = action.payload.email;
            }
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
        sortByAscending: (state, action) => {
            state.contacts.sort((a, b) => a.id - b.id)
        },
        sortByDescending: (state, action) => {
            state.contacts.sort((a, b) => b.id - a.id)
        },
        sortByAlphabet: (state, action) => {
            state.contacts.sort((a, b) => a.name.localeCompare(b.name));
        },
        sortLatestByTime: (state, action) => {
            state.contacts.sort((a, b) => {
                let d1 = new Date(a.time),
                    d2 = new Date(b.time);
                if(d1 < d2){
                    return 1
                }else{
                    return -1
                }
            })
        },
        sortFirstByTime: (state, action) => {
            state.contacts.sort((a, b) => {
                let d1 = new Date(a.time),
                    d2 = new Date(b.time);
                if(d1 > d2){
                    return 1
                }else{
                    return -1
                }
            })
        },

    }
})

export const { addContact, editContact, deleteContact, sortFirstByTime, sortLatestByTime, sortByAlphabet, sortByDescending, sortByAscending } = contactsSlice.actions;

export default contactsSlice.reducer;