import React from 'react';
import {useDispatch, useSelector} from "react-redux";
const CountPage = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const handleCount = (num)=> {
        dispatch({
            type: 'HANDLE_COUNT',
            payload: num
        })
    }
    const deleteCount = () => {
        dispatch({
            type:'DELETE_COUNT'
        })
    }
    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={()=> handleCount(+1)}>+1</button>
            <button onClick={()=> handleCount(-1)}>-1</button>
            <button onClick={()=> handleCount(+10)}>+10</button>
            <button onClick={()=> handleCount(-10)}>-10</button>
            <button onClick={deleteCount}>DELETE</button>
        </div>
    );
};

export default CountPage;