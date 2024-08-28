import {createSlice} from "@reduxjs/toolkit";


const registerSlice = createSlice({
    name: "registerSlice",
    initialState: {
        users: [],
        login: {}
    },
    reducers: {
        registerAdd(state, action) {
            state.users.push({
                id: state.users.length ? state.users[state.users.length -1].id + 1 : 0,
                name: action.payload.name,
                password: action.payload.password
            });
        },
        changePassword: (state, action) => {
            const user = state.users.find(u => u.id === action.payload.id);
            user.password = action.payload.password;
        },
        changeUsername: (state, action) => {
            const user = state.users.find(u => u.id === action.payload.id);
            user.name = action.payload.name;
        },
        loginTo: (state, action) => {
            const user = state.users.find(u => u.name === action.payload);
            state.login = {...user}
        }
    }
})

export const { registerAdd, changePassword, changeUsername, loginTo } = registerSlice.actions;
export default registerSlice.reducer;