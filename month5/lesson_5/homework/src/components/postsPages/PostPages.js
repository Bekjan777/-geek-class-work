import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postsInfo, postInfo, deletePosts, getPosts} from "../../store/postSlice";

import {Spinner} from "react-bootstrap";

const PostPages = () => {

    const {posts, preloader} = useSelector(state => state.postSliceReducer);
    console.log(preloader)
    const dispatch = useDispatch();
    const getPostsFetch = () => {
        dispatch(getPosts());
    }
    const delete1 = () => {
        dispatch(deletePosts());
    }
    useEffect(() => {
        getPostsFetch()
    }, []);

    return (
        <div>

                {preloader ? (
                        <Spinner animation="border" />)
                        :(
                        <div>
                            <button onClick={delete1}>delete all</button>
                            {posts.map(post => (
                                <h1 key={post.id}>{post.title}</h1>
                            ))}
                        </div>)
                }


        </div>
    );
};

export default PostPages;