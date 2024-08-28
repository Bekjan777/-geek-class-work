import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginTo, registerAdd} from "../store/registerSlice.js";

const HomePage = () => {


    const dipatch = useDispatch()
    const users = useSelector((state) => state.registerSliceReducer.users)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loginName, setLoginName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const handleName = e => {
        setName(e.target.value)
    }
    const handlerPassword = e => {
        setPassword(e.target.value)
    }
    const handlerConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }

    const handlerReg = e => {
        e.preventDefault()
        let isTheSame = false
        if(name && password && confirmPassword){

            if(confirmPassword === password) {
                users.forEach(user => {
                    if(user.name === name)
                    {
                        isTheSame = true
                    }
                })
                if(!isTheSame) {

                    dipatch(registerAdd({
                        name, password
                    }))
                    setName('')
                    setPassword('')
                    setConfirmPassword('')
                }else{
                    alert('THIS ACCOUNT ALREADY EXISTS!!')
                }
            }else{
                alert('PASSWORDS DONT MATCH')
            }
        }else{
            alert('YOU GOTTA FILL EVERY PLACE')
        }
    }
    const handlerLogin = (e) => {
        e.preventDefault();
        const user = users.find(user => user.name === loginName)
        if(loginName && loginPassword){
            if(loginPassword === user.password){

                dipatch(loginTo(loginName))
                setLoginName('')
                setLoginPassword('')
                alert('SUCCESS')
            }else{
                alert('PASSWORD is incorrect')
            }
        }
    }

    return (
        <div>

            <h1>REGISTER</h1>
            <form onSubmit={e => handlerReg(e)} action="">
                <input type="text" onInput={(e) => handleName(e)} value={name} placeholder="Enter name"/>
                <input type="password" onInput={(e) => handlerPassword(e)} value={password}
                       placeholder="Enter password"/>
                <input type="password" onInput={(e) => handlerConfirmPassword(e)} value={confirmPassword}
                       placeholder="Confirm Paswword"/>
                <button type="submit">submit</button>
            </form>
            <h1>Login</h1>
            <form onSubmit={e => handlerLogin(e)} action="">
                <input type="text" onInput={(e) => setLoginName(e.target.value)} value={loginName} placeholder="Enter name"/>
                <input type="password" onInput={(e) => setLoginPassword(e.target.value)} value={loginPassword}
                       placeholder="Enter password"/>
                <button type="submit">submit</button>
            </form>
            <div>
                {
                    users.map((user) => (
                        <div key={user.id}>
                            <h3>#{user.id} Имя : {user.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HomePage;