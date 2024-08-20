import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import createPost from "../components/createPost/CreatePost";

export const getPosts = createAsyncThunk(
    'getPosts',
    async function(info, {dispatch}) {
        try {

            dispatch(preloadedOn())

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(response.status >= 200 && response.status <= 204) {
                const posts = await response.json();
                dispatch(postsInfo(posts));
            }
        } catch (e) {

            alert(`Something went wrong: ${e}`);
        } finally {
            dispatch(preloadedOff())

        }

    }
)

export const CreatePostSlice = createAsyncThunk(
    'createPost',
    async function(info, {dispatch}) {
        try {
            dispatch(preloadedOn())
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            }
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', options);

        } catch (e) {
            alert(`Something went wrong: ${e}`);
        }finally {
            dispatch(preloadedOff())

        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        preloader: false,
    },
    reducers: {
        postsInfo: (state, action) => {
            state.posts = action.payload;
        },
        deletePosts: (state, action) => {
            state.posts = []
        },
        preloadedOn: (state, action) => {
            state.preloader = true
        },
        preloadedOff: (state, action) => {
            state.preloader = false
        }
    }
})

export const { postsInfo, deletePosts , preloadedOn, preloadedOff} = postSlice.actions;
export default postSlice.reducer;