import { createSlice } from "@reduxjs/toolkit";

const mainPageSlice = createSlice({
    name: "mainPage",
    initialState: {
        mainTitle: 'GeekTech',
        counterTitle: 0
    },
    reducers: {
        mainInfo: (state) => {
            state.mainTitle = 'Geeks';
        },
        withParams: (state, action) => {
            state.mainTitle = action.payload;
        },
        deleteWith: (state) => {
            state.mainTitle = '';
        },
        incrementCounter: (state) => {
            state.counterTitle += 1;
        },
        decrementCounter: (state) => {
            if (state.counterTitle > 0) {
                state.counterTitle -= 1;
            }
        },
        resetCounter: (state) => {
            state.counterTitle = 0;
        }
    }
});

export const { mainInfo, withParams, deleteWith, incrementCounter, decrementCounter, resetCounter } = mainPageSlice.actions;

export default mainPageSlice.reducer;
