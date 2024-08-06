import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)

    const increaseOne = num => dispatch({type: 'INCREASE_1_COUNT', payload: num})
    const decreaseOne = num => {
        if (count - num >= 0) {
            dispatch({type: 'DECREASE_1_COUNT', payload: num})
        }
    }
    const increaseTen = num => dispatch({type: 'INCREASE_10_COUNT', payload: num})
    const decreaseTen = num => {
        if (count - num >= 0) {
            dispatch({type: 'DECREASE_10_COUNT', payload: num})
        }
    }
    const reset = num => dispatch({type: 'RESET_COUNT', payload: num})

    return (
        <div className="container">
            <div className="count">{count}</div>
            <button onClick={() => increaseOne(1)}>+1</button>
            <button onClick={() => decreaseOne(1)}>-1</button>
            <button onClick={() => increaseTen(10)}>+10</button>
            <button onClick={() => decreaseTen(10)}>-10</button>
            <button onClick={() => reset(0)}>to reset</button>
        </div>
    )
}

export default App
