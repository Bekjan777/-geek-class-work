import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    deleteWith,
    mainInfo,
    withParams,
    counter,
    incrementCounter,
    decrementCounter,
    resetCounter
} from "../../store/mainPageSlice";

const MainPage = () => {
    const [input, setInput] = React.useState('');
    const counter = useSelector(state => state.mainPageSliceReducer.counterTitle)
    const dispath = useDispatch()
    const changeTitle = () => {
        dispath(mainInfo())
    }
    const mainTitle = useSelector(state => state.mainPageSliceReducer.mainTitle);
    const changeTitleWithParams = () =>{
        dispath(withParams(input))
    }
    const del = () => {
        setInput('')
        dispath(deleteWith())
    }
    const increase = () => {
        dispath(incrementCounter())
    }
    const decrease = () => {
        dispath(decrementCounter())
    }
    const reset = () => {
        dispath(resetCounter())
    }
    return (
        <div>
            <h1>{mainTitle}</h1>
            <input value={input} type="text" onChange={e => setInput(e.target.value)}  />
            <button onClick={del}>del</button>
            <button onClick={changeTitle}>Change Title</button>
            <button onClick={changeTitleWithParams}>Change par</button>
            <br/>

            <h2>{counter}</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>0</button>
        </div>
    );
};

export default MainPage;