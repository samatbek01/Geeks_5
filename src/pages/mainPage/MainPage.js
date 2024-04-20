import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {
    const title = useSelector(state => state.title)
    const distpach = useDispatch()

    const changeTitle = () => {
        distpach({
            type:'CHANGE_TITLE'
        })
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
        </div>
    );
};

export default MainPage;