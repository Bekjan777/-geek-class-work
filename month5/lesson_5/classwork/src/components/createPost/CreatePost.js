import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CreatePostSlice} from "../../store/postSlice";

const CreatePost = () => {

    const dispatch = useDispatch();
    const [newPost, setNewPost] = React.useState(null);
    // const {posts, preloader} = useSelector(state => state.);
    const changeForm = (e) => {
        setNewPost({...newPost, [e.target.name] : e.target.value});
    }
    const submit = (e) => {
        e.preventDefault();
        dispatch(CreatePostSlice(newPost));
    }
    return (
        <div>
            <form onSubmit={((e)=>submit(e))}>
                <input onChange={(e) => changeForm(e)} type="text" name={`title`}/>
                <textarea onChange={(e)=>changeForm(e)} name="body"  cols="30" rows="10"></textarea>
                <button type={"submit"}> create post</button>
            </form>
        </div>
    );
};

export default CreatePost;