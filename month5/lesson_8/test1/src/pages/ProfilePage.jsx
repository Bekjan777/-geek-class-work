import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePassword, changeUsername} from "../store/registerSlice.js";

const ProfilePage = () => {
    const login = useSelector(state => state.registerSliceReducer.login);
    const users = useSelector(state => state.registerSliceReducer.users);
    const user = users.find(user => user.id === login.id);
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const dispatch = useDispatch();
    const id = login.id;
    const change = () => {
        if(password){
            dispatch(changePassword({
                password, id
            }))
        }else{
            alert('INPURT IS EMPTYT')
        }
    }
    const changeName = () => {
        if(password){
            dispatch(changeUsername({
                password, id
            }))
        }else{
            alert('INPURT IS EMPTYT')
        }
    }
    return (
        <div>
            <img src="" alt=""/>
            name: <h2>{user.name}</h2>
            PASSWORD: {user.password}
            <button onClick={change}>to change password</button>
            <input value={password} onChange={e => setPassword(e.target.value)} type="text"/>
            <button onClick={changeName}>to change name</button>
            <input value={name} onChange={e => setName(e.target.value)} type="text"/>
        </div>
    );
};

export default ProfilePage;