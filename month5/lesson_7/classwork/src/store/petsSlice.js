import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {preloadedOff} from "./postSlice";


export const getPets = createAsyncThunk(
    'getPets',
    async (info, {dispatch}) => {
        try{
            dispatch(preloadOn())
            const response = await fetch('https://api.spacexdata.com/v3/landpads')
            const data = await response.json();
            console.log(data)
            dispatch(setPets(data))
        }catch(error){
            alert('Something went wrong');
        }finally {
            dispatch(preloadedOff())
        }
    }
)

const petsSlice = createSlice({
    name: "pets",
    initialState: {
        pets: [],
        preloading: false,
    },
    reducers: {
        setPets: (state, action) => {
            state.pets = action.payload;
        },
        preloadOff: (state, action) => {
            state.preloading = false;
        },
        preloadOn: (state, action) => {
            state.preloading = true;
        }
    }
})

export const {setPets, preloadOn, preloadOff} = petsSlice.actions
export default petsSlice.reducer