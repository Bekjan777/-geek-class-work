import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteWith, mainInfo, withParams} from "../../store/mainPageSlice";

const MainPage = () => {
    const [input, setInput] = React.useState('');
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
    return (
        <div>
            <h1>{mainTitle}</h1>
            <input value={input} type="text" onChange={e => setInput(e.target.value)}  />
            <button onClick={del}>del</button>
            <button onClick={changeTitle}>Change Title</button>
            <button onClick={changeTitleWithParams}>Change par</button>
        </div>
    );
};

export default MainPage;