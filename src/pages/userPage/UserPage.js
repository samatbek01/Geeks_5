import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const UserPage = () => {
    const dispatch = useDispatch()
    const {value , users} = useSelector(state =>state)

    const changeInput = (event)=> {
        dispatch({
            type:'INPUT_VALUE',
            payload:event.target.value
        })
    }

    const addUser = () => {
        dispatch({
            type:'ADD_USER',
            payload:value
        })
    }

    const deleteAll = ()=> {
        dispatch({
            type:'DELETE_ALL',
        })
    }

    console.log(users)

    return (

        <div>
            <input value={value} onChange={changeInput}/>
            <button onClick={addUser}>add</button>
            <button onClick={deleteAll}> delete</button>
            {users && users.map((userName , idx)=> <p key={idx}>{userName}</p> )}
        </div>
    );
};

export default UserPage;